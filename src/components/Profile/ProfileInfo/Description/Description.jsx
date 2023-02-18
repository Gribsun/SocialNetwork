// core
import React from "react";

// styles
import style from './Description.module.css';

export const Description = ({fullName}) => {
    return (
        <div className={style.description}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <h1>
                        {fullName}
                    </h1>
                </li>
                <li className={style.li}>
                    Birthday: March 21
                </li>
                <li className={style.li}>
                    Country: Canada
                </li>
                <li className={style.li}>
                    Website:
                    <a href='http://www.croteam.com/'>
                        http://www.croteam.com/
                    </a>
                </li>

            </ul>
        </div>
    )
}
