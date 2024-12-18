import { Nav,NavItem,NavLink} from "reactstrap";

function App() {
  return (
    <div>
            <h1>Welcome To Tops Tech </h1>
            <Nav>
                <NavItem> 
                    <NavLink href="/basic">Basic</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/userinfo">Userinfo</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/counter">CounterApp</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/welcome">Welcome page</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/person">Person Infromation</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/login">Login App</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/listexample">ListExample</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/registration">FormExample</NavLink>
                </NavItem>
            </Nav>
    </div>
  );
}

export default App;
