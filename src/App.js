import React, {  useState } from 'react';
import WriteExcel from './WriteExcel';
import CalculatorDaily from './CalculatorDaily';
import CalculatorMonthly from './CalculatorMonthly';

const App = () => {
  const [pickCalculator, setPickCalculator] = useState("mortgage");
  const [isWriting, setIsWriting] = useState(false);
  const [done, setDone] = useState(false);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0); 
  const [loanAmount, setLoanAmount] = useState(0);
  const [paymentDate, setPaymentDate] = useState("1/1/2020")
  const [data, setData] = useState([]);

  return (
    <div>
    {!isWriting ? 
      <div>
      <select name="calculator type" onChange={(e) => setPickCalculator(e.target.value)}>
        <option value="mortgage">mortgage</option>
        <option value="business">business</option>
      </select>
      <input type="number" placeholder="Enter Interest" onChange={(e)=> setInterest(e.target.value)}></input>
      <input type="number" placeholder="How Many Years?" onChange={(e)=> setYears(e.target.value)}></input>
      <input type="number" placeholder="Loan Amount" onChange={(e)=> setLoanAmount(e.target.value)}></input>
      <input type="date" placeholder="First Payment Date" onChange={(e) => setPaymentDate(e.target.value)}></input>
      <p></p>
      <button onClick={() => setIsWriting(true)}>Write a file!</button>
      </div>
      : pickCalculator === "business" ?
      <CalculatorDaily years={years} loanAmount={loanAmount} interest={interest} setData={setData} paymentDate={paymentDate} setDone={setDone}/>
      :<CalculatorMonthly years={years} loanAmount={loanAmount} interest={interest} setData={setData} paymentDate={paymentDate} setDone={setDone} />
    } 
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
