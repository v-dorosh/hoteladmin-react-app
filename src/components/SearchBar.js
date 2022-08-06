import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({ users, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(users)

        const resultsArray = users.filter(user => user.id.includes(e.target.value) || user.name.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}
export default SearchBar;