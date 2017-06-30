import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import { uniqueOptions } from './uniqueOptions'

import * as users from '../../../data/users.json'

export class City extends Component {

    onChange = () => {

    }

    render() {
        const options = uniqueOptions(this.props.users, 'address', 'city')
        return (
            <FormGroup>
                <label>Filter by City</label>
                <select onChange={this.onChange} value='all' className="form-control inline-select">
                    <option value="all">All</option>
                    {options.map((option) =>
                        <option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>
                    )}
                </select>
            </FormGroup>
        )
    }
}