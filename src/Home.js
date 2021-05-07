/*Programmer : Dana Shafiei
  Home Page for search gifs with giphy Api
 */
import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import request from 'superagent';//for request and get gifs in link

class Home extends Component{
    constructor() {
        super();
        this.state = {
            gifs :[]
        };

    }
    //function for get gifs in link
    handleTermChange = (term) =>{
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=xZ1aTmlmMDirdhj2L4wo6YDgt8vAGs95`;
        request.get(url, (err, res) =>{
            this.setState({gifs: res.body.data})

        });

    };
    render() {
        return(
              <div className="container">

                  <nav className="navbar navbar-expand-sm fixed-top">
                      <ul className="nav-color nav nav-tabs">
                          <li className="nav-item">
                              <a className="nav-link" href="/ToDoList">لیست انجام کارها</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Profile">پروفایل کاربری</a>
                          </li>
                      </ul>
                  </nav>
                  <SearchBar onTermChange={term => this.handleTermChange(term)}/>
                  <GifList gifs={this.state.gifs}/>


              </div>



        );
    }
}
export default Home;