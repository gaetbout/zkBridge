import { useAccount, useStarknetExecute } from '@starknet-react/core'
import { useState, useMemo, useCallback } from 'react'

function Component(getAmount, getZkSyncAddress) {
    const { address } = useAccount()


    const calls = [
        {
            contractAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
            entrypoint: 'transfer',
            calldata: ['0x0392227950BE49083ECC3e9049A1996127334530bC61D8b6977E589d2f522F9A', 2, 0],
        },
        {
            contractAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
            entrypoint: 'transfer',
            calldata: ['0x055E29b3B0C2e17dc418DBEEcA1F6d51612B20186C43284A03eDe8d29D15787A', 2, 0],
        }]
    const { execute } = useStarknetExecute({ calls })
    if (!address) {
        return (
            <>
                <button disabled>Please connect ArgentX ser</button>
            </>)
    }
    if (!getZkSyncAddress) {
        return (
            <>
                <button disabled>Please connect Metamask ser</button>
            </>)
    }
    if (!getAmount) {
        return (
            <>
                <button disabled>Provide amount ser</button>
            </>)
    }

    return (
        <>
            <p>
                <button onClick={execute}>Send {getAmount} ETH to {getZkSyncAddress}</button>
            </p>
        </>
    )
}

export default function Submit({ getAmount, getZkSyncAddress }) {
    return Component(getAmount, getZkSyncAddress)
}