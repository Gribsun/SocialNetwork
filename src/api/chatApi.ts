import {ChatMessageType, StatusType} from "../init/types/chatTypes";
type SubscriberType = (messages: ChatMessageType[]) => void;
type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

let subscribers = {
    'messages-received': [] as Array<MessagesReceivedSubscriberType>,
    'status-changed': [] as Array<StatusChangedSubscriberType>,
}

type EventsNamesType = 'messages-received' | 'status-changed';

let ws: WebSocket | null = null;

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
    ws?.close();
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status));
}

function createChannel() {
    cleanUp();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}

const closeHandler = () => {
    notifySubscribersAboutStatus('pending');
    setTimeout(createChannel, 3000);
}

const messageHandler = (event: MessageEvent) => {
    const newMessages = JSON.parse(event.data);
    subscribers['messages-received'].forEach(sub => sub(newMessages));
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready');
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error');
}

export const chatApi = {
    start() {
        createChannel();
    },
    stop() {
        subscribers['messages-received'] = [];
        subscribers['status-changed'] = [];
        cleanUp();
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback);
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: SubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
}


