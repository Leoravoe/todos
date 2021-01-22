import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = { 
            items: []
         }
    }
    addItem(e){
        e.preventDefault();
        if(this.input.value !== ""){
            let newItem = {
                body : this.input.value,
                key : Date.now()
            }
            // console.log(newItem)
            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(newItem) 
                };
            });
            
        }
        // console.log(this.state.items)
    }
    render() { 
        return ( 
            <form onSubmit={this.addItem}>
                <input ref = {a =>{ this.input=a}}
                type="text"/>
                <button type="submit">
                    Add
                </button>
            </form>
         );
    }
}
 
export default Home;