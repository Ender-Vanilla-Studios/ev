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
    twitter: {
        card: 'summary_large_image',
        title: 'Ender Vanilla',
        description: 'Без вайповая ванилла с элементами роле плэя',
        images: ['https://ender-vanilla.su/img/pre.png'],
    },
    openGraph: {
        title: 'Ender Vanilla',
        description: 'Без вайповая ванилла с элементами роле плэя',
        url: 'https://ender-vanilla.su/',
        images: ['https://ender-vanilla.su/img/pre.png'],
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <head>
            <meta name="theme-color" content="#9311bc" />
        </head>
        <body>{children}</body>
        </html>
    );
}
