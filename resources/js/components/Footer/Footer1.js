import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer1 = () => {
    const socmedData = [
        {
            social: "Facebook",
            url: "http://facebook.com",
            icon: <FaFacebookF/>,
        },
        {
            social: "Instagram",
            url: "http://Instagram.com",
            icon: <FaInstagram/>,
        },
        {
            social: "Twitter",
            url: "http://Twitter.com",
            icon: <FaTwitter/>,
        },
    ]
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="top-part">
                    <div className="row">
                        <div className="col-6">

                            <a href="/" className="remove_underline">
                                <div className="logo">
                                    <img src="https://keinabeauty.com/wp-content/uploads/2021/02/Logo-Big.png" alt="Keina Beauty" />
                                </div>
                            </a>

                        </div>
                        <div className="col-6 ml-auto flex justify-end">
                            <div className="social-container">
                                <div className="text-right">Follow Us</div>
                                {socmedData.map((item, i) => (
                                    <a key={i} href={item.url}>
                                        {item.icon}
                                    </a>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"/>
                <div className="bottom-part">
                    <div className="text-center text-sm py-4">
                        Copyright &copy; 2021
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer1
