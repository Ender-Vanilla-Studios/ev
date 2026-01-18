import React from 'react';
import './footer.css';
import Link from "next/link";

function Footer() {
    return (
        <footer className="footer">
            <p>Контактная информация:</p>
            <div className="social-icons" id="socseti">
                <div className="im-corn">
                <a href="https://t.me/ender-vanilla"><img src="img/logo/telegram.webp" alt="Telegram"/></a>
                <a href="https://vk.com/ender_vanilla"><img src="img/logo/vk.webp" alt="ВКонтакте"/></a>
                <a href="https://discord.gg/Fh9mVnRy24"><img src="img/logo/discord.svg" alt="Discord"/></a>
                <a href="https://hotmc.ru/minecraft-server-257605"><img src="img/logo/Hotmc.ico" alt="Hotmc"/></a>
                <a href="https://github.com/Ender-Vanilla-Studios"><img src="img/logo/github.png" alt="GitHub"/></a>
                <a href="https://modrinth.com/organization/evs"><img src="img/logo/modrinth.svg" alt="Modrinth"/></a>
                <a href="https://top-minecrafter.com/server/ender-vanilla/"><img src="img/logo/topminecrafter.ico" alt="TopMinecrafter"/></a>
                <a href="https://www.youtube.com/@mirik9724"><img src="img/logo/Youtube.webp" alt="Youtube"/></a>
                <a href="https://x.com/Mirik9724"><img src="img/logo/x.jpg" alt="X"/></a>
                </div>
            </div>
            <p>Не связано с Mojang, Microsoft или Minecraft.</p>
            <p>&copy; 2023 – 2026 Все права защищены<Link href={"/ss"}>.</Link></p>
        </footer>
    );
}

export default Footer;