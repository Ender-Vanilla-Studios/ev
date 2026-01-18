'use client';
import React from "react";
import Footer from "./menu/Footer.jsx";
import Header from "./menu/Header.jsx";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>404 — Страница не найдена</h1>
                <div className="mlg-v1">
                    <p>Такой страницы не существует.</p>
                    <Link href="/">На главную</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
