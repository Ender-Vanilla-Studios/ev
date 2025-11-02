import React, { useState } from 'react';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <img id="logo" src="img/Ender_Vanilla.webp" alt="Логотип сайта" />
                </a>
            </div>

            <div className="burger" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <nav>
                        <a href="/">Главная</a>
                        <a href="d">Донат</a>
                        <a href="r?url=https://t.me/ender_vanilla/20" target="_blank">Карта</a>
                        <a href="#socseti">Контакты</a>
                        <a href="r&url=https://discord.com/channels/1072827575426109490/1373460124441645138">FAQ</a>
                        <a href="r?url=https://discord.com/channels/1072827575426109490/1199624750977273856">Wiki</a>
                        {/*<a href="evl">EVLauncher</a>*/}
                        {/*<a href="/ua">UA</a>*/}
                    </nav>
                </ul>
            </nav>
        </header>
    );
}

export default Header;