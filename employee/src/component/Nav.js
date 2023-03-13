
// 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <>
            <div className='nav1'>
                <Navbar  expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Employee Details</Navbar.Brand>

                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NavBar;