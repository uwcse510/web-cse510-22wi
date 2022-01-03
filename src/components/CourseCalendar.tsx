import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Alert,
    Box,
    Grid,
} from '@mui/material';

import { anchorText } from "src/common/GeneratedAnchor";
import { CourseInformationLink } from '../components/CourseInformation';
import { FormattedReading } from '../components/FormattedReading';
import { useAppStore } from '../stores/AppStoreProvider';
import { CalendarDate } from '../stores/CourseCalendarStore';
import GeneratedLink from "src/common/GeneratedLink";

const DATE_FORMAT = 'EEE MMM d';

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

function renderAwayJames(calendarDateCurrent: CalendarDate) {
    if (calendarDateCurrent.awayJames) {
        return (
            <Alert severity='info' sx={{marginBottom: 1}}>
                James will be away, participating remotely if able.
            </Alert>
        );
    } else {
        return null;
    }
}

function renderContent(calendarDateCurrent: CalendarDate) {
    if ('readingsStandard' in calendarDateCurrent) {
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

function renderGuest(calendarDateCurrent: CalendarDate) {
    if (calendarDateCurrent.guest) {
        return (
            <Alert severity='info' sx={{marginBottom: 1}}>
                Guest: <GeneratedLink href={calendarDateCurrent.guest.link}>{calendarDateCurrent.guest.name}</GeneratedLink>
            </Alert>
        );
    } else {
        return null;
    }
}

function renderVirtual(calendarDateCurrent: CalendarDate) {
    if (calendarDateCurrent.virtual) {
        return (
            <Alert severity='info' sx={{marginBottom: 1}}>
                Class will be conducted via Zoom, using meeting information provided by email and in Canvas.
            </Alert>
        );
    } else {
        return null;
    }
}

export const CourseCalendar: FunctionComponent = () => {
    const store = useAppStore();

    return (
        <Grid container>
            {store.courseCalendar.calendarDates.map(calendarDateCurrent => (
                <Grid item container key={calendarDateCurrent.date.toISODate()}>
                    <Grid item xs={2}>
                        <h2 id={anchorText(calendarDateCurrent.date.toFormat(DATE_FORMAT))}>
                            {calendarDateCurrent.date.toFormat(DATE_FORMAT)}
                        </h2>
                    </Grid>
                    <Grid item xs={10}>
                        <h2 id={anchorText(calendarDateCurrent.dateTitle)}>{calendarDateCurrent.dateTitle}</h2>
                        {renderVirtual(calendarDateCurrent)}
                        {renderAwayJames(calendarDateCurrent)}
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
