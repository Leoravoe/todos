import React, { Component } from 'react';
class List extends Component {
    // state = {  }
    constructor(props) {
        super(props);
        this.display = this.display.bind(this);
      }
    // delete(key) {
    //     this.props.deleteItems(key)
    // }
    display(entries) {
        return ( <>
        <li key = {entries.key} >{entries.body}</li>
        <button onClick = {() =>{
            this.props.delete(entries.key)
        }}>Delete</button>
        </>)
    }
    render() { 
        let listentries = this.props.entries
        let singleEntries = listentries.map(this.display)
        return ( 
            <div className="allentries">
                <ul>
                    {singleEntries}
                </ul>
            </div>
            
         );
    }
}
 
export default List;