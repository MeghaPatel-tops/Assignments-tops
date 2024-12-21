import {Button, Container, Form, Input, Label, Table} from 'reactstrap'
import {db} from './firebase'
import { useEffect, useState } from 'react';
import { Firestore ,collection, addDoc, getDoc ,doc,onSnapshot,query,querySnapshot,deleteDoc} from 'firebase/firestore';


function App() {
  const [task,setTask] = useState("")
  const [taskData,setTaskData]= useState([])
  const docRef = collection(db,"todos")

  const handleChange = (e)=>{
      const taskData= e.target.value
      setTask(taskData)
  }
  const handleClick = async() =>{
    console.log(collection);
       await addDoc(docRef,{
         task
       });
       setTask("")
  }
 
  useEffect(()=>{
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTaskData(todosArray);
      //console.log(taskData)
    });
    return () => unsub();
    
  })

  const handleDelete =async(id)=>{
    await deleteDoc(doc(db, "todos", id));
  }

  const handleEdit= async(id)=>{
    alert(id)
    const docRef = doc(db, "todos", id);
    const docSnap = await getDoc(docRef);
    const taskName= docSnap.data();
    setTask(taskName)
  }

  return (
    <div className="App">
        <Container style={{marginLeft:"25%",marginTop:"100px",width:"600px",backgroundColor:'gray',padding:"20px"}}>
            <h1>Todo List App</h1>
            <Form>
                <Label>Enter task here</Label>
                <Input type='text' name='taskinput' onChange={handleChange} value={task}></Input>
                <br/>
                <Button color='primary' onClick={handleClick}>Add</Button>
                <h1>
                    Todo List
                </h1>
                <Table style={{backgroundColor:"white"}}>
                    <thead>
                        <tr>
                          <th>TaskName</th>
                          <th>action</th>
                        </tr>
                        {
                          taskData.map((t,index)=>(
                            <tr>
                              <td>{t.task}</td>
                              <td><Button className="button-delete" onClick={() => handleDelete(t.id)}>
                                  Delete
                                </Button>
                                <Button className="button-delete" onClick={() => handleEdit(t.id)}>
                                  Edit
                                </Button>
                                </td>
                            </tr>
                          ))
                        }

                    </thead>
                </Table>
            </Form>
        </Container>
    </div>
  );
}

export default App;
