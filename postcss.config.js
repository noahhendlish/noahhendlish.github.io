//const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: {
        "postcss-import": {},
        "precss":{},

        "rucksack-css":{
            autoprefixer: true, reporter: true, fallbacks: true,
        },
        'tailwindcss':{},
            //require('tailwindcss/nesting')(require('postcss-nesting')),

    }
}


//https://4catalyzer.github.io/astroturf/introduction

/*
"postcss-advanced-variables"
"postcss-preset-env"
"postcss-atroot"
"postcss-property-lookup"
"postcss-preset-env", {},

"postcss-nested"
//    'autoprefixer',{},
*/