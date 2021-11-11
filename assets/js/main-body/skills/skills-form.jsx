import React from 'react';
import {Flex, Box, Label, Switch, IconButton} from 'theme-ui';
import Select, {components} from 'react-select'
import PropTypes from 'prop-types';
//import makeAnimated from 'react-select/animated';
//import customSelectStyles from './select-styles';

//import theme from './../../theme-ui/theme';
//const animatedComponents = makeAnimated();


const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
     <IconButton sx={{width: 20, height: 20}}><i className="fas fa-filter"></i></IconButton>
    </components.DropdownIndicator>
  );
};

class SkillsForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sortParam: "title",
                sortDirection: "ASC",
                filters: [],
                //displayDetails: false, //add show/hide details and then hover details when hidden
            };
            this.filterBy = this.filterBy.bind(this);
            this.sortBy = this.sortBy.bind(this);
            this.reset = this.reset.bind(this);
            this.toggleDetails = this.toggleDetails.bind(this);
            this.changeSortDirection = this.changeSortDirection.bind(this);
        }
        reset() {
            this.props.skillsContainer.reset();
        }
        changeSortDirection(){
            let direction = this.state.sortDirection == "ASC" ? "DESC" : "ASC";
            this.setState({sortDirection: direction});
            this.sortBy({value: this.state.sortParam});
        }
        sortBy(input) { //
            if(input === null){
                return;
            }
            let sort = input.value || this.state.sortParam;
            this.setState({sortParam: input.value});
            //sort by name, type, use, proficiency
            let sorted = Object.values(this.props.skillsContainer.state.skills).sort((skillA, skillB) => (this.state.sortDirection == "DESC" ? (skillB[sort] > skillA[sort] ? 1 : -1) : (skillA[sort] > skillB[sort] ? 1 : -1)));
            this.props.skillsContainer.setState({
                skills: sorted
            });
        }
        toggleDetails(){

            this.props.skillsContainer.toggleDisplayDetails();
        }
        filterBy(input) {
            let filters = input.map((f) => f.value);
            let multiFilter = ((filters.includes('backend') ^ filters.includes('frontend')) || (filters.includes('backend') && filters.includes('frontend'))) && (filters.includes('framework') || filters.includes('database') || filters.includes('library') || filters.includes('language'));
            if(filters.length == 0){
                let initialState = this.props.skillsContainer.initialState.skills;
                this.setState({filters: filters});
                this.props.skillsContainer.setState({skills: initialState});
            } else {

                // eslint-disable-next-line no-unused-vars
                let filteredSkillsArr = Object.entries(this.props.skillsContainer.initialState.skills).filter(([label, skill]) => {
                    let use = filters.includes(skill['use']);
                    let type = filters.includes(skill['type']);
                    if (skill['use'].includes(',')) { //e.g. let use = label === "javascript" ? -- has both frontend and backend
                            let uses = skill['use'].split(', ');
                            console.log(uses);
                            use = uses.some((u) => filters.includes(u));
                    }

                    return multiFilter ? use && type : use || type;
                }
                );
                let filteredSkills = Object.fromEntries(filteredSkillsArr);
                this.setState({filters: filters});
                this.props.skillsContainer.setState({skills: filteredSkills});
            }
        }

        render() {
        const sortDirectionBtn = this.state.sortDirection =="ASC" ? <i className="fas fa-sort-amount-down"></i> : <i className="fas fa-sort-amount-up"></i>;
        const sortOptions = [{value: 'title', label: 'Name'},{value: 'type', label: 'Type'},{value: 'use', label:'Use'}, {value: 'expLevelNum', label: 'Proficiency'}]

                //<Box as="form" onSubmit={(e) => e.preventDefault()}>
                //options={colourOptions}
                //isSearchable
                //
                //isDisabled
        const filterOptions = [{
                label: 'Use',
                options: [{value: 'backend', label: 'Backend'}, {value: 'frontend', label: 'Frontend'}],
            },
            {
                label: 'Type',
                options: [{value: 'framework', label: 'Framework', isDisabled: false}, {value: 'database', label: 'Database'}, {value: 'library', label: 'Library'}, {value: 'language', label:"Language"} ],
            }];
            //components ={animatedComponents}
        return(

            <Flex className = 'skills-form' sx={{justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: 3, px: 0, gap:3}}>
                
                <Box className = 'sort-container' sx={{minWidth: '126.5px'}}>
                    <Label sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Sort <IconButton sx={{padding:0, width: 'fit-content', height: '100%'}}onClick={this.changeSortDirection}>{sortDirectionBtn}</IconButton></Label>
                    <Select options = {sortOptions} isSearchable
                    className='react-select-container' classNamePrefix="react-select" onChange={this.sortBy} defaultValue={sortOptions[0]}
                    theme = {
                        (theme) => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                primary50: 'var(--theme-ui-colors-reactSelectOptionFocus)', //'#3d4550', //options select
                                primary75: 'var(--theme-ui-colors-reactSelectPrimary75)', //'#757576', //'#252f3a',
                                danger: 'var(--theme-ui-colors-reactSelectDanger)', //#43e131a
                                dangerLight: 'var(--theme-ui-colors-reactSelectDangerLight)', //'#d96069', //#e79c9c
                                primary25: 'var(--theme-ui-colors-reactSelectOptionHover)', //'#8A9095', //'#555d66', //options hover
                                primary: 'var(--theme-ui-colors-inputContainerFocusOutline)', //container outline //inputContainerFocusOutline
                            },
                        })
                    }
                    isOptionDisabled={(option) => option.value == this.state.sortParam} />
                </Box>



                    <Box sx={{  minWidth: '8em'}}>
                    <Label  sx={{ flex: 1 }}>
                        { //htmlFor="show-skill-details"
                            this.props.skillsContainer.state.displayDetails ? 'Hide ' : 'Show '
                        }
                        Details
                    </Label>
                        <Switch
                            onChange = {this.toggleDetails}
                            id="show-skill-details"
                            //label="Show Details"
                            //defaultChecked={true}
                            sx={{
                            }}/>
                    </Box>
                    <Box className = 'filter-container' sx={{minWidth: '100%'}}>
                    <Label sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Filter</Label>
                    <Select options = {filterOptions}  isMulti  isSearchable isClearable
                    closeMenuOnSelect={false}
                    components={{ DropdownIndicator }}
                    className='react-select-container' classNamePrefix="react-select" onChange={this.filterBy}  theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary50: 'var(--theme-ui-colors-reactSelectOptionFocus)', //'#3d4550', //options select
                                            primary75: 'var(--theme-ui-colors-reactSelectPrimary75)', //'#757576', //'#252f3a',
                                            danger: 'var(--theme-ui-colors-reactSelectDanger)', //#43e131a
                                            dangerLight: 'var(--theme-ui-colors-reactSelectDangerLight)', //'#d96069', //#e79c9c
                                            primary25: 'var(--theme-ui-colors-reactSelectOptionHover)', //'#8A9095', //'#555d66', //options hover
                                            primary: 'var(--theme-ui-colors-inputContainerFocusOutline)', //container outline
                                        },
                                        })
                                        }
                                        isOptionDisabled = {
                                            (option) => ((option.value == 'database' && (this.state.filters.includes('frontend') && !this.state.filters.includes('backend'))) || (option.value == 'frontend' && this.state.filters.includes('database') && this.state.filters.length==1))
                                        } //styles={customSelectStyles}
                                        />
                </Box>
            </Flex>

        );
            }
}
SkillsForm.propTypes = {
    skillsContainer: PropTypes.object.isRequired,
};
export default SkillsForm;
