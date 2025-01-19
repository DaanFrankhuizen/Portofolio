import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-center font-sans">
      <h1 className="text-5xl font-bold text-white">Daan Frankhuizen</h1>
      <p className="mt-4 text-2xl">Webdeveloper | Designer | Creative Problem Solver</p>
      {/* <Link href="/about">
        <a className="mt-6 px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300">
          Learn More About Me
        </a>
      </Link> */}
    </div>
  );
};

export default HomePage;
