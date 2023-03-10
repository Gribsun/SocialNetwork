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
