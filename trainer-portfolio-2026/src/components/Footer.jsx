import { MapPin } from "lucide-react";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="info">
        <div className="follow-along">
          <a
            href="https://www.facebook.com/share/184CfkPtSt/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-icons"
          >
            <img src={facebook} alt="Facebook" width={16} height={16} />
          </a>

          <a
            href="https://instagram.com/venelin_hristov_/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-icons"
          >
            <img src={instagram} alt="Instagram" width={16} height={16} />
          </a>

          <a
            href="https://maps.app.goo.gl/wPtTZtJRRYtyScwB6"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-icons"
            aria-label="Location on Google Maps"
          >
            <MapPin size={16} />
          </a>
        </div>
      </div>

      <hr className="footer-line" />

      <span className="footer-span">
        © 2026 Venelin Hristov. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
