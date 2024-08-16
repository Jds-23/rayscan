export type Transaction = {
    hash: string;
    block_hash: string;
    block_number: number;
    from: string;
    gas: number;
    gas_price: number;
    gas_fee_cap: number;
    gas_tip_cap: number;
    cumulative_gas_used: number;
    gas_used: number;
    effective_gas_price: number;
    input: string;
    nonce: number;
    to: string;
    index: number;
    value: string;
    access_list: null | any; // You can replace `any` with a more specific type if you know the structure of `access_list`
    status: null | any; // You can replace `any` with a more specific type if you know the structure of `status`
    addresses: null | any; // You can replace `any` with a more specific type if you know the structure of `addresses`
    contract_ids: null | any; // You can replace `any` with a more specific type if you know the structure of `contract_ids`
    network_id: string;
    timestamp: string;
    function_selector: string;
    deposit_tx: boolean;
    system_tx: boolean;
    method: string;
    decoded_input: null | any; // You can replace `any` with a more specific type if you know the structure of `decoded_input`
    call_trace: null | any; // You can replace `any` with a more specific type if you know the structure of `call_trace`
};

export type TransactionsResponse = {
    transactions: Transaction[];
};