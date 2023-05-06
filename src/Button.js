import PropTypes from 'prop-types'

export function Button({text, name = 'user'}){
    console.log(text)
    return <button>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

