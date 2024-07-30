import Link from "next/link";

import { FaInstagram, FaAirbnb } from "react-icons/fa";

const Socials = ({ containerStyles, iconSize = 24 }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="https://airbnb.com/rooms/1200771532627153104">
          <FaAirbnb size={iconSize} />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/oak_mreznica_house/">
          <FaInstagram size={iconSize} />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
