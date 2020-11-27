import React from 'react';
import './Search.css'

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "#95cbf7", color: "white", marginBottom: "10px"}}>Search</button>
    )
}