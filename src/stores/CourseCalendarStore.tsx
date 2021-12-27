import * as React from 'react';

import { ReactElement } from 'react';

import { DateTime } from 'luxon';

import { Reading } from '../types/Reading';

import ContentAvailableExam from '../content/calendar/AvailableExam.mdx';
import ContentCHI2020 from '../content/calendar/CHI2020.mdx';
import ContentContributionsInHCI from '../content/calendar/ContributionsInHCI.mdx';
import ContentDueExam from '../content/calendar/DueExam.mdx';
import ContentDueProjectFinalReport from '../content/calendar/DueProjectFinalReport.mdx';
import ContentDueStatisticsLab from '../content/calendar/DueStatisticsLab.mdx';
import ContentExperimentalDesignAndAnalysis from '../content/calendar/ExperimentalDesignAndAnalysis.mdx';
import ContentNoReading from '../content/calendar/NoReading.mdx';
import ContentProjectMilestone from '../content/calendar/ProjectMilestone.mdx';
import ContentProjectProposal from '../content/calendar/ProjectProposal.mdx';
import ContentVisionsOfHCI from '../content/calendar/VisionsOfHCI.mdx';

type CalendarDateBase = {
    date: DateTime,
    dateTitle: string,
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
            date: DateTime.fromISO('2020-03-31'),

            dateTitle: 'Introduction and Overview',
            contentNonstandard: <ContentNoReading />,
        },
        {
            date: DateTime.fromISO('2020-04-02'),

            dateTitle: 'Human-Computer Interaction History',
            contentNonstandard: <ContentNoReading />,
            additionalResources: [
                {
                    authorText: 'Jonathan Grudin',
                    title: 'A Moving Target - The Evolution of Human-Computer Interaction',
                    publicationText: 'Book Chapter',
                    link: 'https://canvas.uw.edu/files/63194617/download?download_frd=1'
                }
            ]
        },
        //
        // Week 2
        //
        {
            date: DateTime.fromISO('2020-04-07'),

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
                        link: 'https://canvas.uw.edu/files/63210288/download?download_frd=1'
                    },
                    {
                        authorText: 'Roy Want, Andy Hopper, Veronica Falcão, Jonathan Gibbons',
                        title: 'The Active Badge Location System',
                        publicationText: 'TOIS 1992',
                        link: 'https://canvas.uw.edu/files/63210285/download?download_frd=1'
                    },
                    {
                        authorText: 'James D. Hollan, Scott Stornetta',
                        title: 'Beyond Being There',
                        publicationText: 'CHI 1992',
                        link: 'https://canvas.uw.edu/files/63210295/download?download_frd=1'
                    },
                    {
                        authorText: 'Pierre Wellner',
                        title: 'Interacting with Paper on the DigitalDesk',
                        publicationText: 'CACM 1993',
                        link: 'https://canvas.uw.edu/files/63210290/download?download_frd=1'
                    },
                    {
                        authorText: 'Benjamin B. Bederson, James D. Hollan',
                        title: 'Pad++: A Zooming Graphical Interface for Exploring Alternate Interface Physics',
                        publicationText: 'UIST 1994',
                        link: 'https://canvas.uw.edu/files/63210292/download?download_frd=1'
                    },
                    {
                        authorText: 'Hiroshi Ishii, Brygg Ullmer',
                        title: 'Tangible Bits: Towards Seamless Interfaces between People, Bits and Atoms',
                        publicationText: 'CHI 1997',
                        link: 'https://canvas.uw.edu/files/63210298/download?download_frd=1'
                    },
                    {
                        authorText: 'Eric Horvitz',
                        title: 'Principles of Mixed-Initiative User Interfaces',
                        publicationText: 'CHI 1999',
                        link: 'https://canvas.uw.edu/files/63210296/download?download_frd=1'
                    },
                    {
                        authorText: 'Ken Hinckley, Jeff Pierce, Mike Sinclair, Eric Horvitz',
                        title: 'Sensing Techniques for Mobile Interaction',
                        publicationText: 'UIST 2000',
                        link: 'https://canvas.uw.edu/files/63210294/download?download_frd=1'
                    },
                    {
                        authorText: 'Claudio S. Pinhanez',
                        title: 'The Everywhere Displays Projector: A Device to Create Ubiquitous Graphical Interfaces',
                        publicationText: 'UbiComp 2001',
                        link: 'https://canvas.uw.edu/files/63210283/download?download_frd=1'
                    },
                    {
                        authorText: 'Roy Want, Trevor Pering, Gunner Danneels, Muthu Kumar, Murali Sundar, John Light',
                        title: 'The Personal Server: Changing the Way We Think about Ubiquitous Computing',
                        publicationText: 'UbiComp 2002',
                        link: 'https://canvas.uw.edu/files/63210286/download?download_frd=1'
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
            date: DateTime.fromISO('2020-04-09'),

            dateTitle: 'Contributions in Human-Computer Interaction',
            contentNonstandard: <ContentContributionsInHCI readings={
                {
                    framing: {
                        authorText: 'Jacob O. Wobbrock, Julie A. Kientz',
                        title: 'Research Contributions in Human-Computer Interaction',
                        publicationText: 'Interactions, 2016',
                        link: 'https://canvas.uw.edu/files/63210322/download?download_frd=1'
                    },
                    contributions: {
                        'Empirical': [
                            {
                                authorText: 'Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Laura Sanely Gaytán-Lugo, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo',
                                title: '"They don’t leave us alone anywhere we go": Gender and Digital Abuse in South Asia',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300232'
                            },
                            {
                                authorText: 'John Harris, Mark Hancock',
                                title: 'To Asymmetry and Beyond!: Improving Social Connectedness by Increasing Designed Interdependence in Cooperative Play',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300239'
                            },
                            {
                                authorText: 'Tawanna Dillahunt, Sylvia Simioni, Xuecong Xu',
                                title: 'Online Grocery Delivery Services: An Opportunity to Address Food Disparities in Transportation-scarce Areas',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300879'
                            },
                        ],
                        'Artifact': [
                            {
                                authorText: 'Jotaro Shigeyama, Takeru Hashimoto, Shigeo Yoshida, Takuji Narumi, Tomohiro Tanikawa, Michitaka Hirose',
                                title: 'Transcalibur: A Weight Shifting Virtual Reality Controller for 2D Shape Rendering based on Computational Perception Model',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300241'
                            },
                            {
                                authorText: 'Carrie J Cai, Emily Reif, Narayan Hegde, Jason Hipp, Been Kim, Daniel Smilkov, Martin Wattenberg, Fernanda Viegas, Greg S Corrado, Martin Stumpe, Michael Terry',
                                title: 'Human-Centered Tools for Coping with Imperfect Algorithms During Medical Decision-Making',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300234'
                            },
                            {
                                authorText: 'Manaswi Saha, Michael Saugstad, Hanuma Teja Maddali, Aileen Zeng, Ryan Holland, Steven Bower, Aditya Dash, Sage Chen, Anthony Li, Kotaro Hara, Jon Froehlich',
                                title: 'Project Sidewalk: A Web-based Crowdsourcing Tool for Collecting Sidewalk Accessibility Data At Scale',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300292'
                            },
                        ],
                        'Methodological': [
                            {
                                authorText: 'Alexis Hiniker, Jon Froehlich, Mingrui Ray Zhang, Erin Beneteau',
                                title: 'Anchored Audio Sampling: A Seamless Method for Exploring Children’s Thoughts During Deployment Studies',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300238'
                            },
                            {
                                authorText: 'Cara Wilson, Margot Brereton, Bernd Ploderer, Laurianne Sitbon',
                                title: 'Co-Design Beyond Words: "Moments of Interaction" with Minimally-Verbal Children on the Autism Spectrum',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300251'
                            },
                            {
                                authorText: 'Juergen Baumgartner, Naomi Frei, Mascha Kleinke, Juergen Sauer, Andreas Sonderegger',
                                title: 'Pictorial System Usability Scale (P-SUS): Developing an Instrument for Measuring Perceived Usability',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300299'
                            },
                        ],
                        'Theoretical': [
                            {
                                authorText: 'Lucas Franco Colusso, Ridley Jones, Sean A. Munson, Gary Hsieh',
                                title: 'A Translational Science Model for HCI',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300231'
                            },
                            {
                                authorText: 'Jocelyn Spence',
                                title: 'Inalienability: Understanding Digital Gifts',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300887'
                            },
                            {
                                authorText: 'Ali Alkhatib, Michael Bernstein',
                                title: 'Street-Level Algorithms: A Theory at the Gaps Between Policy and Decisions',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300760'
                            },
                        ],
                        'Benchmark / Dataset': [
                            {
                                authorText: 'Matin Yarmand, Dongwook Yoon, Samuel Dodson, Ido Roll, Sidney S Fels',
                                title: '"Can you believe [1:21]?!": Content and Time-Based Reference Patterns in Video Comments',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300719'
                            },
                            {
                                authorText: 'Radu-Daniel Vatavu, Ovidiu-Ciprian Ungurean',
                                title: 'Stroke-Gesture Input for People with Motor Impairments: Empirical Results & Research Roadmap',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300445'
                            },
                            {
                                authorText: 'Kevin Hu, Snehalkumar ‘Neil’ S. Gaikwad, Michiel Bakker, Madelon Hulsebos, Emanuel Zgraggen, César Hidalgo, Tim Kraska, Guoliang Li, Arvind Satyanarayan, Çağatay Demiralp',
                                title: 'VizNet: Towards A Large-Scale Visualization Learning and Benchmarking Repository',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300892'
                            },
                        ],
                        'Survey': [
                            {
                                authorText: 'Mehmet Aydın Baytaş, Damla Çay, Yuchong Zhang, Mohammad Obaid, Asım Evren Yantaç, Morten Fjeld',
                                title: 'The Design of Social Drones: A Review of Studies on Autonomous Flyers in Inhabited Environments',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300480'
                            },
                            {
                                authorText: 'Frederik Brudy, Christian Holz, Roman Rädle, Chi-Jui Wu, Steven Houben, Clemens Nylandsted Klokmose, Nicolai Marquardt',
                                title: 'Cross-Device Taxonomy: Survey, Opportunities and Challenges of Interactions Spanning Across Multiple Devices',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300792'
                            },
                            {
                                authorText: 'Ana Caraban, Evangelos Karapanos, Pedro Campos, Daniel Gonçalves',
                                title: '23 Ways to Nudge: A Review of Technology-Mediated Nudging in Human-Computer Interaction',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300733'
                            },
                        ],
                        'Opinion': [
                            {
                                authorText: 'Laura Devendorf, Kristina Andersen, Daniela K. Rosner, Ron Wakkary, James Pierce.',
                                title: 'From HCI to HCI-Amusement: Strategies for Engaging what New Technology Makes Old',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300265'
                            },
                            {
                                authorText: 'Sarah Inman, David Ribes',
                                title: '"Beautiful Seams": Strategic Revelations and Concealments',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300508'
                            },
                            {
                                authorText: 'Richmond Y. Wong, Deirdre Mulligan',
                                title: 'Bringing Design to the Privacy Table: Broadening "Design" in "Privacy by Design" Through the Lens of HCI',
                                publicationText: 'CHI 2019',
                                link: 'https://dl.acm.org/doi/10.1145/3290605.3300492'
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
                    link: 'https://canvas.uw.edu/files/63210319/download?download_frd=1'
                },
                {
                    authorText: 'Donald E. Stokes',
                    title: 'Pasteur’s Quadrant: Basic Science and Technological Innovation',
                    publicationText: 'Book Chapter, 1997',
                    link: 'https://canvas.uw.edu/files/63210343/download?download_frd=1'
                },
            ]
        },
        //
        // Week 3
        //
        {
            date: DateTime.fromISO('2020-04-14'),

            dateTitle: 'Usability Evaluation Considered Harmful',
            readingsStandard: {
                framing: {
                    authorText: 'Saul Greenberg, Bill Buxton',
                    title: 'Usability Evaluation Considered Harmful (Some of the Time)',
                    publicationText: 'CHI 2008',
                    link: 'https://canvas.uw.edu/files/63195019/download?download_frd=1'
                },
                instances: [
                    {
                        authorText: 'Dan R. Olsen, Jr',
                        title: 'Evaluating User Interface Systems Research',
                        publicationText: 'UIST 2007',
                        link: 'https://canvas.uw.edu/files/63195038/download?download_frd=1'
                    },
                    {
                        authorText: 'James Fogarty',
                        title: 'Code and Contribution in Interactive Systems Research',
                        publicationText: 'CHI 2017 Workshop on #HCI.Tools: Strategies and Best Practices for Designing, Evaluating, and Sharing Technical HCI Toolkits',
                        link: 'https://canvas.uw.edu/files/63195022/download?download_frd=1'
                    }
                ]
            }
        },
        {
            date: DateTime.fromISO('2020-04-16'),

            dateTitle: 'Project Proposal Presentations',
            contentNonstandard: <ContentProjectProposal />,
        },
        //
        // Week 4
        //
        {
            date: DateTime.fromISO('2020-04-21'),

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
        },
        {
            date: DateTime.fromISO('2020-04-23'),

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
        },
        //
        // Week 5
        //
        {
            date: DateTime.fromISO('2020-04-28'),

            dateTitle: 'CHI 2020 Virtual Activities',
            contentNonstandard: <ContentCHI2020 />
        },
        {
            date: DateTime.fromISO('2020-04-30'),

            dateTitle: 'CHI 2020 Virtual Activities',
            contentNonstandard: <ContentCHI2020 />
        },
        //
        // Week 6
        //
        {
            date: DateTime.fromISO('2020-05-05'),

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
        },
        {
            date: DateTime.fromISO('2020-05-07'),

            dateTitle: 'Project Milestone Presentations',
            contentNonstandard: <ContentProjectMilestone />,
        },
        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2020-05-12'),

            dateTitle: 'Experimental Design and Analysis',
            contentNonstandard: <ContentExperimentalDesignAndAnalysis />,
        },
        {
            date: DateTime.fromISO('2020-05-14'),

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
        },
        //
        // Week 8
        //
        {
            date: DateTime.fromISO('2020-05-19'),

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
        },
        {
            date: DateTime.fromISO('2020-05-21'),

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
        },
        //
        // Week 9
        //
        {
            date: DateTime.fromISO('2020-05-26'),

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
        },
        {
            date: DateTime.fromISO('2020-05-28'),

            dateTitle: 'Project Milestone Presentations',
            contentNonstandard: <ContentProjectMilestone />,
        },
        //
        // Statistics Lab
        //
        {
            date: DateTime.fromISO('2020-05-31'),

            dateTitle: 'Statistics Lab Due',
            contentNonstandard: <ContentDueStatisticsLab />
        },
        //
        // Week 10
        //
        {
            date: DateTime.fromISO('2020-06-02'),

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
        },
        {
            date: DateTime.fromISO('2020-06-04'),

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
        },
        //
        // Finals Week
        //
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
    ];
}
