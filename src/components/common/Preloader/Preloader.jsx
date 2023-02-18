// core
import React from 'react';

// other
import preloader from "../../../public/loading.gif";

// styles
import style from "./Preloader.module.css";

export const Preloader = () => {
    return <img src={preloader} alt='#' className={style.preloader}/>
}
