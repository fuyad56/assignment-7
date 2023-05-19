import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {id, name, image, salary} = props.data;
    const handleAddPlayer = props.handleAddPlayer;
    
    const handleClick = () => {
        if (props.isAdded) {
            alert(`Player ${name} is already added!`);
        } else {
            handleAddPlayer(props.data);
        }
    };
    return (
        <div className='container' key={id}>
            <div className="container-img">
                <img src={image} alt="" />
            </div>
            <div className="container-details">
                <h1>{name}</h1>
                <h4>Salary: ${salary}</h4>
                <button onClick={handleClick}> <FontAwesomeIcon icon={faUserPlus} /> Add</button>
            </div>
        </div>
    );
};

export default Player;