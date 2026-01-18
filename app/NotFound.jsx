import React from "react";
import Footer from "./menu/Footer.jsx";
import Header from "./menu/Header.jsx";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>404 — Страница не найдена</h1>
                <p>Такой страницы не существует.</p>
                <a href="/">На главную</a>
            </div>
            <Footer />
        </>
    );
}
