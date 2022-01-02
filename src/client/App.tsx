import * as React from "react";

import {
    AppBar,
    Box,
    Container,
    Toolbar
} from "@mui/material";

import {
    Route,
    Routes
} from "react-router-dom";

import {DefaultLayout} from "src/client/DefaultLayout";
import {NavButton} from "src/common/NavButton";

import Assignments from "src/pages/Assignments.mdx";
import Calendar from "src/pages/Calendar.mdx";
import Home from "src/pages/Home.mdx";

import AssignmentsOverviewWrapper from "../content/assignments/OverviewWrapper.mdx"
import AssignmentsReadings from "../content/assignments/Readings.mdx"
import AssignmentsProject from "../content/assignments/Project.mdx"
import AssignmentsStatisticsLab from "../content/assignments/StatisticsLab.mdx"
import AssignmentsExam from "../content/assignments/Exam.mdx"

export const App: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Box display="flex" flexDirection="row" width="100%" role="navigation"
                             aria-label="Primary Navigation Links">
                            <NavButton to="/" match="never">CSE 510 - Advanced Topics in HCI - Winter 2022</NavButton>
                            <Box flexGrow={1}/>
                            <NavButton to="/assignments">Assignments</NavButton>
                            <NavButton to="/calendar">Calendar</NavButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <DefaultLayout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/assignments" element={<Assignments/>}>
                            <Route path="" element={<AssignmentsOverviewWrapper/>} />
                            <Route path="readings" element={<AssignmentsReadings/>} />
                            <Route path="project" element={<AssignmentsProject/>} />
                            <Route path="statisticslab" element={<AssignmentsStatisticsLab/>} />
                            <Route path="exam" element={<AssignmentsExam/>} />
                        </Route>
                        <Route path="/calendar" element={<Calendar/>} />
                    </Routes>
                </DefaultLayout>
            </Container>
        </React.Fragment>
    );
}

export default App;
