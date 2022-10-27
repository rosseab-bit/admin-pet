import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Benitez Ricardo', 'Balu', 6.0, 24, 4.0),
    createData('Nicole Lazarde', 'Zeus', 9.0, 37, 4.3),
    createData('Ramon Martinez', 'Koky', 16.0, 24, 6.0),
    createData('Ramon Dominguez', 'Mortadela', 3.7, 67, 4.3),
    createData('Nestor Valenti', 'Colita', 16.0, 49, 3.9),
];

const ClientsTable = ()=>{
    return (
        <>
          <TableContainer component={Paper} sx={{ marginLeft: 1 }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead sx={{ backgroundColor: '#141E30' }}>
                                        <TableRow>
                                            <TableCell sx={{ color: '#bfbfbf' }}>
                                                Cliente
                                            </TableCell>
                                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>
                                                Mascota
                                            </TableCell>
                                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>
                                                Diagnostico
                                            </TableCell>
                                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>
                                                Ingreso
                                            </TableCell>
                                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>
                                                Egreso
                                            </TableCell>
                                            <TableCell align="right" sx={{ color: '#bfbfbf' }}>
                                                Accion
                                            </TableCell>
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
                                                <TableCell align="right">
                                                    {row.calories}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.fat}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.carbs}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.protein}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    <Button
                                                        variant="text"
                                                        size="medium"
                                                        align="right"
                                                        sx={{
                                                            'color': '#0471b8'
                                                        }}
                                                    >
                                                        VER
                                                    </Button>
                                                </TableCell>
                                            </TableRow>

                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
        </>
    );
}
export default ClientsTable;