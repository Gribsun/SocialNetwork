// core
import {connect} from 'react-redux';
import {
    getUsers,
    followUser,
    unfollowUser, setFilter,
} from '../../init/actions/usersAction';
import {compose} from 'redux';
import {setIsFetching, setIsFollowingProgress} from '../../init/actions/generalAction';

// components
import {Users} from './Users';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.userCollection.users,
        filter: state.userCollection.filter,
        pageSize: state.userCollection.pageSize,
        currentPage: state.userCollection.currentPage,
        totalCount: state.userCollection.totalCount,
        isFetching: state.userCollection.isFetching,
        followingInProgress: state.userCollection.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers,
        setFilter,
        followUser,
        unfollowUser,
        setIsFetching,
        setIsFollowingProgress
    }),
    WithAuthRedirect,
)(Users);
