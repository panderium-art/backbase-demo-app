import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './CaretIcon.styles.css'

const Caret = ({ direction, className: classNameProp }) => {

    const className = classNames('caret', direction === 'up' ? 'caret--up' : 'caret--down', classNameProp)

    return (
        <span className={className}></span>
    )
}

Caret.propTypes = {
    direction: PropTypes.oneOf(['up', 'down']).isRequired,
}

export default Caret;
