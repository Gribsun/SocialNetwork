export interface IFilter {
    term: string,
    friend: boolean | null,
}

export interface IParsed extends IFilter {
    page: number,
}
