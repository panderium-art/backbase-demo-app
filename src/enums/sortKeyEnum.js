export const SORT_KEY_ENUM = {
    DATE: 'DATE',
    BENIFICIARY: 'BENIFICIARY',
    AMOUNT: 'AMOUNT'
}

export const SORT_KEY_TO_ENTITY_KEY_MAP = {
    [SORT_KEY_ENUM.DATE]: 'date',
    [SORT_KEY_ENUM.BENIFICIARY]: 'merchantName',
    [SORT_KEY_ENUM.AMOUNT]: 'amount'
}
