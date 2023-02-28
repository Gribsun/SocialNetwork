export const getProfileDataItems = (profileData) => {
    const profileDataForRender = [];
    for (let key in profileData) {
        if (typeof profileData[key] !== 'object' && key !== 'userId')
            profileDataForRender.push({[key]: profileData[key]});
    }
    return profileDataForRender;
}

export const getActualContacts = (profileData) => {
    const {contacts} = profileData;
    const contactsForRender = [];
    for (let key in contacts) {
        if (contacts[key]) {
            contactsForRender.push({[key]: contacts[key]});
        }
    }
    return contactsForRender;
}

export const getFullContactList = (profileData) => {
    const {contacts} = profileData;
    const fullContactsForInput = [];
    for (let key in contacts) {
        fullContactsForInput.push({[key]: contacts[key]});
    }
    return fullContactsForInput;
}
