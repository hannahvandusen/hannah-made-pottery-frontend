import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer style={{
                // color: "#fffce5", 
                // backgroundColor: "#252e38"
                }}>
                <p>
                    <section>Hannah Made Pottery &copy; {currentYear}</section>
                    <a 
                        href='https://www.instagram.com/hannahmadepottery/' 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#E4405F"}}
                    >   
                        <FontAwesomeIcon icon={faInstagram} size="1x" /> 
                    </a> 
                </p>
            </footer>
        </div>
    )
}

export default Footer; 