import { Link } from "react-router-dom";
import "./_Footer.css";

export default function Footer() {
  
    return (
    
    <footer className="footer">
    
      <Link className="logo_container" to="/">
        <img src="../../assets/LOGO.png" className="logo_footer" alt="Logo Kasa" />
      </Link>

      <div className="mentions">© 2020 Kasa. All rights reserved</div>
    
    </footer>
  );
}
