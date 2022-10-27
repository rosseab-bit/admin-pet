import '../App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const theme = createTheme({
    palette: {
        myColor: {
            main: '#C9D6FF',
            contrastText: '#4f82ff',
            secondary: '#ffffff',

        },
        cvButtomColor: {
            main: '#4f82ff',
            contrastText: '#ffffff'
        }
    }
});


const MyNavBar = () => {

    return (
        <>
            <nav className="menuNav">
                <ul className='menuList'>
                    <li className="menuItem">
                        <ThemeProvider theme={theme}>
                            <Button
                                size="large"
                                color="myColor"
                            >
                                <Link to="/home">
                                Home
                                </Link>
                                
                            </Button>
                        </ThemeProvider>
                    </li>
                    <li className="menuItem">
                        <ThemeProvider theme={theme}>
                            <Button
                                size="large"
                                color="myColor"
                            >
                                <Link to="/clientes">
                                Clientes
                                </Link>
                            </Button>
                        </ThemeProvider>
                    </li>
                    <li className="menuItem">
                        <ThemeProvider theme={theme}>
                            <Button
                                size="large"
                                color="myColor"
                            >
                                <Link to="/turnos">
                                Turnos
                                </Link>
                            </Button>
                        </ThemeProvider>
                    </li>
                    <li className="menuItem">
                        <ThemeProvider theme={theme}>
                            <Button
                                size="large"
                                color="myColor"
                            >
                                <Link to ="/historial">
                                Historial
                                </Link>
                            </Button>
                        </ThemeProvider>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default MyNavBar;