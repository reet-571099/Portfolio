import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Reet Khanchandani
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/reet-khanchandani-791a661a4/" target="_blank">
            <img src="/linkedin-icon.png" alt="" />
          </a>
          <a href="https://github.com/reet-571099" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="mailto:reetkhanchandani1010@gmail.com" target="_blank">
            <img src="/mail4.png" alt="" />
          </a>
          <a href="https://www.instagram.com/rizzzy_ritzz/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
