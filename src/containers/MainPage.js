import React from 'react'

//Components
import NavBar from '../components/NavBar'
import PreDate from './PreDate'
import Dinner from './Dinner'
import Activity from './Activity'

export default class MainPage extends React.Component {

    constructor() {
        super()

        this.state = {
            total: 0
        }

    }
    
    render() {
        return (
            <div>
                <NavBar runningTotal={this.state.total} />
                <div className="container">
                    <div className="row">
                        <PreDate />
                        <Dinner />
                        <Activity />
                    </div>
                </div>
            </div>
        )
    }

}