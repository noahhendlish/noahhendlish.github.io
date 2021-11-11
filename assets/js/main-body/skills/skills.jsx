import React from 'react';
import {
    Grid,
    Container,
    Heading,

} from 'theme-ui';
import Skill from './skill';
const simpleIcons = require('simple-icons');
//import simpleIcons from './simple-icons';
import allSkills from './all-skills';
//import AnimatedSkills from './animatedSkills';


import SkillsForm from './skills-form';
class Skills extends React.Component {
    constructor(props){
        super(props);
        this.buildState = this.buildState.bind(this);
        this.initialState = {skills: this.buildState()};
        this.state ={skills: this.buildState(), displayDetails: false};
        this.reset = this.reset.bind(this);
    }
    reset(){
        this.setState({skills: this.initialState()});
    }
    buildState(){
        const skills = {};
        for (const [key, value] of Object.entries(allSkills)) {
            const iconObj = simpleIcons.Get(key);
            const newObj = Object.assign({}, value, iconObj);
            skills[key]= newObj;
        }
        return skills;

    }

    toggleDisplayDetails(){
        this.setState({displayDetails: !this.state.displayDetails});
    }
    //console.log(skillsComponents);
    //filters for backend/server-side, frontend/client-side, language, database, library, framework, tool,
    //<Heading>Libraries</Heading>
    //<Grid columns={[2, '1fr 1fr']}> </Grid>
    //<Flex><Heading>Frameworks</Heading><Box></Box></Flex>
    render(){
        /*React.useEffect(()=>{
            return ;
        }, []);*/
        const skillsComponents = Object.keys(this.state.skills).map(skill=><Skill key = {this.state.skills[skill].title} skill = {this.state.skills[skill]} displayDetails ={this.state.displayDetails} />);

        return (
            <div>
            <Container sx={{variant: 'layout.section'}}>
                <Heading sx={{variant: "text.sectionHeading"}}>Stack</Heading>
                <SkillsForm skillsContainer ={this}/>
                <Grid width= {['10em']} sx={{display: 'grid', justifyItems:"center", alignItems: "center", gap: "0.2em 0.3em"}}>
                    {skillsComponents}
                </Grid>

            </Container>
            </div>
        );
    }
}
export default Skills;

