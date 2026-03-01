// components/AgreementPanel.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";

export default function AgreementPanel() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('ev_agreed')) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShow(true);
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem('ev_agreed', 'true');
        setShow(false);
    };

    const handleDisagree = () => {
        alert('Без согласия ты не можешь пользоваться сайтом и сервером.');
        window.location.href = 'https://google.com';
    };

    if (!show) return null;

    return (
        <div
            className="mlg-v1-mo"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                padding: '10px 20px',           // ← нормальный padding со всех сторон
                background: 'rgba(30, 30, 40, 0.95)',
                borderTop: '2px solid #444',
                boxShadow: '0 -4px 12px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                fontSize: '15px',
            }}
        >
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
            }}>
                <p style={{ margin: 0, textAlign: 'center' }}>
                    Находясь на сайте и используя наши сервисы вы даёте своё согласие с этими документами:
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    justifyContent: 'center',
                }}>
                    <Link
                        href="/rules"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4da6ff', textDecoration: 'underline' }}
                    >
                        Правилами сервера
                    </Link>

                    <Link
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4da6ff', textDecoration: 'underline' }}
                    >
                        Политикой конфиденциальности
                    </Link>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <button
                        onClick={handleDisagree}
                        className="mlg-v1-button"
                        style={{
                            background: '#c0392b',
                        }}
                    >
                        Я не согласен
                    </button><br/>

                    <button
                        onClick={handleAgree}
                        className="mlg-v1-button"
                        style={{
                            background: '#27ae60',
                        }}
                    >
                        Я прочитал и согласен
                    </button>
                </div>
            </div>
        </div>
    );
}