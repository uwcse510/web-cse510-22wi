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
    Box,
    Paper,
} from "@mui/material";

//
// A styled component, informed by documentation:
//
// https://material-ui.com/guides/typescript/
//

// //
// // Declare the styling classes to be used in the component.
// //
// // Class names should not accidentally equal CSS properties,
// // so we defensively prefix each class name with 'class'.
// //
// // A Typescript error will occur if styles do not reference the theme,
// // in which case it is fine to remove the theme parameter
// //
// const styles = (theme: Theme) => createStyles({
//     classPaper: {
//         // Margins above and below the paper
//         marginTop: theme.spacing(2),
//         marginBottom: theme.spacing(2),
//         // Creating a flex container ensures margins of things inside this won't collapse
//         display: "flex",
//         flexDirection: "column",
//     },
//     classOuterBox: {
//         // We then need a box within which margins will collapse
//         display: "block",
//     },
//     classInnerBox: {
//         // And finally our margin inside the paper, content against the margin will collapse into this
//         margin: theme.spacing(3),
//     }
// });

// //
// // Properties
// //
// // This example assumes a children property, but only allows that property.
// // Styling a Component with additional properties (e.g., a Button)
// // will also require extending those properties (e.g., extends ButtonProps, WithStyles<typeof styles>).
// //
// interface Props extends WithStyles<typeof styles> {
//     children: React.ReactNode;
// }
interface Props extends React.PropsWithChildren<{}> {
};

/**
 * A simple layout that places content within a Paper.
 * - Places margin above and below the paper.
 * - The margins of children will collapse with a margin on the interior of the Paper.
 */
// const DefaultLayout = withStyles(styles)(({classes, ...props}: Props) => (
//     <Paper className={classes.classPaper}>
//         <Box className={classes.classOuterBox}>
//             <Box className={classes.classInnerBox} role="main">
//                 {props.children}
//             </Box>
//         </Box>
//     </Paper>
// ));
const DefaultLayout = (props: Props) => (
    <Paper>
        <Box>
            <Box role="main">
                {props.children}
            </Box>
        </Box>
    </Paper>
);

export default DefaultLayout;
