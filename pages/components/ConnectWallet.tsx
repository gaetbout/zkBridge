import { useConnectors, useAccount } from '@starknet-react/core'

export default function ConnectWallet() {
    const { connect, connectors } = useConnectors()
    const { address } = useAccount()

    return (
        <ul>
            {connectors.map((connector) => (
                <li key={connector.id()}>
                    <button onClick={() => connect(connector)}>
                        Connect {connector.id()}
                    </button>
                </li>
            ))}
            <p>Account:{address}</p>
        </ul>
    )
}