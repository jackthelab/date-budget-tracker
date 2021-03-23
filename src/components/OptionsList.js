import React from 'react'


export default class OptionsList extends React.Component {

    render() {
        return (
            <ul className="list-group overflow-auto" style={{height: "20rem"}} >
                {this.props.options.map(option => 
                    <li key={option.id} className="list-group-item">
                        <h3>{option.name}</h3>
                        <h5>${option.price}</h5>
                        <button onClick={() => {this.props.clickAction(option)}} className="btn btn-success">Select This Item</button>
                    </li>
                )}
            </ul>
        )
    }

}