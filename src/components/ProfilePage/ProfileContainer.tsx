// core
import {connect} from 'react-redux';
import {compose} from 'redux';

// actions
import {
    checkIsMyProfile,
    getUserProfile,
    getUserStatus,
    updatePhoto,
    updateUserProfile,
    updateUserStatus
} from '../../init/actions/profileAction';
import {setIsFetching} from '../../init/actions/generalAction';

// other
import {getProfileSelect} from "../../init/selectors/profile-selectors";

// components
import {Profile} from './Profile';
import {checkLogin} from '../../init/actions/authAction';

// types
import {AppDispatch, RootState} from '../../init';
import {IProfileState, IProfileUser} from '../../init/types/profileTypes';

type MapStateToPropsType = {
    isAuth: boolean,
    profile: IProfileState,
}

type MapDispatchToPropsType = {
    getUserProfile: (id: number | null) => void,
    getUserStatus: (id: number | null) => void,
    checkLogin: () => void,
    updateUserProfile: (profile: Omit<IProfileUser, 'photos'>) => void,
    updateUserStatus: (status: string) => void,
    setIsFetching: (isFetching: boolean) => void,
    updatePhoto: (photo: string) => void,
    checkIsMyProfile: (isMyProfile: boolean) => void,
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        profile: getProfileSelect(state),
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        getUserProfile: (id) => dispatch(getUserProfile(id)),
        getUserStatus: (id) => dispatch(getUserStatus(id)),
        checkLogin: () => dispatch(checkLogin()),
        updateUserProfile: (profileData) => dispatch(updateUserProfile(profileData)),
        updateUserStatus: (status) => dispatch(updateUserStatus(status)),
        setIsFetching: (isFetching) => dispatch(setIsFetching(isFetching)),
        updatePhoto: (photo) => dispatch(updatePhoto(photo)),
        checkIsMyProfile: (isMyProfile) => dispatch(checkIsMyProfile(isMyProfile)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Profile)
