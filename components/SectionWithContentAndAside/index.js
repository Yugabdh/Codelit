const SectionWithContentAndAside = ({ heading, subtitle, content, aside }) => {
  return (
    <section className="bg-bg-dark">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12 md:py-10 lg:py-15 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="font-montserrat font-extrabold antialiased uppercase text-white text-4xl xs:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="font-poppins font-normal antialiased uppercase text-gray-300">
            {subtitle}
          </p>
          <div className="mt-3">{content}</div>
        </div>
        <div>{aside}</div>
      </div>
    </section>
  );
};

export default SectionWithContentAndAside;
