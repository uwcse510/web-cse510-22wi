import * as React from 'react';
import { FunctionComponent } from 'react';

import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

interface GeneratedLinkProps {
    href: string,
    linkType?: 'auto' | 'internal' | 'external' | 'file',
}

export const GeneratedLink: FunctionComponent<GeneratedLinkProps> = (props) => {
    /**
     * Determines whether this link is considered external.
     */
    function isExternalLink(): boolean {
        if (props.linkType === 'internal') {
            return false;
        }

        return (
            props.linkType === 'external'
            || props.href.startsWith('http:')
            || props.href.startsWith('https:')
        );
    }

    /**
     * Determines whether a link is a file to be downloaded / viewed.
     *
     * Such a file may be within the site (e.g., in assets), but will be treated as external.
     */
    function isFile(): boolean {
        return (
            props.linkType === 'file'
            || props.href.toLowerCase().endsWith('.mp4')
            || props.href.toLowerCase().endsWith('.pdf')
            || props.href.toLowerCase().endsWith('.ppt')
        );
    }

    // Both types of link are rendered as <Link /> so it's easier to consistently style them.
    // Passing the <RouterLink /> as component then gets the desired behavior.
    //
    // External links and file downloads are currently treated the same
    if (isExternalLink() || isFile()) {
        // External links use <Link>, are opened in "_blank"
        return (
            <Link
                href={props.href}
                target="_blank"
                rel="noopener"
                children={props.children}
            />
        );
    } else {
        // Internal links use <RouterLink>, opened without a page load
        return (
            <Link
                component={RouterLink}
                to={props.href}
                children={props.children}
            />
        );
    }
}

GeneratedLink.defaultProps = {
    linkType: 'auto'
}

export default GeneratedLink;
