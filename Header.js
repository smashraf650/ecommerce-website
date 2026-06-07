import React from 'react';
import './Header.css';
import logo from '../../images/Capture2.PNG'

const header = () => {
    return (
        <div>
             <nav className="header">
                 <img src={logo} alt="venture"/>
                 <a href="shop">shop</a>
                 <a href="review">review</a>
                 <a href="Manage inventory">Manage inventory</a>


             </nav>
        </div>
    );
};

export default header;