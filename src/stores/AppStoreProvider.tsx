/**
 * Based on https://mobx-react.js.org/recipes-context
 */

import * as React from 'react';
import { useLocalObservable } from "mobx-react-lite";
import { AppStore, getAppStore } from './AppStore';

const storeContext = React.createContext<AppStore | null>(null);

export interface AppStoreProviderProps {
    children: React.ReactElement;
}

export const AppStoreProvider = ({children}: AppStoreProviderProps): React.ReactElement => {
    const store = useLocalObservable(getAppStore);

    return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
}

export const useAppStore = () => {
    const store = React.useContext(storeContext);

    if(!store) {
        throw new Error('useAppStore must be called within an AppStoreProvider.');
    }

    return store;
}
