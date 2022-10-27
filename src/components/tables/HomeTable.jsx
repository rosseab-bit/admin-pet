import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Kity', 'Gonzales Juan', 'No caga', 24, 4.0),
  createData('Pepito', 'Gomez Marta', 'Choca con las paredes', 37, 4.3),
  createData('Loky', 'Benitez Sabrina', 'Pata rota', 24, 6.0),
  createData('Kata', 'Nicole Lazarde', 'No come', 67, 4.3),
  createData('Balu', 'Benitez Ricardo', 'Perdida de pelo', 49, 3.9),
];

export default function HomeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ backgroundColor: '#141E30' }}>
          <TableRow>
            <TableCell sx={{ color: '#bfbfbf' }}>Paciente</TableCell>
            <TableCell align="center" sx={{ color: '#bfbfbf' }}>Dueño</TableCell>
            <TableCell align="right" sx={{ color: '#bfbfbf' }}>Consulta</TableCell>
            <TableCell align="right" sx={{ color: '#bfbfbf' }}>Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
