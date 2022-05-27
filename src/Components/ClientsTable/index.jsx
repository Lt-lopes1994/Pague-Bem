import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import CreateChargeIcon from "../../Assets/CreateChargeIcon.svg";
import "./style.css";

function createData(name, cpf, email, cellphone, status, createCharge) {
    return {
        name,
        cpf,
        email,
        cellphone,
        status,
        createCharge
    };
}

const rows = [
    createData("Sara da Silva", "054 365 255 87", "sarasilva@cubos.io", "71 9 9462 8654", 0, 1),
    createData("Cameron Williamson", "154 365 255 87", "cameronw@cubos.io", "71 9 9962 8658", 0, 1),
    createData("Savannah Nguyen", "054 365 255 87", "snguyen@cubos.io", "71 9 9762 8658", 0, 1),
    createData("Darlene Robertson", "254 365 255 87", "darlener@cubos.io", "71 9 9562 8653", 0, 1),
    createData("Marvin McKinney", "054 365 255 87", "marvinm@cubos.io", "71 9 9462 8658", 0, 1),
    createData("Sandra dos Santos", "000 365 255 87", "sandrasantos@cubos.io", "71 9 9762 8652", 0, 1),
    createData("Cameron Williamson", "054 365 255 87", "cameronw@cubos.io", "71 9 9662 8653", 1, 1),
    createData("Savannah Nguyen", "054 365 255 87", "snguyen@cubos.io", "71 9 9962 8659", 1, 1),
    createData("Darlene Robertson", "054 365 255 87", "darlener@cubos.io", "71 9 9862 8655", 1, 1),
    createData("Marvin McKinney", "054 365 255 87", "marvinm@cubos.io", "71 9 9362 8652", 1, 1),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: true,
        disablePadding: false,
        label: 'Cliente',
    },
    {
        id: 'cpf',
        numeric: true,
        disablePadding: false,
        label: 'cpf',
    },
    {
        id: 'email',
        numeric: true,
        disablePadding: false,
        label: 'E-mail',
    },
    {
        id: 'cellphone',
        numeric: true,
        disablePadding: false,
        label: 'Telefone',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'createCharge',
        numeric: true,
        disablePadding: false,
        label: 'Criar Cobrança',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={"left"}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};


export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('cpf');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.cellphone}
                                            selected={isItemSelected}
                                        >
                                            <TableCell
                                                component="th"
                                                id={index}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.cpf}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.cellphone}</TableCell>
                                            <TableCell align="left">
                                                {row.status ?
                                                    <div className='table__statusDefaulter'>
                                                        <h4>Inadimplente</h4>
                                                    </div>
                                                    :
                                                    <div className='table__statusNonDefaulter'>
                                                        <h4>Em dia</h4>
                                                    </div>
                                                }
                                            </TableCell>
                                            <TableCell align="left">
                                                <div className="table__createCharge">
                                                    <img
                                                        src={CreateChargeIcon}
                                                        alt="Criar cobrança"
                                                    />
                                                    <h4>Cobrança</h4>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 56 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    );
}