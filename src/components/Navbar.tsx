import Logo from "../assets/logo-removebg.png";
import { Link } from 'react-scroll'
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
    const [active, setActive] = useState(false);

    const toggleHamburger = () => {
        setActive(!active);
    }

    return (
        <nav className='bg-white w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-white fixed top-0 z-30'>
            <div className="mx-auto w-11/12">
                <div className="flex items-center justify-between">
                    <img src={Logo} alt="logo" className="h-14 w-14 border-0" />
                    <button onClick={toggleHamburger}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className=" w-9 h-9 cursor-pointer text-textSecondary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={active ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                            />
                        </svg>
                    </button>
                </div>
                {active ? 
                <div className="flex flex-col gap-2 items-center py-2 text-textSecondary font-normal text-lg md:text-xl lg:text-2xl">
                    <div className="hover:text-white hover:bg-secondary px-8 py-2 rounded-md cursor-pointer">
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                    </div>
                    <div className="hover:text-white hover:bg-secondary px-8 py-2 rounded-md cursor-pointer">
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
                    </div>
                    <div className="hover:text-white hover:bg-secondary px-8 py-2 rounded-md cursor-pointer">
                        <Link to="working" spy={true} smooth={true} offset={50} duration={500} >Working</Link>
                    </div>
                    <div className="hover:text-white hover:bg-secondary px-8 py-2 rounded-md cursor-pointer">
                        <Link to="features" spy={true} smooth={true} offset={50} duration={500} >Features</Link>
                    </div>
                    <div className="hover:text-white hover:bg-secondary px-8 py-2 rounded-md cursor-pointer">
                        <Link to="faq" spy={true} smooth={true} offset={50} duration={500} >FAQ</Link>
                    </div>
                    <div className="hover:text-white hover:bg-secondary px-8 py-2 rounded-md cursor-pointer">
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
                    </div>
                </div> : <></>}
            </div>
        </nav>
    );
};

export default Navbar;
