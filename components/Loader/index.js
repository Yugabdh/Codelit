const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-bg-dark">
      <span className="flex h-8 w-8">
        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-primary-400"></span>
      </span>
    </div>
  );
};

export default Loader;
