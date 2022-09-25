import PropTypes from 'prop-types';
import { SearchbarEl, SearchForm, SearchButton, SearchLabel, SearchInput } from "./SearchBar.styled"

export const SearchBar = ({ onSubmit }) => (
    <SearchbarEl>
        <SearchForm onSubmit={onSubmit}>
            <SearchButton type="submit">
                <SearchLabel>Search</SearchLabel>
            </SearchButton>

            <SearchInput
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </SearchForm>
    </SearchbarEl>
)

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}