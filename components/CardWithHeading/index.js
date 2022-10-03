const CardWithHeading = ({ heading, content }) => {
  return (
    <div className="bg-bg-medium px-5 py-5 rounded-md">
      <h1 className="text-lg md:text-2xl tracking-tight font-semibold text-gray-50 pb-3">
        {heading}
      </h1>
      {content}
    </div>
  );
};

export default CardWithHeading;
