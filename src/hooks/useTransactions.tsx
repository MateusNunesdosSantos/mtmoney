import { type } from "os";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

/**interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
}**/

//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionProviderProps {
    children: ReactNode;
}

interface TrasactionsContextData {
    transactions: Transaction[];
    createTransaction: (transactions: TransactionInput) => Promise<void>;
}

 const TranactionsContext = createContext<TrasactionsContextData>(
    {} as TrasactionsContextData
);


export function TransactionsProvide({children}: TransactionProviderProps) {

   const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[]);

 async  function createTransaction(transactionInput: TransactionInput) {
     const response =  await api.post('/transactions', {
         ...transactionInput, createdAt: new Date(),
     })
     const { transaction } = response.data;


     setTransactions([...transactions, transaction,])
    }

    return (
        <TranactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TranactionsContext.Provider>
    )

}

export function useTransaction() {
    const context = useContext(TranactionsContext);
    
    return context;
}