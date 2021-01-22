import React, { Component } from 'react';
class List extends Component {
    // state = {  }
    display(entries) {
        return <li key = {entries.key} >{entries.body}</li>
    }
    render() { 
        let listentries = this.props.entries
        let singleEntries = listentries.map(this.display)
        return ( 
            <ul>
                {singleEntries}
            </ul>
         );
    }
}
 
export default List;