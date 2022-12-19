import Link from 'next/link';
const FourOhFour = () => {
    return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <Link href="/" className='text-white text-3xl mt-30'>Go Back Home</Link>
      <h1 className='text-[500px] max-md:text-[350px] md:text-[300px] max-sm:text-[200px] bg-gradient-to-r bg-clip-text  text-transparent
            from-slate-50 via-amber-200 to-amber-500
            animate-text'>404</h1>

    </div>
  );
};
export default FourOhFour;