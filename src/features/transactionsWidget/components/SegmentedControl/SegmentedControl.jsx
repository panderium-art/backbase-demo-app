import React from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import './SegmentedControl.styles.css'
import { setSortParams } from "../../transactionsWidgetSlice";
import Caret from "../CaretIcon/CaretIcon";
import {SORT_ORDER_ENUM} from "../../../../enums/sortOrderEnum";

const SegmentedControl = (props) => {
    const dispatch = useDispatch();
    const { label, options, sortOrder, sortKey } = props;
    const caretDirection = sortOrder === SORT_ORDER_ENUM.ASC ? 'up' : 'down'
    const shouldShowCaret = (key) => sortOrder && sortKey === key

    const onClickHandler = (key) => {
        dispatch(setSortParams(key));
    };

    return (
        <>
            <div className="segmented-control">
                {
                    label
                    && <span className="segmented-control__label">{label}</span>
                }
                <div className="segmented-control__options">
                    {
                        options.map(option => (
                            <div
                                key={option.key}
                                className="segmented-control__option"
                                onClick={() => onClickHandler(option.key)}
                            >
                                {option.label}
                                {
                                    shouldShowCaret(option.key)
                                    && <Caret direction={caretDirection} className="segmented-control__caret"/>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

SegmentedControl.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        key: PropTypes.string,
    })).isRequired,
    sortOrder: PropTypes.string.isRequired,
    sortKey: PropTypes.string.isRequired,
}

SegmentedControl.defaultProps = {
    label: '',
}

export default SegmentedControl;
