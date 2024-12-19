import { Routes, Route } from 'react-router-dom';

import ClassComp from './components/ClassComp';
import Product from './components/Product';
import Counterapp from './components/Counterapp';
import Home from './components/Home';
import NavBar from './components/Navbar';

import './App.css'
import { Container } from 'reactstrap';
import UserRegistration from './components/UserRegistration';
import Viewuser from './components/Viewuser';
import Edituser from './components/Edituser';




function App() {
  return (
    <div >
      <NavBar />
      <Container style={{border:"1px solid",borderRadius:"20px",padding:"20px"}}>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/product' element={<Product />}></Route>
              <Route path='/classproduct' element={<ClassComp />}></Route>
              <Route path='/counterapp' element={<Counterapp />}></Route>
              <Route path='/users' element={<UserRegistration />}></Route>
              <Route path='/viewuser' element={<Viewuser />}></Route>
              <Route path='/edituser/:id' element={<Edituser />}></Route>
          </Routes>
      </Container>


    </div>
  );
}

export default App;
