import React from 'react'
import { Card } from 'react-bootstrap'
import './Cardd.css'

const Cardd = ({image, name}) => {
    return (
        <>
            <img src={image} id={name}/>
        </>
    )
}

export default Cardd
