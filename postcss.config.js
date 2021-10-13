//const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        require('postcss-import'),
        //tailwindcss('./tailwind.config.js'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('tailwindcss/nesting')(require('postcss-nesting')),

    ]
}


//https://4catalyzer.github.io/astroturf/introduction