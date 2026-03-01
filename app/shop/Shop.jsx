'use client';
import { useState } from "react";
import Header from "../menu/Header.jsx";
import Footer from "../menu/Footer.jsx";

const products = [
    { id: 1, title: "Проходка", priceRub: 149, discountPrice: 99, img: "img/shop/ticket.png", description: "Даёт доступ к игровому серверу" },
    { id: 2, title: "Разбан", priceRub: 79, img: "img/shop/unban.jpg", description: "Разблокировка аккаунта(при наличии ограничений)" },
    {
        id: 3,
        title: "TOP",
        variants: [
            { id: "30", name: "30д", priceRub: 59},
            { id: "180", name: "180д", priceRub: 359, discountPrice: 299 },
            { id: "365", name: "365д", priceRub: 719, discountPrice: 539 },
        ],
        img: "img/shop/top.jpg",
        description: "Надпись TOP над головой и в табе\n" +
            "/enderchest - открыть эндер сундук",
    },
    {
        id: 4,
        title: "Ender",
        variants: [
            { id: "30", name: "30д", priceRub: 149},
            { id: "180", name: "180д", priceRub: 899, discountPrice: 749 },
            { id: "365", name: "365д", priceRub: 1799, discountPrice: 1349 },
        ],
        img: "img/shop/ender.png",
        description: "Цветная Надпись ENDER над головой и в табе\n"+
        "/enderchest - открыть эндер сундук\n"+
        "Антиспам",
    },
    {
        id: 5,
        title: "Ender VIP",
        variants: [
            { id: "30", name: "30д", priceRub: 279},
            { id: "180", name: "180д", priceRub: 1679, discountPrice: 1399 },
            { id: "365", name: "365д", priceRub: 3359, discountPrice: 2519 },
        ],
        img: "img/shop/endervip.png",
        description: "Цветная Надпись ENDERVIP над головой и в табе\n"+
        "/enderchest - открыть эндер сундук\n"+
        "/co i - доступ к информации о изменениях блоков игроками\n"+
        "Антиспам",
    },
    { id: 6, title: "Донат", priceRub: 49, img: "img/shop/Donate.png", description: "Поддержка EV" },
];

const usdRate = 100;

const PAYMENT_ADDRESSES = {
    TON:     "UQBxio4hfaO4xpKmO9Z-WHpjVa5exoHjUcPps9hh0PcaxjAL",
    POLYGON: "0x0645649E539ad81A3e3e71f2dDdC960AD29B568a",
};

const TOKEN_OPTIONS = {
    TON:     ["$TON", "$USDT", "$USDC", "$NOT"],
    POLYGON: ["$POL", "$USDT", "$USDC"],
};

const EXPLORER_LINKS = {
    TON:     "https://tonviewer.com/",
    POLYGON: "https://polygonscan.com/address/",
};

const ADMIN_TELEGRAM = "@ender_vanilla";

export default function Shop() {
    const [modalData, setModalData] = useState(null);
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [selectedToken, setSelectedToken] = useState(null);
    const [playerNick, setPlayerNick] = useState("");
    const [copied, setCopied] = useState(false);

    const [openIds, setOpenIds] = useState([]);
    const [selectedVariants, setSelectedVariants] = useState(() => {
        const init = {};
        products.forEach(p => {
            if (p.variants?.length) init[p.id] = p.variants[0].id;
        });
        return init;
    });

    const getAdminLink = () => {
        const comment = encodeURIComponent(getOrderComment() + ` (токен: ${selectedToken}, сеть: ${selectedNetwork})`);
        return `https://t.me/${ADMIN_TELEGRAM}?text=${comment}`;
    };

    const closeModal = () => {
        setModalData(null);
        setSelectedNetwork(null);
        setSelectedToken(null);
        setCopied(false);
    };

    const toggleOpen = (id) => {
        setOpenIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const handleVariantSelect = (productId, variantId) => {
        setSelectedVariants(prev => ({ ...prev, [productId]: variantId }));
    };

    const getOrderComment = () => {
        if (!modalData || !playerNick.trim()) return "";
        const variantPart = modalData.variant ? ` ${modalData.variant}` : "";
        return `${playerNick.trim()}:${modalData.title}${variantPart}:${modalData.price.toFixed(2)}$`;
    };

    const copyComment = async () => {
        const comment = getOrderComment();
        if (!comment) return;

        try {
            await navigator.clipboard.writeText(comment);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            alert("Не удалось скопировать. Скопируйте вручную:\n" + comment);
        }
    };

    const canProceed = playerNick.trim().length >= 3 && !!getOrderComment();

    const getExplorerLink = () => {
        return `${EXPLORER_LINKS[selectedNetwork]}${PAYMENT_ADDRESSES[selectedNetwork]}`;
    };

    return (
        <>
            <Header />

            <div className="center-hor" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, max-content)',
                columnGap: '20px',
                justifyContent: 'center',
                alignItems: 'start',
            }}>
                {products.map(product => {
                    const isOpen = openIds.includes(product.id);
                    const vid = selectedVariants[product.id];
                    const variant = product.variants?.find(v => v.id === vid);
                    const priceRub = variant?.discountPrice ?? variant?.priceRub ?? product.discountPrice ?? product.priceRub ?? 0;
                    const origRub  = variant?.priceRub ?? product.priceRub ?? 0;
                    const usd = priceRub / usdRate;

                    return (
                        <div
                            key={product.id}
                            className={`mlg-v1 product-card ${isOpen ? 'open' : ''}`}
                            onClick={(e) => { if (e.target.tagName !== 'BUTTON') toggleOpen(product.id); }}
                            style={{ cursor: 'pointer', marginBottom: '20px' }}
                        >
                            <img src={product.img} alt={product.title} />
                            <h3>{product.title}</h3>

                            {product.variants && (
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                    {product.variants.map(v => (
                                        <button
                                            key={v.id}
                                            onClick={(e) => { e.stopPropagation(); handleVariantSelect(product.id, v.id); }}
                                            style={{
                                                padding: "4px 10px",
                                                backgroundColor: vid === v.id ? "#007bff" : "transparent",
                                                minWidth: "65px",
                                            }}
                                            className="mlg-v1-button"
                                        >
                                            {v.name}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <p>
                                Цена:{" "}
                                {priceRub < origRub ? (
                                    <>
                                        <span style={{ textDecoration: "line-through", color: "#aaa" }}>{origRub}₽</span>{' '}
                                        <strong>{priceRub}₽</strong> / ${usd.toFixed(2)}
                                    </>
                                ) : (
                                    <>{priceRub}₽ / ${usd.toFixed(2)}</>
                                )}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const variantName = variant?.name || "";
                                    setModalData({ title: product.title, price: usd, variant: variantName });
                                    setSelectedNetwork(null);
                                    setSelectedToken(null);
                                }}
                                className="mlg-v1-button"
                                style={{ width: '100%', padding: '10px', marginTop: '10px' }}
                            >
                                КУПИТЬ
                            </button>

                            <div className={`product-description ${isOpen ? 'active' : ''}`}>
                                {product.description}
                            </div>
                        </div>
                    );
                })}
            </div>

            <Footer />

            {modalData && (
                <div
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(0,0,0,0.7)',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        zIndex: 9999,
                    }}
                    onClick={closeModal}
                >
                    <div
                        className="mlg-v1"
                        style={{ maxWidth: 420, width: '90%', padding: 24, borderRadius: 12 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <h2>Оформление заказа</h2>
                        <p style={{ margin: '12px 0' }}>
                            Товар: <strong>{modalData.title}</strong> (${modalData.price.toFixed(2)})
                        </p>

                        <input
                            type="text"
                            placeholder="Ваш ник на сервере (минимум 3 символа)"
                            value={playerNick}
                            onChange={e => setPlayerNick(e.target.value.trim())}
                            className="mlg-v1-input"
                            style={{ width: '100%', margin: '12px 0' }}
                        />

                        {!selectedNetwork ? (
                            <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
                                <button className="mlg-v1-button" onClick={() => setSelectedNetwork('TON')}>TON Network</button>
                                <button className="mlg-v1-button" onClick={() => setSelectedNetwork('POLYGON')}>Polygon</button>
                            </div>
                        ) : !selectedToken ? (
                            <>
                                <h3 style={{ margin: '24px 0 12px' }}>Выберите токен ({selectedNetwork})</h3>
                                <div style={{ display: 'grid', gap: 10 }}>
                                    {TOKEN_OPTIONS[selectedNetwork].map(tok => (
                                        <button
                                            key={tok}
                                            className="mlg-v1-button"
                                            onClick={() => setSelectedToken(tok)}
                                        >
                                            {tok}{selectedNetwork === 'TON' && tok !== 'TON'}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setSelectedNetwork(null)}
                                    style={{ marginTop: 20, background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}
                                >
                                    ← Назад к выбору сети
                                </button>
                            </>
                        ) : (
                            <>
                                <h3 style={{ color: '#4caf50', margin: '20px 0 8px' }}>
                                    Оплата: {selectedToken} на {selectedNetwork}
                                </h3>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                                    Сумма: ${modalData.price.toFixed(2)}
                                </p>

                                <div style={{ background: '#111', padding: 12, borderRadius: 6, margin: '16px 0', wordBreak: 'break-all' }}>
                                    <div style={{ color: '#888', fontSize: '0.85em' }}>Адрес для перевода:</div>
                                    <code>{PAYMENT_ADDRESSES[selectedNetwork]}</code>
                                </div>

                                <p style={{ color: '#ff9800', margin: '20px 0 8px', fontWeight: 'bold' }}>
                                    Важно! Укажите в поле комментария точно эту строку:
                                </p>

                                <div style={{
                                    background: '#222', padding: 14, borderRadius: 8,
                                    fontFamily: 'monospace', fontSize: '1em', wordBreak: 'break-word',
                                    position: 'relative'
                                }}>
                                    {getOrderComment() || "(введите ник сначала)"}
                                </div>

                                <button
                                    onClick={copyComment}
                                    className="mlg-v1-button"
                                    style={{
                                        marginTop: 12,
                                        width: '100%',
                                        padding: '10px',
                                        background: copied ? '#4caf50' : '#007bff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 6,
                                        cursor: canProceed ? 'pointer' : 'not-allowed',
                                        opacity: canProceed ? 1 : 0.6
                                    }}
                                    disabled={!canProceed}
                                >
                                    {copied ? "Скопировано ✓" : "Скопировать комментарий"}
                                </button>

                                <a
                                    href={getAdminLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mlg-v1-button"
                                    style={{
                                        display: 'block',
                                        marginTop: 12,
                                        padding: '10px',
                                        background: '#28a745',
                                        color: '#fff',
                                        textAlign: 'center',
                                        borderRadius: 6,
                                        textDecoration: 'none',
                                        cursor: canProceed ? 'pointer' : 'not-allowed',
                                        opacity: canProceed ? 1 : 0.6
                                    }}
                                    onClick={(e) => { if (!canProceed) e.preventDefault(); }}
                                >
                                    Написать админу (я оплатил)
                                </a>

                                <div style={{
                                    background: '#2c1a00', padding: 12, borderRadius: 6,
                                    margin: '20px 0', fontSize: '0.9em', border: '1px solid #ff9800'
                                }}>
                                    <strong>Политика обработки платежей:</strong><br />
                                    Без правильного комментария транзакция не будет идентифицирована. Донат не выдаётся, средства не возвращаются. Проверяйте комментарий дважды перед отправкой.
                                </div>

                                {!canProceed && (
                                    <p style={{ color: '#ff4d4d', marginTop: 12, textAlign: 'center' }}>
                                        Введите ник (минимум 3 символа), чтобы продолжить
                                    </p>
                                )}

                                <button
                                    onClick={() => setSelectedToken(null)}
                                    style={{ marginTop: 16, background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}
                                >
                                    ← Изменить токен / сеть
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}