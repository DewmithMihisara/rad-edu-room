import { Component } from "react";
import icon from "../../../images/Cannabis_leaf.svg.png";
import { Link } from "react-router-dom";

export class NavBar extends Component{
    render() {
        return (
            <>
            <div className="p-2 bg-[#444544] flex">
                <h1 className="text-1x1 text-secondary">Organic Shop</h1>
                <img className="ml-[10px] h-5 w-5" src={icon} alt=""/>
                <ul className="ml-[500px]">
                    <li className="inline-block mr-4 text-[#e6f0e6] cursor-pointer hover:text-green-300"><Link to="/">Home</Link></li>
                    <li className="inline-block mr-4 text-[#e6f0e6] cursor-pointer hover:text-green-300"><Link to="/about">About</Link></li>
                    <li className="inline-block mr-4 text-[#e6f0e6] cursor-pointer hover:text-green-300"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            </>
        );
    }
}