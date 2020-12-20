import React from "react";
import classnames from 'classnames';

import './EmptyState.styles.css'

const EmptyState = (props) => {

    const { className: classNameProp } = props;

    const className = classnames(
        'stub', classNameProp
    )

    return (
        <div className={className}>
            <p className="stub__title">No results found</p>
            <p className="stub__text">Try changing the search term</p>
        </div>
    )
}

export default EmptyState;
