import React, { useState } from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header>
            <div className="logo">
                <div className="im-corn">
                <Link href="/">
                    <img id="logo" src="img/logo/Ender_Vanilla.webp" alt="Логотип сайта" />
                </Link>
            </div></div>

            <div className="mlg-v1-mo burger" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            <div className={`nav-menu  mlg-v1-mo ${menuOpen ? 'open' : ''}`}>
                <ul className="header-ul">
                    <nav>
                        <Link href="/">Главная</Link>
                        <Link href="shop">Донат</Link>
                        <Link href="ip">IP</Link>
                        <a href="r?url=https://drive.google.com/drive/folders/1nTKLR3do6z_DYg_5rWkd58MGcfDddAiK?usp=sharing" target="_blank">Карта ОФФ</a>
                        <a href="#socseti">Контакты</a>
                        <a href="r?url=https://discord.com/channels/1072827575426109490/1454393232418148362/1454393232418148362" target="_blank">FAQ</a>
                        <a href="r?url=https://drive.google.com/drive/folders/1HPH6rZcToXEjsEOa3P-3zZby4rgdSg1Z?usp=sharing" target="_blank">Обои</a>
                        <Link href="rules">Правила</Link>
                        <Link href="ciapi">CIAPI</Link>
                        <a href="minecraft://?addExternalServer=Ender Vanilla|be.ender-vanilla.su:25989" target="_blank">+Сервер</a>
                    </nav>
                </ul></div>
        </header>
    );
}

export default Header;