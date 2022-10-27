import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Home from './components/home/Home';
import Clients from './components/clients/Clients';
import MyNavBar from './components/MyNavBar';
import Historial from './components/historial/Historial';
import Turnos from './components/turnos/Turnos';

function App() {
  const [viewHome, setViewHome] = React.useState(true);
  const [viewClients, setViewClients] = React.useState(false);
  const [viewTurnos, setViewTurnos] = React.useState(false);
  const [viewHistorial, setViewHistorial] = React.useState(false);

  const switchViews = {
    seeHome: setViewHome,
    seeClients: setViewClients,
    seeTurnos: setViewTurnos,
    seeHistorial: setViewHistorial
  }

   /* const ChangeView = ()=>{
    if (viewHome){
      return <Home />
    } else if (viewClients){
      return <Clients />
    } else if (viewTurnos){
      return <Turnos />
    } else if (viewHistorial){
      return <Historial />
    }
  }*/

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{ alignItems: 'center' }}>
          <MyNavBar />
        </Grid>
        <Grid xs={12} sx={{ alignItems: 'center' }}>
          <div style={{ margin: 20 }}>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
