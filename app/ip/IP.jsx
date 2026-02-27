'use client';
import React, { useState } from "react";
import Footer from "../menu/Footer.jsx";
import Header from "../menu/Header.jsx";

export default function Home() {
    const [copied, setCopied] = useState("");

    const copy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(""), 1500);
    };



    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>IP серверов</h1>

                <div className="mlg-v1">
                    <h2>🌍 Основной сервер</h2>
                    <p className="server-ip">JE: je.ender-vanilla.su</p>
                    <p className="server-ip">BE: be.ender-vanilla.su: 25989</p>

                    <div className="button-group">
                        <button
                            className="mlg-v1-button"
                            onClick={() => copy("je.ender-vanilla.su", "je")}
                        >
                            {copied === "je" ? "✅ Скопировано" : "Скопировать JE"}
                        </button>

                        <button
                            className="mlg-v1-button"
                            onClick={() => copy("be.ender-vanilla.su", "be")}
                        >
                            {copied === "be" ? "✅ Скопировано" : "Скопировать BE"}
                        </button>

                        <button
                            className="mlg-v1-button"
                            onClick={() => copy("25989", "port")}
                        >
                            {copied === "port" ? "✅ Скопировано" : "Скопировать порт"}
                        </button>
                    </div>
                </div>

            </div>
            <Footer />

            <style jsx>{`
            .server-ip {
                font-size: 1.1rem;
                font-weight: 600;
                margin: 6px 0;
                opacity: 0.95;
                letter-spacing: 0.5px;
            }

            .button-group {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            `}</style>
        </>
    );
}