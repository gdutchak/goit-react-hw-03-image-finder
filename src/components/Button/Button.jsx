import { ButtonLoad } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({ nextPage }) => (
    <ButtonLoad type="button" onClick={nextPage}>Load more...</ButtonLoad>
)

Button.propTypes = {
    nextPage: PropTypes.func.isRequired,
}