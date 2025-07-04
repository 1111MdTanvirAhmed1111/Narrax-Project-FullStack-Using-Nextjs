export const categories = [
  {
    title: 'Horror',
    icon: 'Ghost',
    snippets: ['"The shadow moved behind her..."', '"Nobody heard her scream..."'],
    progress: 3,
  },
  {
    title: 'Funny',
    icon: 'Laugh',
    snippets: ['"The cat owned the human..."', '"Monday morning disasters..."'],
    progress: 2,
  },
  {
    title: 'Sad',
    icon: 'Frown',
    snippets: ['"The last goodbye..."', '"Empty chair at dinner..."'],
    progress: 3,
  },
  {
    title: 'Romantic',
    icon: 'Heart',
    snippets: ['"First dance under stars..."', '"Love letter found..."'],
    progress: 4,
  },
];

export const battles = [
  {
    title: 'The Last Train Home',
    snippets: [
      '"The platform was empty except for..."',
      '"She checked her watch one last time..."',
    ],
    votes: 1247,
  },
  {
    title: 'Midnight Encounter',
    snippets: [
      '"The streetlight flickered as he approached..."',
      '"Something wasn\'t right about the silence..."',
    ],
    votes: 892,
  },
  {
    title: 'Digital Hearts',
    snippets: ['"The notification pinged at 3 AM..."', '"She typed and deleted the message..."'],
    votes: 2103,
  },
];

export const hallOfFame = [
  {
    emoji: '🏆',
    title: 'Horror King',
    wins: 47,
    tags: [
      { label: 'Master', color: 'red' },
      { label: 'Champion', color: 'yellow' },
    ],
  },
  {
    emoji: '🥈',
    title: 'Sad Slayer',
    wins: 32,
    tags: [
      { label: 'Expert', color: 'red' },
      { label: 'Emotional', color: 'blue' },
    ],
  },
  {
    emoji: '🥉',
    title: 'Love Scribe',
    wins: 28,
    tags: [
      { label: 'Pro', color: 'red' },
      { label: 'Romantic', color: 'pink' },
    ],
  },
];

export const howItWorks = [
  {
    icon: 'Pen',
    title: 'Write a Story',
    description: 'Create your compelling narrative in any emotion category',
  },
  {
    icon: 'Swords',
    title: 'Join a Battle',
    description: 'Face off against another storyteller in epic duels',
  },
  {
    icon: 'Vote',
    title: 'Let Audience Vote',
    description: 'Readers decide the winner through emotional impact',
  },
];

export const footerLinks = {
  battle: ['Create Battle', 'Join Battle', 'Browse Stories'],
  community: ['Leaderboard', 'Rules', 'FAQ'],
  support: ['About', 'Contact', 'Help'],
  social: [
    { icon: 'Twitter', name: 'Twitter' },
    { icon: 'Facebook', name: 'Facebook' },
    { icon: 'Instagram', name: 'Instagram' },
    { icon: 'MessageCircle', name: 'Discord' },
  ],
};