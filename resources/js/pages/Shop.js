import React from 'react'
import Page from '../page'

import Hero2 from '../components/Hero/Hero2'
import ProductThumbnail1 from '../components/Products/ProductThumbnail1'

const Shop = () => {
    return (
        <Page title={"Shop"}>
            <Hero2/>
            <div className="page-wrapper">
                <section className="py-14">
                <ProductThumbnail1 data={dataProducts} columns={4}/>
                </section>
            </div>
        </Page>
    )
}

const dataProducts = [
    {
        title:'Protecting CC Cream',
        price:'249000'
    },
    {
        title:'Cy-Brightening Moisturizer Cream',
        price:'249000'
    },
    {
        title:'Calming Cy-Essence',
        price:'249000'
    },
    {
        title:'Reviving Facial Wash',
        price:'249000'
    },
]

export default Shop
