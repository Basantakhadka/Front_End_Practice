import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Col,Form,Button } from 'react-bootstrap';



function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="sign-up">
          <Form  ClassName="needs-validation" novalidate>
                <h2>Employee Form</h2>  
                <p>Please fill in this form to create an account!</p>
                <hr/>
              <Row className="mb-3">
                  <Form.Group as={Col} >
                    <Form.Control type="text"  placeholder="First Name" required />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Control type="text" placeholder="Last Name"  required/>
                  </Form.Group>
              </Row>

              <Form.Group className="mb-3 " >
                <Form.Control type="email" placeholder="Enter Email" required />
             </Form.Group>

              <Form.Group className="mb-3 " >
                <Form.Control type="text" placeholder="Designation" required />
             </Form.Group>

             <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Select defaultValue="Country" required>
                    <option value="">Country </option>
                    <option >Nepal </option>
                    <option>India </option>
                    <option>America </option>
                    <option>China</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Start date"  name ="date"  onfocus="(this.type = 'date')"  required/>
                </Form.Group>

              </Row>

              <Form.Group className=" mb-3">
                <h6>Gender</h6>
                  <label class="form-check-label  " ><input type="radio" name="radio-stacked" class="form-check-input "required/> Male</label>
                    <label class="form-check-label offset-1"><input type="radio" name ="radio-stacked" class="form-check-input" required/> Female</label>
                    <label class="form-check-label offset-1"><input type="radio" name="radio-stacked" class="form-check-input" required/> other</label> 
              </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-5">
                <Button type="submit" variant="primary">Submit</Button>
            </Form.Group>

          </Form>
        </div>
      </header>
    </div>
  );
}

export default App;
