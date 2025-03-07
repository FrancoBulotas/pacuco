

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import configsService  from '../../../../services/configs'
import searchProdsService from '../../../../services/searchProds'
import { setToken } from '../../../../services/token'
import { useNavigate } from 'react-router-dom'

import { reloadPage } from '../../common/commonFunctions'
import Swal from 'sweetalert2'

import { Modal, Button, Form, InputGroup, Accordion } from 'react-bootstrap';

const EditCategoriesModal = (props) => {
    const userLogged = useSelector(state => state.login)
    const navigate = useNavigate()    
  
    const [configData, setConfigData] = useState(props.config);
    const [categoriesData, setCategoriesData] = useState(props.categories);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newSubcategoryName, setNewSubcategoryName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [editingCategory, setEditingCategory] = useState('');
    const [editingSubcategory, setEditingSubcategory] = useState('');
    const [selectedOption, setSelectedOption] = useState('stock'); 

    useEffect(() => {
        if (editingSubcategory) {
          const currentTable = categoriesData[selectedCategory][editingSubcategory]?.table || '';
          setSelectedOption(currentTable); // Set the selectedOption based on the current table value
        }
    }, [editingSubcategory]);

    useEffect(() => {
        updateConfigData();
    }, [categoriesData])

    // Add a new category
    const addCategory = () => {
      if (newCategoryName && !categoriesData[newCategoryName]) {
        setCategoriesData({
          ...categoriesData,
          [newCategoryName]: { "notShow" : '' },
        });
        setNewCategoryName('');
      }
    };
  
    // Add a new subcategory
    const addSubcategory = () => {
        if (selectedCategory && newSubcategoryName && !categoriesData[selectedCategory][newSubcategoryName]) {
          const tableValue = selectedOption; // Use the selectedOption directly
      
          setCategoriesData({
            ...categoriesData,
            [selectedCategory]: {
              ...categoriesData[selectedCategory],
              [newSubcategoryName]: { 
                table: tableValue.replace(' ', '_'), // Assign the table value
              },
            },
          });
          setNewSubcategoryName('');
          setSelectedOption('stock'); // Reset to default option
        }
      };
  
    // Edit a category
    const editCategory = () => {
      if (editingCategory && newCategoryName && !categoriesData[newCategoryName]) {
        const updatedCategories = { ...categoriesData };
        updatedCategories[newCategoryName] = updatedCategories[editingCategory];
        delete updatedCategories[editingCategory];
        setCategoriesData(updatedCategories);
        setEditingCategory('');
        setNewCategoryName('');
      }
    };
    const cancelEditCategory = () => {
        setEditingCategory('');
        setNewCategoryName('');
    }

    // Edit a subcategory
    const editSubcategory = () => {
        if (editingSubcategory) {
            const updatedCategories = { ...categoriesData };
        
            // If the subcategory name is being changed
            if (newSubcategoryName && newSubcategoryName !== editingSubcategory) {
              updatedCategories[selectedCategory][newSubcategoryName] =
                updatedCategories[selectedCategory][editingSubcategory];
              delete updatedCategories[selectedCategory][editingSubcategory]; // Remove the old subcategory
            }
        
            // Update the table value for the subcategory
            const targetSubcategory = newSubcategoryName || editingSubcategory;
            updatedCategories[selectedCategory][targetSubcategory].table = selectedOption.replace(' ', '_');
        
            // Save the updated data
            setCategoriesData(updatedCategories);
            setEditingSubcategory('');
            setNewSubcategoryName('');
            setSelectedOption('stock'); 
        }
    };
    const cancelEditSubCategory = () => {
        setEditingSubcategory('');
        setNewSubcategoryName('');
        setSelectedOption('stock'); 
    }

    // Delete a category
    const deleteCategory = (category) => {
      const updatedCategories = { ...categoriesData };
      delete updatedCategories[category];
      setCategoriesData(updatedCategories);
    };
  
    // Delete a subcategory
    const deleteSubcategory = (subcategory) => {
      const updatedCategories = { ...categoriesData };
      delete updatedCategories[selectedCategory][subcategory];
      setCategoriesData(updatedCategories);
    };

    const updateConfigData = () => {
        setConfigData((prevConfigData) => ({
          ...prevConfigData, // Spread the existing configData
          categories: categoriesData, // Replace the categories field with the new value
        }));
      };

    const executeChanges = () => {
        try {
            const token = setToken(userLogged.token)
        
            Swal.fire({ title: `Estas segura que queres aplicar los cambios?`, icon: 'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar', })
            .then(async (result) => { 
                if (result.isConfirmed) {
                    try{
                        console.log(configData);

                        const response = await configsService.update(configData, token)
                        await searchProdsService.clearCache();
                    
                    } catch(error){
                        console.log(error)
                        if(error.response.status === 401){
                            Swal.fire({title:'Se cerro tu sesion!', text:'Deberas iniciar sesion nuevamente', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            .then((result) => {
                                if(result.isConfirmed){ 
                                    navigate('/login') 
                                    return
                                }
                            })
                        } else {
                            Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                            return
                        }
                    }
                    Swal.fire({title: `Modificacion realizada con exito!`, icon: 'success', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
                    .then(() => {
                        reloadPage(0.4)
                    })

                }
            })
        } catch(error) {
            console.error(error)
            Swal.fire({title:'Error inesperado', text:'Intentalo nuevamente mas tarde.', icon:'error', confirmButtonText: 'Aceptar', confirmButtonColor: '#000',})
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Editar categorias y/o subcategorias
                </Modal.Title>                
            </Modal.Header>
            
            <Modal.Body>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>Gestionar Categorías</Accordion.Header>
                <Accordion.Body>
                    {/* Add/Edit Category Section */}
                    {/* <h5>Gestionar Categorías</h5> */}
                    <h6>Actuales:</h6>
                    {/* List Categories */}
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {categoriesData && Object.keys(categoriesData).map((category) => (
                        <li key={category} className="d-flex justify-content-between align-items-center mb-2">
                            <span>{category}</span>
                            <div>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                    setEditingCategory(category);
                                    setNewCategoryName(category);
                                }}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                className="ms-2"
                                onClick={() => deleteCategory(category)}
                            >
                                Eliminar
                            </Button>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Nombre de la categoría"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        />
                        <Button variant="dark" onClick={addCategory}>
                        + Añadir Categoría
                        </Button>
                    </InputGroup>
                    {editingCategory && (
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Nuevo nombre de la categoría"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                            />
                            <Button variant="secondary" onClick={editCategory}>
                                Editar Categoría
                            </Button>
                            <Button variant="secondary" onClick={cancelEditCategory}>
                                <i className="bi bi-x-lg"></i>
                            </Button>
                        </InputGroup>
                    )}
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Gestionar Subcategorías</Accordion.Header>
                <Accordion.Body>
                    {/* Add/Edit Subcategory Section */}
                {/* <h5>Gestionar Subcategorías</h5> */}
                <Form.Group className="mb-3">
                    <Form.Label>Seleccionar Categoría</Form.Label>
                    <Form.Select
                    className='selectCustom' // Aplica la clase de estilos
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                    <option value="" className='option-choose-category'>Seleccione una categoría</option>
                    {categoriesData && Object.keys(categoriesData).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                    </Form.Select>
                </Form.Group>
                {selectedCategory && (
                    <>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Nombre de la subcategoría"
                                value={newSubcategoryName}
                                onChange={(e) => setNewSubcategoryName(e.target.value)}
                            />
                            {/* Radio Button Group */}
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                <Form.Check
                                inline
                                type="radio"
                                label="Para stock"
                                name="subcategoryOption"
                                id="stock"
                                checked={selectedOption === 'stock'}
                                onChange={() => setSelectedOption('stock')}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="Para encargos"
                                name="subcategoryOption"
                                id="encargar"
                                checked={selectedOption === ''}
                                onChange={() => setSelectedOption('')}
                                />
                            </div>
                            <Button variant="dark" onClick={addSubcategory}>
                            + Añadir Subcategoría
                            </Button>
                        </InputGroup>
                        {editingSubcategory && (
                            <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Nuevo nombre de la subcategoría"
                                value={newSubcategoryName}
                                onChange={(e) => setNewSubcategoryName(e.target.value)}
                            />
                            {/* Radio Button Group */}
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                <Form.Check
                                inline
                                type="radio"
                                label="Para stock"
                                name="subcategoryOptionEdit"
                                id="stockEdit"
                                checked={selectedOption === 'stock'}
                                onChange={() => setSelectedOption('stock')}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="Para encargos"
                                name="subcategoryOptionEdit"
                                id="encargarEdit"
                                checked={selectedOption === ''}
                                onChange={() => setSelectedOption('')}
                                />
                            </div>
                            <Button variant="secondary" onClick={editSubcategory}>
                                Editar Subcategoría
                            </Button>
                            <Button variant="secondary" onClick={cancelEditSubCategory}>
                                <i className="bi bi-x-lg"></i>
                            </Button>
                            </InputGroup>
                        )}
                    </>
                )}

                {/* List Subcategories */}
                {selectedCategory && (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                    {categoriesData && Object.keys(categoriesData[selectedCategory]).map((subcategory) => (
                        (subcategory != 'notShow') && 
                        <li key={subcategory} className="d-flex justify-content-between align-items-center mb-2 li-subcategories">
                            <span>{subcategory}</span>
                            <div>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => {
                                        setEditingSubcategory(subcategory);
                                        setNewSubcategoryName(subcategory);
                                    }}
                                    >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="ms-2"
                                    onClick={() => deleteSubcategory(subcategory)}
                                    >
                                    Eliminar
                                </Button>
                            </div>
                        </li>
                    ))}
                    </ul>
                )}
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>
                

                

                
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
                <Button className='btn btn-dark' onClick={() => executeChanges()}>Aplicar cambios</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditCategoriesModal