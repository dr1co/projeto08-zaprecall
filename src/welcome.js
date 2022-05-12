export default function Welcome() {
    return (
        <section className="welcome">
            <img src="./assets/image/logo.png" />
            <h1>Zap Recall</h1>
            <button onClick={toRecallPage}>Iniciar Recall!</button>
        </section>
    )
}

function toRecallPage() {
    console.log("troquei");
    document.querySelector(".welcome").classList.add("hidden");
}