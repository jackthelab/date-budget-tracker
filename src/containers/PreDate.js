import React from 'react'
import OptionsList from '../components/OptionsList'


export default class PreDate extends React.Component {

    predateOptions = [
        {id: 1, name: "Flowers", price: 20},
        {id: 2, name: "Chocolates", price: 10},
        {id: 3, name: "Send Card", price: 3},
        {id: 4, name: "Custom Gift", price: 30}
    ]

    render() {
        return (
            <div className="col-md-4">
                
                <h2 style={{height: "10rem"}}>Any purchases before the date?</h2>
                <OptionsList options={this.predateOptions} />
                
            </div>
        )
    }

}