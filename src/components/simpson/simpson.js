import React from 'react';
import './simpson.css'
const Simpson = ({name,surname,age,gender,photo}) => {
    return (
        <div className={`simps`}>
            <h2>{name} {surname} {age} {gender}</h2>
            <img src={photo} alt={name}/>

        </div>
    );
};

export default Simpson;