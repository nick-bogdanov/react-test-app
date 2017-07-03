import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './post.css'

export class Post extends Component {
    render() {
        return (
            <Col xs={6}>
                <div className='post-box'>
                    <h3>{this.props.post.title}</h3>
                    <div>{this.props.post.body}</div>
                    <hr/>
                    <h5>Author name: {this.props.post.user.name}</h5>
                    <h5>Company name: {this.props.post.user.company.name}</h5>
                    <h5>City name: {this.props.post.user.address.city}</h5>
                </div>
            </Col>
        )
    }
}