import React, { Component } from 'react'
import { City } from './City'
import { Company } from './Company'
import { Search } from './Search'
import { SortBy } from './SortBy'
import { Col } from 'react-bootstrap'

import './style.css'

export class Filter extends Component {
    render() {
        return (
            <section className='row'>
                <Col xs={3}>
                    <SortBy onSearch={this.props.onSearch} />
                </Col>
                <Col xs={3}>
                    <City onSearch={this.props.onSearch} />
                </Col>
                <Col xs={4}>
                    <Company onSearch={this.props.onSearch} />
                </Col>
                <Col xs={2}>
                    <Search onSearch={this.props.onSearch} />
                </Col>
            </section>
        )
    }
}