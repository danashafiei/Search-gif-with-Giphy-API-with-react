import React, { Component } from "react";
import ToDoItems from "./ToDoItems";

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }
    addItem (e){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
                });
            this._inputElement.value = "";

        }
        console.log(this.state.items);
        e.preventDefault();

    }
    deleteItem (key){
        var filteredItems = this.state.items.filter(function (item){
            return (item.key !== key);
        });
        this.setState({items: filteredItems});
    }






    render() {

        return(
           <div className="todoListMain">
               <div className="header">
                   <form onSubmit={this.addItem}>
                       <h3>لیست انجام کارها</h3>

                       <div className="form-group">
                           <input ref={(a) => this._inputElement = a} className="form-control text-center" placeholder=" کار خود را وارد کنید"/>

                       </div><br/>
                       <button type="submit" className="btn btn-dark btn-lg btn-block">افزودن</button>
                   </form>

               </div>
               <ToDoItems id="aaa" entries={this.state.items} delete={this.deleteItem}/>

           </div>
        );
    }

}
export default ToDoList;
