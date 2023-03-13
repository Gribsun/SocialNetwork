// core
import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../../hooks/redux-hooks';

// components
import {Preloader} from '../../common/Preloader/Preloader';
import {Chat} from '../../Chat/Chat';

// other
import {getIsFetchingSelect} from '../../../init/selectors/users-selectors';
import {getIsAuthSelect} from '../../../init/selectors/auth-selectors';

const ChatPage: FC = () => {
    const isFetching = useAppSelector(getIsFetchingSelect);

    const isAuth = useAppSelector(getIsAuthSelect);
    if (!isAuth) return <Navigate to={'/login'}/>;

    return (<>
        {isFetching
            ? <Preloader/>
            : <Chat/>}
    </>)
}

export default ChatPage;
