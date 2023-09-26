import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';
import AddTaskForm from './components/Form';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';




function App() {
  
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { 
        id:0,
        title:"Dishes",
        desc: "load the dishwasher then turn on economy mode.", 
        deadline: "Today", 
        image:"https://media.cnn.com/api/v1/images/stellar/prod/200414152441-disheslead.jpg?q=w_2500,h_1404,x_0,y_0,c_fill",
      }, { 
        id:1,
        title:"Laundry", 
        desc: "white clothes only today, don't add a pink sock", 
        deadline: "Tomorrow", 
        image:"https://www.southernliving.com/thmb/fREfOLpj1mgx6mYIJZib5bZk8oo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-82567372-37f5a01901b44e8580d043b1a8dd2f8d.jpg",
      }, { 
        id:2,
        title:"Tidy up",
        desc:"don't be so gloom, take the broom and go tidy your room",
        deadline: "Today", 
        image:"https://housewifehowtos.com/wp-content/uploads/2021/08/signs-of-a-tidy-home-person.jpeg",
      }, {
        id:3,
        title:"Shopping",
        desc:"buy some butter, bread, salt and some edam cheese",
        deadline:"Sunday",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEwsdeLWnWCVWNOM0xy-v-n8qun_RX_VDPOzl1cUBK7VVR5rdhkvWqTFjQQ9OUOamPHc&usqp=CAU",
      }, {
        id:4,
        title:"Project",
        desc:"need to plug in web cam set up+ raspberry pi for face recognition",
        deadline:"next week",
        image:"https://how2electronics.com/wp-content/uploads/2022/03/Getting-Started-Setting-up-Raspberry-Pi-4-Model-B-778x439.jpg",
      },
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
    //console.log(formState);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }

  return (
    <div className="App">
      <h1>Tasky</h1>
      <div className="container">
        {taskState.tasks.map((task, index) => (              
          <Task 
            key={task.id}
            title={task.title}
            desc={task.desc}
            deadline={task.deadline}
            image={task.image}
            markDone={() => doneHandler(index)}
            deleteTask={() => deleteHandler(index)}
          />
        ))} 
      </div>
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler}/>
    </div>
  );
}

export default App;
