
import guardapolvosService from '../../../services/guardapolvos'

export const checkStock = async (stockCart) => {
    let error = false
    let text = ''
    let product = {}

    if (stockCart.length !== 0){
        const guardapolvos = await guardapolvosService.getAll()
        
        stockCart.map(async (item) => {
            try {
                const guardapolvo = guardapolvos.find(product => product.id === item.id)

                if(guardapolvo && guardapolvo.amount > 0 && guardapolvo.amount >= item.amountToBuy){
                    try { 
                        await guardapolvosService.update(item.id, {...item, amountToBuy: 1, amount: item.amount - item.amountToBuy })
                        error = false
                        text = ''
                    }
                    catch(error) { 
                        error = true
                        text = 'Error'  
                        product = item
                    }    
                } else {
                    error = true
                    text = `No hay stock disponible para ${item.name}`
                    product = item
                }
            } catch (error) {
                console.log(error)
                error = true
                text = `No hay stock disponible para ${item.name}`
                product = item
            }
        })
    }      
     
    return { error, text, product }
}