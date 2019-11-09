import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = (props) =>{

/*     const {auth, profile} = props;
    const links = auth.uid ? <SignedInLink profile={profile}/> : <SignedOutLink/>; */

    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            
            <Link to="/" className="navbar-brand">Reaudi</Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
                </li>
                </ul>
                
                <ul className="navbar-nav my-auto">
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Registrate<span className="sr-only">(current)</span></NavLink>
                    
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#"> Iniciar Sesion <span className="sr-only">(current)</span></a>
                </li>
                </ul>  
            </div>
        </nav>

    )
}
export default Navbar
