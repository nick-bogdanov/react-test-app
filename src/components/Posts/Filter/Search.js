import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

export class Search extends Component {
    onChange = (e) => {
        this.props.onSearch({
            term: e.target.value
        })
    }

    render() {
        return (
            <FormGroup>
                <FormControl type="text" onChange={this.onChange} placeholder="Search" />
            </FormGroup>
        )
    }
}