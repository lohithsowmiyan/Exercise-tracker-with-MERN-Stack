import React, { useState } from 'react';
import { Button, Card, Container, Form,Alert } from 'react-bootstrap';
import {DatePicker} from 'react-datepicker'
import {Navigation} from './ExerciseList'
import axios from 'axios';

export default function CreateExercise() {
    const [name,setName] = useState()
    const [desc,setDesc] = useState()
    const [duration,setDuration] = useState()
    const [date,setDate] = useState()
    const [add,setAdd] = useState()

    const exercise ={
        username : name,
        description :desc,
        duration : duration,
        date : date
    }

    const addExercise= (e)=>{
          e.preventDefault()
          axios.post('http://localhost:5000/exercises/add',exercise)
          .then(res =>{console.log(res)
           setAdd("hello")
          
        })     
    }
  return <div>
      <Navigation></Navigation>
      <Container>
          <Card>
              <Card.Body>
                  <Form onSubmit={addExercise}>
                      <h2>Exercise</h2>
                      {add && <Alert variant='success'>Exercise added</Alert>}
                      <Form.Group>
                          <Form.Label>User Name</Form.Label>
                          <Form.Control type='text' onChange={(e)=>setName(e.target.value)}></Form.Control>
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>Description</Form.Label>
                          <Form.Control type='text' onChange={(e)=>setDesc(e.target.value)}></Form.Control>
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>Duration</Form.Label>
                          <Form.Control type='number' onChange={(e)=>setDuration(e.target.value)}></Form.Control>
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>Date</Form.Label>
                          <Form.Control type='text' onChange={(e)=>setDate(e.target.value)}></Form.Control>
                      </Form.Group>
                      <Button type='submit' className='w-50' variant='success'>ADD</Button>
                  </Form>
              </Card.Body>
          </Card>
      </Container>
  </div>;
}
