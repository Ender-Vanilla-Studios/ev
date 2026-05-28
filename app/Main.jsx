'use client';
import Header from "./menu/Header.jsx";
import Footer from "./menu/Footer.jsx";
import Script from "next/script";
import Link from "next/link";
import React from "react";

function Main() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="center-hor">
                    <h1>Ender Vanilla - Без вайповая ламповая ванилла с RP и QoL фичами</h1>
                    <h3><b>Наша главная цель</b> дать игрокам <b>хорошее настроение</b> и <b>возможность найти
                        друзей</b></h3>
                    <h3>🎂 Работаем с  8 февраля 2023!<br /></h3>

                    <div className="mlg-v1">
                            <h3>Наши фичи:</h3>
                        <ul>
                            <li>✅Улучшение ваниллы - у нас есть дата паки которые улучшают дроп с шалкеров(2, а не 1 панцирь), и новые ванильные структуры</li>
                            <li>✅Государства - на сервере существуют государства (без плагинов), и их может создать любой желающий</li>
                            <li>✅Самописный плагин на вайтлист</li>
                            <li>✅Можно приручить лис</li>
                            <li>✅Можно вешать на цепи броню</li>
                            <li>✅Можно обновлять бролню до незеритов без шаблонов</li>
                            <li>✅Своя система скинов</li>
                            <li>✅После смерти игркоа появляются могилы</li>
                            <li>✅Плагин на волейбол</li>
                            <li>✅mc 1.20.1+</li>
                            <li>✅Наигранное время /playtime</li>
                            <li>✅Можно октырть шалкер в руке</li>
                            <li>✅Можно покрасить живой шалкер</li>
                            <li>✅Голосовй чат Plasmo Voice</li>
                            <li>✅мод FemaleGender</li>
                            <li>✅Мост между flxr и чатом майна</li>
                            <li>✅Можно сидеть на плитах игрока коврах и тд</li>
                            <li>✅Криперы, эндермены, гасты не гриферят</li>
                            <li>✅Своя булава!</li>
                            <li>✅Поддержка мода Distant Horizons</li>
                            <li>✅Головы выпадают с мобов</li>
                            <li>✅Из цемента в бетон в котле</li>
                            <li>✅Быстрый пропуск ночи</li>
                            <li>✅Пивоварение с Brewery</li>
                            <li>✅Свои крафты</li>
                            <li>✅Демократичные правила📜</li>
                        </ul>
                            💬 Связь и поддержка: Мы всегда на связи в Discord и Telegram
                    </div>


                    <div className="mlg-v1">
                        <h2>Как играть?</h2>
                        <p>Подсоединяйтесь к нашему Discord серверу</p>
                        <p>Ознакомтесь с нашими правилами</p>
                        <p>Загляните в <Link href={"wiki"}>вики</Link></p>
                        <p>Пройдите процесс адоптации в нашем сообществе</p>
                        <p>Заполните заявку на проходку</p>
                        <p>Все! Теперь вы часть нашей истории</p>
                        <Link  href={"ip"}>IP тут</Link>
                    </div>

                    <a href="r?url=https://drive.google.com/drive/folders/1HPH6rZcToXEjsEOa3P-3zZby4rgdSg1Z?usp=sharing" target="_blank">Обои</a>

                    <div className="mlg-v1">
                        <h2>EV Гайды на YouTube🎵</h2>
                        <div style={{
                            position: "relative",
                            paddingBottom: "56.25%",
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "20px",
                            willChange: "transform, box-shadow, border-radius"
                        }}>
                            <iframe
                                src="https://www.youtube.com/embed/videoseries?list=PLBeI8EsmpLzh8uQgEJWm3LpPi1OecOUlA"
                                title="YouTube Playlist"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Main;