import {IProfileContacts, IProfileUser} from '../init/types/profileTypes';

export const getProfileDataItems = (profileData: IProfileUser) => {
    const profileDataForRender: Array<Record<string, IProfileUser[keyof IProfileUser]>> = [];

    Object.keys(profileData).forEach(key => {
        const data = profileData[key as keyof IProfileUser];
        if (typeof data !== 'object' && key !== 'userId') {
            profileDataForRender.push({[key]: data});
        }
    })

    return profileDataForRender;
}

export const getActualContacts = (profileData: IProfileUser) => {
    const {contacts} = profileData;
    const contactsForRender: Array<Record<string, IProfileContacts[keyof IProfileContacts]>> = [];

    Object.keys(contacts).forEach(key => {
        const data = contacts[key as keyof IProfileContacts];
        if (data) {
            contactsForRender.push({[key]: data});
        }
    })

    return contactsForRender;
}

export const getFullContactList = (profileData: IProfileUser) => {
    const {contacts} = profileData;
    const fullContactsForInput: Array<Record<string, IProfileContacts[keyof IProfileContacts]>> = [];

    Object.keys(contacts).forEach(key => {
        const data = contacts[key as keyof IProfileContacts];
        fullContactsForInput.push({[key]: data});
    })

    return fullContactsForInput;
}
