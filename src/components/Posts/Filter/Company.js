import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import { uniqueOptions } from './uniqueOptions'


export class Company extends Component {

    onChange = () => {

    }

    render() {
        const options = uniqueOptions(this.props.users, 'company', 'name')
        return (
            <FormGroup>
                <label>Filter by Company</label>
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