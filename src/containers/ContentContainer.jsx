import React from 'react'

export default function ContentContainer(props) {
    return (
        <div className="contentContainer">
            {props.children}
        </div>
    )
}
