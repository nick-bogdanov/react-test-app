import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import * as _ from 'lodash'

export class Search extends Component {

    onChange = (e) => {
        this.props.onSearch({
            term: e.target.value
        })
    }

    render() {
        return (
            <input type="text" placeholder='Search' onChange={this.onChange} />
        )
    }
}