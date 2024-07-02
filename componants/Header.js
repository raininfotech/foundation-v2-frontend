import Link from "next/link";
import $ from "jquery";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

let ch = 1

export default function Header() {

    const router = useRouter()

    const setmenu = (ch) => {
        if (ch == 0) {
            if ($("#menuT").hasClass("bx-x")) {
                $("#navbar1").removeClass("navbar-mobile")
                $("#menuT").removeClass("bx-x")
                $("#menuT").addClass("bx-menu")
            } else {
                $("#navbar1").addClass("navbar-mobile")
                $("#menuT").addClass("bx-x")
                $("#menuT").removeClass("bx-menu")
                ch = 1
            }
        } else {
            if ($("#navbar1").hasClass("navbar-mobile")) {
                $("#navbar1").removeClass("navbar-mobile")
                $("#menuT").removeClass("bx-x")
                $("#menuT").addClass("bx-menu")
            }
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            var scroll = $(window).scrollTop();
            if (scroll >= 32) {
                $(".index-page").addClass("scrolled");
            } else {
                $(".index-page").removeClass("scrolled")
            }
        };

        $(window).on('scroll', handleScroll);

        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header id="header" className="fixed-top header-scrolled">
                <div className="container-fluid d-flex align-items-center hd">
                    <Link href="/" className="logo me-auto d-flex">
                        <span className="text-gray"><Image src='assets/img/logo.png' alt='' width={40} height={40} className="img-fluid me-2" />{process.env.SITENAME}</span>
                    </Link >

                    <nav id="navbar1" className="navbar">
                        <ul>
                            <li>
                                <div className="nav-link scrollto">
                                    <Link href='/payment' className={`text-header ${router.pathname == '/payment' ? "active-text" : ""}`} onClick={() => { ch = 1, setmenu(1) }}>
                                        Payments
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="nav-link scrollto">
                                    <Link href='/tbsstats' className={`text-header ${router.pathname == '/tbsstats' ? "active-text" : ""}`} onClick={() => { ch = 1, setmenu(1) }}>
                                        Tab Stats
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <i className="bx bx-menu mobile-nav-toggle" id='menuT' onClick={() => setmenu(0)}></i>
                    </nav>
                </div>
            </header >
        </>
    )
}