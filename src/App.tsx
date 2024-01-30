import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import "./assets/fonts/fonts.css";
import CustomeTable from './components/Table/Table';

export const data = [
  {
    domain: "gender",
    count: 2,
    activatation: false,
    transport: "فارسی",
    meaning: "فروشنده"
  },
  {
    domain: "lang",
    count: 3,
    activatation: false,
    transport: "فارسی",
    meaning: "فروشنده"
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <div className="App">
      <Header />
      {/* <CustomeTable tableHead={["دامنه", "مقادیر", "isActive", "زبان", "معنی", "عملیات"]}
        currentPage={currentPage} rowsCount={rowsPerPage} tableData={data}/> */}
    </div>
  );
}

export default App;
