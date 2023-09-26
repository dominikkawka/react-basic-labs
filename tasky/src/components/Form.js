import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Select, MenuItem } from "@mui/material";

const AddTaskForm = (props) => {

  return (
    <Box
    component="form"
    sx={{'& .MuiOutlinedInput-root': { m: 1, width: '30ch' },}}
    onSubmit={props.submit}>
    <div>
      <TextField required id="outlined-required" name="title" label="Task Title" 
      InputLabelProps={{ shrink: true }} onChange={(event) => props.change(event)} />
    </div>
    <div>
      <TextField required name="deadline" label="Deadline" InputLabelProps={{ shrink: true }} type="date" 
      onChange={(event) => props.change(event)} />
    </div>
    <div>
      <TextField name="description" id="outlined-multiline-static" label="Task Details"
        InputLabelProps={{ shrink: true }} multiline rows={4} onChange={(event) => props.change(event)} />
    </div>
    <div>
            <Select
                name="priority"
                labelId="priority"
                id="selectPriority"
                value={props.priority}
                label="priority"
                onChange={(event) => props.change(event)}>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
            </Select>

    </div>
    <div>
      <Button type="submit" variant="contained"
        color="primary"
        sx={{m: 1, p: 1, width: '95%' }}>
        Add Task
      </Button>
    </div>
  </Box>
  )
};

export default AddTaskForm;