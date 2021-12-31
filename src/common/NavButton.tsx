import * as React from "react";

import {
    Box,
    Button,
    SxProps,
} from "@mui/material";

import {
    Link as RouterLink,
} from "react-router-dom";

import { observer } from "mobx-react-lite";
import { useAppStore } from "../stores/AppStoreProvider";

//
// Styles
//
// Styles applied to the outer Button and inner Box are coordinated to
// account for the size difference resulting from adding a selection border.
//
const styleButtonBase: SxProps = {
    color: "inherit",
}

const styleBoxBase: SxProps = {
}

const styleBox: SxProps = {
    ...styleBoxBase,
}

const styleButton: SxProps = {
    ...styleButtonBase,
    // Taken from Material button
    // https://github.com/mui-org/material-ui/blob/master/packages/mui-material/src/Button/Button.js
    padding: "6px 16px 6px 16px",
}

const styleBoxSelected: SxProps = {
    ...styleBoxBase,
    // Use a border to show the selection
    borderRadius: 0,
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    borderBottomColor: "secondary.main",
}

const styleButtonSelected: SxProps = {
    ...styleButtonBase,
    // Reduce bottom padding to account for border
    padding: "6px 16px 4px 16px",
}

//
// Properties
//
interface NavButtonProps extends React.PropsWithChildren<{}> {
    to: string,
    match?: 'never' | 'equals' | 'startsWith',
}

const defaultProps: Partial<NavButtonProps> = {
    match: 'startsWith',
}

/**
 * A button intended for use in primary navigation.
 * - Provides a RouterLink.
 * - Provides a Tab-like indication of current navigation status.
 */
export const NavButton: React.FunctionComponent<NavButtonProps> = observer((props: NavButtonProps) => {
    const store = useAppStore();

    function isSelected(): boolean {
        // TODO consider using a Match object instead
        // https://dev.to/housinganywhere/matching-your-way-to-consistent-states-1oag

        const currentPath = store.routerStore.location.pathname;
        const matchPath = currentPath.slice(store.publicPath.length - 1)

        if (props.match === "startsWith") {
            return (matchPath.startsWith(props.to));
        } else if (props.match === "equals") {
            return (matchPath === props.to);
        } else if (props.match === "never") {
            return false;
        } else {
            throw new Error("")
        }
    }

    if (isSelected()) {
        return (
            <Button component={RouterLink} to={props.to} sx={styleButtonSelected}>
                <Box sx={styleBoxSelected}>
                    {props.children}
                </Box>
            </Button>
        );
    } else {
        return (
            <Button component={RouterLink} to={props.to} sx={styleButton}>
                <Box sx={styleBox}>
                    {props.children}
                </Box>
            </Button>
        );
    }
});

NavButton.defaultProps = defaultProps;

export default NavButton;
