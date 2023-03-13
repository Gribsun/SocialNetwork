export enum ChatActionTypes {
    SET_MESSAGES = 'SET_MESSAGES',
}

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}
