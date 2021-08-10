import {FC} from "react";
import "../styles/container.css"

const Container: FC = ({children}) => {
    return (
        <div className="container mt-lg-5">
            {children}
        </div>
    );
};

export default Container;