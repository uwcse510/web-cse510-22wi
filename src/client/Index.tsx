import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import {
    AppBar,
    Box,
    CssBaseline,
    Container,
    ThemeProvider,
    Toolbar,
} from '@mui/material';

// import {
//     StylesProvider
// } from '@mui/styles';

import { MDXProvider } from '@mdx-js/react';
import commonMDXComponents from '../common/MDXComponents';

import theme from './Theme'

import { NavButton } from '../common/NavButton';

import DefaultLayout from './DefaultLayout';

import Home from '../pages/Home.mdx';
import Assignments from '../pages/Assignments.mdx';
import Calendar from '../pages/Calendar.mdx';

import { createAppStore } from "../stores/AppStore";
import { AppStoreProvider } from '../stores/AppStoreProvider';

declare let module: any;

createAppStore();

const createUi = () => {
    return (
        <AppStoreProvider>
            <ThemeProvider theme={theme}>
                {/*<StylesProvider injectFirst>*/}
                    <CssBaseline/>
                    <MDXProvider components={commonMDXComponents}>
                        <BrowserRouter>
                            <AppBar position="static">
                                <Container>
                                    <Toolbar disableGutters>
                                        <Box display="flex" flexDirection="row" width="100%" role="navigation" aria-label="Main Links">
                                            <NavButton to="/" match="never">CSE 510 - Advanced Topics in HCI - Winter 2020</NavButton>
                                            <Box flexGrow={1} />
                                            <NavButton to="/assignments">Assignments</NavButton>
                                            <NavButton to="/calendar">Calendar</NavButton>
                                        </Box>
                                    </Toolbar>
                                </Container>
                            </AppBar>
                            <Container>
                                <DefaultLayout>
                                    <Routes>
                                        <Route path="/" element={<Home />}>
                                        </Route>
                                        <Route path="/assignments" element={<Assignments />}>
                                        </Route>
                                        <Route path="/calendar" element={<Calendar />}>
                                        </Route>
                                    </Routes>
                                </DefaultLayout>
                            </Container>
                        </BrowserRouter>
                    </MDXProvider>
                {/*</StylesProvider>*/}
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
