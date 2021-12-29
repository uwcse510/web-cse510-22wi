import * as React from "react";

import {
    Box,
    Paper,
    SxProps,
} from "@mui/material";


//
// Styles
//
// An outmost Paper is a flex container to prevent margin collapse.
// An outer Box then enables margin collapse.
// An inner Box defines a margin against which content will collapse.
//
const stylePaper: SxProps = {
    marginTop: 2,
    marginBottom: 2,
    display: "flex",
    flexDirection: "column",
}

const styleOuterBox: SxProps = {
    display: "block",
}

const styleInnerBox: SxProps = {
    margin: 3,
}

//
// Properties
//
interface DefaultLayoutProps extends React.PropsWithChildren<{}> {
};

/**
 * A simple layout that places content within a Paper.
 * - Places margin above and below the paper.
 * - The margins of children will collapse with a margin on the interior of the Paper.
 */
export const DefaultLayout = (props: DefaultLayoutProps) => (
    <Paper sx={stylePaper}>
        <Box sx={styleOuterBox}>
            <Box role="main" sx={styleInnerBox}>
                {props.children}
            </Box>
        </Box>
    </Paper>
);

export default DefaultLayout;
