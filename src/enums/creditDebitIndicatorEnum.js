export const CREDIT_DEBIT_INDICATOR_ENUM = {
    CRDT: 'CRDT',
    DBIT: 'DBIT',
};

export const CREDIT_DEBIT_INDICATOR_TO_SIGN_MAP = {
    [CREDIT_DEBIT_INDICATOR_ENUM.CRDT]: '+',
    [CREDIT_DEBIT_INDICATOR_ENUM.DBIT]: '-',
};
