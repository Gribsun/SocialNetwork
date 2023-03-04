export enum ActionPostsTypes {
    ADD_POST = 'ADD_POST',
}

export type OnePostType = {
    id: number,
    text: string,
    title: string,
    likesCount: number,
}

export type PostsType = Array<OnePostType>;

export interface IPostsState {
    posts: PostsType;
}

export type ActionPostType = {
    type: ActionPostsTypes;
    payload: OnePostType;
}
