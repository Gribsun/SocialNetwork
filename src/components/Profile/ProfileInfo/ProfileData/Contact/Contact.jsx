// core
import React from "react";

// styles
import style from './Contact.module.css';

export const Contact = ({contact}) => {
    const contactKey = Object.keys(contact)[0];
    return (
        <div className={style.wrapper}>
            {contactKey}: <a href={contact[contactKey]}>{contact[contactKey]}</a>
        </div>
    )
}
