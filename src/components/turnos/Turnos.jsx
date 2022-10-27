import * as React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import MyNavBar from '../MyNavBar';
import TextField from '@mui/material/TextField';
import TurnosTable from '../tables/TurnosTable';
import Button from '@mui/material/Button';


const Turnos = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} sx={{ alignItems: 'center' }}>
                        <MyNavBar />
                    </Grid>
                    <Grid xs={12} sx={{ alignItems: 'center' }}>
                        <div style={{ margin: 20 }}>
                            <div
                                style={{
                                    dysplay: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginBottom: '15px',
                                    alignItems: 'center',
                                    'border-bottom': '1px solid black'
                                }}
                            >
                                <p
                                    style={{
                                        textAlign: 'center',
                                        borderBottom: '5px',
                                        borderColor: 'red'
                                    }}
                                >
                                    <u>
                                        TURNOS
                                    </u>
                                </p>
                            </div>
                            <div
                                style={{
                                    'display': 'flex',
                                    'margin-bottom': '5px',
                                }}
                            >
                                <TextField
                                    id="standard-basic"
                                    label="Año"
                                    variant="standard"
                                    sx={{
                                        marginLeft: 3,
                                        marginRight: 3,
                                    }}

                                />
                                <TextField
                                    id="standard-basic"
                                    label="Mes"
                                    variant="standard"
                                    sx={{
                                        marginLeft: 3,
                                        marginRight: 3,
                                    }}
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Dia"
                                    variant="standard"
                                    sx={{
                                        marginLeft: 3,
                                        marginRight: 3,
                                    }}
                                />
                                <Button
                                    variant="outlined"
                                    sx={{
                                        'color': '#141E30',
                                        'border-color': '#141E30',
                                        '&:hover': {
                                            'border-color': '#0780cf',
                                            'background-color': '#141E30',
                                            'color': '#0780cf'
                                        }
                                    }}
                                >
                                    Filtrar
                                </Button>
                            </div>
                            <TurnosTable />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Turnos;