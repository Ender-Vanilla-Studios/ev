'use client';
import Redirect from './Redirect.jsx';
import {Suspense} from "react";

export default function Page() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Redirect />
        </Suspense>
    );
}
