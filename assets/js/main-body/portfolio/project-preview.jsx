import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Link} from 'theme-ui';

//const cache = {};
/*function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}*/
/*importAll(require.context('./screenshots/', false, /\.(png|svg)$/));
console.log(cache);
window.cache = cache;*/

const ProjectPreview = function(props){

    let filename = props.title.split(" ").join("");
    let source = `assets/images/${filename}.png`;
    //width: '100px', height: '100px'
    return(
            <Box className = "thumbnail-container" sx={{my: 2}}>
                <Box className = "thumbnail">
                   <Link href={props.url}>
                    <Image src={source} sx={{width: '100%', maxWidth: '400px', borderWidth: 1, borderColor: 'secondary', borderStyle: "solid"}}></Image>
                    </Link>
                </Box>
            </Box>
    );

};
ProjectPreview.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
//module.exports = Project;
export default ProjectPreview;