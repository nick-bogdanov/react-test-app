import React, { Component } from 'react'
import { Filter } from './Filter/'
import { Post } from './Post'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import * as _ from 'lodash'

import * as users from '../../data/users.json'
import * as posts from '../../data/posts.json'

export class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: {
                city: null,
                company: null
            },
            sortBy: null,
            term: null,
            posts: this._createPostWithUserInfo()
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

        this.updatePosts(newState)

    }

    removePost = (index, post) => {
        confirmAlert({
            title: 'Remove post',
            message: 'Are you shure remove this post?',
            confirmLabel: 'Remove',
            cancelLabel: 'Nope',
            onConfirm: () => {
                // Remove from global posts collection
                this._removePostFromCurrentCollection(post)
                // remove from current state
                let posts = this.state.posts.slice()
                posts.splice(index, 1)
                this.setState({ posts })
            }
        })
    }

    render() {
        return (
            <div>
                <Filter onSearch={this.onSearch} />
                <h3>Posts: {this.state.posts.length}</h3>
                {this.state.posts.map((post, index) =>
                    <Post key={post.id.toString()} onClick={this.removePost} index={index} post={post}></Post>
                )}
            </div>
        )
    }

    updatePosts(newState) {
        let posts = this._createPostWithUserInfo()
        // filter by search term
        posts = this._filterUsers(posts, newState.term, 'title')
        // filter by city
        posts = this._filterUsers(posts, newState.filter.city, 'address', 'city')
        // filter by company
        posts = this._filterUsers(posts, newState.filter.company, 'company', 'name')
        // sort filtered results
        posts = this._sortUsers(posts, newState.sortBy)

        newState.posts = posts

        this.setState(newState)

        return this.state.posts

    }

    _sortUsers(posts, sortTerm) {

        if (sortTerm && sortTerm !== 'all') {
            switch (sortTerm) {
                case 'author':
                    return posts.sort(sortByTitle)
                case 'city':
                    return posts.sort(sortByCity)
                case 'company':
                    return posts.sort(sortByCompany)
                default:
                    return posts
            }
        } else {
            return posts
        }

        function sortByTitle(a, b) {
            if (a.user.name < b.user.name)
                return -1;
            if (a.user.name > b.user.name)
                return 1;
            return 0;
        }

        function sortByCity(a, b) {
            if (a.user.address.city < b.user.address.city)
                return -1;
            if (a.user.address.city > b.user.address.city)
                return 1;
            return 0;
        }

        function sortByCompany(a, b) {
            if (a.user.company.name < b.user.company.name)
                return -1;
            if (a.user.company.name > b.user.company.name)
                return 1;
            return 0;
        }
    }

    _filterUsers(posts, find, ...terms) {
        if (find && find !== 'all') {
            const filtered = posts.filter((post) => {
                if (terms[0] !== 'title') {
                    return post.user[terms[0]][terms[1]] === find
                } else {
                    console.log(find)
                    return post.title.indexOf(find) !== -1
                }
            })
            return filtered
        } else {
            return posts
        }
    }

    _createPostWithUserInfo() {
        if (this.posts) {
            return this.posts
        }

        const newPosts = _.cloneDeep(posts)
        newPosts.forEach(post => {
            post.user = this._getUserById(post.userId)
            return post
        })
        this.posts = newPosts
        return this.posts
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

    _removePostFromCurrentCollection(post) {
        console.log(this.posts)
        const index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
    }
}