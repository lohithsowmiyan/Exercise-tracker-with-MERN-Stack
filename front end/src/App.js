import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CreateUser from "./components/CreateUser"
import ExerciseList from "./components/ExerciseList"
import CreateExercise from './components/CreateExercise';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path ="/" element={<ExerciseList/>}  />
          <Route  path ="/user" element = {<CreateUser/>} />
          <Route  path ="/create" element = {<CreateExercise/>} />
          

        </Routes>
      </Router>
    </>
  );
}

export default App;
