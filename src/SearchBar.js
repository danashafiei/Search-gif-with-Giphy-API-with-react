/*Programmer : Dana Shafiei
 A page to enter the desired word and catch the word and search for it
 */
import React, { Component } from "react";

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }
    onInputChange(term){
        this.setState({term});
        this.props.onTermChange(term);
    }
    render() {
        return(
            <div className="search">
                <input className="in-s fixed-top text-center" onChange={event => this.onInputChange(event.target.value)} placeholder="جستجوی گیف.."/>
            </div>
        );
    }

}
export default SearchBar;