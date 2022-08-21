const SectionWithHeading = ({ heading, subtitle, content }) => {
  return (
    <section className="bg-bg-dark">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-15">
        <h2 className="font-montserrat font-extrabold antialiased uppercase text-white text-4xl xs:text-4xl md:text-5xl">
          {heading}
        </h2>
        <div>
          <p className="font-poppins font-normal antialiased uppercase text-gray-300">
            {subtitle}
          </p>
        </div>
        <div>{content}</div>
      </div>
    </section>
  );
};

export default SectionWithHeading;
