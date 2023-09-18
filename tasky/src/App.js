import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';


function App() {
  return (
    <div className="App">
      <h1>Tasky</h1>
        <Task title="Dishes" 
        deadline="Today" 
        image="https://media.cnn.com/api/v1/images/stellar/prod/200414152441-disheslead.jpg?q=w_2500,h_1404,x_0,y_0,c_fill"
        desc="load the dishwasher then turn on economy mode.">
        </Task>
        <Task title="Laundry" 
        deadline="Tomorrow" 
        image="https://www.southernliving.com/thmb/fREfOLpj1mgx6mYIJZib5bZk8oo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-82567372-37f5a01901b44e8580d043b1a8dd2f8d.jpg"
        desc="white clothes only today, don't add a pink sock"> 
        </Task>
        <Task title="Tidy" 
        deadline="Today" 
        image="https://housewifehowtos.com/wp-content/uploads/2021/08/signs-of-a-tidy-home-person.jpeg"
        desc="don't be so gloom, take the broom and go tidy your room">
        </Task>
    </div>
  );
}

export default App;
