import * as React from 'react';
import Calendar from 'react-calendar';
import { Button } from '@mui/material';
import MyNavBar from '../MyNavBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MyCard from '../myLibs/MyCard';
import HomeTable from '../tables/HomeTable';

const Home = () => {
    const [date, setDate] = React.useState(new Date());
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
                                    'border-bottom': '1px solid black'
                                }}
                            >
                                <p style={{ 'text-align': 'center' }}>
                                    HOME
                                </p>
                            </div>
                            <div style={{ marginLeft: 300, marginRight: 300, marginTop: 20 }}>
                                <div
                                    style={{
                                        'display': 'flex',
                                        'flex-direction': 'row',
                                        'align-items': 'center',
                                        'align-content': 'center',
                                        'justify-content': 'space-around',
                                    }}
                                >
                                    <MyCard sx={{
                                        'border': { 'style': '1px solid #ff200d' },
                                        'title': { 'text': 'Pacientes', 'size': '20px', 'color': '#ff200d' },
                                        'body': { 'text': 24, 'size': '50px', 'color': '#ff200d' }
                                    }}
                                    />
                                    <MyCard sx={{
                                        'border': { 'style': '1px solid #009109' },
                                        'title': { 'text': 'Atendidos', 'size': '20px', 'color': '#009109' },
                                        'body': { 'text': 12, 'size': '50px', 'color': '#009109' }
                                    }}
                                    />
                                    <MyCard sx={{
                                        'border': { 'style': '1px solid #53abee' },
                                        'title': { 'text': 'Por atender', 'size': '20px', 'color': '#53abee' },
                                        'body': { 'text': 12, 'size': '50px', 'color': '#53abee' }
                                    }}
                                    />
                                </div>

                                <div
                                    style={{
                                        'display': 'flex',
                                        'flex-direction': 'column',
                                        'align-content': 'center',
                                        'align- items': 'center',
                                        'margin-top': '30px',
                                    }}
                                >
                                    <p style={{ 'text-align': 'center', 'color': '#141E30' }}>
                                        PACIENTES DEL DIA
                                    </p>
                                    <HomeTable />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>




        </>
    );
}
export default Home;