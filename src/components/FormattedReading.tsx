import * as React from 'react';
import { FunctionComponent } from 'react';

import GeneratedLink from '../common/GeneratedLink';

import Reading from '../types/Reading';

/**
 * A Reading to be formatted.
 */
interface FormattedReadingProps {
    reading: Reading;
}

/**
 * Render a Reading as a <span /> to be displayed.
 */
export const FormattedReading: FunctionComponent<FormattedReadingProps> = (props) => {
    if (props.reading.link) {
        return (
            <span>
                { props.reading.authorText }.
                <span> </span>
                <GeneratedLink href={ props.reading.link }>
                    { props.reading.title }
                </GeneratedLink>.
                <span> </span>
                { props.reading.publicationText }.
            </span>
        );
    } else {
        return (
            <span>
                { props.reading.authorText }.
                <span> </span>
                { props.reading.title }.
                <span> </span>
                { props.reading.publicationText }.
            </span>
        );
    }
}

export default FormattedReading;
