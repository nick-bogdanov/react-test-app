import React, { Component } from 'react'

import { User } from './User'
import * as users from '../../data/users.json'

export class Users extends Component {
    render() {
        return (
            <section className="row">
                {users.map((user) =>
                    <User key={user.id.toString()} user={user}></User>
                )}
            </section>
        )
    }
}