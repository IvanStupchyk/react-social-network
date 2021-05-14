import React from "react";
import s from './Wallpaper.module.scss';

export const Wallpaper = () => {
    return (
        <div className={s.wallpaper}>
            <img alt={'wallpaper'} src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
        </div>
    )
}