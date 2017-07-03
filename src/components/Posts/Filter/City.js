import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import { uniqueOptions } from './uniqueOptions'

export class City extends Component {
    constructor(props, a, b) {
        super(props)
    }

    onChange = (e) => {
        this.props.onSearch({
            filter: {
                city: e.target.value
            }
        })
    }

    render() {
        const options = uniqueOptions('address', 'city')
        return (
            <FormGroup>
                <label>Filter by City</label>
                <select onChange={this.onChange} className="form-control inline-select">
                    <option value="all">All</option>
                    {options.map((option) =>
                        <option key={option.toLowerCase()} value={option}>{option}</option>
                    )}
                </select>
            </FormGroup>
        )
    }
}