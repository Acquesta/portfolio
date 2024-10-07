import { NavLink } from "react-router-dom";

import logo from "../../assets/image/logoBranco.png";
import youtube from '../../assets/image/youtubeIcon.png'
import linkedin from '../../assets/image/linkedinIcon.png'
import instagram from '../../assets/image/instagramIcon.png'
import facebook from '../../assets/image/facebookIcon.png'

function Footer() {
    return ( 
        <div className="h-[25vh] bg-azulMahindra text-branco flex justify-between px-14 py-10">
            <div className="flex justify-between w-1/5 text-[1vw]">
                <div className="flex flex-col justify-evenly">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Quizzes</NavLink>
                    <p>Comunidade</p>
                    {/* <NavLink to='/home'>Home</NavLink> */}
                </div>
                <div className="bg-branco w-[2px]"></div>
                <div className="flex flex-col justify-evenly">
                    <p>Formula e</p>
                    <p>Mahindra</p>
                    <p>Tech Mahindra</p>
                </div>
            </div>
            <div className="my-auto w-1/3">
                <img src={logo} alt="" />
            </div>
            <div className="my-auto">
                <div className="flex justify-between h-[2rem]">
                    <img src={youtube} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                </div>
                <p className="mt-5">Copyright © 2024 Connect-e</p>
            </div>
        </div>
     );
}

export default Footer;