export type ParsedSearchParamsType = Record<keyof IParsed, string | number | boolean>;

export type ActualFilterDataType = {
    actualCurrentPage: number,
    actualTerm: string,
    actualFriend: null | boolean,
}

export interface IFilter {
    term: string,
    friend: boolean | null,
}

export interface IParsed extends IFilter {
    page: number,
}
