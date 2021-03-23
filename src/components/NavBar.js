import React from 'react'


export default class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-text"><h1>Date Night Budgeter</h1></span>
                    <span className="navbar-text"><h4>Total: ${this.props.runningTotal}</h4></span>
                </div>
            </nav>
        )
    }

}