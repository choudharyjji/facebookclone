import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class RegisterPage extends Component {

    state = {
       email: '',
       passowrd: '',
       confirmPassword: '' 
    }

    //fat arrow function
    handleSubmit = () => {
        const { email , password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            //give user error 
            console.log('Password did not matched');
            return false;
        }

        if(email === 'rohit@rohit.com' && password === 'password'){
            console.log('User is authenticated');
            // redirect to another page
            return <Redirect to='/login' />;

        }else{
            console.log('Credentials not present');
            
        }
    }

    render(){
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header style={{ marginTop: 10 }} as='h2' attached='top'>
                                Register!
                            </Header>
                            <Segment attached>
                                <Form>
                                    <Form.Field>
                                        <label>E-mail Address</label>
                                        <input onChange={(e) => this.setState({
                                            email: e.target.value
                                        })} placeholder='E-mail Address' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <input onChange={(e) => this.setState({
                                            password: e.target.value
                                        })} placeholder='Password' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Confirm Password</label>
                                        <input onChange={(e) => this.setState({
                                            confirmPassword: e.target.value
                                        })} placeholder='Confirm Password' />
                                    </Form.Field>
                                    <Button onClick={() => this.handleSubmit()} type='submit'>Register</Button>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>    
                </Grid>
            </Container>
        )
    }
}