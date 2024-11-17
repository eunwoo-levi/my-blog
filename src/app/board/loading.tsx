export default function Loading() {
  return (
    <main className='relative w-full min-h-screen bg-gray-900'>
      <div className='w-full h-[600px] flex flex-col justify-center items-center gap-[30px] animate-pulse'>
        <div className='w-48 h-16 bg-gray-800 rounded-md' />
        <div className='w-32 h-8 bg-gray-800 rounded-md' />
      </div>
      <div className='w-full flex-grow flex justify-center items-center p-20'>
        <div className='w-full max-w-4xl h-64 bg-gray-800 rounded-lg' />
      </div>
    </main>
  );
}
