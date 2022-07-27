import type { NextPage } from 'next';
import React from 'react';
import ThemeChanger from '../components/themeChanger';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex text-3xl font-bold text-center gap-2">
        <h1 className="text-zinc-900 dark:text-zinc-100">Next.JS w/</h1>
        <h1 className="text-blue-500">TypeScript,</h1>
        <h1 className="text-cyan-500">TailwindCSS</h1>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Home;
