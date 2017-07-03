import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'

export class SortBy extends Component {

    onChange = (e) => {
        this.props.onSearch({
            sortBy: e.target.value
        })
    }

    render() {
        return (
            <FormGroup>
                <label>Sort By</label>
                <select onChange={this.onChange} className="form-control inline-select">
                    <option value="all">All</option>
                    <option value="author">Author name</option>
                    <option value="city">City name</option>
                    <option value="company">Company name</option>
                </select>
            </FormGroup>
        )
    }
}