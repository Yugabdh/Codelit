import Image from "next/image";
import Link from "next/link";

import { FaPlay } from "react-icons/fa";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const CoursesList = () => {
  return (
    <ul>
      <li className="flex py-1 md:py-2 lg:py-3">
        <div>
          <div className="rounded-full bg-bg-dark w-20 h-20 p-2">
            <Image
              height={80}
              width={80}
              placeholder="blur"
              blurDataURL={rgbDataURL(28, 27, 41)}
              src="/logo.png"
              alt="profile photo"
            />
          </div>
        </div>
        <div className="pl-5">
          <p className="text-lg md:text-1xl tracking-tight font-semibold text-gray-50">
            SASS
          </p>
          <p className="text-base tracking-tight font-normal text-gray-400">
            In Progress
          </p>
        </div>
        <div className="ml-auto my-auto pr-2 rounded-full">
          <Link href="/dashboard">
            <div className="bg-primary-200 hover:bg-primary-400 hover:shadow-xl cursor-pointer text-white p-4 rounded-full">
              <FaPlay />
            </div>
          </Link>
        </div>
      </li>
      <li className="flex py-1 md:py-2 lg:py-3">
        <div>
          <div className="rounded-full bg-bg-dark w-20 h-20 p-2">
            <Image
              height={80}
              width={80}
              placeholder="blur"
              blurDataURL={rgbDataURL(28, 27, 41)}
              src="/logo.png"
              alt="profile photo"
            />
          </div>
        </div>
        <div className="pl-5">
          <p className="text-lg md:text-1xl tracking-tight font-semibold text-gray-50">
            SASS
          </p>
          <p className="text-base tracking-tight font-normal text-gray-400">
            In Progress
          </p>
        </div>
        <div className="ml-auto my-auto pr-2 rounded-full">
          <Link href="/dashboard">
            <div className="bg-primary-200 hover:bg-primary-400 hover:shadow-xl cursor-pointer text-white p-4 rounded-full">
              <FaPlay />
            </div>
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default CoursesList;
