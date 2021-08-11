import {FC} from "react";

const Loader = ():JSX.Element => {
    return (
            <div className="spinner-border container d-flex justify-content-center mt-xl-5" role="status">
                <span className="sr-only"></span>
            </div>
    );
};

export default Loader