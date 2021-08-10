import {FC} from "react";
import Header from "./Header";

const Page:FC = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Page