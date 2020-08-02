import React from "react";
import "./loading-screen.style.scss";

const LoadingScreen = () =>{
    return(
        <div className="screen">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    )
}

export default LoadingScreen