import React, {useEffect, useState} from 'react';
import WriteExcel from './WriteExcel';

const CalculatorMonthly = ({years, interest, loanAmount, paymentDate, setData, setDone}) => {

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
        let currPayDate = new Date (paymentDate);
        currPayDate.setUTCMonth(currPayDate.getUTCMonth());
        let totalAmount = loanAmount;
        for (let i = 1; i <= years*12; i++) {
            //set new pay date as 1 month from currPayDate
            let newPayDate = new Date(currPayDate);
            if (i !== 1) {
                newPayDate.setMonth(newPayDate.getMonth()+1);
                newPayDate.setDate(1);
            }
            let monthlyInterest = ((interest*.01)*totalAmount)/12;
            let monthlyInterestReadout = monthlyInterest.toFixed(2);
            // payment-monthlyInterest= principle
            let principle = payment - monthlyInterest;
            let principleReadout = principle.toFixed(2);
            //loanAmount-principle = newLoanAmount
            let paymentDisplay = payment;
            if (totalAmount > principle + monthlyInterest) totalAmount-= principle;
            else {
                paymentDisplay = totalAmount + monthlyInterest;
                principleReadout = totalAmount - monthlyInterest;
                totalAmount = 0;
            }
            let totalAmountReadout = totalAmount.toFixed(2);
            let newArr = [i, newPayDate, paymentDisplay, monthlyInterestReadout, principleReadout, totalAmountReadout];
            newData.push(newArr);
            currPayDate = newPayDate;
        }
        //after for loop,
        setData(newData);
        setDone(true);
    }

    return (<></>
    );
}

export default CalculatorMonthly;