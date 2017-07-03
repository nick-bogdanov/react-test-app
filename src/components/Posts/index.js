import React, { Component } from 'react'
import { Filter } from './Filter/'
import { Post } from './Post'
import * as _ from 'lodash'

import * as users from '../../data/users.json'
import * as posts from '../../data/posts.json'

export class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // use init for first render
            init: true,
            filter: {
                city: null,
                company: null
            },
            sortBy: null,
            term: null
        }
    }

    onSearch = (results) => {
        const newState = Object.assign({}, this.state)
        newState.init = false
        // if we update filters object, we need manually change only field 
        // that will be updated in order to save previos filter.
        if (results.hasOwnProperty('filter')) {
            // If we update filters, we get side effect. Old filter value will be removed from object.
            // We need to copy key that will be updated, and set this value manually to the copy object.
            const key = Object.keys(results.filter)[0]
            newState.filter[key] = results.filter[key]
        } else {
            // Update single value fields
            Object.assign(newState, results)
        }

        this.setState(newState)
        setTimeout(() => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <Filter onSearch={this.onSearch} />
                {this.Posts().map((post) =>
                    <Post key={post.id.toString()} post={post}></Post>
                )}
            </div>
        )
    }

    Posts() {
        let users = this._createPostWithUserInfo()
        // if we come in the first time, silently return posts, merged with user info
        if (this.state.init) {
            return users
        }

        // filter by city
        users = this._filterUsers(users, this.state.filter.city, 'address', 'city')
        // filter by company
        users = this._filterUsers(users, this.state.filter.company, 'company', 'name')
        console.log(users)

        return users

    }

    _filterUsers(users, find, ...terms) {
        console.log(terms)
        if (find && find !== 'all') {
            const filtered = users.filter((post) => {
                return post.user[terms[0]][terms[1]] === find
            })
            return filtered
        } else {
            return users
        }
    }

    _createPostWithUserInfo() {

        const newPosts = _.cloneDeep(posts)
        newPosts.forEach(post => {
            post.user = this._getUserById(post.userId)
            return post
        })
        return newPosts
    }

    _getUserById(id) {
        let userData = null
        users.forEach(user => {
            if (Number(user.id) === Number(id)) {
                userData = user
            }
        })
        return userData
    }
}