import { DateTime, DateTimeFormatOptions } from 'luxon';
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

    // Link to course GitHub
    linkGitHub: link = 'https://github.com/uwcse510/web-cse510-wi22';

    //
    // Readings
    //

    // Link to the Canvas discussion forum
    linkDiscussion: link = 'https://canvas.uw.edu/courses/1371984/discussion_topics';

    // Links for the Visions of HCI discussion
    linkVisionsOrganization: link = 'https://docs.google.com/document/d/1-QzEOq3zPusRUW6S31_QAeSpGD8rt13UUYJrVwDKY4Q/edit?usp=sharing';
    linkSubmitVisions: link = 'https://canvas.uw.edu/courses/1371984/assignments/5389367';

    //
    // Project
    //

    assignmentDateDueProjectProposal: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-04-15').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2020-04-16').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectRelatedResearch: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-05-01').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectMilestone1: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-05-06').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2020-05-07').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectMilestone2: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-05-27').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2020-05-28').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectReport: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-06-11').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    // Link to a Canvas thread of potential project proposal ideas
    linkProjectProposalIdeas: link = 'https://canvas.uw.edu/courses/1371984/discussion_topics/5340935';
    // Link to a Canvas folder of prior project proposals
    linkProjectProposalSamples: link = 'https://canvas.uw.edu/courses/1371984/files/folder/project%20samples';
    // Link to a calendar signup for early feedback meetings
    linkProjectProposalEarlyFeedback: link = 'https://calendar.google.com/calendar/selfsched?sstoken=UUw1Q2o3dVVUcXUyfGRlZmF1bHR8NWNhYzYxNjgxNDdhMGNhYWMzMGE4OTYyOWNhOWIyZDU';
    // Link to the current CHI format to use for report submission
    linkProjectCHIFormat: link = 'https://chi2020.acm.org/authors/chi-proceedings-format/';

    // Links to submit project components
    linkSubmitProjectProposal: link = 'https://canvas.uw.edu/courses/1371984/assignments/5390906';
    linkSubmitProjectRelatedResearch: link = 'https://canvas.uw.edu/courses/1371984/assignments/5464345';
    linkSubmitProjectMilestone1: link = 'https://canvas.uw.edu/courses/1371984/assignments/5390939';
    linkSubmitProjectMilestone2: link = 'https://canvas.uw.edu/courses/1371984/assignments/5390992';
    linkSubmitProjectReport: link = 'https://canvas.uw.edu/courses/1371984/assignments/5391093';

    // Reading on paper writing
    readingWobbrockPaperWriting: Reading = {
        authorText: 'Jacob O. Wobbrock',
        title: 'Catchy Titles are Good: But Avoid Being Cute',
        publicationText: '2015',
        link: 'http://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
    };

    //
    // Statistics Lab
    //

    assignmentDateAvailableStatisticsLab: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-05-12').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueStatisticsLab: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-05-31').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkStatisticsLab: link = 'https://canvas.uw.edu/files/65010646/download?download_frd=1';
    linkSubmitStatisticsLab: link = 'https://canvas.uw.edu/courses/1371984/assignments/5390983';

    //
    // Exam
    //

    assignmentDateAvailableExam: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-06-05').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueExam: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2020-06-08').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkSubmitExam: link = 'https://canvas.uw.edu/courses/1371984/assignments/5391063';
}
