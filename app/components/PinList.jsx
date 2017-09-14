import React from 'react';
import {Link} from 'react-router';

import Navigation from 'Navigation';

export class PinList extends React.Component {
  render() {
    return(
      <div>
        <div id="wrapper">
          <div id="columns">
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <Link to="/pins/0"><img src="https://i.pinimg.com/564x/f2/a5/e3/f2a5e3bbf3b8bd38fa449fe3c3ae2b37.jpg"/></Link>
              <div className="caption overlay">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/80/60/5b/80605b71cad0392c06a98de4fa6830c8.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/b1/81/b0/b181b08df911e56fbbeb661246a120c9.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/ad/00/9e/ad009e1e5f11405cb23bcebcd1b832bc.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/75/17/7f/75177fdc3befc43acbff527ce4f38f2e.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/b0/06/91/b0069136fd4fb5fb7f340e3f2bfdbdca.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/f0/2e/c9/f02ec9ac2120701aded1a7edf30dca91.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/52/87/91/528791a6de3776a53d3cc20ac477494c.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/cf/95/9b/cf959b1ef2ef8d7b3c2707c89da80a4d.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/1a/2b/0b/1a2b0b5c19ebe237e06214fa7d9832fd.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/39/07/00/390700151528f9e183286c706d3a55b6.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="pin">
              <div><button className="button">+ Save</button></div>
              <a><img src="https://i.pinimg.com/564x/ec/66/30/ec6630d38bbf15c6f35d45c6411cd3d6.jpg"/></a>
              <div className="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
};

export default PinList;