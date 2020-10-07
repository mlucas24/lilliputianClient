import React, {useEffect, useState} from 'react';

const Calculator = props => {

    const [interest, setInterest] = useState(0.0432);
    const [years, setYears] = useState(15);
    const [amount, setAmount] = useState(265000);
    const [payment, setPayment] = useState(0);
    const [days, setDays] = useState(0);
    const [dee, setDee] = useState(0);

    useEffect(() => {
        let date1 = new Date("07/1/2020");
        let date2 = new Date("08/1/2020");
        let monthlyInterest = interest / 12;
        let monthlyYears = (years * 12);
        
        let d = ((((1 + monthlyInterest)*monthlyYears) - 1) / (monthlyInterest*(1+monthlyInterest)*monthlyYears));
        setDee(d);

        let differenceInTime = date2.getTime() - date1.getTime();
        let differenceInDays = differenceInTime/(1000*3600*24);
        setDays(differenceInDays);

        let x = Math.pow(1 + monthlyInterest, monthlyYears);
        let monthlyPayment = ((amount*x*monthlyInterest)/(x-1));
        monthlyPayment = monthlyPayment.toFixed(2);

        setPayment(monthlyPayment);


    }, [interest, years, amount])
    return (
        <>
        <h1>${payment}</h1>
        <h2>{days}</h2>
        <h3>{dee}</h3>
        </>
    )
}

export default Calculator;