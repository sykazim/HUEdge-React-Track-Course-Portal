import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/HashedInByDeloitte.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand text-uppercase" to="/courses"><img className='img-thumbnail' width= "180" src={Logo} alt="COURSE FINDER"/></Link>
        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active px-2">
                    <Link className="nav-link text-uppercase active" to="/courses">courses</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link text-uppercase" to="/wishlist">my wishlist</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/cart"><i className="fa fa-cart-shopping"></i></Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/profile"><i className="fa fa-regular fa-circle-user"></i></Link>
                </li>
            </ul>
        </div>
</nav>
  )
}

export default Navbar