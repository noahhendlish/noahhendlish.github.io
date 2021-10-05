import React from 'react';
import ReactDOM from 'react-dom';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


function Root() {
    return(
        <div>
                <h1>Hello World</h1>
                <p>I'm hosted with GitHub Pages and working!</p>
        </div>
    );
}


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root/>, main);
});