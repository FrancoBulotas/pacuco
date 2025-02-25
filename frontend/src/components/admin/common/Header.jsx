
import { IconLeftArrow } from "../../../assets/icons/icons"
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    
    return (
        <div style={{width:'100%'}}>
            <Button onClick={() => navigate(`/administracion`)} style={{backgroundColor:'transparent', border:'none', color:'#000', paddingLeft:'0px'}}>
                <IconLeftArrow width={'25'} height={'25'} />
            </Button>
        </div>
    )
}

export default Header