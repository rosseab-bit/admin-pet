import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein, hour) {
    return { name, calories, fat, carbs, protein, hour };
}

const rows = [
    createData('Kity', 'Ricardo Benitez', 2022, 'Enero', 'Martes', '14hs'),
    createData('Ice', 'Nestor Valenti', 2022, 'Marzo', 'Miercoles', '10hs'),
    createData('Loky', 'Juan Dominguez', 2022, 'Julio', 'Lunes', '9hs'),
    createData('Puppy', 'Ramon Martinez', 2022, 'Octubre', 'Jueves', '13hs'),
    createData('Rocky', 'Walter Kulchar', 2022, 'Diciembre', 'Viernes', '18hs'),
];
const TurnosTable = () => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead sx={{ backgroundColor: '#141E30' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#bfbfbf' }}>Paciente</TableCell>
                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>Dueño</TableCell>
                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>Año</TableCell>
                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>Mes</TableCell>
                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>Dia</TableCell>
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
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.hour}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default TurnosTable;