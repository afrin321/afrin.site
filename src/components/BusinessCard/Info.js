import React from 'react'
import { Link } from "react-router-dom";

export default function Info() {
    
    const viewLinkedIn = () => {
        window.open('https://www.linkedin.com/in/afrin-haque-93a9a9135/', '_blank').focus();
    }

    

    return (
        <div className="info-section">
            <div className="img-div">               
               
            </div>
            <h1>Afrin Haque</h1>
            <h3><span className="text-title">Software Engineer</span>  <span className='text-dot'>&#8226;</span>    <span className="text-title">Frontend Developer</span></h3>
            <h4><Link className='web-link' to="/home" target={'_blank'}>afrinhaque.website</Link></h4>
            <div className="info--buttons">
                <button className="button-email"><i className="fa fa-envelope"></i>Email</button>
                <button className="button-linkedin"  onClick={viewLinkedIn}><i className="fa fa-linkedin-square"></i>LinkedIn</button>
            </div>
        </div>
    )
}
