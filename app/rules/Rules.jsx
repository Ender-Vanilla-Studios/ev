'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from "../menu/Header.jsx";
import Footer from "../menu/Footer.jsx";

export default function PrivacyPage() {
    const [markdown, setMarkdown] = useState('Загрузка...');

    useEffect(() => {
        fetch('/txts/rules.md')
            .then(res => {
                if (!res.ok) throw new Error('Не найден');
                return res.text();
            })
            .then(text => setMarkdown(text))
            .catch(() => setMarkdown('# Ошибка\nНе удалось загрузить политику.'));
    }, []);

    return (
        <>
            <Header />
            <div className="center-hor">
            <br/><br/><br/>
            <div className="plashka"><main>
                <div className="prose prose-invert ...">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdown}
                    </ReactMarkdown>
                </div>
            </main></div></div>

            <br/><br/><br/>
            <Footer />
        </>
    );
}