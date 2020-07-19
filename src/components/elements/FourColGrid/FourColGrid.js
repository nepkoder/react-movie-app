import React from 'react'
import './FourColGrid.css';
import PropTypes from 'prop-types';

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

FourColGrid.propTypes = {
    loading : PropTypes.bool,
    header: PropTypes.string
}

export default FourColGrid;