import React from 'react';

interface NewsCardProps {
  title: string;
  category: string;
  image: string;
  time: string;
  featured?: boolean;
}

export default function NewsCard({ title, category, image, time, featured = false }: NewsCardProps) {
  return (
    <article className={`relative overflow-hidden rounded-lg ${featured ? 'row-span-2 col-span-2' : ''}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-4">
          <span className="text-red-400 text-sm font-medium">{category}</span>
          <h3 className={`text-white font-bold ${featured ? 'text-2xl' : 'text-lg'} mt-1`}>
            {title}
          </h3>
          <span className="text-gray-300 text-sm mt-2 block">{time}</span>
        </div>
      </div>
    </article>
  );
}