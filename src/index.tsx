import { Action, ActionPanel, Detail, Icon, Image, List } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { useState } from "react";
import { getTransactions, openInTenderly, validateHash } from "./utils";
import { Transaction } from "./types";
import { network_configs } from "./networkConfig";

export default function Command() {
    const [searchText, setSearchText] = useState("");
    const { data, isLoading, error } = usePromise(getTransactions, [searchText], { execute: validateHash(searchText) });


    return <List onSearchTextChange={setSearchText} isLoading={isLoading} >
        {
            error && <List.Item
                title="An error occurred while fetching transactions"
                subtitle={error.message}
                icon={{ source: Icon.XMarkCircle, tintColor: "#DB4437" }}
            />
        }
        {!error && data?.transactions.map((transaction) => {
            const network = network_configs[transaction.network_id];
            return (
                <List.Item
                    key={`${transaction.network_id}:${transaction.hash}`}
                    title={transaction.hash}
                    subtitle={`${network.networkName}(${transaction.network_id})`}
                    icon={{ source: network.imageUrl, fallback: Icon.Network, mask: Image.Mask.RoundedRectangle }}
                    actions={
                        <ActionPanel title={`${transaction.network_id}:${transaction.hash}`}>
                            <Action.Push
                                title="Instant View"
                                target={<TransactionDetail transaction={transaction} />}
                                icon={Icon.Eye}
                            />
                            <Action.OpenInBrowser icon={Icon.ArrowNe} url={openInTenderly(transaction)} title="Open In Tenderly" />
                        </ActionPanel>
                    }
                />
            )
        }
        )}
    </List>;
}

export function TransactionDetail({
    transaction,
}: {
    transaction: Transaction;
}) {
    const network = network_configs[transaction.network_id];
    const meta = [
        `# Transaction Details`,
        `## General Information`,
        `- **Transaction Hash:** \`${transaction.hash}\``,
        `- **Network:** \`${network.networkName}\` \`${transaction.network_id}\``,
        `- **Block Hash:** \`${transaction.block_hash}\``,
        `- **Block Number:** \`${transaction.block_number.toLocaleString()}\``,
        `- **From:** \`${transaction.from}\``,
        `- **To:** \`${transaction.to}\``,
        `- **Nonce:** \`${transaction.nonce.toLocaleString()}\``,
        `- **Timestamp:** \`${transaction.timestamp}\``,
        `## Gas Information`,
        `- **Gas Limit:** \`${transaction.gas.toLocaleString()}\``,
        `- **Gas Price:** \`${transaction.gas_price.toLocaleString()}\``,
        `- **Gas Fee Cap:** \`${transaction.gas_fee_cap}\``,
        `- **Gas Tip Cap:** \`${transaction.gas_tip_cap}\``,
        `- **Cumulative Gas Used:** \`${transaction.cumulative_gas_used}\``,
        `- **Gas Used:** \`${transaction.gas_used}\``,
        `- **Effective Gas Price:** \`${transaction.effective_gas_price}\``,
        `## Value and Input Data`,
        `- **Value:** \`${transaction.value}\``,
        `- **Input Data:** \`${transaction.input}\``,
        `## Additional Information`,
        `- **Transaction Index:** \`${transaction.index}\``,
        `- **Function Selector:** \`${transaction.function_selector}\``,
        `- **Deposit Transaction:** \`${transaction.deposit_tx}\``,
        `- **System Transaction:** \`${transaction.system_tx}\``,
        `- **Method:** \`${transaction.method}\``,
        `- **Access List:** \`${transaction.access_list}\``,
        `- **Status:** \`${transaction.status}\``,
        `- **Addresses:** \`${transaction.addresses}\``,
        `- **Contract IDs:** \`${transaction.contract_ids}\``,
        `- **Decoded Input:** \`${transaction.decoded_input}\``,
        `- **Call Trace:** \`${transaction.call_trace}\``
    ].join("\n\n");

    return (
        <Detail
            markdown={meta}
            actions={
                <ActionPanel>
                    <Action.OpenInBrowser url={openInTenderly(transaction)} title="Open In Tenderly" />
                </ActionPanel>
            }
        />
    );
}