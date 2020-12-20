import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.styles.css';

const BUTTON_TYPES_ENUM = {
    PRIMARY: 'primary',
}

const Button = (props) => {
    const { label, isDisabled = false, type, onClick } = props;
    const className = classNames({
        'button': true,
        'button--primary': type === BUTTON_TYPES_ENUM.PRIMARY,
        'button--disabled': isDisabled === true
    })

    return (
        <button
            className={className}
            disabled={isDisabled}
            onClick={onClick}
        >
            { label }
        </button>
    )
}

Button.propTypes = {
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.oneOf(['primary']),
    onClick: PropTypes.func,
}

Button.defaultProps = {
    isDisabled: false,
    label: '',
    type: 'primary',
    onClick: () => {},
}

export default Button;
