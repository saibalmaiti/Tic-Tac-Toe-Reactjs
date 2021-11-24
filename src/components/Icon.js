import React from "react";
import {FaTimes, FaRegCircle, FaPen} from "react-icons/fa";

const Icon = ({name}) => {
    if (name === "cross"){
        return(
            <div><FaTimes className="icons click" /></div>
        );
    }
    else if(name === "circle"){
        return(
            <div><FaRegCircle className="icons click" /></div>
        );
    }
    else{
        return(
            <div><FaPen className="icons"/></div>
        );
    }
}

export default Icon;