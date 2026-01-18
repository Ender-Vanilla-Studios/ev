'use client';
import Header from "./menu/Header.jsx";
import Footer from "./menu/Footer.jsx";

function Main() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="center-hor">
                    <h1>Ender vanilla - Без вайповая ламповая ванилла с элементами роле плэя</h1>
                    <p><b>Наша главаная цель</b> дать игрокам <em>хорошее настроение</em> и <em>возможность найти
                        друзей</em></p>

                    <div className="mlg-v1">
                        <h2>Причины играть на Ender Vanilla:</h2>
                        <ul>
                            <li>✅ Нет вайпов</li>
                            <li>✅ Честное комьюнити</li>
                            <li>✅ Настоящая ванилла с улучшенным игровым процессом</li>
                            <li>✅ Нам уже 2 года и мы не закроемся!</li>
                            <li>✅ Ванильный Minecraft без вайпов — твои постройки остаются в сохранности!</li>
                            <li>✅ Стабильный TPS и низкий пинг — играй без лагов и проблем.</li>
                            <li>✅ Улучшение ваниллы — у нас есть дата-паки, которые улучшают дроп с шалкеров (2, а не 1
                                панцирь) и новые ванильные структуры.
                            </li>
                            <li>✅ Государства — на сервере существуют государства (без плагинов), и их может создать
                                любой желающий.
                            </li>
                            <li>✅ Ролевая игра — добавлены элементы ролевой игры, где каждый игрок может найти свою
                                уникальную роль в мире.
                            </li>
                            <li>✅ Самописный плагин на вайтлист.</li>
                            <li>✅ Кастомные предметы.</li>
                            <li>🌌 End 2.0 — это переработанный Энд с новыми структурами и улучшенной атмосферой.</li>
                        </ul>
                    </div>


                    <div className="mlg-v1">
                        <h2>Как играть?</h2>
                        <p>Подсоединяйтесь к нашему ДС</p>
                        <p>Ознакомтесь с нашими правилами</p>
                        <p>Сначала приобретите проходку за 100₽</p>
                        <p>Пройдите процесс адоптации в нашем сообществе</p>
                        <p>Все! Теперь вы часть нашей истории</p>
                    </div>
                    <div className="mlg-v1">
                        <h2>Игра</h2>
                        <p>Скачайте Minecraft JE 1.20.1+</p>

                        <ul><p>Скачате рекомендуемые моды:</p>
                            <li><a href="https://modrinth.com/mod/entitytexturefeatures" target="_blank">ETF</a> + <a
                                href="https://modrinth.com/mod/entity-model-features" target="_blank">EMF</a> +
                                <a href="https://modrinth.com/mod/cit-resewn" target="_blank">CIT Resewn</a> - для
                                ресурс паков
                            </li>
                            <li><a href="https://modrinth.com/mod/entityculling" target="_blank">Entity Culling</a></li>
                            <li><a href="https://modrinth.com/mod/xaeros-world-map" target="_blank">Xaero's World
                                Map</a> + <a href="https://modrinth.com/mod/xaeros-minimap" target="_blank">Xaero's
                                Minimap</a></li>
                            <li><a href="https://modrinth.com/mod/distanthorizons" target="_blank">Distant
                                Horizons</a> - расширяет чанки без лагов
                            </li>
                            <li><a href="https://modrinth.com/mod/continuity" target="_blank">Continuity</a> -
                                объеденные текстуры
                            </li>
                            <li><a href="https://modrinth.com/plugin/plasmo-voice" target="_blank">Plasmo Voice</a> -
                                голосовой чат прямо в игре
                            </li>
                            <li><a href="https://modrinth.com/mod/wi-zoom" target="_blank">WI Zoom</a> - зум</li>
                        </ul>
                    </div>
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