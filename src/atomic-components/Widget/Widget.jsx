import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './Widget.styles.css';

const Widget = (props) => {

    const { icon, title, children, size, className: classNameProp } = props;

    const className = classNames('widget-container',{
        'widget-container--small': size === 'small',
        'widget-container--big': size === 'big',
    }, classNameProp)

    return (
        <>
            <div className={className}>
                <div className={'widget-header'}>
                    <img src={icon} alt="icon"/>
                    <p className={'widget-header__title'}>{title}</p>
                </div>
                <div className={'widget-body'}>
                    {children}
                </div>
            </div>
        </>
    )
}

Widget.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'big']),
    title: PropTypes.string.isRequired,
}

Widget.defaultProps = {
    size: 'small',
}

export default Widget;
