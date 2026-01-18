'use client';
import React from "react";
import Header from "../menu/Header.jsx";
import Footer from "../menu/Footer.jsx";
import Link from "next/link";

export default function Donate() {
    return (
        <>
            <Header />
            <div id="content">
                <div className="center-hor">
                    <div className="mlg-v1">
                    <h1>Вы можете купить донат через:</h1>
                    <ul>
                        <li>
                            <p>
                                <a href="https://discord.gg/3RxNaG9ftu" target="_blank" rel="noopener noreferrer">
                                    Криптовалюту(или переводом)
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <Link href="/shop" rel="noopener noreferrer">
                                    АвтоКрипто(БЕТА)
                                </Link>
                            </p>
                        </li>
                    </ul>
                </div></div>
            </div>
            <Footer />
        </>
    );
}
