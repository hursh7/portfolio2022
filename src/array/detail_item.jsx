import React from 'react';

const DetailItem = ({item}) => {
    return (
        <>
            <li>{item.title}</li>    
            <li>{item.desc}</li>    
            <li>{item.date}</li>
        </>    
    )};

export default DetailItem;