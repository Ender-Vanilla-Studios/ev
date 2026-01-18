import '../css/normalize.css';
import '../css/styles.css';
import '../css/mlg-v1.css';

export default function RootLayout({ children }) {
    return (
        <html>
        <body>{children}</body>
        </html>
    );
}
