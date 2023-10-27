'use client';
import { Card } from 'ahmad/components/Card';
import { Hero } from 'ahmad/components/Hero';
import { Navbar } from 'ahmad/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  return (
    <>
      <main className="bg-[#F4F4F4] flex h-full md:h-screen">
        <div className="w-full">
          <Navbar onSearch={handleSearch} />
          <Hero />
          <Card searchQuery={searchQuery} />
        </div>
      </main>
    </>
  );
}
