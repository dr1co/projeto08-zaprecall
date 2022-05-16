import React from 'react';
import turnImg from '../assets/image/setinha.png';

export default function Content() {
    questionsDeck.sort(() => {return Math.random() - 0.5});

    return (
        <div className="content">
            <Questions>
                {questionsDeck.map((comp, index) => <Question key={index} number={index + 1} question={comp.question} answer={comp.answer} />)}
            </Questions>
        </div>
    )
}

function Question(props) {
    const [view, setView] = React.useState(false);

    function toggleView() {
        setView(!view);
    }

    const [response, setResponse] = React.useState('unanswered');

    function toggleResponse(a) {
        toggleView();
        setResponse(a);
    }

    switch (view) {
        case true:
            return (
                <div className="card">
                    <div className="card-inner">
                        <CardContent status={view} question={props.question} answer={props.answer} toggleResponse={toggleResponse} />
                    </div>
                </div>
            )
        default:
            return (
                <div className="card">
                    <div className="card-inner">
                        <CardFace number={props.number} toggleView={toggleView} response={response} />
                    </div>
                </div>
            )

    }
}

function CardFace(props) {
    switch(props.response) {
        case 'red':
            return (
                <div className="front red-text">
                    <h2 className="line-through">Pergunta {props.number}</h2>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
        case 'yellow':
            return (
                <div className="front yellow-text">
                    <h2 className="line-through">Pergunta {props.number}</h2>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        case 'green':
            return (
                <div className="front green-text">
                    <h2 className="line-through">Pergunta {props.number}</h2>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        default:
            return (
                <div className="front">
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="play-outline" onClick={props.toggleView}></ion-icon>
                </div>
            )
    }
}

function CardContent(props) {
    const [flip, setFlip] = React.useState(false);

    function flipCard() {
        setFlip(!flip);
    }

    return (
        <div className={`back ${flip ? "flipped" : ""}`}>
            <div className={`back-inner`}>
                <div className="question">
                    <p>{props.question}</p>
                    <img src={turnImg} onClick={flipCard} alt="setinha" />
                </div>
                <div className="answer">
                    <p>{props.answer}</p>
                    <div className="answer-buttons">
                        <button className="red" onClick={() => props.toggleResponse('red')}>Não lembrei</button>
                        <button className="yellow" onClick={() => props.toggleResponse('yellow')}>Quase não lembrei</button>
                        <button className="green" onClick={() => props.toggleResponse('green')}>Zap!</button>
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
]