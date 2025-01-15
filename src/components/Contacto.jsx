import { CONTACT } from "../assets/constants";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <div className="border-b  border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contacto</h2>
      <div className="text-center tracking-tighter">
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <div className="flex justify-center m-7 lg:pt-3">
        <a href={`mailto:${CONTACT.email}`}>
          <CiMail className="mr-5 text-2xl" />
        </a>

        <a href="https://www.linkedin.com/in/fabian-huervo-de-la-cruz-74a631257/">
          <FaLinkedin className="mr-5 text-2xl" />
        </a>

        <a href="https://wa.me/529221973362">
          <FaWhatsapp className="mr-5 text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Contacto;
