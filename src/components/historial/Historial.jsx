import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MyNavBar from '../MyNavBar';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';


const Historial = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} sx={{ alignItems: 'center' }}>
                        <MyNavBar />
                    </Grid>
                    <Grid xs={12} sx={{ alignItems: 'center' }}>
                        <div style={{ margin: 20 }}>
                            <div style={{ dysplay: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <p style={{ textAlign: 'center', borderBottom: '5px', borderColor: 'red' }}>
                                    <u>
                                        HISTORIAL
                                    </u>
                                </p>
                            </div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Paciente" variant="standard" />
                                <Button
                                    variant="outlined"
                                    sx={{
                                        'color': '#141E30',
                                        'border-color': '#141E30',
                                        '&:hover':{
                                            'border-color': '#0780cf',
                                            'background-color': '#141E30',
                                            'color': '#0780cf'
                                        }
                                    }}
                                >
                                    Buscar
                                </Button>
                            </Box>

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Historial;