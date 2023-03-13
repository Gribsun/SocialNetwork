type SubscriberType = (messages: ChatMessageType[]) => void;

type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}

let subscribers = [] as Array<SubscriberType>;

let ws: WebSocket | null = null;

function createChannel() {
    ws?.removeEventListener('close', closeHandler);
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
}

const closeHandler = () => {
    setTimeout(createChannel, 3000);
}

const messageHandler = (event: MessageEvent) => {
    const newMessages = JSON.parse(event.data);
    subscribers.forEach(sub => sub(newMessages));
}
export const chatApi = {
    start() {
        createChannel();
    },
    stop() {
        subscribers = [];
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close();
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(s => s !== callback);
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback);
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
}


