import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    name: "facebook",
    href: "https://www.linkedin.com/in/yugabdh-pashte/",
    icon: FaLinkedinIn,
  },
  {
    name: "twitter",
    href: "https://twitter.com/yugabdh",
    icon: FaTwitter,
  },
  {
    name: "github",
    href: "https://github.com/Yugabdh",
    icon: FaGithub,
  },
];

const Footer = () => {
  return (
    <footer className="text-center bg-bg-medium text-white">
      <div className="px-6 py-2">
        <div className="flex justify-center">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="rounded-full border-2 border-white text-white p-3 m-1 md:p-4 md:m-2 hover:bg-bg-dark focus:outline-none focus:ring-0 transition duration-150 ease"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center bg-primary-200 py-2">
        <a href="https://yugabdh.com">Created By Yugabdh.com</a>
      </div>
    </footer>
  );
};

export default Footer;
