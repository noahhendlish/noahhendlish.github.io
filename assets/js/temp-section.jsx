/** @jsx jsx */
import {
    Box,
    AspectRatio,
    Heading,
    jsx
} from 'theme-ui'

import React from 'react';
class TempSection extends React.Component{
        render(){
            return (
                <Box>
                <AspectRatio
                    ratio={16 / 9}
                    sx={{
                        p: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'background',
                        bg: 'green',
                    }}>
                    <Heading>{this.props.name}</Heading>
                    </AspectRatio>

                </Box>
            );
        }
}
export default TempSection;
