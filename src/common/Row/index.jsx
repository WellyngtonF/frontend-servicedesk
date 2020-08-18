import React from 'react'

const Row = props => {
    return (
        <div className={`row ${props.class}`}>
            {props.children}
        </div>
    )
}

export default Row