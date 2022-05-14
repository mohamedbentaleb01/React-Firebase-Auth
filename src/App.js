import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from '../src/components/ProtectedRoute';
import Home from '../src/components/Home';
import ForgotPassword from "./components/ForgotPassword";


function App() {
  return (
    <div>
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route path='/' 
                    element={ <Login/>} 
            />
            <Route path='/signup' 
                    element={<Signup/>} 
            />
            <Route path='/home' 
                    element={ <ProtectedRoute>
                      <Home/>
                    </ProtectedRoute>}
            />
            <Route path='/forgot-password' 
                    element={ <ForgotPassword/>}
            />

          </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default App;
