import React from 'react'

export default class CurrentSelection extends React.Component {

    render() {
        return (
            <div className="card col-md-12 overflow-auto" style={{marginTop: "2.5rem", height: "10rem"}}>

                <div className="card-body">
                    <h3 className="card-title">{this.props.choice.name}</h3>
                    <h5 className="card-text">${this.props.choice.price}</h5>
                    <button className="btn btn-danger" onClick={() => {this.props.clickAction()}}>Remove Selection</button>
                </div>

            </div>
        )
    }

}