import React from "react";
import { Card as CardBootstrap } from 'react-bootstrap'

const Card = (props) => {
    const { title, desc, photo} = props

    return (
        <CardBootstrap>
            <CardBootstrap.Img variant="top" src={photo} />
            <CardBootstrap.Body>
                <CardBootstrap.Title>{title}</CardBootstrap.Title>
                <CardBootstrap.Text>{desc}</CardBootstrap.Text>
            </CardBootstrap.Body>
        </CardBootstrap>
    )
}

export default Card