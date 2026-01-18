'use client';
import { useEffect } from 'react';
import { useSearchParams } from "next/navigation";

import Footer from "../menu/Footer.jsx";
import Header from "../menu/Header.jsx";

export default function RedirectHandler() {
    const searchParams = useSearchParams();
    const url = searchParams.get('url');


    const isSafeUrl = (link) => {
        if (!link) return false;
        const forbiddenPatterns = ["javascript:", "<", ">"];
        return !forbiddenPatterns.some(pattern => link.toLowerCase().includes(pattern));
    };

    useEffect(() => {
        if (url && isSafeUrl(url)) {
            if (url.startsWith("http://") || url.startsWith("https://")) {
                window.location.href = url;
            } else {
                window.location.href = `${window.location.origin}${url}`;
            }
        }
    }, [url]);

    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>Перенаправление...</h1>
                {url && isSafeUrl(url) ? (
                    <p>Если вы не были перенаправлены, нажмите <a href={url}>сюда</a>.</p>
                ) : (
                    <p>Некорректная или небезопасная ссылка для редиректа.</p>
                )}
            </div>
            <Footer />
        </>
    );
}
