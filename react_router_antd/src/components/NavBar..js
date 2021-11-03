import React ,{ Component } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Employee from "./Employee";
import Home from "./Home";




export default class NavBar extends Component {
    render () {
        return (
            <Router>
                <div>
                        <Navbar bg="light" variant={'light'} expand="lg">
                            <Container>
                                <Navbar.Brand>Task </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as ={Link} to={"/"}>Home</Nav.Link>
                                    <Nav.Link as ={Link} to={"/Employee"}>Employee</Nav.Link>
                                   
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                </div>
                <div>
                <Switch>
                    <Route path="/Employee">
                        <Employee/>
                    </Route>
                    <Route path="/">
                       <Home/>
                    </Route>
                </Switch>

                </div>
           </Router>
        )
    }
}