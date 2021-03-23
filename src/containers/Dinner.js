import React from 'react'
import OptionsList from '../components/OptionsList'


export default class Dinner extends React.Component {

    dinnerOptions = [
        {id: 1, name: "Pears and Pods: Vegetarian's Delight", price: 40},
        {id: 2, name: "Beet and Potatoes: Innovating Meat Substitutes", price: 35},
        {id: 3, name: "Fish & 'Ships: The Local Pub to Watch Your Football Club", price: 25},
        {id: 4, name: "Fine Wine and Dine: The Utmost Dining Experience", price: 75}
    ]

    render() {
        return (
            <div className="col-md-4">

                <h2 style={{height: "10rem"}}>Where would you like to go for dinner?</h2>
                <OptionsList options={this.dinnerOptions} />

            </div>
        )
    }

}