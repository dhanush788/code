import React from 'react';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);


    return (
        <div className="absolute top-0 w-full bg-white ">
            <div className="flex items-center justify-between mx-6 md:mx-16 py-5 md:py-7 border-b-2 border-black">
                <div className="flex items-center gap-x-14">
                    <a href="/" aria-label="Home" className="block">
                        <img src='./image.png' alt="logo" className="h-14 w-40" />
                    </a>
                </div>
                <div className={`hidden text-black font-semibold text-lg md:flex gap-16 ${toggleMenu ? 'hidden' : 'block'}`}>
                    <a href="#about" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#faq" className="nav-link">Facilities</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <div className="flex items-center">
                        <button className="mobile-menu-button" onClick={() => setToggleMenu(true)}>
                            <svg className="w-6 h-6" fill="none" stroke='black' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform ${toggleMenu ? 'translate-x-0' : ' translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className=" text-black font-normal text-lg flex flex-col px-6 md:px-16 gap-4 ">
                    <div className='flex justify-between py-5'>
                        <div className="flex items-center gap-x-14">
                            <a href="/" aria-label="Home" className="block">
                                <img src='./image.png' alt="logo" className="h-14 w-36" />
                            </a>
                        </div>
                        <button className="close-button" onClick={() => setToggleMenu(false)}>
                            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <a href="#about" className="nav-link" onClick={() => setToggleMenu(false)}>Home</a>
                    <a href="#faq" className="nav-link" onClick={() => setToggleMenu(false)}>About</a>
                    <a href="#testimonial" className="nav-link" onClick={() => setToggleMenu(false)}>Facilities</a>
                    <a href="#contact" className="nav-link" onClick={() => setToggleMenu(false)}>Contact</a>
                </div>
            </div>
        </div>
    );
};
