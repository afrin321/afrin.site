import React from 'react'

export default function Footer() {
    const viewTwitter = () => {
        window.open('https://twitter.com/afrinhaque193', '_blank').focus();
    }

    

    return (
        <footer>
            <div>
                <i className="fa fa-twitter" onClick={viewTwitter}></i>
                <i className="fa fa-facebook" ></i>
                <i className="fa fa-instagram" ></i>
                <i className="fa fa-github" ></i>
            </div>
        </footer>
    )
}