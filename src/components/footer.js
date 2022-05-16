import React from 'react';
import celebrate from '../assets/image/party.png'
import sad from '../assets/image/sad.png';

export default function Footer(props) {
    let finished = false;

    if(props.counter === props.questionsNumber){
        finished = true;
    };

    switch (finished) {
        case true:
            if(verifyRedAnswers(props.questionsAnswered)) {
                return (
                    <footer>
                        <div className="footer-content">
                            <div className="message">
                                <img src={celebrate} />
                                <p> <strong> Parabéns </strong></p>
                            </div>
                            <p> Você não esqueceu de <br /> nenhum flashcard!</p>
                            <div className="icons-list">
                                {props.questionsAnswered.map((icon, index) => <Icon key={index} icon={icon} />)}
                            </div>
                            <p>{props.counter}/{props.questionsNumber} CONCLUÍDOS</p>
                            <button className="home-button" onClick={props.toHomePage}>REINICIAR RECALL</button>
                        </div>
                    </footer>
                )
            } else {
                return (
                    <footer>
                        <div className="footer-content">
                            <div className="message">
                                <img src={sad} />
                                <p> <strong> Putz... </strong></p>
                            </div>
                            <p> Ainda faltam alguns... <br /> Mas não desanime! </p>
                            <div className="icons-list">
                                {props.questionsAnswered.map((icon, index) => <Icon key={index} icon={icon} />)}
                            </div>
                            <p>{props.counter}/{props.questionsNumber} CONCLUÍDOS</p>
                            <button className="home-button" onClick={props.toHomePage}>REINICIAR RECALL</button>
                        </div>
                    </footer>
                )
            }
        default:
            return (
                <footer>
                    <div className="footer-content">
                        <div className="icons-list">
                            {props.questionsAnswered.map((icon, index) => <Icon key={index} icon={icon} />)}
                        </div>
                        <p>{props.counter}/{props.questionsNumber} CONCLUÍDOS</p>
                    </div>
                </footer>
            )
    }
}

function Icon(props) {
    switch (props.icon) {
        case "red":
            return (
                <ion-icon name="close-circle" class="md hydrated red-text"></ion-icon>
            )
        case "yellow":
            return (
                <ion-icon name="help-circle" class="md hydrated yellow-text"></ion-icon>
            )
        case "green":
            return (
                <ion-icon name="checkmark-circle" class="md hydrated green-text"></ion-icon>
            )
        default: 
            return;
    }
}

function verifyRedAnswers(arr) {
    let counter = 0;
    for(let i=0 ; i<arr.length ; i++)
        if (arr[i] !== 'red') counter++;
    if (counter === arr.length) return true;
    else return false;
}