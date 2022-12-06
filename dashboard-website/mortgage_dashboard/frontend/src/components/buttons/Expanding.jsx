import React from "react";
import Button from "react-bootstrap/Button";
import ColorIcons from "./ColorIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";


const ExpendableButton = ({isOpen, toggle}) => {
    return (
    <Button onClick={toggle}>
        <span class="material-icons" 
        style={{
            transform:`rotate(${isOpen ? 90:0}deg)`,
            transition: "all 0.25s",
        }}> <FontAwesomeIcon color="black" icon={Icons.faAngleRight} />

        </span> 
        </Button>
    )
}
export default ExpendableButton;