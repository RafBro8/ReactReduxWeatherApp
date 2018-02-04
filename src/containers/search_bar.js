import React, { Component } from 'react';


//1. App starts up and renders SearcBar component
export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        //this binding above fixes errors where this.setState()
        //below is undefined

        //'this' is an instance of SearchBar class and has function
        //of onInputChange, bind that function to (this) which is SearchBar
        //then replace onInputChange with new binded instance of onInputChange
    }


//3. onInputChange(e) gets called from render() below
    onInputChange(e) {
        //console.log(e.target.value);
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        //this prevents a call going to the server back-end
        // and searchbox refreshing and clearing searchbox
        // value (ex: name of city you put in)

        //This function Fetches data


    }


 //2. render is called and makes callback to onInputChange(e) above
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day Weather forecast"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

//Controlled field - is a form element where the value of the input
//is set by the State of the component
//ex: value={this.state.term}


//CALLBACKS example
//onChange is a callback function that call event onInputChange
//so onInputChange needs to be binded to 'this'

//placeholder is the shaded text that appears with search box

//<form> has functionality to allow input into search box and then
//allows pressing Enter key or Submit button