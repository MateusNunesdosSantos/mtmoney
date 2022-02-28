import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransaction } from '../../hooks/useTransactions';


import { Container } from "./styles";



export function Summary () {
const { transactions } = useTransaction();
/*
const tatalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
        return acc + transaction.amount;
    }

    return acc;
}, 0);*/

const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;

    } else {
        acc.whithdraws += transaction.amount;
        acc.total -= transaction.amount;

    }

    return acc;
}, {
    deposits: 0,
    whithdraws: 0,
    total: 0,
}) 


console.log(transactions);

    return(
        <Container>



            <div>
                <header>
                    <p>Entradas</p>
                   <img src={incomeImg} width={35} alt="Entradas" />
                </header>

                <strong>
                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.deposits)}                    
                    </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                   <img src={outcomeImg} width={35} alt="Saidas" />
                </header>

                <strong>-{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.whithdraws)}  
                </strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                   <img src={totalImg} width={35} alt="Total" />
                </header>

                <strong>  {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}  
                </strong>
            </div>
        </Container>
    )
}