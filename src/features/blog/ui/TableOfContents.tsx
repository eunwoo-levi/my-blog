'use client';

import { useEffect, useState } from 'react';
import { MdToc } from 'react-icons/md';

type Heading = {
  id: string;
  text: string;
  level: number;
  key: string;
};

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(true);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1')).slice(2);

    const usedIds = new Set<string>();
    const newHeadings = elements
      .map((el, index) => {
        let id = el.id || `heading-${index}`;
        // 중복 방지
        while (usedIds.has(id)) {
          id += '-dup';
        }
        usedIds.add(id);

        return {
          id,
          key: `${id}-${index}`,
          text: el.textContent || '',
          level: parseInt(el.tagName.replace('H', ''), 10),
        };
      })
      .filter((h) => h.text.trim().length > 0);

    setHeadings(newHeadings);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='z-50rounded-full fixed bottom-4 right-4 hidden rounded-full bg-blue-500 p-2 text-white shadow-md hover:bg-blue-600 md:block'
      >
        <MdToc size={30} />
      </button>
      {isOpen && (
        <div className='fixed right-[1px] top-[1/2%] z-50 hidden rounded-xl border-gray-300 bg-blue-400/70 p-4 text-sm font-bold text-white dark:border-gray-700 dark:bg-blue-950/70 md:block'>
          <p className='mb-2 border-b border-gray-400 pb-1 text-center font-bold'>📚 목차</p>
          <ul className='flex max-w-[190px] flex-col items-center space-y-3'>
            {headings.map((heading) => (
              <li
                key={heading.key}
                className={`ml-${(heading.level - 1) * 4} w-full border-b border-gray-500 pb-2 text-center`}
              >
                <a href={`#${heading.id}`} className='hover:underline'>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
