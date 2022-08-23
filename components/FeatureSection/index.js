import SectionWithHeading from "../SectionWithHeading";
import FeaturesList from "./FeatureList";

import { FaCertificate, FaRegQuestionCircle, FaAtom } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

const features = [
  {
    name: "Get proof",
    description:
      "Earn a certificate to validate your newly acquired skills. Post it on social for others to see.",
    icon: FaCertificate,
  },
  {
    name: "Step-by-step and tailored for you",
    description:
      "Go step-by-step through our unique courses and learn at your speed.",
    icon: SiFuturelearn,
  },
  {
    name: "Quizzes and more",
    description:
      "Assess what you've learned with in-lesson quizzes, and gradually advance your skills",
    icon: FaRegQuestionCircle,
  },
  {
    name: "Atomic modules",
    description:
      "Course content divided into small modules helps you to learn quickly",
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
