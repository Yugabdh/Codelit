const HeroHeader = () => {
  return (
    <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover hero-img">
      <div className="h-screen flex items-center justify-center">
        <div className="mx-2 text-center md:w-9/12 px-4">
          <h1 className="text-gray-100 font-bold antialiased uppercase font-poppins text-4xl xs:text-5xl md:text-6xl">
            Learn to code at your pace at your place and be that chad developer
            you always wished to be!
          </h1>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-200 hover:bg-primary-300 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-200 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
