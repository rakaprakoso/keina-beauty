import React from 'react'
import ReactDOM from 'react-dom';

import { IoCartOutline, IoHeartOutline, IoEnterOutline } from "react-icons/io5";

export const Header = () => {



    return (
        <header className="site-header">
            <div className="header-wrapper">
                <div className="top-part">
                    <div className="head-content">
                        <div className="site-branding">
                            <div className="site-title">
                                <a href="/" className="remove_underline">
                                    <div className="logo">
                                        <img src="https://keinabeauty.com/wp-content/uploads/2021/02/Logo-Big.png" alt="Keina Beauty" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <ul className="icon-nav">
                            {dataIconHeader.map((item, i) => (
                                <li>
                                    <a href={item.path}>
                                        <div className="icon icon-hvr">
                                            {item.icon}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="divider" />
                <div className="bottom-part">
                    <nav>
                        <ul>
                            {dataHeader.map((item, i) => (
                                <li className="hvr hvr-underline-from-center">
                                    <a href={item.path}>{item.label}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const dataHeader = [
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/shop',
        label: 'Products'
    },
    {
        path: 'https://lindungihutan.com/keinabeauty',
        label: 'Join Campaign'
    },
]

const dataIconHeader = [
    {
        path: '/favorites',
        icon: <IoHeartOutline />,
    },
    {
        path: '/cart',
        icon: <IoCartOutline />,
    },
    {
        path: '/login',
        icon: <IoEnterOutline />,
    },
]
