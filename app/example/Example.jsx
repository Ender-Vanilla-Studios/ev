'use client';
import React from "react";
import Footer from "../menu/Footer.jsx";
import Header from "../menu/Header.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>Добро пожаловать на сервер Ender Vanilla!</h1>

                <div className="mlg-v1">
                    <h2>MiLiquid Glass</h2>
                    <p>Новый дизаин EVS</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
