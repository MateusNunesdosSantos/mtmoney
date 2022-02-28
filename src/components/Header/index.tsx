import { useState } from 'react';
import logImg from '../../assets/logo.svg'

import {Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal}: HeaderProps) {
   

    return(
        <Container>
            <Content>
                <img src={logImg} width={80} alt="mt money" /> 
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
              
            </Content>
        </Container>
    )
}