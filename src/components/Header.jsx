import React, { useState, useRef } from "react";
import logo from "/site-logo.svg";
import hameburger from "../assets/images/hameburger.svg";
import { Link, useNavigate } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import { motion } from "framer-motion";
import "../App.css";

/* ---------------- NAVIGATION LINKS ---------------- */

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Capabilities", href: "/capabilities" },
  {
    label: "Resources",
    children: [
      { label: "About Us", href: "/about-us" },
      {
        label: "Services",
        children: [
          {
            label: "Web Development Services",
            href: "/web-development-services",
            children: [
              { label: "Custom Wordpress Development", href: "/custom-wordpress-development-services" },
              { label: "Shopify Development", href: "/shopify-website-development-services" },
              { label: "CMS Development", href: "/cms-development-services" },
              { label: "API Development", href: "/custom-api-development-services" },
              { label: "Website Maintenance", href: "/website-maintenance-services" },
            ],
          },
          {
            label: "Digital Marketing Services",
            href: "/affordable-digital-marketing-services",
            children: [
              { label: "SEO Services", href: "/expert-seo-services" },
              { label: "PPC Services", href: "/ppc-marketing-services" },
              { label: "SMO Services", href: "/smo-services" },
            ],
          },
          {
            label: "Web Design Services",
            href: "/web-design-services",
            children: [
              { label: "UI/UX Design", href: "/ui-ux-design-services" },
            ],
          },
          {
            label: "Mobile App Development",
            href: "/mobile-app-development-services",
            children: [
              { label: "IOS App Development", href: "/ios-app-development-services" },
              { label: "Android App Development", href: "/android-app-development-services" },
            ],
          },
        ],
      },
       {
    label: "Hire Resources",
    children: [
      {
        label: "Hire Web Developer",
        href: "/hire-dedicated-web-developer",
        children: [
          { label: "Hire Wordpress Developer", href: "/hire-wordpress-developer" },
          { label: "Hire Shopify Expert", href: "/hire-shopify-developer" },
          { label: "Hire CMS Developers", href: "/hire-cms-developers" },
          { label: "Hire API Developers", href: "/hire-api-developers" },
        ],
      },
      {
        label: "Hire Digital Marketing Expert",
        href: "/hire-digital-marketing-experts",
        children: [
          { label: "Hire SEO Expert", href: "/hire-seo-experts" },
          { label: "Hire PPC Expert", href: "/hire-ppc-expert" },
          { label: "Hire Social Media Marketing Expert", href: "/hire-social-media-expert" },
        ],
      },
      {
        label: "Hire Web Designer",
        href: "/hire-a-web-designer",
        children: [{ label: "Hire UI/UX Designer", href: "/hire-ui-ux-designer" }],
      },
      {
        label: "Hire App Developer",
        href: "/hire-mobile-app-developer",
        children: [
          { label: "Hire IOS App Developer", href: "/hire-ios-app-developers" },
          { label: "Hire Android App Developer", href: "/hire-android-app-developer" },
        ],
      },
    ],
  },
 
      {
        label: "Case Study",
        href: "/case-studies",
      },
       { label: "Blog", href: "/blog" },
       { label: "Resources", href: "/resources" },
        { label: "Contact", href: "/contact-us" },

    ],
  },
  { label: "AI Code Rescue", href: "/aicoderescue" },
  { label: "Work", href: "/work" },
  { label: "For B2B Partners", href: "/b2b-partners" },
  { label: "For technical teams", href: "#" },


  
 
];

/* ---------------- MOBILE NAVIGATION ITEM ---------------- */

const MobileNavItem = ({ link, closeSidebar }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const hasChildren = Array.isArray(link.children) && link.children.length > 0;

  const handleClick = (e) => {
    e.preventDefault();
    if (hasChildren) {
      setOpen(!open);
    } else {
      navigate(link.href);
      closeSidebar();
    }
  };

  return (
    <li className="nav-item">
<div className="mobile-nav-link-wrapper">
  {link.href ? (
    <Link
      to={link.href}
      className="nav-link"
      onClick={() => {
        if (!hasChildren) closeSidebar();
      }}
    >
      {link.label}
    </Link>
  ) : (
    <a className="nav-link">{link.label}</a>
  )}

  {hasChildren && (
    <button
      className="submenu-toggle"
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
      }}
    >
      <i className={`fa fa-angle-${open ? "down" : "right"}`} />
    </button>
  )}
</div>

      {hasChildren && open && (
        <ul className="dropdown-menu-mobile">
          {link.children.map((child, i) => (
            <MobileNavItem key={i} link={child} closeSidebar={closeSidebar} />
          ))}
        </ul>
      )}
    </li>
  );
};

/* ---------------- HEADER COMPONENT ---------------- */

const Header = () => {
  const offcanvasRef = useRef(null);

  // Open sidebar programmatically using Bootstrap API
  const openSidebar = () => {
    if (!offcanvasRef.current) return;
    let instance = Offcanvas.getInstance(offcanvasRef.current);
    if (!instance) {
      instance = new Offcanvas(offcanvasRef.current);
    }
    instance.show();
  };

  // Close sidebar properly (no leftover backdrop)
  const closeSidebar = () => {
    if (!offcanvasRef.current) return;
    const instance =
      Offcanvas.getInstance(offcanvasRef.current) ||
      new Offcanvas(offcanvasRef.current);
    instance.hide();
  };

  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="main-header border-bottom bg-white">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">

          {/* ---- LOGO ---- */}
          <Link to="/" className="header-logo">
            <img src={logo} alt="Logo" fetchPriority="high" decoding="async"  height="50" />
          </Link>

          {/* ---- DESKTOP MENU ---- */}
          <div className="desktop-menu d-none d-lg-block">
            <nav className="nav-menu">
              <ul className="navbar-nav ">
                {navLinks.map((link, i) => (
                  <li key={i} className={`nav-item ${link.children ? "dropdown" : ""}`}>
                    {link.children ? (
                      <>
                        <a className="nav-link dropdown-toggle" href="#">
                          {link.label} <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          {link.children.map((child, idx) => (
                            <li key={idx} className="dropdown-item-wrapper">
                              {child.children ? (
                                <>
                                  <Link className="dropdown-item" to={child.href}>
                                    {child.label} <i className="fa fa-angle-right"></i>
                                  </Link>
                                  <ul className="dropdown-submenu">
                                    {child.children.map((sub, subIdx) => (
                                      <li key={subIdx}>
                                        <Link className="dropdown-item" to={sub.href}>
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : (
                                <Link className="dropdown-item" to={child.href}>
                                  {child.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link className="nav-link" to={link.href}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ---- MOBILE BURGER MENU ---- */}
          <button
            className="navbar-toggler border-0 bg-transparent "
            type="button"
            onClick={openSidebar}
            style={{ cursor: "pointer" }}
          >
            <img src={hameburger} alt="menu" />
          </button>

          {/* ---- OFFCANVAS MENU ---- */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            ref={offcanvasRef}
          >
            <div className="offcanvas-header border-bottom">
              <Link to="/">
                <img src={logo} height="45" alt="logo" />
              </Link>
              <button className="btn-close" onClick={closeSidebar}></button>
            </div>

            <div className="offcanvas-body">
              <motion.ul className="navbar-nav">
                {navLinks.map((link, index) => (
                  <MobileNavItem
                    key={index}
                    link={link}
                    closeSidebar={closeSidebar}
                  />
                ))}
              </motion.ul>

              <motion.div
                className="sidebar-address mt-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div className="address" variants={listVariants}>
                  <motion.h3 variants={itemVariants}>Office</motion.h3>
                  <motion.p variants={itemVariants}>
                    C-127, 4th Floor, Phase-8, Industrial Area, Sector 73,
                    Sahibzada Ajit Singh Nagar, Punjab 160071, India
                  </motion.p>

                  <motion.h3 variants={itemVariants}>Contact Us</motion.h3>
                  <motion.div className="phone-number" variants={listVariants}>
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    <motion.a href="tel:918264958742" variants={itemVariants}>
                      +91-8264958742
                    </motion.a>
                    <i className="fa fa-phone ms-3" aria-hidden="true"></i>{" "}
                    <motion.a href="tel:917508738954" variants={itemVariants}>
                      +91-7508738954
                    </motion.a>
                  </motion.div>

                  <motion.div className="email-content" variants={listVariants}>
                    <motion.a
                      href="mailto:contact@perfectwebservices.com"
                      variants={itemVariants}
                    >
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      contact@perfectwebservices.com
                    </motion.a>
                  </motion.div>

                  <motion.div className="Social-content" variants={listVariants}>
                    <motion.a href="https://www.facebook.com/perfectwebservices" target="_blank" rel="noopener noreferrer" variants={itemVariants}><i className="fa-brands fa-facebook"></i></motion.a>
                    <motion.a href="https://www.instagram.com/perfect_web_services/" target="_blank" rel="noopener noreferrer" variants={itemVariants}><i className="fa-brands fa-instagram"></i></motion.a>
                    <motion.a href="https://www.youtube.com/channel/UCD1XPKqdbfK-jvFxWQBCUyg" target="_blank" rel="noopener noreferrer" variants={itemVariants}><i className="fa-brands fa-youtube"></i></motion.a>
                    <motion.a href="https://www.linkedin.com/company/perfect-web-services/" target="_blank" rel="noopener noreferrer" variants={itemVariants}><i className="fa-brands fa-linkedin"></i></motion.a>
                    <motion.a href="https://x.com/PerfectWebServ1" target="_blank" rel="noopener noreferrer" variants={itemVariants}><i className="fa-brands fa-x-twitter"></i></motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
