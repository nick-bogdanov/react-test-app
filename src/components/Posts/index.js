import React, { Component } from 'react'
import { Filter } from './Filter/'
import { Post } from './Post'
import * as _ from 'lodash'

import * as users from '../../data/users.json'
import * as posts from '../../data/posts.json'

export class Posts extends Component {
    onSearch = (results) => {
        console.log('results: ', results);
    }

    render() {
        return (
            <div>
                <Filter onSearch={this.onSearch} />
                {this._createPostWithUserInfo().map((post) =>
                    <Post key={post.id.toString()} post={post}></Post>
                )}
            </div>
        )
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