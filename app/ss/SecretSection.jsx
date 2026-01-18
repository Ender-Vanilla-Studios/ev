'use client';
import React, { useState } from 'react';
import Header from "../menu/Header.jsx";
import Footer from "../menu/Footer.jsx";

export default function SecretSection() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Header />
            <main className="center-hor">
                <h1 className="text-3xl font-bold mb-4">Поздравляем! Вы нашли секретный раздел!</h1>
                <p className="text-lg mb-4">Нажмите кнопку ниже, чтобы посмотреть видео о проекте</p>
                <button
                    className="mlg-v1-button"
                    onClick={() => setShowVideo(true)}
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    Посмотреть видео
                </button>

                {showVideo && (
                    <div
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%", // 16:9
                            paddingTop: 25,
                            height: 0,
                            width: "100%",
                            marginTop: "20px"
                        }}
                    >
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1"
                            title="Видео о проекте"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                        ></iframe>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
