import {ProfileTypes} from '../types/profileTypes';
import axios from "axios";

export const setProfile = ({id}) => async (dispatch) => {
    try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        if (response.data) {
            dispatch({
                type: ProfileTypes.SET_USER_PROFILE,
                payload: response.data,
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const setIsFetching = (isFetching) => async (dispatch) => {
    try {
        dispatch({
            type: ProfileTypes.TOGGLE_IS_FETCHING,
            payload: isFetching,
        });
    } catch (err) {
        console.log(err);
    }
};
