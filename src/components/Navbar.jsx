import logo from "../assets/Logo2.png";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../assets/constants";
import BotonDescargaPDF from "./BotonDescargaPDF";
import { FaWhatsapp } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-3 flex items-center justify-center gap-4 text-2xl">
        <a href={`mailto:${CONTACT.email}`}><CiMail /></a>
        <a href="https://wa.me/529221973362 "><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/fabian-huervo-de-la-cruz-74a631257/"><FaLinkedin /></a>
        <BotonDescargaPDF />
      </div>
    </nav>
  );
};

export default Navbar;
