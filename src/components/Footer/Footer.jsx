import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import "./_Footer.css";

export default function Footer() {
  
    return (
    
    <footer className="footer">
    
      <Link className="logo_container" to="/">
        <Logo fill="#ffffff" className="logo" />
      </Link>

      <div className="mentions">© 2020 Kasa. All rights reserved</div>
    
    </footer>
  );
}
