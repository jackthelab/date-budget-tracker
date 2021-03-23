import React from 'react'

export default class CurrentSelection extends React.Component {

    render() {
        return (
            <div onChange={() => {this.props.adjustTotal(this.props.choice.price)}} className="card col-md-12 overflow-auto" style={{marginTop: "2.5rem", height: "15rem"}}>

                <div className="card-body">
                    <h3 style={{borderBottom: ".1rem solid"}}>Current Choice</h3>
                    <h3 className="card-title">{this.props.choice.name}</h3>
                    <h5 className="card-text">${this.props.choice.price}</h5>
                </div>

            </div>
        )
    }

}