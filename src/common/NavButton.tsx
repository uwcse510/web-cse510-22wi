import * as React from "react";

// // Components for styling
// import {
//     createStyles,
//     Theme,
//     withStyles,
//     WithStyles,
// } from "@material-ui/core";

// Components for layout
import {
    Button,
} from "@mui/material";
import {
    Link as RouterLink,
} from "react-router-dom";

// Imports for accessing store
import { observer } from "mobx-react-lite";
import { useAppStore } from "../stores/AppStoreProvider";

// //
// // Declare the styling classes to be used in the component.
// //
// // Class names should not accidentally equal CSS properties,
// // so we defensively prefix each class name with 'class'.
// //
// // A Typescript error will occur if styles do not reference the theme,
// // can be addressed by removing the theme parameter
// //
// const styles = (theme: Theme) => createStyles({
//     // TODO Access existing theme values instead of copying them here
//     classButton: {
//         color: 'inherit',
//
//         // Put padding on the label/indicator instead of on this button
//         paddingBottom: 0,
//     },
//     classLabel: {
//         paddingBottom: 6, // Based on material-ui button.js text padding
//     },
//     classLabelSelected: {
//         // Use a border to show the match
//         borderRadius: 0,
//         borderBottomStyle: 'solid',
//         borderBottomWidth: 2,
//         borderBottomColor: theme.palette.secondary.main,
//
//         // Reduce the padding by the size of the border
//         paddingBottom: 4, // Based on material-ui button.js text padding
//     }
// });

// //
// // Properties
// //
// interface Props extends WithStyles<typeof styles> {}    // Include our style properties
interface Props extends React.PropsWithChildren<{}> {}  // Include a "children" property
interface Props {
    to: string,
    match?: 'never' | 'equals' | 'startsWith',
}

// Apply any defaults
const defaultProps: Partial<Props> = {
    match: 'startsWith',
}

// /**
//  * A button intended for use in top-level navigation.
//  * - Provides a RouterLink.
//  * - Provides a Tab-like indication of current navigation status.
//  */
// const NavButton = ({classes, ...props}: Props) => {
//     const store = useAppStore();
//
//     function isSelected(): boolean {
//         // TODO consider using a Match object instead
//         // https://dev.to/housinganywhere/matching-your-way-to-consistent-states-1oag
//         if (props.match === "startsWith") {
//             return (store.routerStore.location.pathname.startsWith(props.to));
//         } else if (props.match === "equals") {
//             return (store.routerStore.location.pathname === props.to);
//         } else if (props.match === "never") {
//             return false;
//         } else {
//             throw new Error("")
//         }
//     }
//
//     if (isSelected()) {
//         return (
//             <Button component={RouterLink} to={props.to} className={classes.classButton}>
//                 <span className={classes.classLabelSelected}>
//                     {props.children}
//                 </span>
//             </Button>
//         );
//     } else {
//         return (
//             <Button component={RouterLink} to={props.to} className={classes.classButton}>
//                 <span className={classes.classLabel}>
//                     {props.children}
//                 </span>
//             </Button>
//         );
//     }
// };
/**
 * A button intended for use in top-level navigation.
 * - Provides a RouterLink.
 * - Provides a Tab-like indication of current navigation status.
 */
export const NavButton: React.FunctionComponent<Props> = observer((props: Props) => {
    const store = useAppStore();

    function isSelected(): boolean {
        // TODO consider using a Match object instead
        // https://dev.to/housinganywhere/matching-your-way-to-consistent-states-1oag
        if (props.match === "startsWith") {
            return (store.routerStore.location.pathname.startsWith(props.to));
        } else if (props.match === "equals") {
            return (store.routerStore.location.pathname === props.to);
        } else if (props.match === "never") {
            return false;
        } else {
            throw new Error("")
        }
    }

    if (isSelected()) {
        return (
            <Button component={RouterLink} to={props.to}>
                <span>
                    {props.children}
                </span>
            </Button>
        );
    } else {
        return (
            <Button component={RouterLink} to={props.to}>
                <span>
                    {props.children}
                </span>
            </Button>
        );
    }
});

NavButton.defaultProps = defaultProps;

export default NavButton;

// // // Apply our wrappers so we can then also apply any defaults
// // const Wrapper = withStyles(styles)(
// //     observer(
// //         NavButton
// //     )
// // );
// const Wrapper = observer(
//     NavButton
// );
//
//
// // Then rename the wrapper for export
// export {
//     Wrapper as NavButton
// };
