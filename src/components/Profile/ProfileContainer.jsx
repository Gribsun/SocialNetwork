// core
import {connect} from 'react-redux';
import {compose} from 'redux';

// actions
import {getUserProfile, getUserStatus, updateUserStatus} from '../../init/actions/profileAction';
import {setIsFetching} from '../../init/actions/generalAction';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

// components
import {Profile} from './Profile';
import {checkLogin} from '../../init/actions/authAction';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.profile,
    }
}
export default compose(
    connect(mapStateToProps,
        {
            getUserProfile,
            getUserStatus,
            checkLogin,
            updateUserStatus,
            setIsFetching
        }),
    WithAuthRedirect,
)(Profile)
