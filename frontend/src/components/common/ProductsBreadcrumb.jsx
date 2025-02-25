
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/guardapolvo/breadcrum.scss'


const ProductsBreadcrumb = ({type}) => {
    const navigate = useNavigate()

    return (
        <Breadcrumb className="px-3 px-lg-3 my-3 breadcrumb-container">
            <Breadcrumb.Item onClick={() => navigate('/')}>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item active> {type} </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ProductsBreadcrumb