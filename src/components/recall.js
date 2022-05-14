import Footer from './footer.js';
import Content from './content.js';
import logo from '../assets/image/logo.png';

export default function Recall() {
    return (
        <section className="recall">
            <Header />
            <Content />
            <Footer />
        </section>
    )
}

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Zap Recall" />
            <h1>ZapRecall</h1>
        </div>
    )
}