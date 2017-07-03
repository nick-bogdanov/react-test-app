import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import { uniqueOptions } from './uniqueOptions'

export class Company extends Component {

    onChange = (e) => {
        this.props.onSearch({
            filter: {
                company: e.target.value
            }
        })
    }

    render() {
        const options = uniqueOptions('company', 'name')
        return (
            <FormGroup>
                <label>Filter by Company</label>
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