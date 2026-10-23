export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Value {
  number: string;
  title: string;
  text: string;
}

export interface FocusArea {
  number: string;
  title: string;
  text: string;
  icon: string;
  featured?: boolean;
}

export interface EventItem {
  day: string;
  month: string;
  type: string;
  title: string;
  meta: string;
}

export const navLinks: NavLink[] = [
  { label: 'Mission', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#join' }
];

export const stats: Stat[] = [
  { value: '01', label: 'shared space' },
  { value: '∞', label: 'ideas to explore' },
  { value: '03', label: 'ways to get involved' }
];

export const values: Value[] = [
  { number: '01', title: 'Stay curious', text: 'Question the obvious and make room for new perspectives.' },
  { number: '02', title: 'Build together', text: 'Share your skills, learn from others, and make ideas stronger.' },
  { number: '03', title: 'Make it real', text: 'Move from a first thought to a useful, tangible result.' }
];

export const focusAreas: FocusArea[] = [
  { number: '01', title: 'Innover', text: 'Explore problems, perspectives, and possibilities beyond the obvious.', featured: true, icon: '<svg viewBox="0 0 40 40"><path d="M20 7v7M20 26v7M7 20h7M26 20h7M11 11l5 5M24 24l5 5M29 11l-5 5M16 24l-5 5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>' },
  { number: '02', title: 'Programmer', text: 'Learn by making: experiment with code, tools, and technology.', icon: '<svg viewBox="0 0 40 40"><path d="m15 12-8 8 8 8M25 12l8 8-8 8M23 8l-6 24" fill="none" stroke="currentColor" stroke-width="2"/></svg>' },
  { number: '03', title: 'Créer', text: 'Turn a first sketch into something useful, thoughtful, and yours.', icon: '<svg viewBox="0 0 40 40"><path d="M9 28 27 10l4 4-18 18-7 1 1-5Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="m24 13 4 4" fill="none" stroke="currentColor" stroke-width="2"/></svg>' }
];

export const events: EventItem[] = [
  { day: '01', month: '01', type: 'Learn', title: 'Hands-on workshops', meta: 'Practical sessions for curious students' },
  { day: '02', month: '02', type: 'Build', title: 'Collaborative project sessions', meta: 'Bring a question, a sketch, or a half-finished idea' },
  { day: '03', month: '03', type: 'Share', title: 'Open community meetups', meta: 'Talk, exchange, and find your next teammate' }
];
