import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';
import { Reading } from '../types/Reading';

const DATETIME_OPTIONS_ASSIGNMENT = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

type link = string | null;
type assignmentDate = string | null;

export class CourseInformationStore {
    //
    // Home
    //

    // Link to course Canvas
    linkCanvas: link = 'https://canvas.uw.edu/courses/1519807';

    // Link to course GitHub
    linkGitHub: link = 'https://github.com/uwcse510/web-cse510-22wi';

    // Link regarding accessible presentations
    linkAccessiblePresentations: link = 'https://interactions.acm.org/archive/view/july-august-2017/making-your-presentation-accessible'

    //
    // Readings
    //

    // Link to the Canvas discussion forum
    linkDiscussion: link = "https://canvas.uw.edu/courses/1519807/discussion_topics";

    // Links for the Visions of HCI discussion
    linkVisionsOrganization: link = "https://docs.google.com/document/d/1p0jUK0ONrz8OuhXGqjHzEg-cte4vCDH4pxCIKSu9rek/edit?usp=sharing";
    linkVisionsSlides: link = "https://docs.google.com/presentation/d/1q8U1QfW_n5XaKPjEyquUElOgNUD-RSyGVTWZgLT5YeE/edit?usp=sharing";

    //
    // Project
    //

    assignmentDateProjectInClassProposalFinalization: assignmentDate =
        DateTime.fromISO('2022-01-20').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectProposal: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-01-23').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectMilestone1: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-02-07').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2022-02-08').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' and ' + DateTime.fromISO('2022-02-10').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectMilestone2: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-02-28').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2022-03-01').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' and ' + DateTime.fromISO('2022-03-03').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectReport: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-03-17').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    // Link to a Canvas thread of potential project proposal ideas
    linkProjectProposalIdeas: link = "https://canvas.uw.edu/courses/1519807/discussion_topics/6939656";
    // Link to a Canvas folder of prior project proposals
    linkProjectProposalSamples: link = "https://canvas.uw.edu/courses/1519807/files/folder/project%20samples";
    // Link to the current CHI format to use for report submission
    linkProjectCHIFormat: link = "https://chi2022.acm.org/for-authors/presenting/papers/chi-publication-formats/";

    // Link to shared document for project proposals
    linkProjectProposalGoogleDoc: link = "https://docs.google.com/document/d/1OB4rPy4x7OAfy1HT2tnXLqplIEsZQ2Odx_DZPlME0Tk/edit?usp=sharing";

    // Links to submit project components
    linkSubmitProjectProposal: link = "https://canvas.uw.edu/courses/1519807/assignments/7075561";
    linkSubmitProjectMilestone1: link = null; // TODO 'https://canvas.uw.edu/courses/1371984/assignments/5390939';
    linkSignupProjectMilestone1Presentation: link = "https://docs.google.com/document/d/1QK6ZglvPnWBGY5pCbLLHOEhxt19sx2CF-TTGXxn_v3c/edit?usp=sharing";
    linkSubmitProjectMilestone2: link = null; // TODO 'https://canvas.uw.edu/courses/1371984/assignments/5390992';
    linkSignupProjectMilestone2Presentation: link = "https://docs.google.com/document/d/1LPryCVy4vjscDFb6WM6yJUX0kHjOm9TkvsPQ8Q3917s/edit?usp=sharing";
    linkSubmitProjectReport: link = null; // TODO 'https://canvas.uw.edu/courses/1371984/assignments/5391093';

    // Reading on paper writing
    readingWobbrockPaperWriting: Reading = {
        authorText: 'Jacob O. Wobbrock',
        title: 'Catchy Titles are Good: But Avoid Being Cute',
        publicationText: '2015',
        link: 'https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
    };

    //
    // Statistics Lab
    //

    assignmentDateAvailableStatisticsLab: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-02-17').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueStatisticsLab: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-03-04').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkStatisticsLab: link = null; // TODO 'https://canvas.uw.edu/files/65010646/download?download_frd=1';
    linkSubmitStatisticsLab: link = null; // TODO 'https://canvas.uw.edu/courses/1371984/assignments/5390983';

    //
    // Exam
    //

    assignmentDateAvailableExam: assignmentDate = null;
        // TODO
        // 'by 11:59pm ' + DateTime.fromISO('2020-06-05').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueExam: assignmentDate = null;
        // TODO
        // 'by 11:59pm ' + DateTime.fromISO('2020-06-08').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkSubmitExam: link = null; // TODO 'https://canvas.uw.edu/courses/1371984/assignments/5391063';
}
