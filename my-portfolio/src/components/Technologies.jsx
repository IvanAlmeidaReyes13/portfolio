import React from 'react'
import c from '../recursos/c.png'
import electron from '../recursos/electron.png'
import java from '../recursos/java.png'
import react from '../recursos/react.png'
import js from '../recursos/js.png'
import net from '../recursos/net.jpg'
import php from '../recursos/php.png'
import ps from '../recursos/ps.png'
import fire from '../recursos/fire.png'
import html from '../recursos/html.png'
import lr from '../recursos/lr.png'
import mysql from '../recursos/mysql.png'
import pr from '../recursos/pr.png'
const Technologies = () => {
    

    return (
        <div className="tech" id="tech">
            <h2>Tecnologias</h2>
            <p className='mb-5'>Estas son algunas de las tecnologias que más domino.</p>
            <div className='icons'>
            <img className='mx-2' src={js} height='50px'></img>
            <img className='mx-2' src={react} height='50px'></img>
            <img className='mx-2' src={c} height='50px'></img>
            <img className='mx-2' src={net} height='50px'></img>
            <img className='mx-2' src={php} height='60px'></img>
            
            <img className='mx-2' src={mysql} height='50px'></img>

            </div>
            <p className='mt-5'>Además de diversos kit de estilo y funcionalidades como JQuery, Bootstrap, Metronic,Materialize... </p> 
        </div>
    )
}

export default Technologies