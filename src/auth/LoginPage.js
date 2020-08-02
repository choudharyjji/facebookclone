import React from 'react';
import { Form, Button, Grid, Container, Header, Segment } from 'semantic-ui-react';

export default class LoginPage extends React.Component{
    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header style={{ marginTop: 10 }} as='h2' attached='top'>
                                Login!
                            </Header>
                            <Segment attached>
                                <Form>
                                    <Form.Field>
                                        <label>E-mail Address</label>
                                        <input placeholder='First Name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <input placeholder='Last Name' />
                                    </Form.Field>
                                    <Button type='submit'>Login</Button>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>    
                </Grid>
            </Container>
        )
    }
}