import React, {useEffect, useState} from 'react';

const Calculator = ({years, interest, loanAmount, paymentDate, setData}) => {

    const [payment, setPayment] = useState(0);

    useEffect(() => {
        let monthlyInterest = interest / 12;
        let monthlyYears = (years * 12);
        let x = Math.pow(1 + monthlyInterest, monthlyYears);
        let monthlyPayment = ((loanAmount*x*monthlyInterest)/(x-1));
        monthlyPayment = monthlyPayment.toFixed(2);
        setPayment(monthlyPayment);
    }, [])

    //this will fill data
    useEffect(() => {
        let newData = [];
        let currPayDate = paymentDate;
        let totalAmount = loanAmount;
        for (let i = 1; i <= years*12; i++) {
            //calculate days-between payments
            //set new pay date as 1 month from currPayDate

            // ((interest*.01)*payment)/365 = dailyInterest
            //((3.5*0.01)*$98,741.00)/365 = dailyInterest
            // dailyInterest*calculatedDays= monthlyInterest
            // payment-monthlyInterest= principle
            //loanAmount-principle = newLoanAmount
            //totalAmount-= principle;
            //newArr = [i, newPaymentDate, payment, monthlyInterest, principle, totalAmount];
            //newData.push(newArr);
            //
            //final payment math figure it out
            //
            // if  payment > totalAmount then payment = totalAmount + interest;
            // if totalAmount < 0 return false;
            //calculate interest from payment
            //subtract interest from payment to get principle
            //subtract principle from total payment to get new total amount due
            //record the results inside an array to be pushed to data later
        }
        //after for loop,
        //setData(newData);
    })

    return (
        <>
        <h1>${payment}</h1>
        </>
    )
}

export default Calculator;