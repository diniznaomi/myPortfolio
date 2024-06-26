import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from 'react-scroll';
import * as Unicons from "@iconscout/react-unicons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.addEventListener("click", closeMenu);
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, [setIsMenuOpen]);

    const handleMenuClick = (e) => {
        e.stopPropagation(); // Prevent closing menu when clicking inside the menu
    };

    window.addEventListener("scroll", windowScroll);
    function windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            if (navbar !== null) {
                navbar?.classList.add("is-sticky");
                if(isMenuOpen) setIsMenuOpen(false);
            }
        } else {
            if (navbar !== null) {
                navbar?.classList.remove("is-sticky");
            }
        }

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }
    return (
        <nav className="navbar" id="navbar" onClick={handleMenuClick}>
            <div className="container flex flex-wrap items-center justify-between">
                <Link to="/index" className="navbar-brand md:me-8" href="index.html">
                    <Link to="#" className="text-[22px] focus:outline-none">
                        <span>NAOMI.</span>
                    </Link>
                </Link>

                <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                    {/* <!-- Navbar Button --> */}
                    <ul className="list-none menu-social mb-0">
                        <li className="inline-flex">
                            <span className="ms-1">
                                <span className="login-btn-primary"><span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><Unicons.UilDribbble width={16} /></span></span>
                                <span className="login-btn-light"><span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Unicons.UilDribbble width={16} /></span></span>
                            </span>
                            <span className="ms-1">
                                <span className="login-btn-primary "><span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><Unicons.UilBehance width={16} /></span></span>
                                <span className="login-btn-light "><span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Unicons.UilBehance width={16} /></span></span>
                            </span>
                            <Link to="https://www.linkedin.com/in/naomi-moura/" target="_blank" className="ms-1">
                                <span className="login-btn-primary"><span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><Unicons.UilLinkedin width={16} /></span></span>
                                <span className="login-btn-light"><span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><Unicons.UilLinkedin width={16} /></span></span>
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- Navbar Collapse Manu Button --> */}
                    <button onClick={toggleMenu} data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Navigation Menu</span>
                        <i className="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                {/* <!-- Navbar Manu --> */}
                <div className={`navigation lg_992:order-1 lg_992:flex ${isMenuOpen ? '' : 'hidden'} ms-auto" id="menu-collapse`}>
                    <ul className="navbar-nav" id="navbar-navlist">
                        <li className="nav-item">
                            <Link1 to="home" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Home</Link1>
                        </li>
                        {/* <li className="nav-item">
                        <Link1 to="about" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Sobre mim</Link1>
                    </li> */}
                        <li className="nav-item">
                            <Link1 to="service" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Serviços</Link1>
                        </li>
{/* <li className="nav-item">
                            <Link1 to="experience" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Experiência</Link1>
                        </li> */}
                        <li className="nav-item">
                            <Link1 to="project" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Projetos</Link1>
                        </li>
                        {/* <li className="nav-item">
                        <Link1 to="blog" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Blogs</Link1>
                    </li> */}
                        <li className="nav-item">
                            <Link1 to="contact" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Contato</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}