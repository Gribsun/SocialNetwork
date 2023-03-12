import {IFilter, IParsed} from '../components/UsersPage/types/UsersPageTypes';

type FormValuesType = {
    term: string,
    friend: string,
    search: string,
    message: string,
}

type EditedFilterType = {
    term: string,
    friend: null | boolean,
    search: string,
    message: string,
};

export const changingFilterFriendsTypes = (filter: FormValuesType): EditedFilterType => {

    const editedFilter: EditedFilterType = {
        term: filter.term,
        search: filter.search,
        message: filter.message,
        friend: null,
    };

    if (filter.friend === 'true') {
        editedFilter.friend = true
    }
    if (filter.friend === 'false') {
        editedFilter.friend = false
    }

    return editedFilter;
}

export const initialURLCheckAndGenerationUserList = (parsed: IParsed, filter: IFilter) => {
    const actualCurrentPage = parsed.page ? Number(parsed.page) : 1;
    const actualTerm = parsed.term ? parsed.term : filter.term;
    const actualFriend = parsed.friend ? parsed.friend : filter.friend;

    return {actualCurrentPage, actualTerm, actualFriend}
}

export function conversionParameterToURL(parsed: IParsed) {
    let urlStr = ''

    urlStr += parsed.page === undefined ? 'page=1' : `page=${parsed.page}`;
    if (parsed && parsed.term) {
        urlStr += `&term=${parsed.term}`;
    }
    if (parsed && (String(parsed.friend) === 'false' || parsed.friend)) {
        urlStr += `&friend=${parsed.friend}`;
    }

    return urlStr;
}
