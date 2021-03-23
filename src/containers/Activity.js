import React from 'react'
import OptionsList from '../components/OptionsList'


export default class Activity extends React.Component {

    activityOptions = [
        {id: 1, name: "Movie", price: 20},
        {id: 2, name: "Concert", price: 80},
        {id: 3, name: "The Theatre", price: 100},
        {id: 4, name: "Painting Night", price: 50}
    ]

    render() {
        return (
            <div className="col-md-4">

                <h2 style={{height: "10rem"}}>Would you like to add any Activities?</h2>
                <OptionsList options={this.activityOptions} />

            </div>
        )
    }

}