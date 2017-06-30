import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import { uniqueOptions } from './uniqueOptions'
import { connect } from 'react-redux'
import { filterByCity } from '../../../actions/filter'

class City extends Component {
    constructor(props, a, b) {
        super(props)
        console.log(props)
    }

    onChange = (e) => {
        this.props.filterByCity(e.target.value)
    }

    render() {
        const options = uniqueOptions('address', 'city')
        return (
            <FormGroup>
                <label>Filter by City</label>
                <select onChange={this.onChange} className="form-control inline-select">
                    <option value="all">All</option>
                    {options.map((option) =>
                        <option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>
                    )}
                </select>
            </FormGroup>
        )
    }
}

export default connect(
  state => { return {users: state.reducers.users}},
  {filterByCity}
)(City)