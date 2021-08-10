import {FC} from "react";
import "../styles/global.css"

const Header:FC = () => {
    return (
        <header className="shadow-lg">
            <ul className="nav justify-content-center bg-primary">
                <li className="nav-item m-lg-2">
                    <a className="nav-link link-light" href="#">Active</a>
                </li>
                <li className="nav-item m-lg-2">
                    <a className="nav-link link-light" href="#">Link</a>
                </li>
                <li className="nav-item m-lg-2">
                    <a className="nav-link link-light" href="#">Link</a>
                </li>
            </ul>
        </header>
    );
};

export default Header