import React from 'react'
import OptionsList from '../components/OptionsList'
import CurrentSelection from '../components/CurrentSelection'


export default class Dinner extends React.Component {

    dinnerOptions = [
        {id: 1, name: "Pears and Pods: Vegetarian's Delight", price: 40},
        {id: 2, name: "Beet and Potatoes: Innovating Meat Substitutes", price: 35},
        {id: 3, name: "Fish & 'Ships: The Local Pub to Watch Your Football Club", price: 25},
        {id: 4, name: "Fine Wine and Dine: The Utmost Dining Experience", price: 75}
    ]

    constructor() {
        super()

        this.state = {
            selectedActivity: {name: "There is nothing chose yet.", price: 0}
        }
    }

    changeSelection = (activity) => {
        this.setState({
            selectedActivity: activity
        })
    }

    render() {
        return (
            <div className="col-md-4">

                <h2 style={{height: "10rem"}}>Where would you like to go for dinner?</h2>
                <OptionsList options={this.dinnerOptions} clickAction={this.changeSelection} />
                <CurrentSelection choice={this.state.selectedActivity} />

            </div>
        )
    }

}