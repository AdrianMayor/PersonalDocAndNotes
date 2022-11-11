import PropTypes from 'prop-types'

const Location = ({ city, className }) => {
    return <div className={className}>{city}</div>
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Location