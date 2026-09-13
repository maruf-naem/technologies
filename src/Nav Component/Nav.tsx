
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div>
            <nav className='container m-auto flex justify-between items-center gap-2 py-4 px-4'>
                <RxHamburgerMenu className="md:hidden text-[34px]"/>
                <img src={logo} alt="" className="w-32 h-10 object-contain" />
                <ul className=" hidden md:flex justify-center items-center gap-7 font-semibold text-[16px] ">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-2'>
                    <button className="btn btn-success h-8 ">Sign In</button>
                    <button className="btn btn-secondary h-8 bg-linear-to-r from-[#F97316]  to-[#EC4899] text-white py-2 px-6 rounded-lg cursor-pointer border-0">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;