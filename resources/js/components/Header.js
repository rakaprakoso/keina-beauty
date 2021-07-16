import React from 'react'
import ReactDOM from 'react-dom';

export const Header = () => {

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
            path: '/join',
            label: 'Join Campaign'
        },
    ]

    return (
        <header className="site-header">
            <div className="header-wrapper">
                <div className="top-part">
                    <div className="site-branding">
                        <div className="site-title">
                            <a href="/" className="remove_underline">
                                <div className="logo">
                                    <img src="https://keinabeauty.com/wp-content/uploads/2021/02/Logo-Big.png" alt="Keina Beauty"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="divider"/>
                <div className="bottom-part">
                    <nav>
                        <ul>
                            {dataHeader.map((item, i)=>(
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
// export default withRouter(Header);
// if (document.getElementById('header')) {
//     ReactDOM.render(<Header />, document.getElementById('header'));
// }
