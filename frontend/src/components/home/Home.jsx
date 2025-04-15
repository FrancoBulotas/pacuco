
import DisplayBrandName from './DisplayBrandName'
import CarouselProd from './Carousel'
import ProductsMenu from './ProductsMenu'
import FrecuentQuestions from './FrecuentQuestions'
import AboutUs from './AboutUs'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Home = () => {
    // const config = useSelector(state => state.config);
    const [featuredProducts, setFeaturedProducts] = useState([])

    // useEffect(() => {
    //     if(config && featuredProducts){
    //         setFeaturedProducts(config[0].featuredProducts);
    //     } 
    // }, [config]);

    useEffect(() => { 
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch('/api/products/featured');
                const data = await response.json();
                setFeaturedProducts({'!DESTACADOS!': data});
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };

        fetchFeaturedProducts();
    }, [])  

    return(
        <>
            <DisplayBrandName />
            {
                featuredProducts && Object.entries(featuredProducts).map(([title, prods]) => (
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