export enum ActionMessagesTypes {
    ADD_MESSAGE = 'ADD_MESSAGE',
}

export interface IMessage {
    id: number,
    message: string,
}

export type IMessagesState = IMessage[];
