export default function BlogLoading() {
  return (
    <div className='z-90 w-full animate-pulse'>
      {/* 카테고리 리스트 로딩 UI */}
      <div className='mb-8 flex flex-wrap justify-center gap-4'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='h-10 w-24 rounded-full bg-gray-200 dark:bg-gray-700' />
        ))}
      </div>

      {/* 포스트 그리드 로딩 UI */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='h-64 rounded-lg border border-gray-200 p-6 dark:border-gray-800'>
            {/* 날짜와 카테고리 플레이스홀더 */}
            <div className='mb-4 flex items-center gap-4'>
              <div className='h-4 w-24 rounded bg-gray-200 dark:bg-gray-700' />
              <div className='h-4 w-16 rounded bg-gray-200 dark:bg-gray-700' />
            </div>

            {/* 제목 플레이스홀더 */}
            <div className='mb-4 h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700' />

            {/* 작성자 플레이스홀더 */}
            <div className='mt-auto h-4 w-32 rounded bg-gray-200 dark:bg-gray-700' />
          </div>
        ))}
      </div>
    </div>
  );
}
