import {FC, useContext} from "react";
import "../styles/global.css"
import Container from "./Container";
import { NavLink, Link } from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/constants";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Header: FC = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <header className="shadow bg-dark d-flex justify-content-center align-items-center">
            <Container>
                <ul className="nav justify-content-center align-items-center">
                    <li className="nav-item m-lg-2">
                        <Link className="nav-link link-light" to="#">Active</Link>
                    </li>
                    <li className="nav-item m-lg-2">
                        <Link className="nav-link link-light" to="#">Link</Link>
                    </li>
                    <li className="nav-item m-lg-2">
                        <Link className="nav-link link-light" to="#">Link</Link>
                    </li>
                    {user ? <button onClick={() => auth.signOut()} type="button" className="btn btn-danger">Log-out</button> :
                        ""}
                </ul>
            </Container>
        </header>
    );
};

export default Header