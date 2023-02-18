// core
import React from "react";
import axios from "axios";

// components
import {User} from "../Users/User/User";

// other
import {getUsers, setUsers, followUser, unfollowUser} from "../../init/actions/usersAction";

// styles
import style from "../Users/Users.module.css";

class Users extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const setUsersHandle = () => {
            setUsers();
        }
        setUsersHandle();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.users}>
                    {/*{this.users.map(user =>*/}
                    {/*    <User*/}
                    {/*        key={user.id}*/}
                    {/*        id={user.id}*/}
                    {/*        name={user.name}*/}
                    {/*        photos={user.photos}*/}
                    {/*        followed={user.followed}*/}
                    {/*        status={user.status}*/}
                    {/*        uniqueUrlName={user.uniqueUrlName}*/}
                    {/*        followHandle={this.followHandle}*/}
                    {/*        unfollowHandle={this.unfollowHandle}*/}
                    {/*    />*/}
                    {/*)}*/}
                </div>
            </div>
        );
    };
}

export default Users;
