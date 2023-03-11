import {instance} from './common/instance';
import {IProfileData} from '../init/types/profileTypes';
import {
    ProfileIdResponseType, ProfilePhotoResponseType,
    ProfileResponseType,
    ProfileStatusIdResponseType,
    ProfileStatusResponseType
} from './apiTypes';

export const profileAPI = {
    updateProfile(profile: IProfileData) {
        return instance
            .put<ProfileResponseType>(`profile`, profile)
            .then(response => response.data);
    },
    profile(id: number) {
        return instance
            .get<ProfileIdResponseType>(`profile/${id}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance
            .put<ProfileStatusResponseType>(`profile/status`, {status})
            .then(response => response.data);
    },
    status(id: number) {
        return instance
            .get<ProfileStatusIdResponseType>(`profile/status/${id}`)
            .then(response => response.data);
    },
    savePhoto(file: string) {
        const formData = new FormData();
        formData.append('image', file);
        return instance
            .put<ProfilePhotoResponseType>(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(response => response.data);
    }
}
