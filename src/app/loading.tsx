export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 pointer-events-none'>
      <div className='absolute inset-0 animate-transitionIn overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(30,30,30,0.9),rgba(0,0,0,0.95),rgba(20,20,20,0.9))] backdrop-blur-lg' />
      </div>
    </div>
  );
}
