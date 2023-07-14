import React from 'react'
import cv from "../../assets/cv.pdf"

const CTA = () => {
    return (
        <divc className="cta">
            <a href={cv} download className='btn'>Download</a>
            <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </divc>
    )
}

export default CTA