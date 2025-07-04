'use client';

import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { BookOpen, Sparkles, LogIn, AlertCircle, Globe, Mail, Lock, User, Image as ImageIcon, ChevronRight, Star, Heart, Bookmark, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ParticleProps {
  style: React.CSSProperties;
  delay: number;
}

const Particle = ({ style, delay }: ParticleProps) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-float"
    style={{ ...style, animationDelay: `${delay}ms` }}
  />
);

const images = [
  '/images/story1.jpg',
  '/images/story2.jpg',
  '/images/story3.jpg',
  '/images/story4.jpg',
];

export default function SignInPage() {
  const [randomImage, setRandomImage] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: '/' });
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
    }
  };

  return (
    <div id="webcrumbs" className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-black/80 to-red-800/20"></div>

      {/* Particle effects */}
      {[...Array(15)].map((_, i) => (
        <Particle
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
          delay={i * 100}
        />
      ))}

      <div className="relative z-10 flex flex-col lg:flex-row max-w-6xl mx-auto gap-8">
        {/* Left Section: Authentication */}
        <div className="lg:w-1/2 bg-gray-900/80 p-6 rounded-xl shadow-2xl border border-red-600/50 backdrop-blur-sm animate-slide-in-left">
          <div className="text-center mb-8">
            <LogIn className="text-red-500 text-8xl mx-auto mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300 animate-bounce-slow" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans tracking-wide">
              Join the Battle of Stories
            </h2>
            <p className="text-lg text-gray-300 font-medium opacity-90">
              Sign in to start your adventure.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center mb-8">
            <button
              onClick={() => handleSignIn('google')}
              className="group relative w-64 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-red-500/50 hover:shadow-2xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.24 10.4V14.8H16.28C16.12 15.92 15.56 16.92 14.68 17.64V20.2H17.84C19.84 18.36 21 15.76 21 12.72 21 11.92 20.92 11.16 20.76 10.44H12.24Z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 22C15.04 22 17.68 20.88 19.52 18.96L16.36 16.56C15.56 17.12 14.56 17.48 13.44 17.48 10.48 17.48 7.96 15.64 7.16 13H4.12V15.56C5.96 19.24 8.96 22 12 22Z"
                  />
                  <path
                    fill="currentColor"
                    d="M7.16 13C6.96 12.28 6.88 11.52 6.88 10.76 6.88 10 6.96 9.24 7.16 8.52V5.96H4.12C3.44 7.16 3 8.52 3 10.76 3 13 3.44 14.36 4.12 15.56L7.16 13Z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 6.52C13.28 6.52 14.44 6.96 15.36 7.88L18.12 5.08C16.24 3.36 14.08 2.52 12 2.52 8.96 2.52 6.32 3.64 4.48 5.56L7.52 8.12C8.32 6.64 10.08 6.52 12 6.52Z"
                  />
                </svg>
                Sign in with Google
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => handleSignIn('facebook')}
              className="group w-64 px-8 py-4 border-2 border-red-600 text-red-500 font-bold text-lg rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 12.07C22 6.51 17.49 2 11.93 2S1.86 6.51 1.86 12.07c0 5.02 3.67 9.17 8.45 9.93v-7.03h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.03c4.78-.76 8.45-4.91 8.45-9.93z"
                  />
                </svg>
                Sign in with Facebook
              </span>
            </button>

            <button
              onClick={() => handleSignIn('github')}
              className="group w-64 px-8 py-4 border-2 border-red-600 text-red-500 font-bold text-lg rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.5 2.28 1.07 2.84.81.09-.64.35-1.07.62-1.32-2.17-.25-4.45-1.09-4.45-4.84 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.24.1-2.59 0 0 .82-.26 2.68.99a9.28 9.28 0 0 1 4.86 0c1.86-1.25 2.67-.99 2.67-.99.53 1.35.2 2.34.1 2.59.62.68 1 1.55 1 2.62 0 3.76-2.28 4.59-4.46 4.83.35.3.66.9.66 1.81v2.69c0 .27.16.58.67.5A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                  />
                </svg>
                Sign in with GitHub
              </span>
            </button>
          </div>

          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="text-red-500 w-6 h-6 animate-spin-slow" />
            Authentication Preferences
          </h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="w-5 h-5 accent-red-600"
              />
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500 animate-pulse" />
                Enable Email Notifications
              </span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
                className="w-5 h-5 accent-red-600"
              />
              <span className="flex items-center gap-2">
                <User className="w-5 h-5 text-red-500 animate-pulse" />
                Enable Two-Factor Authentication
              </span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-5 h-5 accent-red-600"
              />
              <span className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-red-500 animate-pulse" />
                Remember Me
              </span>
            </label>
          </div>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-lg animate-pulse">
            <BookOpen className="w-5 h-5" />
            Back to Library
          </Link>
        </div>

        {/* Right Section: Random Image, Heading, Paragraph, and Details */}
        <div className="lg:w-1/2 bg-gray-900/80 p-6 rounded-xl shadow-2xl border border-red-600/50 backdrop-blur-sm animate-slide-in-right">
          <div className="relative mb-6">
            {randomImage ? (
              <img
                src={randomImage}
                alt="Random Story Image"
                className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <ImageIcon className="text-red-500 w-12 h-12 animate-pulse" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Star className="text-red-500 w-6 h-6 animate-spin-slow" />
            Explore Our Epic Library
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Embark on a journey through a vast collection of stories, from timeless myths to modern adventures. Join our community to discover, save, and share tales that inspire.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span>Curated collections updated weekly</span>
            </li>
            <li className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-red-500 animate-pulse" />
              <span>Bookmark your favorite stories</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-red-500 animate-pulse" />
              <span>Access from anywhere, anytime</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-red-500 animate-pulse" />
              <span>Exclusive member-only content</span>
            </li>
          </ul>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-lg animate-pulse">
            Learn More <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Sparkles className="text-red-500 text-8xl transform -rotate-12 animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <BookOpen className="text-red-600 text-6xl transform rotate-12 animate-bounce-slow" />
      </div>
      <div className="absolute top-1/2 left-5 opacity-5">
        <AlertCircle className="text-red-700 text-9xl animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-5">
        <ArrowRight className="text-red-800 text-7xl transform rotate-45 animate-pulse" />
      </div>

      <div className="flex justify-center space-x-8 opacity-60 mt-8 absolute bottom-8">
        <div className="w-2 h-2 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gradient-to-br from-red-500 to-red-700 rounded-full animate-pulse delay-150"></div>
        <div className="w-2 h-2 bg-gradient-to-br from-red-600 to-red-800 rounded-full animate-pulse delay-300"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}