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
            predateCost: 0,
            dinnerCost: 0,
            activityCost: 0
        }

    }

    totalCost = () => {
        return this.state.predateCost + this.state.dinnerCost + this.state.activityCost
    }

    newPredateCost = (cost) => {
        this.setState({ predateCost: cost })
    }

    newDinnerCost = (cost) => {
        this.setState({ dinnerCost: cost })
    }

    newActivityCost = (cost) => {
        this.setState({ activityCost: cost })
    }
    
    render() {
        return (
            <div>
                <NavBar runningTotal={this.totalCost()} />
                <div className="container">
                    <div className="row">
                        <PreDate adjustTotal={this.newPredateCost} />
                        <Dinner adjustTotal={this.newDinnerCost} />
                        <Activity adjustTotal={this.newActivityCost} />
                    </div>
                </div>
            </div>
        )
    }

}