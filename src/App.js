import React, { useState } from 'react';
import WriteExcel from './WriteExcel';
import CalcForm from './CalcForm';
import Calculator from './Calculator';

const App = () => {
  const [isWriting, setIsWriting] = useState(false);
  const [data, setData] = useState([]);
  return (
    <>
    {!isWriting ? 
      <div><Calculator /></div>
      : <WriteExcel data={data}/>}
      <button onClick={() => setIsWriting(true)}>Write a file!</button>
      </>
  )
};

export default App;
