import React from 'react'
import './MovieInfoBar.css';
import {calcTime, convertMoney} from '../../../helpers';

const MovieInfoBar = (props) => {
    return (
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-col">
                    <span className="rmdb-movieinfobar-info">
                        Running Time: {calcTime(props.time)}
                    </span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                <span className="rmdb-movieinfobar-info">
                        Budget: {convertMoney(props.budget)}
                    </span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                <span className="rmdb-movieinfobar-info">
                        Revenue: {convertMoney(props.revenue)}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default MovieInfoBar;