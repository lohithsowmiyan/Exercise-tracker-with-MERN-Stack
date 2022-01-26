import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form ,Card ,Button,Alert} from 'react-bootstrap';
import { Navigation } from './ExerciseList';

export default function CreateUser() {
    const [user,setUser] = useState();
    const [reg,setReg] = useState();

    const userjson ={
        username : user
    }

    const addUser = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/users/add',userjson)
        .then(res =>{console.log(res.data)

            setReg(res.data)})

        
        console.log(user,userjson)
        setUser("")
    }

    const viewUser= (e)=>{
        e.preventDefault()
        axios.get("http://localhost:5000/users/")
        .then(res =>{console.log(res.data)
            setUser(res.data)})
    }
  return (
      <>
      <Navigation></Navigation>
        <Container>
            <Card>
                <Card.Body>
                    <h2 className='text-center'>Create User</h2>
                    {reg && <Alert variant='success'>User Added</Alert>}
                    <Form onSubmit={addUser}>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type='text' className='w-200' onChange={(e)=>{setUser(e.target.value)}}></Form.Control>

                        </Form.Group>
                        <Button type="submit" className='w-100 submit'  >Add User</Button>
                    </Form>
                    
                </Card.Body>
            </Card>
        </Container>
      </>
  );
}
