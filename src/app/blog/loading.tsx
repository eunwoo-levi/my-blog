// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className='w-full animate-pulse'>
      {/* 카테고리 리스트 로딩 UI */}
      <div className='flex flex-wrap gap-4 justify-center mb-8'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full' />
        ))}
      </div>

      {/* 포스트 그리드 로딩 UI */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='border border-gray-200 dark:border-gray-800 rounded-lg p-6 h-64'>
            {/* 날짜와 카테고리 플레이스홀더 */}
            <div className='flex items-center gap-4 mb-4'>
              <div className='h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded' />
              <div className='h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded' />
            </div>

            {/* 제목 플레이스홀더 */}
            <div className='h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4' />

            {/* 작성자 플레이스홀더 */}
            <div className='h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mt-auto' />
          </div>
        ))}
      </div>
    </div>
  );
}
