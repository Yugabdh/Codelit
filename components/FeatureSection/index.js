import SectionWithHeading from "../SectionWithHeading";
import FeaturesList from "./FeatureList";

import { FaCertificate, FaRegQuestionCircle, FaAtom } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FaCertificate,
  },
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: SiFuturelearn,
  },
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FaRegQuestionCircle,
  },
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FaAtom,
  },
];


const FeatureSection = ({ heading, subtitle }) => {
  return (
    <SectionWithHeading
      heading={heading}
      subtitle={subtitle}
      content={<FeaturesList features={features}/>}
    />
  );
};

export default FeatureSection;
