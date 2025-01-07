export default function Loading() {
  return (
    <div className='mx-auto max-w-4xl animate-pulse px-4 py-12'>
      {/* 헤더 스켈레톤 */}
      <div className='mb-12'>
        <div className='mb-4 h-8 w-3/4 rounded bg-gray-200' />
        <div className='flex gap-4'>
          <div className='h-4 w-24 rounded bg-gray-200' />
          <div className='h-4 w-32 rounded bg-gray-200' />
        </div>
      </div>

      {/* 콘텐츠 스켈레톤 */}
      <div className='space-y-4'>
        <div className='h-4 w-full rounded bg-gray-200' />
        <div className='h-4 w-5/6 rounded bg-gray-200' />
        <div className='h-4 w-4/6 rounded bg-gray-200' />
      </div>
    </div>
  );
}
