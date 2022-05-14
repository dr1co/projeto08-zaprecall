import React from 'react';
import turnImg from '../assets/image/setinha.png';

export default function Content() {
    return (
        <div className="content">
            <Questions>
                {questionsDeck.map((comp) => <Question key={comp.key} number={comp.key} question={comp.question} answer={comp.answer} />)}
            </Questions>
        </div>
    )
}

function Question(props) {
    const [view, setView] = React.useState(false)
    let front = "front";
    let back = "hidden-back";

    function toggleView() {
        if(!view){
            setView(true);
            front = "hidden-front";
            back = "back"
        }
        else {
            setView(false);
            front = "front";
            back = "hidden-back";
        }
    }

    return (
        <div className="card">
            <div className="card-inner">
                <div className="hidden-front">
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="play-outline" onClick={toggleView}></ion-icon>
                </div>
                <div className="back">
                    <div className="back-inner">
                        <div className="question">
                            <p>{props.question}</p>
                        </div>
                        <div className="answer">
                            <p>{props.answer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Questions(props) {
    return (
        <div className="questions">
            {props.children}
        </div>
    )
}

const questionsDeck = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript',
        key: 1
    },
    {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
        key: 2
    },
    {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula',
        key: 3
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
        key: 4
    },
    {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
        key: 5
    },
    {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências',
        key: 6
    },
    {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes',
        key: 7
    },
    {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        key: 8
    }
]