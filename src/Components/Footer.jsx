import React from "react";
import Button from 'react-bootstrap/Button'

const Footer = (props) => {
    const { desc } = props

    return <footer className='bg-dark text-white text-center'>
    {desc}
    <br/>
    <Button href='https://es.wikipedia.org/wiki/Anexo:Discograf%C3%ADa_de_The_Weeknd'>Más información</Button>
</footer>

}

export default Footer