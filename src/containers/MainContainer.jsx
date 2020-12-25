import React from 'react'
import "../index.css"

export default function MainContainer(props) {
    return (
        <div className="mainContainer">
            {props.children}
        </div>
    )
}
