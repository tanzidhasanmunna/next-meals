import React from 'react'
import { Playwrite_ES_Deco } from 'next/font/google'; 

const playwriteEsDeco = Playwrite_ES_Deco({
  subsets: ["latin"],
});

const getTime = async () => {
  // const response = await fetch("http://localhost:3000/time", {cache: 'no-store'});
  const response = await fetch("http://localhost:3000/time", {next: {revalidate: 5}});
  const data = await response.json();
  return data.currentTime;
}
export const metadata = {
    title: "About",
    description: "This is the page that will give us the About directive",
    keywords: ['about', 'about Page']
  };
export default async function AboutPage() {
  const currentTime = await getTime();
  return (
    <div className={playwriteEsDeco.className}>
      <h2 className='text-center font-bold text-blue-600'>About Page</h2>
      <p>Current Time: {currentTime}</p>
    </div>
  )
}

