import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import { uniqueOptions } from './uniqueOptions'

import * as users from '../../../data/users.json'

export class SortBy extends Component {

    onChange = () => {

    }

    render() {
        const options = uniqueOptions(users, 'address', 'city')
        return (
            <FormGroup>
                <label>Sort By</label>
                <select onChange={this.onChange} value='all' className="form-control inline-select">
                    <option value="all">All</option>
                    <option value="author">Author name</option>
                    <option value="city">City name</option>
                    <option value="company">Company name</option>
                </select>
            </FormGroup>
        )
    }
}