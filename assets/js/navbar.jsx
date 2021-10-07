import React from 'react';
const NavBar = function(){
    return(
        <div>
            <div className="row px-1">
                <div className="col-sm-6 nav">
                    <nav className='nav-sidebar'>
                        <h3>Nav</h3>
                        <ul className = 'nav-list'>
                            <li>
                                a
                            </li>
                            <li>
                                b
                            </li>
                            <li>
                                c
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="col-sm-6 content">
                    <h2>Content</h2>
                </div>
            </div>
        </div>

    );
};

export default NavBar;