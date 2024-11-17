export default function Loading() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12 animate-pulse'>
      {/* 헤더 스켈레톤 */}
      <div className='mb-12'>
        <div className='h-8 bg-gray-200 rounded w-3/4 mb-4' />
        <div className='flex gap-4'>
          <div className='h-4 bg-gray-200 rounded w-24' />
          <div className='h-4 bg-gray-200 rounded w-32' />
        </div>
      </div>

      {/* 콘텐츠 스켈레톤 */}
      <div className='space-y-4'>
        <div className='h-4 bg-gray-200 rounded w-full' />
        <div className='h-4 bg-gray-200 rounded w-5/6' />
        <div className='h-4 bg-gray-200 rounded w-4/6' />
      </div>
    </div>
  );
}
