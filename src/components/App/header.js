import React from 'react'
import { Grid, Navbar, Button, NavItem, NavbarBrand, Nav } from 'react-bootstrap'

export function Header() {
    return (
        <Navbar bsStyle="inverse">
            <Grid>
                <NavbarBrand>
                    <a href="/">Blog</a>
                </NavbarBrand>
                <Nav bsStyle="pills">
                    <NavItem href="/posts">Posts</NavItem>
                    <NavItem href="/users">Users</NavItem>
                </Nav>
                <Button className='pull-right' bsStyle="link">Sign In</Button>
            </Grid>
        </Navbar>
    )
}