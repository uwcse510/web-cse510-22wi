import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {createBrowserHistory} from "history";

import {
    CssBaseline,
    ThemeProvider,
} from '@mui/material';

import {MDXProvider} from '@mdx-js/react';

import {App} from "./App"
import {AppTheme} from './AppTheme'
import {MDXComponents} from '../common/MDXComponents';
import {MobxRouter} from '../common/MobxRouter';
import {createAppStore} from "../stores/AppStore";
import {AppStoreProvider} from '../stores/AppStoreProvider';


declare let module: any;


const browserHistory = createBrowserHistory({window});
const appStore = createAppStore(browserHistory, __PUBLICPATH__);

const createUi = () => {
    return (
        <AppStoreProvider>
            <ThemeProvider theme={AppTheme}>
                <CssBaseline/>
                <MDXProvider components={MDXComponents}>
                    <MobxRouter basename={appStore.publicPath} routerStore={appStore.routerStore}>
                        <App/>
                    </MobxRouter>
                </MDXProvider>
            </ThemeProvider>
        </AppStoreProvider>
    );
};

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(createUi(), rootElement);
} else {
    ReactDOM.render(createUi(), rootElement);
}

if (module.hot) {
    module.hot.accept();
}
