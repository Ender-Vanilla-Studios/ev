import '../css/normalize.css';
import '../css/styles.css';
import '../css/mlg-v1.css';

export const metadata = {
    title: 'Ender Vanilla',
    description: 'Ender Vanilla - Без вайповая ламповая ванилла с элементами роле плэя | Minecraft сервер',
    icons: {
        icon: '/img/logo/ev.webp',
    },
    keywords: `
    minecraft, minecraft server, ender vanilla, vanilla server, без вайпов, ролевой сервер, minecraft roleplay,
    mc rpg, minecraft survival, minecraft pvp, minecraft community, minecraft multiplayer, minecraft economy,
    minecraft factions, minecraft creative, minecraft hardcore, minecraft adventure, minecraft minigames,
    minecraft clans, minecraft quests, minecraft exploration, minecraft crafting, minecraft mining, minecraft whitelist,
    minecraft pve, minecraft ip, minecraft game, minecraft launcher, minecraft vanilla rp, minecraft vanilla gameplay,
    minecraft vanilla experience, minecraft vanilla mods, minecraft vanilla plugins, minecraft vanilla economy,
    minecraft vanilla community, minecraft vanilla players, minecraft vanilla updates, minecraft russian servers,
    minecraft chill server, minecraft social server, minecraft friendly server, minecraft custom server, minecraft build server,
    minecraft no wipe, minecraft no wipes server, minecraft best servers, minecraft top servers
  `,
    themeColor: '#9311bc',
    twitter: {
        card: 'summary_large_image',
        title: 'Ender Vanilla',
        description: 'Без вайповая ванилла с элементами роле плэя',
        images: ['https://ender-vanilla.su/pre.png'],
    },
    openGraph: {
        title: 'Ender Vanilla',
        description: 'Без вайповая ванилла с элементами роле плэя',
        url: 'https://ender-vanilla.su/',
        images: ['https://ender-vanilla.su/pre.png'],
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <head>
            <meta charSet="utf-8"/>

            <link rel="icon" href="/img/logo/ev.webp" type="image/webp"/>

            <meta name="description"
                  content="Ender Vanilla - Без вайповая ламповая ванилла с элементами роле плэя | Minecraft сервер"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Ender Vanilla</title>
            <link rel="canonical" href="https://ender-vanilla.su/"/>

            {/* Open Graph */}
            <meta property="og:title" content="Ender Vanilla"/>
            <meta property="og:description" content="Без вайповая ванилла с элементами роле плэя"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://ender-vanilla.su/"/>
            <meta property="og:image" content="https://ender-vanilla.su/pre.png"/>

            {/* Twitter Card data */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Ender Vanilla"/>
            <meta name="twitter:description" content="Без вайповая ванилла с элементами роле плэя"/>
            <meta name="twitter:url" content="https://ender-vanilla.su/"/>
            <meta name="twitter:image" content="https://ender-vanilla.su/pre.png"/>


            {/* Цветовая палитра */}
            <meta name="theme-color" content="#9311bc"/>
            <meta name="msapplication-TileColor" content="#9311bc"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

            {/* SEO */}
            <meta name="robots" content="index, follow"/>
            <meta name="author" content="Mirik9724"/>
            <meta name="keywords" content="
            minecraft, minecraft server, ender vanilla, vanilla server, без вайпов, ролевой сервер, minecraft roleplay,
             mc rpg, minecraft survival, minecraft pvp, minecraft community, minecraft multiplayer, minecraft economy,
             minecraft factions, minecraft creative, minecraft hardcore, minecraft adventure, minecraft minigames,
             minecraft clans, minecraft quests, minecraft exploration, minecraft crafting, minecraft mining, minecraft whitelist,
             minecraft pve, minecraft ip, minecraft game, minecraft launcher, minecraft vanilla rp, minecraft vanilla gameplay,
             minecraft vanilla experience, minecraft vanilla mods, minecraft vanilla plugins, minecraft vanilla economy,
             minecraft vanilla community, minecraft vanilla players, minecraft vanilla updates, minecraft russian servers,
             minecraft chill server, minecraft social server, minecraft friendly server, minecraft custom server, minecraft build server,
             minecraft no wipe, minecraft no wipes server, minecraft best servers, minecraft top servers
            "/>

            {/* Для улучшения UX */}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

            {/* Кэширование */}
            <meta http-equiv="cache-control" content="no-cache"/>
            <meta http-equiv="expires" content="0"/>

            {/* Поддержка мобильных устройств */}
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-title" content="Ender Vanilla"/>

            {/* Контроль загрузки изображений */}
            <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width"/>
        </head>
        <body>{children}</body>
        </html>
    );
}
