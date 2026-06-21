import { MapPin } from "lucide-react";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import tiktok from "../assets/icons/tiktok.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">

      <div className="info">

        <div className="follow-along">
          <a href="https://www.facebook.com/share/184CfkPtSt/" target="_blank" rel="noopener noreferrer" className="follow-icons">
            <img src={facebook} alt="Facebook" width={16} height={16} />
          </a>

          <a href="https://instagram.com/venelin_hristov_/" target="_blank" rel="noopener noreferrer" className="follow-icons">
            <img src={instagram} alt="Instagram" width={16} height={16} />
          </a>

          <a href="https://www.tiktok.com/@restless.venko?_r=1&_t=ZN-97Ocz2Alisg" target="_blank" rel="noopener noreferrer" className="follow-icons">
            <img src={tiktok} alt="TikTok" width={16} height={16} />
          </a>
        </div>

        <div className="location">
          <span><MapPin size={14} /> kv. Slatina, ul. "Daskal Nikita" 2, 1574 Sofia, Bulgaria</span>
        </div>
      </div>

      <hr className="footer-line" />

      <span className="footer-span">© 2026 Venelin Hristov. All rights reserved.</span>
    </footer>
  )
}

export default Footer
