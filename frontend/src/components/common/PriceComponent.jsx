import { formatNumber } from '../product/common/functions';

export const PriceComponent = ({ item, fontSize = 0 }) => {
    return (
        <>
            <p style={{ margin: '0px'}}>
                <strong style={fontSize != 0 ? { fontSize: `${fontSize}px` } : undefined}>$ {formatNumber(item.price)} </strong>
                <span className='span-product'>transferencia o efectivo</span>
            </p>
            <p style={{ margin: '0px'}}>
                <span className='span-product'>$ {formatNumber(item.listedPrice)} </span>
                <span className='span-product'>precio de lista</span>
            </p>
        </>
    )
}

export default PriceComponent;