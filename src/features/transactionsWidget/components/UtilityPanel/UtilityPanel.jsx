import React from 'react';
import PropTypes from 'prop-types';

import './UtilityPanel.styles.css'

import Input from "../../../../atomic-components/Input/Input";
import SegmentedControl from "../SegmentedControl/SegmentedControl";

import { SORT_KEY_ENUM } from "../../../../enums/sortKeyEnum";
import { SORT_ORDER_ENUM } from "../../../../enums/sortOrderEnum";

const UtilityPanel = (props) => {
    const {
        sortOrder,
        sortKey,
        searchValue,
        searchValueOnChange,
        clearSearchValueHandler,
        sortingOptions,
    } = props;

    const adornment = (
        <div className="adornment-container" onClick={clearSearchValueHandler}>
            <div className="adornment"/>
        </div>
    )

    return (
        <>
            <div className="panel-container">
                <div className="panel-block">
                    <Input
                        id="search"
                        name="search"
                        value={searchValue}
                        onChange={searchValueOnChange}
                        placeholder="Search by typing..."
                        adornment={adornment}
                    />
                </div>
                <div className="panel-block">
                    <SegmentedControl
                        label="Sort by"
                        options={sortingOptions}
                        sortOrder={sortOrder}
                        sortKey={sortKey}
                    />
                </div>
            </div>
        </>
    )
}

UtilityPanel.propTypes = {
    sortOrder: PropTypes.oneOf([SORT_ORDER_ENUM.ASC, SORT_ORDER_ENUM.DESC]).isRequired,
    sortKey: PropTypes.oneOf([SORT_KEY_ENUM.AMOUNT, SORT_KEY_ENUM.BENIFICIARY, SORT_KEY_ENUM.DATE, '']).isRequired,
    searchValue: PropTypes.string.isRequired,
    searchValueOnChange: PropTypes.func.isRequired,
    clearSearchValueHandler: PropTypes.func.isRequired,
    sortingOptions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOf(['Date', 'Benificiary', 'Amount']),
        key: PropTypes.oneOf([SORT_KEY_ENUM.AMOUNT, SORT_KEY_ENUM.BENIFICIARY, SORT_KEY_ENUM.DATE]),
    })).isRequired
}

export default UtilityPanel;
