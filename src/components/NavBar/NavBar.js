import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import bell from './bell.svg';
import user from './user.svg';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <nav>
              <Link to="/" className="logo"><img src={logo} alt={logo}/></Link>
              <div>
                <ul className="navlinks mx-auto">
                  <li><Link to="/">Dashboard</Link></li>
                  <li><Link to="/">Customers</Link></li>
                  <li><Link to="/">Associates</Link></li>
                  <li><Link to="/requests">Requests</Link></li>
                  <li><Link to="/">Schedules</Link></li>
                  <li><Link to="/">Payments</Link></li>
                  <li><Link to="/">Settings</Link></li>
                </ul>
                <ul className="notification-wrapper">
                  <li className="mr-2"><Link to="/"><img src={bell} alt={bell} /></Link></li>
                  <li><Link to="/"><img src={user} alt={user} /></Link></li>
                </ul>
              </div>
            </nav>
        );
    }
}


  
  
  

export default NavBar;