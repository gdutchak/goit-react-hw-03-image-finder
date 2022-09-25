import PropTypes from 'prop-types';
import { ImageGalImg, ImageGalItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ smImg, lgImg, modal }) => (
    <ImageGalItem>
        <ImageGalImg src={smImg} alt="image" onClick={() => modal(lgImg)} />
    </ImageGalItem>
)

ImageGalleryItem.propTypes = {
    smImg: PropTypes.string.isRequired,
    lgImg: PropTypes.string.isRequired,
    modal: PropTypes.func.isRequired,
}