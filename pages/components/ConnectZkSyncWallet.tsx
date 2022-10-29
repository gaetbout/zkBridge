import { useState } from "react";
function buttonString(addr) {
    if (addr) {
        return `${addr.slice(0, 4)}...${addr.slice(-2)}`;
    }
    return "Connect"
}
export default function ConnectZkSyncWallet({ setZkSyncAddress }) {
    const [getWalletAddress, setWalletAddress] = useState('')
    return (
        <>
            <li>
                <button onClick={async () => {
                    // Check if MetaMask is installed on user's browser
                    if (window.ethereum) {
                        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                        // Check if user is connected to Mainnet
                        if (chainId != '0x118') {
                            alert("Plz switch to zkSync testnet (280)");
                        } else {
                            let wallet = accounts[0];
                            setZkSyncAddress(wallet)
                            setWalletAddress(wallet);
                        }
                    } else {
                        alert("Please install Mask");
                    }
                }}>{buttonString(getWalletAddress.toUpperCase())}</button>
            </li>
        </>
    );
}