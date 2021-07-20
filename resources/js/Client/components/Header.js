import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from "react-router-dom";

import { IoCartOutline, IoHeartOutline, IoEnterOutline } from "react-icons/io5";
import { FiMenu, FiChevronsRight } from "react-icons/fi";

import { Navigation } from 'react-minimal-side-navigation';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

import logo from "../../Public/Logo Big.png"

export const Header = () => {

    const history = useHistory();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-wrapper">
                <div className="top-part">
                    <div className="head-content">
                        <button className="mobile-nav-toggle"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            type="button"
                        >
                            <div className="icon-hvr"><FiMenu /></div>
                        </button>
                        <div className="site-branding">
                            <div className="site-title">
                                <a href="/" className="remove_underline">
                                    <div className="logo">
                                        <img src={logo} alt="Keina Beauty" />
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
                <div className="bottom-part hidden md:flex">
                    <nav>
                        <ul>
                            {dataHeader.map((item, i) => (
                                <li className="hvr hvr-underline-from-center">
                                    <a href={item.itemId}>{item.title}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`sidebar block md:hidden fixed inset-y-0 right-0 z-30 w-3/4 shadow overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in translate-x-full"
                    }`}
            >
                <div className="header-wrapper py-8">

                    <div className="top-sidebar flex flex-col">
                        <div className="button-container relative ml-auto">
                            <button className="mobile-nav-toggle button-hvr"
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                type="button"
                            >
                                <FiChevronsRight />
                            </button>
                        </div>
                        <div className="logo mr-auto pr-4">
                            <img src={logo} alt="Keina Beauty" />
                        </div>
                    </div>
                    <div className="divider mt-2" />
                    <nav>
                        <ul>
                            {dataHeader.map((item, i) => (
                                <li className="my-2">
                                    <a className="hvr hvr-underline-from-center" href={item.itemId}>{item.title}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                    <div className="divider"/>
                                        <div className="flex justify-center">
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


                {/* <ProSidebar rtl={true}>
                    <SidebarHeader>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem
                            // icon={<FaGem />}
                            >Dashboard</MenuItem>
                            <SubMenu title="Components"
                            // icon={<FaHeart />}
                            >
                                <MenuItem>Component 1</MenuItem>
                                <MenuItem>Component 2</MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                </ProSidebar> */}

                {/* <div className="flex items-center justify-center mt-10 text-center py-6">
                    <span className="mx-2 text-2xl font-semibold text-black">
                        react-minimal-side-navigation
                    </span>
                </div>


                <Navigation
                    // you can use your own router's api to get pathname
                    activeItemId={location.pathname}
                    onSelect={({ itemId }) => {
                        history.push(itemId);
                    }}
                    items={dataHeader}
                /> */}


            </div>
            {/* <div className="block md:hidden">

            </div> */}
        </header>
    )
}

const dataHeader = [
    {
        title: 'About',
        itemId: '/about',
        // elemBefore: () => <Icon name="inbox" />,
    },
    {
        title: 'Products',
        itemId: '/shop',
        subNav: [
            {
                title: 'Skin Care',
                itemId: '/shop/skin-care',
            },
            {
                title: 'Body Treatment',
                itemId: '/shop/body-treatment',
            },
        ],
    },
    {
        title: 'Article',
        itemId: '/article',
    },
    {
        title: 'Join Campaign',
        itemId: 'https://lindungihutan.com/keinabeauty',
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
