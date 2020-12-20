import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './Input.styles.css'


const Input = (props) => {
    const { value, onChange, placeholder, type, label, name, isDisabled, className:classNameProp, adornment } = props;

    const classNameInput = classNames({
        'input': true,
        'input--disabled': isDisabled,
    })

    const classNameContainer = classNames('input-wrapper', classNameProp)

    const classNameLabel = classNames({
        'label': true,
    })

    const shouldShowAdornment = value.length > 0;

    return (
        <>
            {
                label && (
                    <label htmlFor={name} className={classNameLabel}>{label}</label>
                )
            }
            <div className={classNameContainer}>
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={classNameInput}
                    disabled={isDisabled}
                />
                {
                    shouldShowAdornment && adornment
                }
            </div>
        </>
    )
}

Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number']),
    adornment: PropTypes.node,
}

Input.defaultProps = {
    className: '',
    id: '',
    isDisabled: false,
    label: '',
    name: '',
    onChange: () => {},
    placeholder: '',
    value: '',
    type: 'text',
    adornment: null,
}

export default Input
