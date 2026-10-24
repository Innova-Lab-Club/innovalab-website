import { IconName } from '../shared/icon.component';

/*
 * All website content lives here.
 * Items marked TODO are placeholders: replace them with the club's real data.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Value {
  icon: IconName;
  title: string;
  text: string;
}

export interface FocusArea {
  icon: IconName;
  title: string;
  subtitle: string;
  text: string;
  topics: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: 'Live' | 'In progress' | 'Prototype';
  icon: IconName;
  accent: string;
  link?: string;
}

export interface Program {
  icon: IconName;
  cadence: string;
  title: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  linkedin?: string;
  github?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const CLUB_NAME = 'Innova’Lab';
export const CLUB_EMAIL = 'innovalab.club@gmail.com'; // TODO: real club email
export const FOUNDED_YEAR = 2024;

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' }
];

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' }, // TODO: club Instagram URL
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' }, // TODO: club Facebook URL
  { label: 'GitHub', href: 'https://github.com/Innova-Lab-Club', icon: 'github' }
];

export const marqueeTopics: string[] = [
  'Web Development', 'Artificial Intelligence', 'Robotics', 'IoT', 'UI/UX Design',
  'Hackathons', 'Open Source', 'Embedded Systems', 'Mobile Apps'
];

// TODO: replace with the club's real numbers
export const stats: Stat[] = [
  { value: 30, suffix: '+', label: 'Active members' },
  { value: 10, suffix: '+', label: 'Workshops hosted' },
  { value: 8, label: 'Projects built' },
  { value: new Date().getFullYear() - FOUNDED_YEAR, suffix: ' yrs', label: 'Of building together' }
];

export const values: Value[] = [
  { icon: 'spark', title: 'Stay curious', text: 'Question the obvious and make room for new perspectives.' },
  { icon: 'users', title: 'Build together', text: 'Share your skills, learn from others, and make ideas stronger.' },
  { icon: 'rocket', title: 'Make it real', text: 'Move from a first thought to a useful, tangible result.' }
];

export const focusAreas: FocusArea[] = [
  {
    icon: 'bulb',
    title: 'Innover',
    subtitle: 'Think differently',
    text: 'Explore real problems around campus and beyond. Brainstorm, prototype on paper, and pitch ideas in friendly challenges.',
    topics: ['Design thinking', 'Hackathons', 'Pitching']
  },
  {
    icon: 'code',
    title: 'Programmer',
    subtitle: 'Learn by coding',
    text: 'From your first website to AI models: hands-on sessions where you write real code with people who help you get unstuck.',
    topics: ['Web', 'Python & AI', 'Git & GitHub']
  },
  {
    icon: 'cpu',
    title: 'Créer',
    subtitle: 'Ship something real',
    text: 'Turn ideas into working things: apps, robots, connected devices. Projects you can show, share, and be proud of.',
    topics: ['Robotics', 'IoT', 'Arduino']
  }
];

// TODO: replace with the club's real projects
export const projects: Project[] = [
  {
    title: 'InnoBot',
    description: 'The club mascot brought to life: a small Arduino robot that greets visitors at events.',
    tags: ['Arduino', 'C++', '3D print'],
    status: 'Prototype',
    icon: 'bot',
    accent: 'bg-brand-blue/25'
  },
  {
    title: 'Campus Events App',
    description: 'A web app listing every club event at ISET Medenine, with reminders and registration.',
    tags: ['Angular', 'Firebase'],
    status: 'In progress',
    icon: 'calendar',
    accent: 'bg-brand-sky/15',
    link: 'https://github.com/Innova-Lab-Club'
  },
  {
    title: 'Smart Greenhouse',
    description: 'Sensors track soil moisture and temperature, then water plants automatically.',
    tags: ['ESP32', 'IoT', 'MQTT'],
    status: 'Prototype',
    icon: 'leaf',
    accent: 'bg-brand-deep/40'
  },
  {
    title: 'Study Buddy AI',
    description: 'A chatbot that turns course notes into quizzes to help students revise smarter.',
    tags: ['Python', 'LLMs', 'Streamlit'],
    status: 'In progress',
    icon: 'brain',
    accent: 'bg-brand-ice/10'
  },
  {
    title: 'Innova’Lab Website',
    description: 'This site! Built and maintained by club members as an open-source project.',
    tags: ['Angular', 'Tailwind'],
    status: 'Live',
    icon: 'globe',
    accent: 'bg-brand-blue/25',
    link: 'https://github.com/Innova-Lab-Club'
  }
];

export const programs: Program[] = [
  { icon: 'terminal', cadence: 'Weekly', title: 'Hands-on workshops', text: 'Practical sessions on web, AI, electronics and design. Bring a laptop, leave with something built.' },
  { icon: 'layers', cadence: 'Every semester', title: 'Team projects', text: 'Join a small team, pick a real problem, and ship a project from idea to demo day.' },
  { icon: 'trophy', cadence: 'Throughout the year', title: 'Hackathons & challenges', text: 'Compete in internal challenges and represent ISET Medenine in national competitions.' },
  { icon: 'chat', cadence: 'Monthly', title: 'Open meetups & talks', text: 'Guest speakers, alumni stories, and open discussions to meet your next teammate.' }
];

// TODO: replace with the real board members (add `photo: 'team/name.jpg'` once photos are in /public/team)
export const team: TeamMember[] = [
  { name: 'Member Name', role: 'President', initials: 'PR' },
  { name: 'Member Name', role: 'Vice President', initials: 'VP' },
  { name: 'Member Name', role: 'General Secretary', initials: 'GS' },
  { name: 'Member Name', role: 'Treasurer', initials: 'TR' },
  { name: 'Member Name', role: 'Tech Lead', initials: 'TL' },
  { name: 'Member Name', role: 'Media & Design Lead', initials: 'MD' }
];

export const faqs: Faq[] = [
  {
    question: 'Who can join Innova’Lab?',
    answer: 'Any student at ISET Medenine, from any department or year. Curiosity is the only requirement.'
  },
  {
    question: 'Do I need programming experience?',
    answer: 'Not at all. Many members wrote their first line of code at the club. Workshops are designed for beginners, with tracks for those who want to go further.'
  },
  {
    question: 'Is membership free?',
    answer: 'Yes. Joining the club and attending workshops is free for ISET Medenine students.'
  },
  {
    question: 'How much time do I need to commit?',
    answer: 'As much as you want. Come to a workshop when you can, or join a project team for a semester if you want to go deeper.'
  },
  {
    question: 'Can I propose my own project or workshop?',
    answer: 'Absolutely, and we encourage it. Pitch your idea at a meetup or through the form below, and we will help you find teammates and resources.'
  },
  {
    question: 'How do I stay updated on events?',
    answer: 'Follow us on Instagram and Facebook. We post every workshop, meetup and hackathon there first.'
  }
];

export const fieldsOfStudy: string[] = [
  'Information Technology', 'Electrical Engineering', 'Mechanical Engineering',
  'Process Engineering', 'Business & Management', 'Other'
];

export const interestOptions: string[] = [
  'Web dev', 'AI / Data', 'Robotics', 'IoT / Electronics', 'Design', 'Mobile apps', 'Organizing events'
];
