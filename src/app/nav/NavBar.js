import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component{
    render(){
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item exact as={NavLink} to='/' header>
                        Facebook
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/posts'>
                        Posts
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button as={NavLink} to='/login' inverted>Login</Button>
                        <Button as={NavLink} to='/register' inverted>Register</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}