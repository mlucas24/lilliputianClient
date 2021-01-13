import React, {  useState } from 'react';
import WriteExcel from './WriteExcel';
import Calculator from './Calculator';

const App = () => {
  const [isWriting, setIsWriting] = useState(false);
  const [done, setDone] = useState(false);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0); 
  const [loanAmount, setLoanAmount] = useState(0);
  const [paymentDate, setPaymentDate] = useState("1/1/2020")
  const [data, setData] = useState([]);

  ///ToDo:
  //Separate paymentDate into year, month, day
  //setDate to day
  //make sure everything is in UTC
  return (
    <div>
    {!isWriting ? 
      <div>
      <input type="number" placeholder="Enter Interest" onChange={(e)=> setInterest(e.target.value)}></input>
      <input type="number" placeholder="How Many Years?" onChange={(e)=> setYears(e.target.value)}></input>
      <input type="number" placeholder="Loan Amount" onChange={(e)=> setLoanAmount(e.target.value)}></input>
      <input type="date" placeholder="First Payment Date" onChange={(e) => setPaymentDate(e.target.value)}></input>
      <p></p>
      <button onClick={() => setIsWriting(true)}>Write a file!</button>
      </div>
      : <Calculator years={years} loanAmount={loanAmount} interest={interest} setData={setData} paymentDate={paymentDate} setDone={setDone}/>} 
      {!done ?
      <></>
    :
    <WriteExcel data={data} />}
      <div>interest is {interest}</div>
      <div>years is {years}</div>
      <div>loan amount is {loanAmount}</div>
      </div>
  )
};

export default App;
