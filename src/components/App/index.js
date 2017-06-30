import React from 'react'
import { Route } from 'react-router'
import { Grid } from 'react-bootstrap'
import { Header } from './header'
import { Users } from '../Users'
import { Posts } from '../Posts'

export function App(props) {
    return (
        <div>
            <Header />
            <Grid>
                <Route path="/users" edit={false} component={Users} />
                <Route path="/posts" edit={true} component={Posts} />
            </Grid>
        </div>
    )
}