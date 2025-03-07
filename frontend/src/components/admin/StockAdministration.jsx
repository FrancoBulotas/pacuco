
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setTypeTab, setCategoryTab } from '../../reducers/adminReducer'

import EditModal from './modals/stockAdministration/EditModal'
import CreateModal from './modals/stockAdministration/CreateModal'
import EditAllProductsModal from './modals/stockAdministration/EditAllProductsModal'
import EditCategoriesModal from './modals/stockAdministration/EditCategoriesModal'
import FeaturedProductsModal from './modals/stockAdministration/FeaturedProductsModal'

import configsService from '../../services/configs'
import { setToken } from '../../services/token'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import HtmlForTab from './stock/HtmlForTab'
import Swal from 'sweetalert2'

const StockAdministration = () => {
    const categoryTabChoosen = useSelector(state => state.administration.categoryTabChoosen);
    const typeTabChoosen = useSelector(state => state.administration.typeTabChoosen);
    const configuration = useSelector(state => state.config);
    const allProducts = useSelector(state => state.guardapolvos.products);
    const dispatch = useDispatch();

    const [createModalShow, setCreateModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editAllProductsModal, setEditAllProductsModal] = useState(false);
    const [editCategoriesModal, setEditCategoriesModal] = useState(false);
    const [featuredProductsModal, setFeaturedProductsModal] = useState(false);
    const [choosenTable, setChoosenTable] = useState('')
    const [choosenCategory, setChoosenCategory] = useState('')
    const [itemToShow, setItemToShow] = useState({})
    const [config, setConfig] = useState([]);
    const userLogged = useSelector(state => state.login)

    const [refreshKey, setRefreshKey] = useState(0);

    const handleProduct = () => {
        setRefreshKey(prevKey => prevKey + 1);
    }

    useEffect(() =>{
        if(configuration) setConfig(configuration[0]);        
    }, [configuration])

    useEffect(() =>{
        if(categoryTabChoosen === 'accesorios') {         
            dispatch(setTypeTab('totebag'));
        } else if (categoryTabChoosen === 'guardapolvo'){
            dispatch(setTypeTab('nivel_inicial'));
        }
    }, [categoryTabChoosen])

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

    const showFeaturedProductsModal = () => {
        setFeaturedProductsModal(true)
    }

    const handleTypeSelect = (key) => {
        dispatch(setTypeTab(key));
    }
    const handleCategorySelect = (key) => {
        dispatch(setTypeTab(''));
        dispatch(setCategoryTab(key));
    }

    const handleSave = async (updatedFeaturedProducts) => {
        Swal.fire({ title: `Estas segura que queres realizar la modificacion?`, icon: 'question', confirmButtonText: 'Aceptar', confirmButtonColor: '#000', showDenyButton: true, denyButtonText: 'Cancelar', })
        .then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = setToken(userLogged.token);
                    await configsService.update({...config, featuredProducts: updatedFeaturedProducts}, token);
                    await configsService.clearCache();
        
                    setFeaturedProductsModal(false);
                }
                catch (e){
                    console.error(e);
                }
            }})
    };

    const stockAdministrationOptions = [
        // { title: "Administrar todos los productos", onClick: () => showEditAllProductsModal()},
        { title: "Editar categorias y/o subcategorias", onClick: () => showEditCategoriesModal()},
        { title: "Editar productos destacados mostrados en pagina inicial", onClick: () => showFeaturedProductsModal()},
    ];

    const tabStyle = { width:'100%' }
    
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
                        {config.categories
                            ?
                            <Tabs
                                defaultActiveKey={categoryTabChoosen}
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                fill
                                onSelect={handleCategorySelect}
                                >
                                {/* Generate category tabs */}
                                {  Object.entries(config.categories).map(([category, types]) => (
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
                        : null    
                        }
                </div>
                <EditModal item={itemToShow} show={editModalShow} table={choosenTable} onHide={() => setEditModalShow(false)} handleProductEdited={handleProduct} />
                <CreateModal show={createModalShow} table={choosenTable} type={typeTabChoosen} category={choosenCategory} onHide={() => setCreateModalShow(false)} handleProductCreated={handleProduct} />        
                <EditAllProductsModal show={editAllProductsModal} onHide={() => setEditAllProductsModal(false)} />
                { config.categories 
                    ? <EditCategoriesModal 
                        show={editCategoriesModal} 
                        onHide={() => setEditCategoriesModal(false)} 
                        config={config} 
                        categories={config.categories} /> 
                    : null
                }
                { config.featuredProducts 
                    ? <FeaturedProductsModal 
                        show={featuredProductsModal} 
                        onHide={() => setFeaturedProductsModal(false)} 
                        featuredProducts={config.featuredProducts}
                        allProducts={allProducts}
                        onSave={handleSave}
                      /> 
                    : null
                }
                </div>
            </div>
        </div>
    )
}

export default StockAdministration