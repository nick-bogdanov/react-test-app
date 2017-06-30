import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

export class Search extends Component {
    render() {
        return (
            <FormGroup>
                <FormControl type="text" placeholder="Search" />
            </FormGroup>
        )
    }
}