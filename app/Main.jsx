'use client';
import Header from "./menu/Header.jsx";
import Footer from "./menu/Footer.jsx";

function Main() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="center-hor">
                    <h1>Ender vanilla - Без вайповая ламповая ванилла с RP и QoL фичами</h1>
                    <h3><b>Наша главная цель</b> дать игрокам <b>хорошее настроение</b> и <b>возможность найти
                        друзей</b></h3>
                    <p>🎂 Работаем с  8 февраля 2023!<br /></p>

                    <div className="mlg-v1">
                            🚀 Наши фичи:
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
                            <li>✅узанть соклкьо наиграли /playtime</li>
                            <li>✅Можно октырть шалкер в руке</li>
                            <li>✅Можно покраить живой шалкер</li>
                            <li>✅Голосовй чат лпазмовойс</li>
                            <li>✅мод Female-Gender-Mod-Plugin</li>
                            <li>✅Мост между дс и чатом майна</li>
                            <li>✅Можно сидеть на плитах игрока коврах и тд</li>
                            <li>✅Криперы и эндер мены не гриферят</li>
                            <li>✅Своя булава!</li>
                            <li>✅Поддержка мода DistantHorozonts</li>
                            <li>✅Головы выпадают с мобов</li>
                            <li>✅Из цемента в бетон в котле</li>
                            <li>✅Быстрый пропуск ночи</li>
                            <li>✅Пивоварение с Brewery</li>
                            <li>✅Свои крафты</li>
                            <li>✅Демократичные правила📜</li>
                        </ul>
                            💬 Связь и поддержка: Мы всегда на связи в Discord и Telegram.
                    </div>


                    <div className="mlg-v1">
                        <h2>Как играть?</h2>
                        <p>Подсоединяйтесь к нашему ДС</p>
                        <p>Ознакомтесь с нашими правилами</p>
                        <p>Пройдите процесс адоптации в нашем сообществе</p>
                        <p>Заполните заявку на проходку</p>
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
                            <li><a href="https://modrinth.com/mod/female-gender" target="_blank">Female Gender Mod</a> - женская модель игрока</li>
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