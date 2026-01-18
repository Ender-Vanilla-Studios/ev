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

export default function Shop() {
    // Инициализация выбранных вариантов: первый вариант каждого товара (если есть)
    const initialVariants = {};
    products.forEach(product => {
        if (product.variants && product.variants.length > 0) {
            initialVariants[product.id] = product.variants[0].id;
        }
    });

    const [openIds, setOpenIds] = useState([]);
    const [selectedVariants, setSelectedVariants] = useState(initialVariants);

    const toggleOpen = (id) => {
        if (openIds.includes(id)) {
            setOpenIds(openIds.filter(openId => openId !== id));
        } else {
            setOpenIds([...openIds, id]);
        }
    };

    const handleVariantSelect = (productId, variantId) => {
        setSelectedVariants(prev => ({ ...prev, [productId]: variantId }));
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
                    const variantId = selectedVariants[product.id];
                    const variant = product.variants ? product.variants.find(v => v.id === variantId) : null;
                    const finalPriceRub = variant ? variant.priceRub : product.priceRub;
                    const finalDiscountRub = variant ? variant.discountPrice : product.discountPrice;
                    const priceUsd = (finalDiscountRub ? finalDiscountRub : finalPriceRub) / usdRate;

                    return (
                        <div
                            key={product.id}
                            className={`mlg-v1 product-card ${isOpen ? 'open' : ''}`}
                            onClick={(e) => {
                                if (e.target.tagName === 'BUTTON') {
                                    return;
                                }
                                toggleOpen(product.id);
                            }}
                            style={{ cursor: 'pointer', marginBottom: '20px' }}
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                            />
                            <h3>{product.title}</h3>

                            {product.variants && (
                                <div style={{
                                    justifyContent: 'center',
                                }}>
                                    {product.variants.map((v, index) => (
                                        <button
                                            key={v.id}
                                            onClick={() => {

                                                handleVariantSelect(product.id, v.id)}}
                                            style={{
                                                padding: "3px",
                                                backgroundColor: variantId === v.id ? "#007bff" : "transparent",
                                                minWidth: "70px",
                                                transition: "all 0.2s",
                                            }}
                                            className="mlg-v1-button"
                                        >
                                            {v.name}
                                        </button>
                                    ))}
                                </div>
                            )}


                            {/* Цена и скидка */}
                            <p>
                                Цена:{" "}
                                {finalDiscountRub && finalDiscountRub !== finalPriceRub ? (
                                    <>
                                        <span style={{
                                            textDecoration: "line-through",
                                            color: "#d9d9d9",
                                            fontWeight: "bold",
                                        }}>
                                            {finalPriceRub}₽
                                        </span>{" "}
                                        {finalDiscountRub}₽ / ${priceUsd.toFixed(2)}
                                    </>
                                ) : (
                                    <>
                                        {finalPriceRub}₽ / ${priceUsd.toFixed(2)}
                                    </>
                                )}
                            </p>

                            <div className={`product-description ${isOpen ? 'active' : ''}`}>
                                {product.description}
                            </div>
                        </div>
                    );
                })}
            </div>

            <Footer />
        </>
    );
}
