/**
 * @param {Object} provided -- the component's default styles
 * @param {Object} state -- the component's current state e.g. `isFocused`
 * @returns {Object}
 */
//import 'css' from 'emotion/react';

const customSelectStyles = {
    menu: (provided, state) => ({
        ...provided,
        //width: state.selectProps.width,
        //borderBottom: '1px dotted pink',
        //color: state.selectProps.menuColor,
        //padding: 20,
    }),

    /*control: (_, {
        selectProps: {
            width
        }
    }) => ({
        width: width
    }),*/

    singleValue: (provided, state) => {
        //const opacity = state.isDisabled ? 0.5 : 1;

        return {
            ...provided,
        };
    }
}
export default customSelectStyles;