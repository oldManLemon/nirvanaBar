import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
            <div class="navbar-fixed">
                <nav>
                  <div class="nav-wrapper blue darken-4">
                    <a href="#!" class="brand-logo">B&W NirvanaBar</a>
                    <ul class="right hide-on-med-and-down text-white">
                      <li><a>Past vs Present</a></li>
                      <li><a>Edit Table</a></li>
                      <li><a>OCR</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
        );
    }
}