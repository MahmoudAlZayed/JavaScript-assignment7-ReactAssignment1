import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer-icons">
        <FaFacebook className="facebook-icon" />
        <FaInstagram className="instagram-icon" />
        <FaTwitter className="twitter-icon" />
      </div>
    </>
  );
}
export default Footer;
