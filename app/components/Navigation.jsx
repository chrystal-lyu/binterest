import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Navigation extends React.Component {
  render() {
    return(
      <div>
        <div className="top-bar" id="main-nav">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/B-Flat.svg" width="50px"/>
              </li>
              <li className="menu-text">
                Binterest
              </li>
              <li className="menu-text">
                <div id="search-box">
                  <input type="text" placeholder="Find Stuff"/>
                </div>
              </li>
              <li className="menu-text">
                <div id="search-button">
                  <a href="#" className="button expand">Search</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
           <ul className="menu">
            <li className="menu-text">
              <IndexLink to="/#" activeClassName="active-link">Home</IndexLink>
            </li>
            <li className="menu-text">
              <Link to="/#" activeClassName="active-link">Explore</Link>
            </li>
           </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;