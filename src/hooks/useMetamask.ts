import { ethers } from "ethers"
import { useEffect, useState } from "react"

export interface MetamaskDataProps {
  balance: bigint
  network: ethers.Network
  address: string
}

export function useMetamask() {
  const [isPending, setIsPending] = useState<boolean>(true)
  const [connecting, setIsConnecting] = useState<boolean>(false)
  const [connected, setIsConnected] = useState<boolean>(false)
  const [data, setData] = useState<MetamaskDataProps>()
  const [error, setError] = useState<unknown>()

  async function connect() {
    try {
      setIsConnecting(true)

      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum)
  
        await provider.send("eth_requestAccounts", []);
      }
    } catch (err) {
      setError(err)
    } finally {
      setIsConnecting(false)
    }
  }

  async function verifyIsConnected() {
    const isUnlocked = await window?.ethereum?._metamask.isUnlocked();
      
    setIsConnected(isUnlocked)
  }

  async function getMetamask() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum)
  
        const signer = await provider.getSigner()
  
        const address = await signer.getAddress()
  
        const [balance, network] = await Promise.all([
          provider.getBalance(address),
          provider.getNetwork(),
        ])
  
        setData({
          balance,
          network,
          address
        })
      }
    } catch (err) {
      setError(err)
    } finally {
      setIsPending(false)
    }
  }

  async function onFetchWallet() {
    await Promise.all([
      getMetamask(),
      verifyIsConnected()
    ])
  }

  useEffect(() => {
    onFetchWallet()
  }, [])

  return {
    data,
    error,
    isPending,
    connected,
    connecting,
    connect,
  }
}