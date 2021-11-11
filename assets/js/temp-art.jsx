import React from "react";
import {Box, Heading} from 'theme-ui';
//import { jsx, css } from '@emotion/react'
import { transparentize,
  //darken, lighten, lightness, hue, rotate, shade, tint, alpha, mix, complement, invert, greyscale
  }
  from '@theme-ui/color';



let headerArtSvg =<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox = "0 0 2160 1080"
      height="100%"
      width="100%"
      style={{
        backgroundColor: 'transparent',
        //color: 'primary',
        overflow: 'visible',
      }}
    >

      <path
        stroke="currentColor"
        fill="transparent"
        strokeWidth="1px"
strokeDasharray="0 0 0 0"
strokeLinecap="round"
strokeLinejoin="round"
strokeDashoffset="0"
strokeOpacity="100%"
      />
    </svg>;

const TempArt = function () {
    return(
    <Box sx = {
      {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
        //maxWidth: '573px',
        alignSelf: 'center',
        color: transparentize('text', 0.1),
      }
    } >

        <Box sx = {
            {
              display: 'inherit',
              width: '100%',
              //height: '409px',
              borderColor: 'primary',
              borderStyle: 'solid',
              borderBlockWidth: '10px',
              borderInlineWidth: '5px',
          '@media screen and (max-width: 572px)': {color: 'background', borderColor: 'transparent'}
        }}>
            {headerArtSvg}
        </Box>

        <Box sx={{position: 'absolute', width:'100%', height: '100%', top: 0, right: 0, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Box sx={{width:'100%', bg: 'background',textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBlockStyle: 'solid', borderBlockColor: 'primary', borderBlockWidth: '2.5px'}}>
                  <Heading sx={{textAlign:'center', fontSize: 8, color: 'text'}}> Noah Hendlish</Heading>

          </Box>
        </Box>


    </Box>
    
    );
}

export default TempArt;