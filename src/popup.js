import React from "react";
import './popup.css'
import './App.js'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-box">
            <div className="box">
                { props.children }
                <button className={"close-icon"} onClick={() => props.setTrigger(false)}> x </button>
            </div>
        </div>
    ) : "";
}

export default Popup;