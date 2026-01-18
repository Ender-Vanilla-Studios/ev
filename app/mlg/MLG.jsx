'use client';
import Footer from "../menu/Footer.jsx";
import Header from "../menu/Header.jsx";
import '@/css/mlg-v1.1.css';
import '@/css/miliquid-glass-beta.css';

export default function Home() {
    return (
        <>
            <Header/>
            <div className="center-hor">
                <div className="mlg-v1">
                    <h2>MiLiquid Glass</h2>
                    <p>Новый дизаин EVS</p>
                </div>
                <div className="mlg-v1-1">
                    <h2>Пример жидкого стекла mgl-v1-1</h2>
                    <p>Если вы это прочитали значит</p>
                    <p>Вам делать нечего</p>
                </div>


                <div className="mlg-v1">
                    <h2>Заголовок</h2>
                    <p>Описание...</p>
                    <button className="mlg-v1-button">Нажми меня</button>
                </div>

            </div>

            <Footer/>
        </>
    );
}
