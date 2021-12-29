import * as React from 'react';

import {
    RouterStore
} from 'mobx-react-router';
import {
    Router,
} from 'react-router-dom';


/**
 * Properties required by MobxRouter.
 */
export interface MobxRouterProps extends React.PropsWithChildren<{}> {
    basename?: string;
    routerStore: RouterStore;
}


/**
 * A <Router> based on a Mobx RouterStore.
 *
 * Based on <BrowserRouter> from <https://github.com/remix-run/react-router>.
 */
export const MobxRouter: React.FunctionComponent<MobxRouterProps> = (props: MobxRouterProps) => {
    let history = props.routerStore.history;
    let [state, setState] = React.useState({
        action: history.action,
        location: history.location
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={props.basename}
            children={props.children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
}

export default MobxRouter;
