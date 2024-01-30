import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from '@mui/material/TablePagination';

export interface tableRows {
    domain: string,
    count: number,
    activatation: boolean,
    transport: string,
    meaning: string
}

type Props = {
    tableData: [tableRows],
    tableHead: [string, string, string, string, string, string],
    currentPage: number,
    rowsCount: number,
    handleChangeRowsPerPage: () => {},
    handleChangePage: () => {}
}

export default function CustomeTable({ tableData, tableHead, currentPage, rowsCount, handleChangeRowsPerPage, handleChangePage }: Props) {
    return (
        <div className='w-full overflow-x-auto mt-2'>
            <Table className="mb-0 w-full max-w-full">
                {tableHead !== undefined ? (
                    <TableHead>
                        <TableRow className="h-[56px]">
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className="p-2 text-center text-m"
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>

                    {tableData ? tableData.slice(currentPage * rowsCount, currentPage * rowsCount + rowsCount).map((row, index) => (
                        <TableRow key={index} className="h-[48px]">
                            <TableCell className="p-2 text-center text-m">{row.domain}</TableCell>
                            <TableCell className="p-2 text-center text-m">{row.count}</TableCell>
                            <TableCell className="p-2 text-center text-m">{(row.activatation)}</TableCell>
                            <TableCell className="p-2 text-center text-m">{row.transport}</TableCell>
                            <TableCell className="p-2 text-center text-m">{row.meaning}</TableCell>
                            <Tooltip
                                id="tooltip-top"
                                title="ویرایش"
                                placement="top"
                            >
                                <IconButton
                                    aria-label="Edit"
                                    onClick={() => {
                                        //action
                                    }}
                                >
                                    <EditIcon
                                        className="bg-primary-0"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                id="tooltip-top"
                                title="حذف"
                                placement="top"
                            >
                                <IconButton
                                    aria-label="Edit"
                                    onClick={() => {
                                        //action
                                    }}
                                >
                                    <DeleteIcon
                                        className="bg-danger-0"
                                    />
                                </IconButton>
                            </Tooltip>
                        </TableRow>
                    )) : ''}

                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsCount}
                page={currentPage}
                onChangePage={handleChangePage}
                labelRowsPerPage=""
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}