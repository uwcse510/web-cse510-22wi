import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Alert,
    Box,
    Grid,
} from '@mui/material';

import { CourseInformationLink } from '../components/CourseInformation';
import { FormattedReading } from '../components/FormattedReading';
import { useAppStore } from '../stores/AppStoreProvider';
import { CalendarDate } from '../stores/CourseCalendarStore';
import GeneratedLink from "src/common/GeneratedLink";

const DATETIME_FORMAT_CALENDAR = 'EEE MMM d';

function renderAdditionalResources(calendarDateCurrent: CalendarDate) {
    if (calendarDateCurrent.additionalResources) {
        return (
            <Box>
                <h3>Additional Optional Resources</h3>
                <ul>
                    {calendarDateCurrent.additionalResources.map(readingCurrent => (
                        <li key={readingCurrent.title}>
                            <p><FormattedReading reading={readingCurrent}/></p>
                        </li>
                    ))}
                </ul>
            </Box>
        )
    } else {
        return null;
    }
}

function renderGuest(calendarDateCurrent: CalendarDate) {
    if (calendarDateCurrent.guest) {
        return (
            <Alert severity='info'>
                Guest: <GeneratedLink href={calendarDateCurrent.guest.link}>{calendarDateCurrent.guest.name}</GeneratedLink>
            </Alert>
        );
    } else {
        return null;
    }
}

function renderContent(calendarDateCurrent: CalendarDate) {
    if ('readingsStandard' in calendarDateCurrent) {
        // A standard reading, with a framing and instances
        // <!-- // <li *ngFor="let currentReading of currentDate.readingsStandard.additional"> -->
        // <!-- // <app-reading [reading]="currentReading"></app-reading> -->
        // <!-- <app-assignment-submission-link linkSubmission="{{ site.linkDiscussion }}"></app-assignment-submission-link> -->
        return (
            <Box>
                <p>Read the framing paper:</p>
                <ul>
                    <li>
                        <p><FormattedReading reading={calendarDateCurrent.readingsStandard.framing}/></p>
                    </li>
                </ul>
                <p>Select one additional reading:</p>
                <ul>
                    {calendarDateCurrent.readingsStandard.instances.map(readingCurrent => (
                        <li key={readingCurrent.title}>
                            <p><FormattedReading reading={readingCurrent}/></p>
                        </li>
                    ))}
                </ul>
                <h3>Standard Reading Format</h3>
                <p>Post a reading report in the appropriate thread(s), by 11:59pm the night before class:</p>
                <p><CourseInformationLink linkName={'linkDiscussion'}/></p>
            </Box>
        );
    } else if ('contentNonstandard' in calendarDateCurrent) {
        // Non-standard content rendered in an outside component
        return calendarDateCurrent.contentNonstandard;
    }
}

export const CourseCalendar: FunctionComponent = () => {
    const store = useAppStore();

    return (
        <Grid container>
            {store.courseCalendar.calendarDates.map(calendarDateCurrent => (
                <Grid item container key={calendarDateCurrent.date.toISODate()}>
                    <Grid item xs={2}>
                        <h2>{calendarDateCurrent.date.toFormat(DATETIME_FORMAT_CALENDAR)}</h2>
                    </Grid>
                    <Grid item xs={10}>
                        <h2>{calendarDateCurrent.dateTitle}</h2>
                        {renderGuest(calendarDateCurrent)}
                        {renderContent(calendarDateCurrent)}
                        {renderAdditionalResources(calendarDateCurrent)}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}

export default CourseCalendar;
