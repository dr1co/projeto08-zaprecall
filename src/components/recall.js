import React from 'react';
import Footer from './footer.js';
import Content from './content.js';
import logo from '../assets/image/logo.png';

export default function Recall() {
    const [counter, setCounter] = React.useState(0)

    function addAnswer(answer) {
        questionsAnswered.push(answer);
    }

    function addOne() {
        setCounter(counter+1);
    }

    return (
        <section className="recall">
            <Header />
            <Content
            questionsDeck={questionsDeck}
            addOne={addOne}
            addAnswer={addAnswer}
            questionsAnswered={questionsAnswered} />
            <Footer
            counter={counter}
            questionsNumber={questionsDeck.length}
            questionsAnswered={questionsAnswered} />
        </section>
    )
}

function Header() {
    return (
        <header>
            <img src={logo} alt="Zap Recall" />
            <h1>ZapRecall</h1>
        </header>
    )
}

const questionsAnswered = [];

const questionsDeck = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript',
    },
    {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
    },
    {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula',
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
    },
    {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
    },
    {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências',
    },
    {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes',
    },
    {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
    }
];