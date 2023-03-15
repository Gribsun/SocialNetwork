export enum ChatActionTypes {
    SET_MESSAGES = 'SET_MESSAGES',
    SET_STATUS = 'SET_STATUS',
}

export type StatusType = 'pending' | 'ready' | 'error';

export type ChatMessageAPIType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}

export type ChatMessageType = ChatMessageAPIType & {
    id: string,
}

