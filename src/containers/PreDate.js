import React from 'react'
import OptionsList from '../components/OptionsList'
import CurrentSelection from '../components/CurrentSelection'


export default class PreDate extends React.Component {

    predateOptions = [
        {id: 1, name: "Flowers", price: 20},
        {id: 2, name: "Chocolates", price: 10},
        {id: 3, name: "Send Card", price: 3},
        {id: 4, name: "Custom Gift", price: 30}
    ]

    constructor() {
        super()

        this.state = {
            selectedActivity: {name: "There is nothing chose yet.", price: 0}
        }
    }

    render() {
        return (
            <div className="col-md-4">
                
                <h2 style={{height: "10rem"}}>Any purchases before the date?</h2>
                <OptionsList options={this.predateOptions} />
                <CurrentSelection choice={this.state.selectedActivity} />
            </div>
        )
    }

}