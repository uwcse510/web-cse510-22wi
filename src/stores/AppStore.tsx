import { observable } from 'mobx';

import { CourseCalendarStore } from './CourseCalendarStore';
import { CourseInformationStore } from './CourseInformationStore';

import { RouterStore } from 'mobx-react-router';
import { createBrowserHistory } from "history";

export interface AppStore {
    courseCalendar: CourseCalendarStore;
    courseInformation: CourseInformationStore;
    routerStore: RouterStore;
}

class AppStoreImpl implements AppStore {
    @observable.deep public courseCalendar: CourseCalendarStore;
    @observable.deep public courseInformation: CourseInformationStore;
    public routerStore: RouterStore;

    constructor() {
        // Initialize our state
        this.courseCalendar = new CourseCalendarStore();
        this.courseInformation = new CourseInformationStore();

        // Initialize our router state
        const browserHistory = createBrowserHistory();
        this.routerStore = new RouterStore(browserHistory);
    }
}

let INSTANCE: AppStore | null = null;

/**
 * Create the application store.
 *
 * Enforces a singleton constraint.
 */
export function createAppStore(): AppStore {
    if (INSTANCE) {
        throw new Error('AppStore is a singleton');
    }

    INSTANCE = new AppStoreImpl();

    return getAppStore();
}

/**
 * Obtain the application store.
 */
export function getAppStore(): AppStore {
    if (INSTANCE === null) {
        throw new Error('AppStore not created');
    }

    return INSTANCE;
}
