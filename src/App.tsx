import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvide } from './hooks/useTransactions';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionsModal() {
      setIsNewTransactionModalOpen(true);

  }

  function handleCloseNewTransactionsModal() {
      setIsNewTransactionModalOpen(false)
  }



  return (
    <TransactionsProvide>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal}/>
        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionsModal}
          />

        <GlobalStyle/>
      </TransactionsProvide>
  );
}

