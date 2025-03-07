
import Form from 'react-bootstrap/Form'

// Agrega los inputs a los modals en caso de que sea de la tabla stock
export const InputsForStock = ({ amount, size, formData, handleInputChange }) => {
    
    const styleContainer = {display:'flex', justifyContent:'space-around', gap:'5px'}
    const styleChilds = { width:'50%' }

    return(
        <div style={styleContainer}> 
            <Form.Group className="mb-3" controlId="controlInput2" style={styleChilds}>
                <Form.Label><strong>Cantidad{amount !== '' ? ':' : '' } </strong>{amount}</Form.Label>
                <Form.Control
                    type="text"
                    name="amount"
                    placeholder="nueva cantidad"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlInput2" style={styleChilds}>
                <Form.Label><strong>Talle{amount !== '' ? ':' : '' } </strong>{size}</Form.Label>
                <Form.Control
                    type="text"
                    name="size"
                    placeholder="nuevo talle"
                    value={formData.size}
                    onChange={handleInputChange}
                />
            </Form.Group>
        </div>
    )
}
