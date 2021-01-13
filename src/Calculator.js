import React, {useEffect, useState} from 'react';
import WriteExcel from './WriteExcel';

const Calculator = ({years, interest, loanAmount, paymentDate, fundingDate, setData, setDone}) => {

    const [payment, setPayment] = useState(0);

    useEffect(() => {
        let monthlyInterest = interest*.01 / 12;
        let monthlyYears = (years * 12);
        let x = Math.pow(1 + monthlyInterest, monthlyYears);
        let monthlyPayment = ((loanAmount*x*monthlyInterest)/(x-1));
        monthlyPayment = monthlyPayment.toFixed(2);
        setPayment(monthlyPayment);
    }, []);

    useEffect(() => {
        if (payment !== 0) {
            fillData();
        }
    }, [payment])

    //this will fill data
    const fillData = () => {
        let newData = [["Payment", "Date", "Monthly Payment", "Interest", "principle", "Loan Balance"]];
        let oldPayDate = new Date(fundingDate);
        let newPayDate = new Date(paymentDate);
        let totalAmount = loanAmount;
        for (let i = 1; i <= years*12; i++) {
            //if not first payment, set new pay date as 1 month from currPayDate
            if (i !== 1) {
                newPayDate = new Date(oldPayDate.setMonth(oldPayDate.getMonth()+1));
            }
            //calculate days-between payments
            let calculatedDays = Math.round((newPayDate - oldPayDate) / (1000 * 3600 * 24));
            console.log(calculatedDays);
            // ((interest*.01)*payment)/365 = dailyInterest
            let dailyInterest = ((interest*0.01)*totalAmount)/365;
            // dailyInterest*calculatedDays= monthlyInterest
            let monthlyInterest = dailyInterest*calculatedDays;
            let monthlyInterestReadout = monthlyInterest.toFixed(2);
            // payment-monthlyInterest= principle
            let principle = payment - monthlyInterest;
            let principleReadout = principle.toFixed(2);
            //loanAmount-principle = newLoanAmount
            if (totalAmount > principle + monthlyInterest) totalAmount-= principle;
            else {
                setPayment(totalAmount + monthlyInterest);
                totalAmount = 0;
            }
            let totalAmountReadout = totalAmount.toFixed(2);
            let newArr = [i, newPayDate, payment, monthlyInterestReadout, principleReadout, totalAmountReadout];
            newData.push(newArr);
            oldPayDate = new Date(newPayDate);
        }
        //after for loop,
        setData(newData);
        setDone(true);
    }

    return (<></>
    );
}

export default Calculator;