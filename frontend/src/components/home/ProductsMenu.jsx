
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
        <div className="categories-wrapper">
            {categoriesData != null && Object.entries(categoriesData).map(([category, subcategories]) => (
                <div key={category} className="category-container">
                <div className="category-section">
                    <div className="category-header">
                    <h3 className="category-title">{category.toUpperCase()}</h3>
                    <div className="category-divider"></div>
                    </div>
                    <div className="subcategory-grid">
                        {Object.entries(subcategories).map(([type, details]) => (
                            type != 'notShow' &&
                            <a
                            key={type}
                            href={`/products?category=${category.toLowerCase()}&type=${type.toLowerCase().replace(' ', '_')}`}
                            className={`subcategory-card`}
                            >
                            {type.toUpperCase()}
                            </a>
                        ))}
                        <a
                            href={`/products?category=${category.toLowerCase()}`}
                            className="subcategory-card view-all"
                        >
                            VER TODOS
                        </a>
                    </div>
                </div>
                </div>
            ))}
            </div>

        {/* {categoriesData != null && Object.entries(categoriesData).map(([category, subcategories]) => (
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
        ))} */}
        </>
    )
}

export default ProductsMenu