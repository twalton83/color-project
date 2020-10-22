import React from 'react'
import './Page.css';

export default function Page({children}) {
    return (
        <section class = "page">
            {children}
        </section>
    )
}
