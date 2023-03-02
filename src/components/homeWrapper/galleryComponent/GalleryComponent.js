import React from 'react'
import { Image } from 'react-bootstrap'
import Images from '../../global/Images'

const GalleryComponent = () => {
    return (
        <>
            <Image style={{ boxShadow: '2px 2px 8px grey' }} src={Images.hotel} width="260px" height="250px" />
        </>
    )
}

export default GalleryComponent