import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar,Container,Table} from 'react-bootstrap';
import axios from 'axios';

function TableRow (props) {
    return(
       <tr>
           <td>{props.username}</td>
           <td>{props.description}</td>
           <td>{props.duration}</td>
           <td>{props.date}</td>
       </tr>
    );
}

export default function ExerciseList() {
    const [exercise,setExercise] = useState([])
    const [loading,setLoaading] =  useState(false)
    const [error,setError] = useState()


    console.log("Expression started")
    
    useEffect(()=>{
        setLoaading(true)
         axios.get('http://localhost:5000/exercises')
         .then((res)=>{console.log(res.data)
          setExercise(res.data)})
          .catch(err=>{setError(err)})
          .finally(()=>{
              setLoaading(false)
          })
    },[])

    if(loading){
        return(<h1>Loading data</h1>)
    }

    if(error || !Array.isArray(exercise)){
        return(<h1>Error in Loading data</h1>)
    }

  return <div>
      <Navigation></Navigation>
      <h1>Exercises</h1>
      <Table>
          <thead>
          <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
          </tr>
          </thead>
          <tbody>
              {exercise.map((list)=>{
                  return (
                  <TableRow username={list.username} description={list.description} duration={list.duration} date={list.date} key={list._id}/>
                  );
              })}
          </tbody>
      </Table>
      
  </div>;
}

export function Navigation() {
    return (
    <>
      <Navbar bg='dark'>
          <Container>
              <Navbar.Brand ><Link to='/' >Exercise Tracker</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                  <Nav>
                      <Nav.Link><Link to='/user'>User</Link></Nav.Link>
                      <Nav.Link><Link to='/create'>Exercise</Link></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>);
}
