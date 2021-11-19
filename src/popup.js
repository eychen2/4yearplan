import React from "react";
import './popup.css'
import './App.js'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-box">
            <div className="box">
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;