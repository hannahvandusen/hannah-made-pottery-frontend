import React from "react"
import '../../App.css';
import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const linkStyle = {
    color: "#fffce5", 
    fontSize: "1.25em",
    
}; 

function Navigation() {
    return (
    <>
        <div className="sticky-top" style={{width: "100%", backgroundColor: "#252e38", opacity: "95%"}}>
        <NavbarBrand
                href="/"
                className="navbarbrand"
                style={{ fontSize: "2.5em", color: "#c0311f" }}
            >
                Hannah Made Pottery
            </NavbarBrand>

            <Nav className="navigation" style={{justifyContent: "space-evenly", paddingLeft: "5%", paddingRight: "5%", paddingBottom: "1%", alignItems: "center", }}>
            {/* <i className="hamburger">
                <GiHamburgerMenu size={25} />
            </i> */}

                        {/* <NavItem>
                                <NavLink href="/store">Store</NavLink>
                            </NavItem> */}
            <NavItem className="link">
                <NavLink href="/" style={linkStyle}>
                Home</NavLink>
            </NavItem>
            <NavItem className="link">
                <NavLink href="/portfolio" style={linkStyle}>
                Portfolio
                </NavLink>
            </NavItem>
            <NavItem className="link">
                <NavLink href="/about" style={linkStyle}>
                About
                </NavLink>
            </NavItem>
            <NavItem className="link">
                <NavLink href="/contact" style={linkStyle}>
                Contact
                </NavLink>
            </NavItem>
            <NavItem>
                {/* <NavLink 
                    href='https://www.instagram.com/hannahmadepottery/' 
                    target="_blank"
                    rel="noopener noreferrer" 
                    style={{color: "#E4405F"}}
                >
                    <FontAwesomeIcon icon={faInstagram} size="1x" /> 
                </NavLink > */}
                <NavLink 
                    href='https://www.instagram.com/hannahmadepottery/' 
                    target="_blank"
                    rel="noopener noreferrer" 
                    style={{color: "#E4405F"}}
                    
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" /> 
                </NavLink >

            </NavItem>
            </Nav>
        </div>

    </>
  )
}

export default Navigation
