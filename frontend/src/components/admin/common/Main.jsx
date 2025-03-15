
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import purchasedProductsService  from '../../../services/purchasedProduct'
import SalesBarChart from './SalesBarChart'
import SoldProductsBarChart from './SoldProductsBarChart'
import Stats from './Stats'

import { Card, Row, Col, Container } from "react-bootstrap";

import '../../../assets/styles/admin/administration.css'

const Main = () => {
    const [data, setData] = useState([])
    // const [totalSales, setTotalSales] = useState(0)

    const fetchPurchasedProducts = async () => {
        setData(await purchasedProductsService.getAll())
    }

    useEffect(() => {         
        fetchPurchasedProducts()
    }, []) 

    const totalProductsPurchased = data.reduce((total, sale) => {
        return total + sale.cartPurchased.reduce((subTotal, item) => subTotal + (item.amountToBuy || 0), 0);
    }, 0);

    // Paso 1: Acumular ventas por producto
    const productSales = {};
    data.forEach(sale => {
    sale.cartPurchased.forEach(item => {
        if (!productSales[item.name]) {
        productSales[item.name] = 0;
        }
        productSales[item.name] += item.amountToBuy || 0;
    });
    });

    // Paso 2: Convertir a array y ordenar
    const topProducts = Object.entries(productSales)
    .map(([name, ventas]) => ({ name, ventas })) // Convertir a formato deseado
    .sort((a, b) => b.ventas - a.ventas) // Ordenar de mayor a menor
    .slice(0, 6); 

    const menuItems = [
        { title: "Administración de Productos", link: "/administracion/productos", icon: "box-open" },
        { title: "Administración Medios de Pago", link: "/administracion/mediosDePago", icon: "credit-card" },
        { title: "Historial de Ventas", link: "/administracion/historial", icon: "chart-line" },
        { title: "Administracion de contenido", link: "/administracion/contenido", icon: "edit" },
        // { title: "Administración de usuarios", link: "/administracion/usuarios", icon: "users" }
    ];

    return (
        <main>
            <div className="container-fluid">
                <Container fluid className="px-4 mt-4">
                    <h1 className="mb-4">Menu</h1>
                    <Row className="g-4">
                        {menuItems.map((item, index) => (
                            <Col key={index} xl={4} md={6}>
                                <Card className="shadow-sm border-0 admin-card">
                                    <Card.Body className="d-flex align-items-center">
                                        <i className={`fas fa-${item.icon} me-3 icon-style`}></i>
                                        <h5 className="mb-0">{item.title}</h5>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between align-items-center bg-white">
                                        <Link className="text-dark stretched-link" to={item.link}>
                                            Ver detalles
                                        </Link>
                                        <i className="fas fa-angle-right"></i>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className='chart'>
                    <SalesBarChart data={data} /> 
                </div>
                <div className='chart'>
                    <SoldProductsBarChart data={data} /> 
                </div>
                <div className='chart'>
                    <Stats totalSales={totalProductsPurchased} topProducts={topProducts} />
                </div>
            </div>
        </main>
    )
}


export default Main