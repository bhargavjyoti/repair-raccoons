import Logo from "../assets/logo-removebg.png";

type Props = {};

const Navbar = (props: Props) => {

    return (
        <nav className='bg-white w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-white fixed top-0 z-30'>
            <div className="mx-auto w-11/12">
                <div className="flex items-center justify-between">
                    <img src={Logo} alt="logo" className="h-14 w-14 border-0" />
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
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
