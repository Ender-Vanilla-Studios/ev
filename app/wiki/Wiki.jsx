'use client';
import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import Footer from "../menu/Footer.jsx";
import Header from "../menu/Header.jsx";

export default function Wiki() {
    const [articles, setArticles] = useState([]);
    const [content, setContent] = useState("");
    const [currentInfo, setCurrentInfo] = useState({ title: "", author: "" });
    const [loading, setLoading] = useState(false);

    // Загружаем список статей при старте
    useEffect(() => {
        fetch('/wiki/manifest.json')
            .then(res => res.json())
            .then(data => setArticles(data))
            .catch(err => console.error("Ошибка загрузки манифеста", err));
    }, []);

    const loadArticle = async (fileName) => {
        setLoading(true);
        // Разделяем имя файла: "Название$Автор.md"
        const cleanName = fileName.replace('.md', '');
        const [title, author] = cleanName.split('$');

        try {
            const res = await fetch(`/wiki/${fileName}`);
            const text = await res.text();
            setContent(text);
            setCurrentInfo({ title: title.replace(/([A-Z])/g, ' $1').trim(), author });
        } catch (e) {
            setContent("Ошибка загрузки статьи.");
        }
        setLoading(false);
    };

    return (
        <>
            <Header />
            <div className="center-hor" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh' }}>

                <h1 style={{ marginTop: '20px' }}>Вики Ender Vanilla</h1>

                <div style={{ display: 'flex', gap: '20px', width: '90%', maxWidth: '1200px', alignItems: 'flex-start' }}>

                    {/* Боковое меню (Sidebar) */}
                    <div className="mlg-v1" style={{ flex: '0 0 250px', textAlign: 'left', margin: '0' }}>
                        <h3>Навигация</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {articles.map((file, index) => (
                                <button
                                    key={index}
                                    className="mlg-v1-button"
                                    onClick={() => loadArticle(file)}
                                    style={{ width: '100%', textAlign: 'left', fontSize: '0.9rem' }}
                                >
                                    {file.split('$')[0].replace(/([A-Z])/g, ' $1')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Окно со статьей */}
                    <div className="mlg-v1" style={{ flex: '1', textAlign: 'left', margin: '0', minHeight: '400px' }}>
                        {currentInfo.title ? (
                            <>
                                <h2>{currentInfo.title}</h2>
                                <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '20px' }}>
                                    Автор статьи: <span style={{ color: '#d0d0ff' }}>{currentInfo.author}</span>
                                </p>
                                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '15px 0' }} />
                                <div className="wiki-text-render">
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </div>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                                <h3>Выберите интересующую статью слева</h3>
                                <p>Информация загружается напрямую с сервера Ender Vanilla</p>
                            </div>
                        )}
                        {loading && <p>Загрузка...</p>}
                    </div>
                </div>

            </div>
            <Footer />

            <style jsx global>{`
                /* Доп стили для рендеринга текста внутри вики */
                .wiki-text-render img {
                    max-width: 100%;
                    border-radius: 15px;
                    margin: 10px 0;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .wiki-text-render p {
                    margin-bottom: 15px;
                }
                .wiki-text-render h3 {
                    margin-top: 20px;
                }
                .wiki-text-render code {
                    background: rgba(255,255,255,0.1);
                    padding: 2px 6px;
                    border-radius: 5px;
                }
            `}</style>
        </>
    );
}