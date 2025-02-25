
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
            <CarouselProd title={'EN STOCK!!'} table={{'table': 'stock'}} /> 
            <CarouselProd title={'NIVEL INICIAL!'} table={{'table': 'nivel_inicial'}}/>
            <CarouselProd title={'PRIMARIA!'} table={{'table': 'primaria'}}/>
            <ProductsMenu />
            <FrecuentQuestions />
            <AboutUs />
        </>
    )
}

export default Home