import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnState,setBtnState] = useState("login");
    const onLineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-cyan-900 shadow-sm mb-2">
            <div className="logo">LOGO</div>
            <div className="nav-items">
                <ul className="flex justify-between p-8 m-4">
                    <li className="px-4 font-semibold">
                        Online Status: {onLineStatus ? "online" : "offline"}
                    </li >
                    <li className="px-4 font-semibold">Name</li>
                    <li className="px-4 font-semibold">
                        <Link to="/about">About Us</Link> 
                    </li>
                    <li className="px-4 font-semibold">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-semibold">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="px-4 font-semibold">
                        <Link to="/contact">Cart</Link>
                    </li>
                    <li className="px-4 font-semibold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="login" onClick={() => {
                        if(btnState === "login"){
                            setBtnState("logout")
                        }
                        else{
                            setBtnState("login")
                        }
                        
                    }}>{btnState}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;
