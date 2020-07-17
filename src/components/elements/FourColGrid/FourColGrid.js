import React from 'react'
import './FourColGrid.css';

const FourColGrid = (props) => {

    const renderElement = () => {
        return props.children.map( (element, index) => {
            return (
                <div key={index} className="rmdb-grid-element">
                    {element}
                </div>
            )
        } )
    }

    return (
        <div className="rmdb-grid">
            {props.header && !props.loading ? 
            <h1>{props.header}</h1>
            : null    
        }
        <div className="rmdb-grid-content">
            {renderElement()}
        </div>
        </div>
    )
}

export default FourColGrid;