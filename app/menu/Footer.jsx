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
                <a href="https://t.me/+UXjLZ8svuKE4MDBi"><img src="img/logo/telegram.webp" alt="Telegram 2"/></a>
                <a href="https://fluxer.gg/fZb7FMBd"><img src="img/logo/fluxer.jpg" alt="Fluxer"/></a>
                <a href="https://hotmc.ru/minecraft-server-257605"><img src="img/logo/Hotmc.ico" alt="Hotmc"/></a>
                <a href="https://minecraftrating.ru/server/endervanilla/"><img src="img/logo/minecraftrating.png" alt="MinecraftRating"/></a>
                    <a href="https://top-minecrafter.com/server/ender-vanilla/"><img src="img/logo/topminecrafter.ico" alt="TopMinecrafter"/></a>
                <a href="https://github.com/Ender-Vanilla-Studios"><img src="img/logo/github.png" alt="GitHub"/></a>
                <a href="https://modrinth.com/organization/evs"><img src="img/logo/modrinth.svg" alt="Modrinth"/></a>
                <a href="https://www.youtube.com/@mirik9724"><img src="img/logo/Youtube.webp" alt="Youtube"/></a>
                </div>
            </div>
            <p>Не связано с Mojang, Microsoft или Minecraft.</p>
            <p>&copy; 2023 – 2026 Все права защищены<Link href={"/ss"}>.</Link></p>
        </footer>
    );
}

export default Footer;