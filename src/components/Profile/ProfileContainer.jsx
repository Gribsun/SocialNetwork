// core
import {connect} from 'react-redux';
import {compose} from 'redux';

// actions
import {getUserProfile, getUserStatus, updateUserStatus} from '../../init/actions/profileAction';
import {setIsFetching} from '../../init/actions/generalAction';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

// other
import {getProfileSelect} from "../../init/selectors/profile-selectors";
import {getIsAuthSelect} from "../../init/selectors/auth-selectors";

// components
import {Profile} from './Profile';
import {checkLogin} from '../../init/actions/authAction';

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthSelect(state),
        profile: getProfileSelect(state),
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
