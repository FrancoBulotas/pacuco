
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import '../../assets/styles/productsMenu.css';

const ProductsMenu = () => {
    const config = useSelector(state => state.config)

    const [categoriesData, setCategoriesData] = useState(config != null ? config[0].categories : null)

    useEffect(() => {
        if(config != null) setCategoriesData(config[0].categories);
    }, [config])

    return (
        <>
        {categoriesData != null && Object.entries(categoriesData).map(([category, subcategories]) => (
            <div key={category} className="container-products">
            <div className="product-section">
                <div className="section-header">
                <h4 className="section-title">{category.toUpperCase()}</h4>
                </div>
                <div className="product-links">

                {Object.entries(subcategories).map(([type, details]) => (
                    type != 'notShow' &&
                    <a
                    key={type}
                    href={`/products?category=${category.toLowerCase()}&type=${type.toLowerCase().replace(' ', '_')}`}
                    className={`product-link ${details.table === 'stock' ? 'highlight' : ''}`}
                    >
                    {type.toUpperCase()}
                    </a>
                ))}
                <a
                    href={`/products?category=${category.toLowerCase()}`}
                    className="product-link view-all"
                >
                    VER TODOS
                </a>
                </div>
            </div>
            </div>
        ))}
        {/* <div className="container-products">
            <div className="product-section">
                <div className="section-header">
                    <h4 className="section-title">GUARDAPOLVOS</h4>
                </div>
                <div className="product-links">
                    <a href="/products?category=guardapolvo&type=nivel_inicial" className="product-link">NIVEL INICIAL</a>
                    <a href="/products?category=guardapolvo&type=primaria" className="product-link">PRIMARIA / COLOR</a>
                    <a href="/products?category=guardapolvo&type=niños" className="product-link highlight">NIÑOS!</a>
                    <a href="/products?category=guardapolvo&type=stock" className="product-link highlight">STOCK / ENTREGA INMEDIATA!</a>
                    <a href="/products?category=guardapolvo" className="product-link view-all">VER TODOS</a>
                </div>
            </div>
        </div>

        <div className="container-products">
            <div className="product-section upcoming">
                <div className="section-header">
                    <h4 className="section-title">ACCESORIOS</h4>
                </div>
                <div className="product-links">
                    <a href="/products?type=totebag" className="product-link">Totebags</a>
                    <a href="/products?category=accesorios" className="product-link view-all">VER TODOS</a>
                </div>
            </div>
        </div> */}

        </>
    )
}

export default ProductsMenu