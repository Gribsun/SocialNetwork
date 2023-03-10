import React, {ComponentType} from 'react';

export function WithAuthRedirect<WCP>(Component: ComponentType<WCP>) {
    // if (!localStorage.getItem('isAuth')) {
    //     return <Navigate to={'/login'}/>;
    // }
    // const RedirectComponent: ComponentType<WCP> = (props) => {
    //     setTimeout(() => {
    //
    //         //@ts-ignore
    //         return <Component {...props as WCP} />;
    //     }, 0)
    // }

    // return Component;
}
