'use client';
import Image from 'next/image';
import React from 'react';
import { getData } from 'ahmad/lib/getData';
import { useState, useEffect } from 'react';

export const Card = ({ searchQuery }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  const filteredData = data.filter((item: any) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6 mt-40 mx-6 justify-center ">
      {filteredData?.map((item: any, index: number) => (
        <div className="bg-white w-80" key={index}>
          <Image className="w-full h-[200px]" src={item?.img} width={240} height={240} alt="Image" />
          <div className="p-6 ">
            <div className="flex items-center gap-4">
              <h2 className="font-play font-medium text-xl">{item?.title}</h2>
              <div className="h-4 w-[2px] bg-[#F4F4F4]"></div>
              <p className="text-xs">128 PHOTOS</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
