
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Modal, Button, Form, ListGroup, Card, Row, Col, InputGroup } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Switch from 'react-switch';

import '../../../../assets/styles/admin/FeaturedProductsModal.css';

const FeaturedProductsModal = (props) => {
    const { featuredProducts, allProducts, onSave, ...modalProps } = props;
    
    const config = useSelector(state => state.config)
    const [subCategoriesData, setSubCategoriesData] = useState(config != null ? Object.values(config[0].categories).flatMap(category => Object.keys(category).map(key => key.toLowerCase())) : null)
    useEffect(() => {
        if(config != null) {
            setSubCategoriesData(Object.values(config[0].categories)
                .flatMap(category => Object.keys(category)).map(key => key.toLowerCase()));
        }
    }, [config])


    // Initialize state with existing featured products or empty structure
    const [productGroups, setProductGroups] = useState(() => {
        const initialGroups = featuredProducts || { prods: [] };
        
        // Ensure all groups are initialized as arrays
        Object.keys(initialGroups).forEach(key => {
            if (!Array.isArray(initialGroups[key])) {
                initialGroups[key] = [];
            }
        });
        
        return initialGroups;
    });
    
    // State for new group name
    const [newGroupName, setNewGroupName] = useState('');
    
    // Currently selected group for editing
    const [selectedGroup, setSelectedGroup] = useState();
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const [isStockChecked, setIsStockChecked] = useState(true);
    
    // Get unique categories from products
    const categories = ['all', ...new Set(allProducts.map(product => product.category).filter(Boolean))];
    const types = ['all', ...new Set(allProducts.map(product => product.type).filter(Boolean))];
    
    // Filter products based on search term and category
    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        const matchesType = typeFilter === 'all' || product.type === typeFilter;
        const matchesOnStock = isStockChecked === false || product.show && product.amount !== 0 && subCategoriesData?.includes(product.type.replace('_', ' '));
        return matchesSearch && matchesCategory && matchesType && matchesOnStock;
    });

    // Add a new group
    const addGroup = () => {
        if (!newGroupName || productGroups[newGroupName]) return;
        
        setProductGroups({
            ...productGroups,
            [newGroupName]: []
        });
        setSelectedGroup(newGroupName);
        setNewGroupName('');
    };
    
    // Remove a group
    const removeGroup = (groupName) => {
        // if (groupName === 'prods') return; // Don't allow removal of default group
        
        const newGroups = { ...productGroups };
        delete newGroups[groupName];
        setProductGroups(newGroups);
        // setSelectedGroup('prods');
    };
    
    // Handle drag end event
    const onDragEnd = (result) => {
        const { source, destination } = result;
        
        // Dropped outside the list
        if (!destination) return;
        
        if (source.droppableId === 'availableProducts' && destination.droppableId === 'selectedProducts') {
            // Moving from available to selected
            const productToAdd = filteredProducts[source.index];
            
            // Make sure the group exists and is initialized as an array
            if (!productGroups[selectedGroup]) {
                productGroups[selectedGroup] = [];
            }
            

            // Check if product is already in the list
            if (!productGroups[selectedGroup].find(p => p.id === productToAdd.id)) {
                setProductGroups({
                    ...productGroups,
                    [selectedGroup]: [...productGroups[selectedGroup], productToAdd]
                });
            }
        } else if (source.droppableId === 'selectedProducts' && destination.droppableId === 'availableProducts') {
            // Moving from selected to available (remove)
            const newSelectedProducts = [...productGroups[selectedGroup]];
            newSelectedProducts.splice(source.index, 1);
            
            setProductGroups({
                ...productGroups,
                [selectedGroup]: newSelectedProducts
            });
        } else if (source.droppableId === 'selectedProducts' && destination.droppableId === 'selectedProducts') {
            // Reordering within selected products
            const newSelectedProducts = [...productGroups[selectedGroup]];
            const [removed] = newSelectedProducts.splice(source.index, 1);
            newSelectedProducts.splice(destination.index, 0, removed);
            
            setProductGroups({
                ...productGroups,
                [selectedGroup]: newSelectedProducts
            });
        }
    };
    
    // Save changes
    const executeChanges = () => {
        onSave(productGroups);
    };
    
    // Custom style for selected group item
    const selectedGroupStyle = {
        backgroundColor: '#000',
        color: '#fff',
        border: '1px solid #ced4da'
    };

    const titleStyle = { fontWeight: '700' }

    return (
        <Modal
            {...modalProps}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar productos destacados mostrados en página inicial                          
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-3">
                    <Col md={4}>
                    {/* <h5>Editando grupo: {selectedGroup}</h5> */}
                        <Card>
                            <Card.Header style={titleStyle}>Grupos de productos</Card.Header>
                            <Card.Body className="groups-list-container">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Nombre del nuevo grupo"
                                        value={newGroupName}
                                        onChange={(e) => setNewGroupName(e.target.value)}
                                    />
                                    <Button variant="dark" onClick={addGroup}>
                                        Añadir
                                    </Button>
                                </InputGroup>
                                <ListGroup className="product-group-list">
                                    {Object.keys(productGroups).map((groupName) => (
                                        <ListGroup.Item 
                                            key={groupName}
                                            style={selectedGroup === groupName ? selectedGroupStyle : {}}
                                            onClick={() => setSelectedGroup(groupName)}
                                            className="d-flex justify-content-between align-items-center"
                                            action={false}
                                        >
                                            {groupName}
                                            { (
                                                <Button 
                                                    variant="danger" 
                                                    size="sm"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeGroup(groupName);
                                                    }}
                                                >
                                                    &times;
                                                </Button>
                                            )}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card style={{marginTop:'25px'}}>
                            <Card.Header style={titleStyle}>Filtros</Card.Header>
                            <Card.Body className="filters-list-container">
                                <Form.Group className="mb-3">
                                    <Form.Label>Buscar por nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre del producto"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Select
                                        value={categoryFilter}
                                        onChange={(e) => setCategoryFilter(e.target.value)}
                                    >
                                        {categories.map(category => (
                                            <option key={category} value={category} style={{fontSize:'14px'}}>
                                                {category === 'all' ? 'Todas las categorías' : category.toUpperCase().replace('_', ' ')}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group style={{marginTop:'10px'}}>
                                    <Form.Label>Subcategoría</Form.Label>
                                    <Form.Select
                                            value={typeFilter}
                                            onChange={(e) => setTypeFilter(e.target.value)}
                                        >
                                            {types.map(type => (
                                                <option key={type} value={type} style={{fontSize:'14px'}}>
                                                    {type === 'all' ? 'Todas las subcategorías' : type.toUpperCase().replace('_', ' ')}
                                                </option>
                                            ))}
                                    </Form.Select>
                                </Form.Group>
                                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <label htmlFor="custom-switch">Buscar productos con stock disponible</label>
                                    <Switch
                                        id="custom-switch"
                                        checked={isStockChecked}
                                        onChange={setIsStockChecked}
                                        onColor="#000" // Color when the switch is on
                                        offColor="#ebebeb" // Color when the switch is off
                                        uncheckedIcon={false} // Remove default icons
                                        checkedIcon={false} // Remove default icons
                                        handleDiameter={20} // Size of the toggle handle
                                        width={50} // Width of the switch
                                        height={26} // Height of the switch
                                        className="custom-switch" // Add a custom class for additional styling
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Row>
                                <Col md={6}>
                                    <Card>
                                        <Card.Header style={titleStyle}>{filteredProducts.length} Productos disponibles </Card.Header>
                                        <Card.Body className="product-list-container">
                                            <Droppable droppableId="availableProducts">
                                                {(provided) => (
                                                    <div
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        className="product-drop-area"
                                                    >
                                                        {filteredProducts.map((product, index) => (
                                                            <Draggable
                                                                key={product.id}
                                                                draggableId={`available-${product.id}`}
                                                                index={index}
                                                            >
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="product-item"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            {product.img && (
                                                                                <img 
                                                                                    src={product.img} 
                                                                                    alt={product.name} 
                                                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                                                                                />
                                                                            )}
                                                                            <div>
                                                                                <div>{product.name}</div>
                                                                                <small className="text-muted">${product.price}</small>
                                                                                {product.category && product.type && (
                                                                                    <>
                                                                                        <div style={{display:'flex', gap:'10px'}}>
                                                                                            <div className="product-category">{product.category}</div>
                                                                                            <div className="product-category">{product.type}</div>
                                                                                        </div>
                                                                                        {
                                                                                            product.table === 'stock' && product.amount > 0 
                                                                                            ? <div className="product-category">
                                                                                                {product.amount} en stock
                                                                                            </div> 
                                                                                            : product.table === 'stock' &&
                                                                                            <div className="product-category">
                                                                                                sin stock
                                                                                            </div> 
                                                                                        }
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card>
                                        <Card.Header style={titleStyle}>{productGroups[selectedGroup] && productGroups[selectedGroup].length} Productos seleccionados en {selectedGroup}</Card.Header>
                                        <Card.Body className="product-list-container">
                                            <Droppable droppableId="selectedProducts">
                                                {(provided) => (
                                                    <div
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        className="product-drop-area"
                                                    >
                                                        {productGroups[selectedGroup] && productGroups[selectedGroup].map((product, index) => (
                                                            <Draggable
                                                                key={product.id}
                                                                draggableId={`selected-${product.id}`}
                                                                index={index}
                                                            >
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="product-item"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            {product.img && (
                                                                                <img 
                                                                                    src={product.img} 
                                                                                    alt={product.name} 
                                                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                                                                                />
                                                                            )}
                                                                            <div>
                                                                                <div>{product.name}</div>
                                                                                <small className="text-muted">${product.price}</small>
                                                                                {product.category && product.type && (
                                                                                    <>
                                                                                        <div style={{display:'flex', gap:'10px'}}>
                                                                                            <div className="product-category">{product.category}</div>
                                                                                            <div className="product-category">{product.type}</div>
                                                                                        </div>
                                                                                        {
                                                                                            product.table === 'stock' && product.amount > 0 
                                                                                            ? <div className="product-category">
                                                                                                {product.amount} en stock
                                                                                            </div> 
                                                                                            : product.table === 'stock' &&
                                                                                            <div className="product-category">
                                                                                                sin stock
                                                                                            </div> 
                                                                                        }
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </DragDropContext>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modalProps.onHide}>Cerrar</Button>
                <Button className='btn btn-dark' onClick={executeChanges}>Aplicar cambios</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FeaturedProductsModal;