import React, { Component } from 'react'
import { Filter } from './Filter/'

export class Posts extends Component {
    onSearch = (results) => {
        console.log('results: ', results);
    }

    render() {
        return (
            <section>
                <Filter onSearch={this.onSearch} />
                <Posts></Posts>
            </section>
        )
    }
}