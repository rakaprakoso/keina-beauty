import React from 'react'

const Footer1 = () => {
    const socmedData = [
        {
            social: "Facebook",
            url: "http://facebook.com",
            icon: "Facebook",
        },
        {
            social: "Instagram",
            url: "http://Instagram.com",
            icon: "Instagram",
        },
        {
            social: "Twitter",
            url: "http://Twitter.com",
            icon: "Twitter",
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
                        <div className="col-6">
                            <ul>
                                {socmedData.map((item, i) => (
                                    <li key={i}>
                                        <a href={item.url}>
                                            {item.social}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
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
