import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import MyNavBar from '../MyNavBar';
import ClientsTable from '../tables/ClientsTable';
import { TextField } from '@mui/material';

const Clients = () => {
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
                                        CLIENTES
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
                                    label="Cliente"
                                    variant="standard"
                                    sx={{
                                        marginLeft: 3,
                                        marginRight: 3,
                                    }}

                                />

                                <TextField
                                    id="standard-basic"
                                    label="Mascota"
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
                                        '&:hover':{
                                            'border-color': '#0780cf',
                                            'background-color': '#141E30',
                                            'color': '#0780cf'
                                        }
                                    }}
                                >
                                    Buscar
                                </Button>
                            </div>
                            <ClientsTable />
                        </div>
                    </Grid>
                </Grid>
            </Box>





        </>
    );
}
export default Clients;