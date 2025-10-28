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

    const newHeadings = elements
      .map((el, index) => {
        const text = el.textContent || '';
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '') // 특수문자 제거
          .replace(/\s+/g, '-') // 공백 -> 하이픈
          .trim();

        // 실제 DOM에 id가 없으면 설정
        if (!el.id) {
          el.id = id;
        }

        return {
          id: el.id,
          key: `${el.id}-${index}`,
          text: text,
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
        className='fixed bottom-5 right-4 z-50 rounded-full bg-blue-500 p-2 text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-600 md:bottom-4'
      >
        <MdToc size={30} />
      </button>
      {isOpen && (
        <div className='animate-fade-down fixed bottom-28 right-[1px] z-50 max-h-[80vh] overflow-y-auto rounded-xl border-gray-300 bg-blue-400/70 p-4 text-sm font-bold text-white dark:border-gray-700 dark:bg-blue-950/70 md:bottom-24'>
          <p className='mb-2 border-b border-gray-400 pb-1 text-center font-bold'>📚 목차</p>
          <ul className='flex max-w-[190px] flex-col items-center space-y-3'>
            {headings.map((heading) => {
              const itemClass = `w-full border-b border-gray-500 pb-2 text-center ${heading.level > 1 ? 'pl-4' : ''}`;
              return (
                <li key={heading.key} className={itemClass}>
                  <a
                    href={`#${heading.id}`}
                    className='hover:underline'
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(heading.id);
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
