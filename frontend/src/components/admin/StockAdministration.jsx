
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setTypeTab, setCategoryTab } from '../../reducers/adminReducer'

import EditModal from './modals/EditModal'
import CreateModal from './modals/CreateModal'
import EditAllProductsModal from './modals/EditAllProductsModal'
import EditCategoriesModal from './modals/EditCategoriesModal'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import HtmlForTab from './stock/HtmlForTab'

const StockAdministration = () => {
    const categoryTabChoosen = useSelector(state => state.administration.categoryTabChoosen);
    const typeTabChoosen = useSelector(state => state.administration.typeTabChoosen);
    const configuration = useSelector(state => state.config);
    const dispatch = useDispatch();

    const [createModalShow, setCreateModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editAllProductsModal, setEditAllProductsModal] = useState(false);
    const [editCategoriesModal, setEditCategoriesModal] = useState(false);
    const [choosenTable, setChoosenTable] = useState('')
    const [choosenCategory, setChoosenCategory] = useState('')
    const [itemToShow, setItemToShow] = useState({})
    const [config, setConfig] = useState(configuration ? configuration[0] : null);

    const [refreshKey, setRefreshKey] = useState(0);

    const handleProduct = () => {
        setRefreshKey(prevKey => prevKey + 1);
    }

    useEffect(() =>{
        setConfig(configuration[0]);
    }, [configuration])

    // useEffect(() =>{
    //     if(categoryTabChoosen === 'accesorios') {         
    //         dispatch(setTypeTab('totebag'));
    //     } else if (categoryTabChoosen === 'guardapolvo'){
    //         dispatch(setTypeTab('nivel_inicial'));
    //     }
    // }, [categoryTabChoosen])

    const showEditModal = (item, table) => {
        setEditModalShow(true)
        setChoosenTable(table)
        setItemToShow(item)
    }
    const showCreateModal = (table, category) => {
        setChoosenTable(table)
        setChoosenCategory(category)
        setCreateModalShow(true)
    }
    const showEditAllProductsModal = () => {
        setEditAllProductsModal(true)
    }
    const showEditCategoriesModal = () => {
        setEditCategoriesModal(true)
    }

    const handleTypeSelect = (key) => {
        
        dispatch(setTypeTab(key));
    }
    const handleCategorySelect = (key) => {
        dispatch(setTypeTab(''));
        dispatch(setCategoryTab(key));
    }

    const stockAdministrationOptions = [
        { title: "Administrar todos los productos", onClick: () => showEditAllProductsModal()},
        { title: "Editar categorias y/o subcategorias", onClick: () => showEditCategoriesModal()},
    ];

    const tabStyle = { width:'100%' }

    // console.log('categoryChoosen', categoryTabChoosen);
    // console.log('typeChoosen', typeTabChoosen);

    return (
        <div>
            <div >
                <div className="contenedor-tablas-productos"> 
                    <div className="contenedor-opciones">
                        {stockAdministrationOptions.map((option, i) => (
                            <div key={i} className="opcion" onClick={option.onClick}>
                                <div className="card" style={{ cursor: "pointer" }}>
                                    <div className="card-body">{option.title}</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <div className="small text-black stretched-link">Ver detalles</div>
                                        <div className="small text-black">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex gap-2 w-100' style={{marginLeft: '1%', alignItems:'center', marginBottom:'20px'}}>
                        <div style={{backgroundColor:'#fae3eb', width: '40px', height: '20px', borderRadius:'5px'}}></div>
                        <p style={{fontSize:'14px', margin:'0px'}}>Productos que NO se estan mostrando en la pagina</p>
                    </div>

                    <div style={{width:'100%', backgroundColor:'#fff', padding:'10px'}} className='tabs-container'>
                        Categorias
                        <Tabs
                            defaultActiveKey={categoryTabChoosen}
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            fill
                            onSelect={handleCategorySelect}
                            >
                            {/* Generate category tabs */}
                            {Object.entries(config?.categories).map(([category, types]) => (
                                <Tab key={category} eventKey={category.toLowerCase()} title={category} style={tabStyle}>
                                    <div className='div-change-config' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                       Subcategorias
                                    </div>
                                    <Tabs
                                        defaultActiveKey={typeTabChoosen}
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                        fill
                                        onSelect={handleTypeSelect}
                                    >
                                    {/* Generate type tabs */}
                                    {Object.entries(types).map(([type, details]) => (
                                        (type != 'notShow') && 
                                        <Tab
                                            key={type}
                                            eventKey={type.toLowerCase().replace(/\s+/g, '_')}
                                            title={type}
                                            style={tabStyle}
                                        >
                                            <HtmlForTab
                                                title={type.toUpperCase()}
                                                table={details.table || ''} // Use the table value from the data
                                                category={category.toLowerCase()}
                                                type={type.toLowerCase().replace(/\s+/g, '_')}
                                                showCreateModal={() =>
                                                    showCreateModal(details.table, category.toLowerCase())
                                                }
                                                showEditModal={showEditModal}
                                                refreshKey={refreshKey}
                                            />
                                        </Tab>
                                        ))}
                                    </Tabs>
                                </Tab>
                            ))}
                            </Tabs>
                    </div>
                    <EditModal item={itemToShow} show={editModalShow} table={choosenTable} onHide={() => setEditModalShow(false)} handleProductEdited={handleProduct} />
                    <CreateModal show={createModalShow} table={choosenTable} type={typeTabChoosen} category={choosenCategory} onHide={() => setCreateModalShow(false)} handleProductCreated={handleProduct} />        
                    <EditAllProductsModal show={editAllProductsModal} onHide={() => setEditAllProductsModal(false)} />
                    <EditCategoriesModal show={editCategoriesModal} onHide={() => setEditCategoriesModal(false)} config={config} categories={config?.categories} />
                </div>
            </div>
        </div>
    )
}

export default StockAdministration