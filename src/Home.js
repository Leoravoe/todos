import React, { Component } from 'react';
import List from './List';


class Home extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
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
            this.input.value = ""
        }
        // console.log(this.state.items)
    }
    deleteItems(id){
        const changedItems = this.state.items.filter(item =>{ return item.key !== id})
        this.setState({
            items : changedItems
        })
    }
    render() { 
        return ( 
            <div className="formforadding">
            <form onSubmit={this.addItem}>
                <input ref = {a =>{ this.input=a}}
                type="text"/>
                <button type="submit">
                    Add
                </button>
            </form>    
                <List entries ={this.state.items} delete ={this.deleteItems}/>
            </div>
            
            
        );
    }
}
 
export default Home;