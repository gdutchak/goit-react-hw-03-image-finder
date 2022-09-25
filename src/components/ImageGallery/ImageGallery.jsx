import PropTypes from 'prop-types';
import { ImgGallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ collection, ...otherProps }) => (
    <ImgGallery className="gallery">
        {collection.map(({ id, webformatURL, largeImageURL }) =>
            <ImageGalleryItem smImg={webformatURL} key={id} lgImg={largeImageURL}{...otherProps}>
            </ImageGalleryItem>
        )}
    </ImgGallery>
)

ImageGallery.propTypes = {
    collection: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }))
}


