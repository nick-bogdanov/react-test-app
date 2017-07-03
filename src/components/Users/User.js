import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import './style.css'

export class User extends Component {

    render() {
        const user = this.props.user
        return (
            <article>
                <Col xs={12} md={4}>
                    <div className="user-box">
                        <h2>{user.name}</h2>
                        <h3><a href={"mailto:" + user.email}>{user.email}</a></h3>
                        <h4>website: <a href={user.website}>{user.website}</a></h4>
                    </div>
                </Col>
            </article>
        )
    }
}