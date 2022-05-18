import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])
    return (
        <div className='flex justify-center'>
            <h2>Todo :{fruits.length}</h2>
        </div>
    );
};

export default ToDo;