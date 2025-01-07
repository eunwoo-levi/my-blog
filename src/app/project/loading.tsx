import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className='my-10 h-[700px] w-4/5 animate-pulse rounded-lg border p-4 shadow-sm lg:h-[800px]'>
      <div className='flex w-full flex-col items-center gap-6'>
        {/* Role skeleton */}
        <div className='w-full pl-2'>
          <div className='h-8 w-1/4 rounded bg-gray-200'></div>
        </div>

        {/* Image skeleton */}
        <div className='relative mb-3 h-[400px] w-full overflow-hidden rounded bg-gray-200 lg:h-[500px]'></div>

        {/* Title skeleton */}
        <div className='h-8 w-3/4 rounded bg-gray-200'></div>

        {/* Description skeleton */}
        <div className='h-6 w-2/3 rounded bg-gray-200'></div>

        {/* Date skeleton */}
        <div className='mt-2 h-5 w-1/3 rounded bg-gray-200'></div>
      </div>
    </div>
  );
};

const LoadingProjects = () => {
  return (
    <main className='flex w-full flex-col items-center px-4 py-12'>
      {[1, 2, 3].map((_, idx) => (
        <ProjectSkeleton key={idx} />
      ))}
    </main>
  );
};

export default LoadingProjects;
