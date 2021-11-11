

import React from 'react';
import Project from './project';
import {Grid, Container, Heading, Link, Text} from 'theme-ui';
import projects from './projects';





//projects.forEach((project)=>{(project.demo, project.title)})
const ProjectPortfolio = function () {

    return (
        <Container sx={{variant: 'layout.section'}}>
            <Heading sx={{variant: "text.sectionHeading"}}>Projects</Heading>
            <Grid width= {['220px']} sx={{display: 'grid', justifyItems:"center", alignItems: "center", gap: "0.2em 0.3em"}}>
                    {projects.map((project, idx)=><Project key = {idx} title = {project.title} demo = {project.demo} repo ={project.repo}/>)}
            </Grid>
            <Text> See more on my <Link href = "https://www.github.com/noahhendlish" > Github </Link></Text>
        </Container>
    );

};
export default ProjectPortfolio;
