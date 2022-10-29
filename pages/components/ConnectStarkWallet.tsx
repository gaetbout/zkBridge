import { useConnectors, useAccount } from '@starknet-react/core'


function buttonString(addr) {
    if (addr) {
        return `${addr.slice(0, 4)}...${addr.slice(-2)}`;
    }
    return "Connect"
}


export default function ConnectStarkWallet() {
    const { connect, connectors } = useConnectors()
    const { address } = useAccount()

    return (
        <>
            {connectors.map((connector) => (
                <li key={connector.id()}>
                    <button onClick={() => connect(connector)}>
                        {buttonString(address?.toUpperCase())}
                    </button>
                </li>
            ))}
        </>
    )
}