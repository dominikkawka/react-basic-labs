import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';
import AddTaskForm from './components/Form';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




function App() {
  
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { 
        id:2,
        title:"Tidy up",
        desc:"don't be so gloom, take the broom and go tidy your room",
        deadline: "Today", 
        image:"https://housewifehowtos.com/wp-content/uploads/2021/08/signs-of-a-tidy-home-person.jpeg",
        priority:"medium",
        priorityColour:"orange",
      }, {
        id:3,
        title:"Shopping",
        desc:"buy some butter, bread, salt and some edam cheese",
        deadline:"Sunday",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEwsdeLWnWCVWNOM0xy-v-n8qun_RX_VDPOzl1cUBK7VVR5rdhkvWqTFjQQ9OUOamPHc&usqp=CAU",
        priority:"low",
        priorityColour:"green",
      }, {
        id:4,
        title:"Project",
        desc:"need to plug in web cam set up+ raspberry pi for face recognition",
        deadline:"next week",
        image:"https://how2electronics.com/wp-content/uploads/2022/03/Getting-Started-Setting-up-Raspberry-Pi-4-Model-B-778x439.jpg",
        priority:"high",
        priorityColour:"red",
      },
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
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
      case "priority":
          form.priority = event.target.value;
          break;
      default:
          form = formState;
    }

    const chipColour = form.priority
    switch(chipColour){
      case 'low':
        form.priorityColour = 'green'
        break;
      case 'medium':
        form.priorityColour = 'orange'
        break;
      case 'high':
        form.priorityColour = 'red'
        break;
    }
    setFormState(form);
    console.log(formState);
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

      {/* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      {/* End App Header */}

      <div className="container">
      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-top" justifyContent="center">
          {taskState.tasks.map((task, index) => (
                <Task 
                key={task.id}
                title={task.title}
                desc={task.description}
                deadline={task.deadline}
                done={task.done}
                image={task.image}
                priority={task.priority}
                priorityColour={task.priorityColour}
                markDone = {() => doneHandler(index)}
                deleteTask = {() => deleteHandler(index)}
              />
          ))}
        </Grid>
      </Container>
      {/* End Task Card Grid */}
      </div>
      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}>
        <Grid container justifyContent="center">
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
        </Grid>
      </Container>
      {/* End Footer */}
    </div>

    
  );
}

export default App;
