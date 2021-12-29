import * as React from 'react';
import { FunctionComponent } from 'react';

import { Reading } from '../types/Reading';

import FormattedReading from './FormattedReading';
import GeneratedLink from '../common/GeneratedLink';

import { useAppStore } from '../stores/AppStoreProvider';
import { CourseInformationStore } from "../stores/CourseInformationStore";

/**
 * Name of the assignment date.
 */
interface CourseInformationAssignmentDateProps {
    assignmentDateName: keyof CourseInformationStore;
}

/**
 * Render a named assignment date from the course information.
 */
export const CourseInformationAssignmentDate: FunctionComponent<CourseInformationAssignmentDateProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (props.assignmentDateName in store.courseInformation === false) {
        throw new Error('assignmentDateName must be in store.courseInformation.');
    }
    if (props.assignmentDateName.startsWith('assignmentDate') === false) {
        throw new Error('assignmentDateName must start with "assignmentDate".');
    }

    const assignmentDateText = store.courseInformation[props.assignmentDateName] as string;

    if (assignmentDateText) {
        return <span>{assignmentDateText}</span>;
    } else {
        return <span>Assignment date to be added</span>
    }
}

/**
 * Name of the Reading to be formatted.
 */
interface CourseInformationFormattedReadingProps {
    readingName: keyof CourseInformationStore;
}

/**
 * Render a named Reading from the course information.
 */
export const CourseInformationFormattedReading: FunctionComponent<CourseInformationFormattedReadingProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (props.readingName in store.courseInformation === false) {
        throw new Error('readingName must be in store.courseInformation.');
    }
    if (props.readingName.startsWith('reading') === false) {
        throw new Error('readingName must start with "reading".');
    }

    const reading = store.courseInformation[props.readingName] as Reading;

    return <FormattedReading reading={reading} />;
}

/**
 * Name of the link.
 */
interface CourseInformationLinkProps {
    linkName: keyof CourseInformationStore;
}

/**
 * Render a named link from the course information.
 */
export const CourseInformationLink: FunctionComponent<CourseInformationLinkProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (props.linkName in store.courseInformation === false) {
        throw new Error('linkName must be in store.courseInformation.');
    }
    if (props.linkName.startsWith('link') === false) {
        throw new Error('linkName must start with "link".');
    }

    const link = store.courseInformation[props.linkName] as string;

    if (link) {
        return <GeneratedLink href={link}>{link}</GeneratedLink>;
    } else {
        return <span>Link to be added</span>
    }
}
