
import { useEffect, useState } from 'react'
// import Placeholder from 'react-bootstrap/Placeholder'
import LoadingImages from '../loaders/LoadingImages'

const ImageComponent = ({ src, alt, className, secondImg=false, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        } 
        img.src = src
    }, [src])

    return (
        <>
            { secondImg 
             ?   <img 
                    src={src} 
                    alt={alt} 
                    className={className}
                    loading='lazy' 
                    style={{display: !imageLoaded ? 'none' : 'inline', maxHeight:'450px', maxWidth:'100%', width:'100%', objectFit:'contain', cursor:'pointer'}}
                />
             : 
             <>
                <div style={{display: imageLoaded ? 'none' : 'inline'}}>
                    {/* <Placeholder 
                        as="div" 
                        animation="wave" 
                        style={{ width: '180px', height: '180px', backgroundColor:'#f1f1f1' }} 
                    /> */}
                    <LoadingImages />
                </div>
                <img 
                    src={src} 
                    alt={alt} 
                    className={className}
                    loading='lazy' 
                    style={{display: !imageLoaded ? 'none' : 'inline' , maxHeight:'450px', maxWidth:'100%', width:'100%', objectFit:'contain', cursor:'pointer'}}
                    onClick={onClick}
                />
                </>
            }
        </>
    )
}    

export default ImageComponent