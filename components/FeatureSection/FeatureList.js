import FeatureCard from "./FeatureCard";

const FeaturesList = ({features}) => {
  return (
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature, idx) => (
          <FeatureCard feature={feature} key={idx} />
        ))}
      </dl>
    </div>
  );
};

export default FeaturesList;