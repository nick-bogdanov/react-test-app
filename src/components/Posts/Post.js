import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'
import './post.css'

export class Post extends Component {
    onClick = (e) => {
        e.preventDefault()
        this.props.onClick(this.props.index, this.props.post)
    }

    render() {
        return (
            <Col xs={6}>
                <div className='post-box'>
                    <Button bsSize="xsmall" onClick={this.onClick} className='remove-post' bsStyle="danger">X</Button>
                    <h3>{this.props.post.title}</h3>
                    <div>{this.props.post.body}</div>
                    <hr />
                    <h5>Author name: {this.props.post.user.name}</h5>
                    <h5>Company name: {this.props.post.user.company.name}</h5>
                    <h5>City name: {this.props.post.user.address.city}</h5>
                </div>
            </Col>
        )
    }
}