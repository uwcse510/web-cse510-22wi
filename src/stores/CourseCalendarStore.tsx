import * as React from 'react';

import { ReactElement } from 'react';

import { DateTime } from 'luxon';

import { Reading } from '../types/Reading';

// import ContentAvailableExam from '../content/calendar/AvailableExam.mdx';
// import ContentCHI2020 from '../content/calendar/CHI2020.mdx';
import ContentContributionsInHCI from '../content/calendar/ContributionsInHCI.mdx';
// import ContentDueExam from '../content/calendar/DueExam.mdx';
// import ContentDueProjectFinalReport from '../content/calendar/DueProjectFinalReport.mdx';
// import ContentDueStatisticsLab from '../content/calendar/DueStatisticsLab.mdx';
// import ContentExperimentalDesignAndAnalysis from '../content/calendar/ExperimentalDesignAndAnalysis.mdx';
import ContentNoReading from '../content/calendar/NoReading.mdx';
// import ContentProjectMilestone from '../content/calendar/ProjectMilestone.mdx';
// import ContentProjectProposal from '../content/calendar/ProjectProposal.mdx';
import ContentVisionsOfHCI from '../content/calendar/VisionsOfHCI.mdx';

type CalendarDateBase = {
    date: DateTime,
    dateTitle?: string,
    virtual?: boolean,
    awayJames?: boolean,
    guest?: {
        name: string,
        link: string,
    }
    additionalResources?: Reading[],
}

type CalendarDateContentStandard = CalendarDateBase & {
    readingsStandard: {
        framing: Reading,
        instances: Reading[],
    }
}

type CalendarDateContentNonstandard = CalendarDateBase & {
    contentNonstandard: ReactElement,
}

export type CalendarDate = CalendarDateBase | CalendarDateContentStandard | CalendarDateContentNonstandard;

export class CourseCalendarStore {
    calendarDates: CalendarDate[] = [
        //
        // Week 1
        //
        {
            date: DateTime.fromISO('2022-01-04'),
            virtual: true,

            dateTitle: 'Introduction and Overview',
            contentNonstandard: <ContentNoReading />,
        },
        {
            date: DateTime.fromISO('2022-01-06'),
            virtual: true,

            dateTitle: 'Human-Computer Interaction History',
            contentNonstandard: <ContentNoReading />,
            additionalResources: [
                {
                    authorText: 'Jonathan Grudin',
                    title: 'A Moving Target - The Evolution of Human-Computer Interaction',
                    publicationText: 'Book Chapter',
                    link: 'https://canvas.uw.edu/files/85805028/download?download_frd=1'
                }
            ]
        },

        //
        // Week 2
        //
        {
            date: DateTime.fromISO('2022-01-11'),

            dateTitle: 'Visions of Human-Computer Interaction',
            contentNonstandard: <ContentVisionsOfHCI readings={
                [
                    {
                        authorText: 'Vannevar Bush',
                        title: 'As We May Think',
                        publicationText: 'The Atlantic, 1945',
                        link: 'https://theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/'
                    },
                    {
                        authorText: 'Mark Weiser',
                        title: 'The Computer for the 21st Century',
                        publicationText: 'Scientific American, 1991',
                        link: 'https://canvas.uw.edu/files/85803917/download?download_frd=1'
                    },
                    {
                        authorText: 'Roy Want, Andy Hopper, Veronica Falcão, Jonathan Gibbons',
                        title: 'The Active Badge Location System',
                        publicationText: 'TOIS 1992',
                        link: 'https://canvas.uw.edu/files/85803915/download?download_frd=1'
                    },
                    {
                        authorText: 'James D. Hollan, Scott Stornetta',
                        title: 'Beyond Being There',
                        publicationText: 'CHI 1992',
                        link: 'https://canvas.uw.edu/files/85803912/download?download_frd=1'
                    },
                    {
                        authorText: 'Pierre Wellner',
                        title: 'Interacting with Paper on the DigitalDesk',
                        publicationText: 'CACM 1993',
                        link: 'https://canvas.uw.edu/files/85803918/download?download_frd=1'
                    },
                    {
                        authorText: 'Benjamin B. Bederson, James D. Hollan',
                        title: 'Pad++: A Zooming Graphical Interface for Exploring Alternate Interface Physics',
                        publicationText: 'UIST 1994',
                        link: 'https://canvas.uw.edu/files/85803910/download?download_frd=1'
                    },
                    {
                        authorText: 'Hiroshi Ishii, Brygg Ullmer',
                        title: 'Tangible Bits: Towards Seamless Interfaces between People, Bits and Atoms',
                        publicationText: 'CHI 1997',
                        link: 'https://canvas.uw.edu/files/85803914/download?download_frd=1'
                    },
                    {
                        authorText: 'Eric Horvitz',
                        title: 'Principles of Mixed-Initiative User Interfaces',
                        publicationText: 'CHI 1999',
                        link: 'https://canvas.uw.edu/files/85803913/download?download_frd=1'
                    },
                    {
                        authorText: 'Ken Hinckley, Jeff Pierce, Mike Sinclair, Eric Horvitz',
                        title: 'Sensing Techniques for Mobile Interaction',
                        publicationText: 'UIST 2000',
                        link: 'https://canvas.uw.edu/files/85803911/download?download_frd=1'
                    },
                    {
                        authorText: 'Claudio S. Pinhanez',
                        title: 'The Everywhere Displays Projector: A Device to Create Ubiquitous Graphical Interfaces',
                        publicationText: 'UbiComp 2001',
                        link: 'https://canvas.uw.edu/files/85804223/download?download_frd=1'
                    },
                    {
                        authorText: 'Saul Greenberg, Chester Fitchett',
                        title: 'Phidgets: Easy Development of Physical Interfaces through Physical Widgets',
                        publicationText: 'UIST 2001',
                        link: 'https://canvas.uw.edu/files/85810296/download?download_frd=1'
                    },
                    {
                        authorText: 'Roy Want, Trevor Pering, Gunner Danneels, Muthu Kumar, Murali Sundar, John Light',
                        title: 'The Personal Server: Changing the Way We Think about Ubiquitous Computing',
                        publicationText: 'UbiComp 2002',
                        link: 'https://canvas.uw.edu/files/85803916/download?download_frd=1'
                    },
                    {
                        authorText: 'Jonathan Lester, Tanzeem Choudhury, Gaetano Borriello',
                        title: 'A Practical Approach to Recognizing Physical Activities',
                        publicationText: 'Pervasive 2006',
                        link: 'https://canvas.uw.edu/files/85835094/download?download_frd=1'
                    },
                    {
                        authorText: 'Brett Victor',
                        title: 'Magic Ink: Information Software and the Graphical Interface',
                        publicationText: '2006',
                        link: 'http://worrydream.com/MagicInk/'
                    },
                ]
            }/>,
        },
        {
            date: DateTime.fromISO('2022-01-13'),

            dateTitle: 'Contributions in Human-Computer Interaction',
            contentNonstandard: <ContentContributionsInHCI readings={
                {
                    framing: {
                        authorText: 'Jacob O. Wobbrock, Julie A. Kientz',
                        title: 'Research Contributions in Human-Computer Interaction',
                        publicationText: 'Interactions, 2016',
                        link: 'https://canvas.uw.edu/files/85805207/download?download_frd=1'
                    },
                    contributions: {
                        'Empirical': [
                            {
                                authorText: 'Mohit Jain, Nirmalendu Diwakar, Manohar Swaminathan',
                                title: 'Smartphone Usage by Expert Blind Users',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445074'
                            },
                            {
                                authorText: 'Maia J Boyd, Jamar L Sullivan, Marshini Chetty, Blase Ur',
                                title: 'Understanding the Security and Privacy Advice Given to Black Lives Matter Protesters',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445061'
                            },
                            {
                                authorText: 'Sachin R Pendse, Amit Sharma, Aditya Vashistha, Munmun de Choudhury, Neha Kumar',
                                title: '"Can I Not Be Suicidal on a Sunday?": Understanding Technology-Mediated Pathways to Mental Health Support',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445410'
                            },
                        ],
                        'Artifact': [
                            {
                                authorText: 'Wolf Kienzle, Eric Whitmire, Chris Rittaler, Hrvoje Benko',
                                title: 'ElectroRing: Subtle Pinch and Touch Detection with a Ring',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445094'
                            },
                            {
                                authorText: 'Yiyue Luo, Kui Wu, Tomás Palacios, and Wojciech Matusik',
                                title: 'KnitUI: Fabricating Interactive and Sensing Textiles with Machine Knitting',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445780'
                            },
                            {
                                authorText: 'Richen Liu, Min Gao, Shunlong Ye, and Jiang Zhang',
                                title: 'IGScript: An Interaction Grammar for Scientific Data Presentation',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445535'
                            },
                        ],
                        'Methodological': [
                            {
                                authorText: 'Paweł W. Woźniak, Jakob Karolus, Florian Lang, Caroline Eckerth, Johannes Schöning, Yvonne Rogers, Jasmin Niess',
                                title: 'Creepy Technology: What Is It and How Do You Measure It?',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445299'
                            },
                            {
                                authorText: 'Jiamin Dai, Karyn Moffatt',
                                title: 'Surfacing the Voices of People with Dementia: Strategies for Effective Inclusion of Proxy Stakeholders in Qualitative Research',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445756'
                            },
                            {
                                authorText: 'Audrey Desjardins, Heidi R. Biggs',
                                title: 'Data Epics: Embarking on Literary Journeys of Home Internet of Things Data',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445241'
                            },
                        ],
                        'Theoretical': [
                            {
                                authorText: 'Emeline Brulé, Gilles Bailly',
                                title: '”Beyond 3D printers”: Understanding Long-Term Digital Fabrication Practices for the Education of Visually Impaired or Blind Youth',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445403'
                            },
                            {
                                authorText: 'Florian “Floyd” Mueller, Tim Dwyer, Sarah Goodwin, Kim Marriott, Jialin Deng, Han D. Phan, Jionghao Lin, Kun-Ting Chen, Yan Wang, Rohit Ashok Khot',
                                title: 'Data as Delight: Eating Data',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445218'
                            },
                            {
                                authorText: 'Miguel Bruns, Stijn Ossevoort, Marianne Graves Petersen',
                                title: 'Expressivity in Interaction: A Framework for Design',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445231'
                            },
                        ],
                        'Benchmark / Dataset': [
                            {
                                authorText: 'Axel Antoine, Sylvain Malacria, Nicolai Marquardt, Géry Casiez',
                                title: 'Interaction Illustration Taxonomy: Classification of Styles and Techniques for Visually Representing Interaction Scenarios',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445586'
                            }, 
                            {
                                authorText: 'Eiji Hayashi, Jaime Lien, Nicholas Gillian, Leonardo Giusti, Dave Weber, Jin Yamanaka, Lauren Bedal, Ivan Poupyrev',
                                title: 'RadarNet: Efficient Gesture Recognition Technique Utilizing a Miniature Radar Sensor',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445367'
                            },
                            {
                                authorText: 'Vinoth Pandian Sermuga Pandian, Sarah Suleri, and Prof. Dr. Matthias Jarke',
                                title: 'UISketch: A Large-Scale Dataset of UI Element Sketches',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445784'
                            },
                        ],
                        'Survey': [
                            {
                                authorText: 'Kelly Mack, Emma McDonnell, Dhruv Jain, Lucy Lu Wang, Jon E. Froehlich, Leah Findlater',
                                title: 'What Do We Mean by "Accessibility Research"?: A Literature Survey of Accessibility Papers in CHI and ASSETS from 1994 to 2019',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445412'
                            },
                            {
                                authorText: 'Cayley MacArthur, Arielle Grinberg, Daniel Harley, Mark Hancock',
                                title: 'You’re Making Me Sick: A Systematic Review of How Virtual Reality Research Considers Gender & Cybersickness',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445701'
                            },
                            {
                                authorText: 'Anjali Devakumar, Jay Modh, Bahador Saket, Eric P. S. Baumer, Munmun De Choudhury',
                                title: 'A Review on Strategies for Data Collection, Reflection, and Communication in Eating Disorder Apps',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445670'
                            },
                        ],
                        'Opinion': [
                            {
                                authorText: 'Nithya Sambasivan, Shivani Kapania, Hannah Highfill, Diana Akrong, Praveen Kumar Paritosh, Lora M Aroyo',
                                title: '"Everyone wants to do the model work, not the data work": Data Cascades in High-Stakes AI',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445518'
                            },
                            {
                                authorText: 'Sebastian Linxen, Christian Sturm, Florian Brühlmann, Vincent Cassau, Klaus Opwis, Katharina Reinecke',
                                title: 'How WEIRD is CHI?',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3445488'
                            },
                            {
                                authorText: 'Barrett Ens, Benjamin Bach, Maxime Cordeil, Ulrich Engelke, Marcos Serrano, Wesley Willett, Arnaud Prouzeau, Christoph Anthes, Wolfgang Büschel, Cody Dunne, Tim Dwyer, Jens Grubert, Jason H Haga, Nurit Kirshenbaum, Dylan Kobayashi, Tica Lin, Monsurat Olaosebikan, Fabian Pointecker, David Saffo, Nazmus Saquib, Dieter Schmalstieg, Danielle Albers Szafir, Matt Whitlock, Yalong Yang',
                                title: 'Grand Challenges in Immersive Analytics',
                                publicationText: 'CHI 2021',
                                link: 'https://dl.acm.org/doi/10.1145/3411764.3446866'
                            },
                        ],
                    }
                }
            } />,
            additionalResources: [
                {
                    authorText: 'Herbert A. Simon',
                    title: 'The Science of Design: Creating the Artificial',
                    publicationText: 'Design Issues, 1988',
                    link: 'https://canvas.uw.edu/files/85805201/download?download_frd=1'
                },
                {
                    authorText: 'Donald E. Stokes',
                    title: 'Pasteur’s Quadrant: Basic Science and Technological Innovation',
                    publicationText: 'Book Chapter, 1997',
                    link: 'https://canvas.uw.edu/files/85805202/download?download_frd=1'
                },
            ]
        },

        //
        // Week 3
        //
        {
            date: DateTime.fromISO('2022-01-18'),
            dateTitle: 'Usability Evaluation Considered Harmful',
            readingsStandard: {
                framing: {
                    authorText: 'Saul Greenberg, Bill Buxton',
                    title: 'Usability Evaluation Considered Harmful (Some of the Time)',
                    publicationText: 'CHI 2008',
                    link: 'https://canvas.uw.edu/files/85831973/download?download_frd=1'
                },
                instances: [
                    {
                        authorText: 'Dan R. Olsen, Jr',
                        title: 'Evaluating User Interface Systems Research',
                        publicationText: 'UIST 2007',
                        link: 'https://canvas.uw.edu/files/85831974/download?download_frd=1'
                    },
                    {
                        authorText: 'James Fogarty',
                        title: 'Code and Contribution in Interactive Systems Research',
                        publicationText: 'CHI 2017 Workshop on #HCI.Tools: Strategies and Best Practices for Designing, Evaluating, and Sharing Technical HCI Toolkits',
                        link: 'https://canvas.uw.edu/files/85831972/download?download_frd=1'
                    }
                ]
            }
        },
        {
            date: DateTime.fromISO('2022-01-20'),
            dateTitle: 'In-Class Finalization of Project Proposals',

            /*
            dateTitle: 'Project Proposal Presentations',
            contentNonstandard: <ContentProjectProposal />,
            */
        },

        //
        // Week 4
        //
        {
            date: DateTime.fromISO('2022-01-25'),
            dateTitle: 'Week 4 Day 1',
        },
        {
            date: DateTime.fromISO('2022-01-27'),
            dateTitle: 'Week 4 Day 2',
        },

        //
        // Week 5
        //
        {
            date: DateTime.fromISO('2022-02-01'),
            dateTitle: 'Week 5 Day 1',
        },
        {
            date: DateTime.fromISO('2022-02-03'),
            dateTitle: 'Week 5 Day 2',
        },

        //
        // Week 6
        //
        {
            date: DateTime.fromISO('2022-02-08'),
            dateTitle: 'Project Milestone 1 Presentations',
        },
        {
            date: DateTime.fromISO('2022-02-10'),
            dateTitle: 'Project Milestone 1 Presentations',

            /*
            dateTitle: 'Project Milestone Presentations',
            contentNonstandard: <ContentProjectMilestone />,
            */
        },

        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2022-02-15'),
            dateTitle: 'Week 7 Day 1',

            /*
            dateTitle: 'Experimental Design and Analysis',
            contentNonstandard: <ContentExperimentalDesignAndAnalysis />,
            */
        },
        {
            date: DateTime.fromISO('2022-02-17'),
            dateTitle: 'Week 7 Day 2',
        },

        //
        // Week 8
        //
        {
            date: DateTime.fromISO('2022-02-22'),
            dateTitle: 'Week 8 Day 1',
            awayJames: true,
        },
        {
            date: DateTime.fromISO('2022-02-24'),
            dateTitle: 'Week 8 Day 2',
            awayJames: true,
        },

        //
        // Week 9
        //
        {
            date: DateTime.fromISO('2022-03-01'),
            dateTitle: 'Project Milestone 2 Presentations',
        },
        {
            date: DateTime.fromISO('2022-03-03'),
            dateTitle: 'Project Milestone 2 Presentations',
            /*
            dateTitle: 'Project Milestone Presentations',
            contentNonstandard: <ContentProjectMilestone />,
            */
        },

        //
        // Statistics Lab
        //
        // {
        //     date: DateTime.fromISO('2020-05-31'),
        //
        //     dateTitle: 'Statistics Lab Due',
        //     contentNonstandard: <ContentDueStatisticsLab />
        // },

        //
        // Week 10
        //
        {
            date: DateTime.fromISO('2022-03-08'),
            dateTitle: 'Week 10 Day 1',
        },
        {
            date: DateTime.fromISO('2022-03-10'),
            dateTitle: 'Week 10 Day 2',
        },

        //
        // Finals Week
        //
        /*
        {
            date: DateTime.fromISO('2020-06-05'),

            dateTitle: 'Exam Available',
            contentNonstandard: <ContentAvailableExam />
        },
        {
            date: DateTime.fromISO('2020-06-08'),

            dateTitle: 'Exam Due',
            contentNonstandard: <ContentDueExam />
        },
        {
            date: DateTime.fromISO('2020-06-11'),

            dateTitle: 'Project Final Report Due',
            contentNonstandard: <ContentDueProjectFinalReport />
        },
        */
    ];
}

/*
dateTitle: 'Research Topic: Accessibility',
guest: {
    name: 'Meredith Ringle Morris',
    link: 'https://www.microsoft.com/en-us/research/people/merrie/',
},
readingsStandard: {
    framing: {
        authorText: 'Jennifer Mankoff, Gillian R. Hayes, Devva Kasnitz',
        title: 'Disability Studies as a Source of Critical Inquiry for the Field of Assistive Technology',
        publicationText: 'ASSETS 2010',
        link: 'https://canvas.uw.edu/files/63388453/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Shaun Kane, Meredith Ringel Morris, Ann Paradiso, Jon Campbell',
            title: '"At times avuncular and cantankerous, with the reflexes of a mongoose": Understanding Self-Expression through Augmentative and Alternative Communication Devices',
            publicationText: 'CSCW 2017',
            link: 'https://canvas.uw.edu/files/63388437/download?download_frd=1'
        },
        {
            authorText: 'Kyle Rector, Keith Salmon, Daniel Thornton, Neel Joshi, Meredith Ringel Morris',
            title: 'Eyes-Free Art: Exploring Proxemic Audio Interfaces For Blind and Low Vision Art Engagement',
            publicationText: 'UbiComp 2017',
            link: 'https://canvas.uw.edu/files/63388470/download?download_frd=1'
        }
    ]
}
*/

/*
dateTitle: 'Research Topic: Interactive Machine Learning',
readingsStandard: {
    framing: {
        authorText: 'Jerry Alan Fails, Dan R. Olsen',
        title: 'Interactive Machine Learning',
        publicationText: 'IUI 2003',
        link: 'https://canvas.uw.edu/files/63551836/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Hao Lü, James Fogarty, Yang Li',
            title: 'Gesture Script: Recognizing Gestures and their Structure Using Rendering Scripts and Interactively Trained Parts',
            publicationText: 'CHI 2014',
            link: 'https://canvas.uw.edu/files/63551840/download?download_frd=1'
        },
        {
            authorText: 'Saleema Amershi, Dan Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi, Penny Collisson, Jina Suh, Shamsi Iqbal, Paul N. Bennett, Kori Inkpen, Jaime Teevan, Ruth Kikin-Gil, Eric Horvitz',
            title: 'Guidelines for Human-AI Interaction',
            publicationText: 'CHI 2019',
            link: 'https://canvas.uw.edu/files/63551941/download?download_frd=1'
        }
    ]
}
*/

/*
dateTitle: 'Research Topic: Interaction and Search',
guest: {
    name: 'Adam Fourney',
    link: 'https://www.adamfourney.com/',
},
readingsStandard: {
    framing: {
        authorText: 'G. W. Furnas, T. K. Landauer, L. M. Gomez, S. T. Dumais',
        title: 'The Vocabulary Problem in Human-System Communication',
        publicationText: 'CACM, 1987',
        link: 'https://canvas.uw.edu/files/64126876/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Adam Fourney, Richard Mann, Michael Terry',
            title: 'Query-Feature Graphs: Bridging User Vocabulary and System Functionality',
            publicationText: 'UIST 2011',
            link: 'https://canvas.uw.edu/files/64126916/download?download_frd=1'
        },
        {
            authorText: 'Eytan Adar, Mira Dontcheva, Gierad Laput',
            title: 'CommandSpace: Modeling the Relationships Between Tasks, Descriptions and Features',
            publicationText: 'UIST 2014',
            link: 'https://canvas.uw.edu/files/64126918/download?download_frd=1'
        }
    ]
},
additionalResources: [
    {
        authorText: 'Don Norman',
        title: 'The Next UI Breakthrough: Command Lines',
        publicationText: 'Interactions, 2007',
        link: 'https://canvas.uw.edu/files/64126966/download?download_frd=1'
    }
]
*/

/*
dateTitle: 'Research Topic: Social Computing and CSCW',
guest: {
    name: 'Amy Zhang',
    link: 'https://homes.cs.washington.edu/~axz/',
},
readingsStandard: {
    framing: {
        authorText: 'Mark S. Ackerman',
        title: 'The Intellectual Challenge of CSCW: The Gap Between Social Requirements and Technical Feasibility',
        publicationText: 'Human-Computer Interaction, 2009',
        link: 'https://canvas.uw.edu/files/63385683/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Kaitlin Mahar, Amy X. Zhang, David Karger',
            title: 'Squadbox: A Tool to Combat Online Harassment Using Friendsourced Moderation',
            publicationText: 'CHI 2018',
            link: 'https://canvas.uw.edu/files/63385812/download?download_frd=1'
        },
        {
            authorText: 'Maurice Jakesch, Megan French, Xiao Ma, Jeffrey T. Hancock, Mor Naaman',
            title: 'AI-Mediated Communication: How the Perception that Profile Text was Written by AI Affects Trustworthiness',
            publicationText: 'CHI 2019',
            link: 'https://canvas.uw.edu/files/63385702/download?download_frd=1'
        },
    ]
}
*/

/*
dateTitle: 'Research Topic: Research through Design',
guest: {
    name: 'Audrey Desjardins',
    link: 'http://www.audreydesjardins.com/',
},
readingsStandard: {
    framing: {
        authorText: 'William Gaver',
        title: 'What Should We Expect from Research Through Design?',
        publicationText: 'CHI 2012',
        link: 'https://canvas.uw.edu/files/63386154/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'William Odom, Ron Wakkary, Youn-kyung Lim, Audrey Desjardins, Bart Hengeveld, Richard Banks',
            title: ' From Research Prototype to Research Product',
            publicationText: 'CHI 2016',
            link: 'https://canvas.uw.edu/files/63386153/download?download_frd=1'
        },
        {
            authorText: 'Jayne Wallace, Jon Rogers, Michael Shorter, Pete Thomas, Martin Skelly, Richard Cook',
            title: ' The SelfReflector: Design, IoT and the High Street',
            publicationText: 'CHI 2018',
            link: 'https://canvas.uw.edu/files/63386156/download?download_frd=1'
        },
    ]
}
*/

/*
dateTitle: 'Research Topic: Designing with Children',
guest: {
    name: 'Jason Yip',
    link: 'http://bigyipper.com/',
},
readingsStandard: {
    framing: {
        authorText: 'Allison Druin',
        title: 'The Role of Children in the Design of New Technology',
        publicationText: 'Behaviour and Information Technology, 2002',
        link: 'https://canvas.uw.edu/files/63359372/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Jason C. Yip, Kiley Sobel, Caroline Pitt, Kung Jin Lee, Sijin Chen, Kari Nasu, Laura R. Pina',
            title: 'Examining Adult-Child Interactions in Intergenerational Participatory Design',
            publicationText: 'CHI 2017',
            link: 'https://canvas.uw.edu/files/63359373/download?download_frd=1'
        },
        {
            authorText: 'Julia Woodward, Zari McFadden, Nicole Shiver, Amir Ben-hayon, Jason C. Yip, Lisa Anthony',
            title: 'Using Co-Design to Examine How Children Conceptualize Intelligent Interfaces',
            publicationText: 'CHI 2018',
            link: 'https://canvas.uw.edu/files/63359371/download?download_frd=1'
        }
    ]
}
*/

/*
dateTitle: 'Research Topic: Interface Toolkits',
readingsStandard: {
    framing: {
        authorText: 'Brad Myers, Scott E. Hudson, Randy Pausch',
        title: 'Past, Present, and Future of User Interface Software Tools',
        publicationText: 'TOCHI 2000',
        link: 'https://canvas.uw.edu/files/63551706/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Michael Bostock, Vadim Ogievetsky, Jeffrey Heer',
            title: 'D3: Data-Driven Documents',
            publicationText: 'InfoVis 2011',
            link: 'https://canvas.uw.edu/files/63551708/download?download_frd=1'
        },
        {
            authorText: 'Morgan Dixon, James Fogarty',
            title: 'Prefab: Implementing Advanced Behaviors Using Pixel-Based Reverse Engineering of Interface Structure',
            publicationText: 'CHI 2010',
            link: 'https://canvas.uw.edu/files/63551703/download?download_frd=1'
        }
    ]
}
*/

/*
dateTitle: 'Research Topic: Construction Kits',
guest: {
    name: 'Andrés Monroy-Hernández',
    link: 'http://www.andresmh.com/',
},
readingsStandard: {
    framing: {
        authorText: 'Mitchel Resnick, Brian Silverman',
        title: 'Some Reflections on Designing Construction Kits for Kids',
        publicationText: 'IDC 2005',
        link: 'https://canvas.uw.edu/files/63876804/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Sayamindu Dasgupta, Benjamin Mako Hill',
            title: 'How “Wide Walls” Can Increase Engagement: Evidence From a Natural Experiment in Scratch',
            publicationText: 'CHI 2018',
            link: 'https://canvas.uw.edu/files/63876803/download?download_frd=1'
        },
        {
            authorText: 'Anhong Guo, Ilter Canberk, Hannah Murphy, Andrés Monroy-Hernández, Rajan Vaish',
            title: 'Blocks: Collaborative and Persistent Augmented Reality Experiences',
            publicationText: 'IMWUT, 2019',
            link: 'https://canvas.uw.edu/files/63876805/download?download_frd=1'
        },
    ]
}
*/

/*
dateTitle: 'Research Topic: Design Tools',
readingsStandard: {
    framing: {
        authorText: 'Mark W. Newman, James Lin, Jason I. Hong, James A. Landay',
        title: 'DENIM: An Informal Web Site Design Tool Inspired by Observations of Practice',
        publicationText: 'HCI, 2003',
        link: 'https://canvas.uw.edu/files/63552021/download?download_frd=1'
    },
    instances: [
        {
            authorText: 'Steven P. Dow, Alana Glassco, Jonathan Kass, Melissa Schwarz, Daniel L. Schwartz, Scott R. Klemmer',
            title: 'Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy',
            publicationText: 'TOCHI, 2010',
            link: 'https://canvas.uw.edu/files/63552018/download?download_frd=1'
        },
        {
            authorText: 'Stefanie Mueller, Sangha Im, Serafima Gurevich, Alexander Teibrich, Lisa Pfisterer, François Guimbretière, Patrick Baudisch',
            title: 'WirePrint: 3D Printed Previews for Fast Prototyping',
            publicationText: 'UIST 2014',
            link: 'https://canvas.uw.edu/files/63562229/download?download_frd=1'
        }
    ]
}
*/
