
import DisplayBrandName from './DisplayBrandName'
import CarouselProd from './Carousel'
import ProductsMenu from './ProductsMenu'
import FrecuentQuestions from './FrecuentQuestions'
import AboutUs from './AboutUs'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Home = () => {
    const config = useSelector(state => state.config);

    const featuredProducts = config ? config[0].featuredProducts : [];

    return(
        <>
            <DisplayBrandName />
            {
                Object.entries(featuredProducts).map(([title, prods]) => (
                    <CarouselProd key={title} title={title} prods={prods} /> 
                ))
            }
            <ProductsMenu />
            <FrecuentQuestions />
            <AboutUs />
        </>
    )
}

export default Home