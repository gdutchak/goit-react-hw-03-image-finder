import PropTypes from 'prop-types';
import { Overlay, ModalEl } from "./Modal.styled"

export const Modal = ({ data, closeModal }) => (
    <Overlay onClick={closeModal}>
        <ModalEl>
            <img src={data} alt="imageModal" />
        </ModalEl>
    </Overlay>
)

Modal.propTypes = {
    data: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}