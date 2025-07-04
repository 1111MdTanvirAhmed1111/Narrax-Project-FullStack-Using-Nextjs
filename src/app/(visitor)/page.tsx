'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Skull, Smile, Frown, Heart, Trophy, PenSquare, Swords, Vote } from 'lucide-react';
import Link from 'next/link';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Metadata for SEO


// Data arrays for mapping
const categories = [
  { icon: Skull, name: 'Horror', snippets: ['The shadow moved behind her...', 'Nobody heard her scream...'], progress: 75 },
  { icon: Smile, name: 'Funny', snippets: ['The cat owned the human...', 'Monday morning disasters...'], progress: 50 },
  { icon: Frown, name: 'Sad', snippets: ['The last goodbye...', 'Empty chair at dinner...'], progress: 66 },
  { icon: Heart, name: 'Romantic', snippets: ['First dance under stars...', 'Love letter found...'], progress: 80 },
];

const liveBattles = [
  { title: 'The Last Train Home', snippets: ['The platform was empty except for...', 'She checked her watch one last time...'], votes: 1247 },
  { title: 'Midnight Encounter', snippets: ['The streetlight flickered as he approached...', 'Something wasn\'t right about the silence...'], votes: 892 },
  { title: 'Digital Hearts', snippets: ['The notification pinged at 3 AM...', 'She typed and deleted the message...'], votes: 2103 },
];

const hallOfFame = [
  { icon: Trophy, title: 'Horror King', wins: 47, badges: ['Master', 'Champion'], color: 'yellow-400' },
  { icon: Trophy, title: 'Sad Slayer', wins: 32, badges: ['Expert', 'Emotional'], color: 'gray-300' },
  { icon: Trophy, title: 'Love Scribe', wins: 28, badges: ['Pro', 'Romantic'], color: 'amber-400' },
];

const howItWorks = [
  { icon: PenSquare, title: 'Write a Story', description: 'Create your compelling narrative in any emotion category' },
  { icon: Swords, title: 'Join a Battle', description: 'Face off against another storyteller in epic duels' },
  { icon: Vote, title: 'Let Audience Vote', description: 'Readers decide the winner through emotional impact' },
];

const footerLinks = {
  Battle: ['Create Battle', 'Join Battle', 'Browse Stories'],
  Community: ['Leaderboard', 'Rules', 'FAQ'],
  Support: ['About', 'Contact', 'Help'],
};

// Components
const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-purple-900/30" />
    <div className="relative z-10 text-center px-8 max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        Where Stories Collide.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
        And Emotions Decide.
      </h2>
      <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light">
        Read. Feel. Vote. Let the best story win.
      </p>
      <Link href="/battles">
        <button className="group bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-red-500/50">
          <BookOpen className="inline-block mr-2 group-hover:animate-bounce" />
          Explore Battles
        </button>
      </Link>
    </div>
    <div className="absolute top-20 left-20 w-64 h-40 bg-gradient-to-br from-red-900/20 to-purple-900/20 rounded-lg transform rotate-12 animate-float opacity-50" />
    <div className="absolute bottom-20 right-20 w-56 h-36 bg-gradient-to-br from-purple-800/20 to-red-800/20 rounded-lg transform -rotate-12 animate-float opacity-50" />
  </section>
);

const CategoryCard = ({ icon: Icon, name, snippets, progress }: { icon: any, name: string, snippets: string[], progress: number }) => (
  <div className="bg-gray-900 rounded-lg p-6 border border-red-900/30 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group">
    <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 flex items-center">
      <Icon className="mr-2 group-hover:animate-spin" /> {name}
    </h4>
    <div className="space-y-3">
      {snippets.map((snippet, index) => (
        <div key={index} className="text-sm text-gray-400 bg-black/50 p-3 rounded group-hover:blur-none transition-all duration-500 group-hover:scale-105">
          {snippet}
        </div>
      ))}
    </div>
    <div className="mt-4 bg-gray-800 rounded-full h-2 overflow-hidden">
      <div className="bg-gradient-to-r from-red-500 to-purple-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
    </div>
    <button className="w-full mt-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white py-2 rounded transition-all duration-300 transform hover:scale-105">
      Vote Now
    </button>
  </div>
);

const BattleCard = ({ title, snippets, votes }: { title: string, snippets: string[], votes: number }) => (
  <div className="bg-black border border-red-900/50 rounded-lg p-6 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105">
    <h4 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">{title}</h4>
    <div className="space-y-4">
      {snippets.map((snippet, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded group-hover:blur-none transition-all duration-500">
          <p className="text-sm text-gray-300">{snippet}</p>
        </div>
      ))}
    </div>
    <div className="mt-6 flex justify-between">
      <button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-4 py-2 rounded transition-all duration-300">
        Story A
      </button>
      <button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-4 py-2 rounded transition-all duration-300">
        Story B
      </button>
    </div>
    <div className="mt-4 text-center text-sm text-gray-400 flex items-center justify-center">
      <Vote className="mr-1 animate-pulse" /> {votes.toLocaleString()} votes
    </div>
  </div>
);

const FameCard = ({ icon: Icon, title, wins, badges, color }: { icon: any, title: string, wins: number, badges: string[], color: string }) => (
  <div className={`bg-gradient-to-br from-${color}/20 to-red-900/20 border border-${color}/30 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-${color}/30`}>
    <Icon className={`text-4xl mb-4 text-${color} animate-bounce`} />
    <h4 className={`text-xl font-bold mb-2 text-${color}`}>{title}</h4>
    <p className="text-gray-300 mb-2">{wins} Battle Wins</p>
    <div className="flex justify-center space-x-2">
      {badges.map((badge, index) => (
        <span key={index} className={`bg-gradient-to-r from-red-600 to-purple-600 text-white px-2 py-1 rounded text-xs transition-all duration-300 hover:scale-110`}>{badge}</span>
      ))}
    </div>
  </div>
);

const HowItWorksCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="text-center transform transition-all duration-500 hover:scale-105">
    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="text-white text-2xl animate-pulse" />
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FooterLinkGroup = ({ title, links }: { title: string, links: string[] }) => (
  <div>
    <h5 className="text-white font-bold mb-4">{title}</h5>
    <ul className="space-y-2 text-sm text-gray-400">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-400 transition-colors duration-300 hover:underline">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Main Component
export default function Home() {
  useEffect(() => {
    // GSAP Scroll Animations
    gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.utils.toArray<HTMLElement>('.animate-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div className="w-full bg-black text-white font-sans">
      <HeroSection />
      
      <section className="px-8 py-16 animate-section">
        <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">Battle Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="animate-card">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-gradient-to-b from-gray-900/30 to-black animate-section">
        <h3  className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">Live Story Battles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveBattles.map((battle, index) => (
            <div key={index} className="animate-card">
              <BattleCard {...battle} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 animate-section">
        <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">Hall of Fame</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hallOfFame.map((fame, index) => (
            <div key={index} className="animate-card">
              <FameCard {...fame} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-gradient-to-b from-gray-900/30 to-black animate-section">
        <h3 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="animate-card">
              <HowItWorksCard {...step} />
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black border-t border-red-900/30 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/battles">
              <button className="group bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50">
                <Swords className="inline-block mr-2 group-hover:animate-bounce" />
                Start Your First Battle
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 font-bold mb-4">NARRAX</h5>
              <p className="text-gray-400 text-sm">_where stories collide and emotions decide the winner.</p>
            </div>
            {Object.entries(footerLinks).map(([title, links], index) => (
              <FooterLinkGroup key={index} title={title} links={links} />
            ))}
          </div>

          <div className="border-t border-red-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 NARRAX. All rights reserved.</p>
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'Instagram', 'Discord'].map((social, index) => (
                <Link key={index} href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <i className={`fa-brands fa-${social.toLowerCase()} text-xl`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}