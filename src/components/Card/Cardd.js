import React from 'react'
import { Card } from 'react-bootstrap'
import './Cardd.css'

const Cardd = ({image, name, nextCard}) => {
    return (
        <>
            <img src={image} id={name} onClick={nextCard}/>
        </>
    )
}

export default Cardd
