import React from 'react'

const Input = props => {
    return (
        <div className="input-group mb-3">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className={`fa fa-${props.icon}`} />
                </div>
            </div>
        </div>
    )
}

export default Input