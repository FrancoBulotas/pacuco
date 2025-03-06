
import DisplayBrandName from './DisplayBrandName'
import CarouselProd from './Carousel'
import ProductsMenu from './ProductsMenu'
import FrecuentQuestions from './FrecuentQuestions'
import AboutUs from './AboutUs'

const Home = () => {
        
    return(
        <>
            <DisplayBrandName />
            {/* <CarouselProd title={''} table={{'all': true}} /> */}
            <CarouselProd title={'EN STOCK!!'} type={{'type': 'stock'}} /> 
            <CarouselProd title={'NIVEL INICIAL!'} type={{'type': 'nivel_inicial'}}/>
            <CarouselProd title={'PRIMARIA!'} type={{'type': 'primaria'}}/>
            <ProductsMenu />
            <FrecuentQuestions />
            <AboutUs />
        </>
    )
}

export default Home