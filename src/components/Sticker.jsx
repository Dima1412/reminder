import React from 'react';
import './Sticker.css';

const Sticker = (props) => {
    return (
        <div className='sticker'>
            <button className='bttn' onClick={props.remove}>X</button>
            <p className='text'>{props.value}</p>
        </div>
    );
}

export default Sticker;
