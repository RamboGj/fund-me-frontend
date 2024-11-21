import './App.css'

import profileImage from "@/assets/profile.png"
import fundMeAbi from "@/contracts/abi/FundMe.json"
import { LinkedinIcon } from "./components/atoms/LinkedinIcon"
import { GithubIcon } from "./components/atoms/GithubIcon"

import { ethers, Contract } from "ethers";
import { FUND_ME_ADDRESS } from './contracts/addresses';
import { getReadOnlyProvider } from './contracts/providers'
import { useEffect } from 'react'

function App() {
  async function handleConnectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum)

      // MetaMask requires requesting permission to connect users accounts
      const result = await provider.send("eth_requestAccounts", []);
  
      console.log("result ->", result)

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = await provider.getSigner()

      console.log("provider ->", provider)
      console.log("signer ->", signer)
    } else return  
  }

  async function handleGetOwner() {
    const readOnlyProvider = getReadOnlyProvider()

    console.log("readOnlyProvider ->", readOnlyProvider)


    const contract = new Contract(FUND_ME_ADDRESS, fundMeAbi.abi, readOnlyProvider)

    const owner = await contract.getOwner()

    console.log("owner ->", owner)
  }

  async function getOwner() {

    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)

        console.log('provider ->', provider)
        // const signer = await provider.getSigner()

        const contract = new Contract(FUND_ME_ADDRESS, fundMeAbi.abi, provider)
        console.log('contract ->', contract)
  
        const funder = await contract.getOwner()
  
        console.log("funder ->", funder)
      } catch (err) {
        console.log("ERR ->", err)
      }
   
    } else {
      console.log("exit ->")
      return
    }   

  }

  const SOCIAL_MEDIAS = [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/rambog/',
      icon: <LinkedinIcon className="icon" />
    },
    {
      title: 'GitHub',
      href: 'https://github.com/RamboGj',
      icon: <GithubIcon className="icon" />
    },
  ]

  const DONATES = [
    {
      address: '0x3028c176B0fB834e410Ae66595e5D05B6a078478',
      amount: '0.02ETH'
    },
    {
      address: '0x3028c176B0fB834e410Ae66595e5D05B6a078478',
      amount: '0.02ETH'
    },
    {
      address: '0x3028c176B0fB834e410Ae66595e5D05B6a078478',
      amount: '0.02ETH'
    },
    {
      address: '0x3028c176B0fB834e410Ae66595e5D05B6a078478',
      amount: '0.02ETH'
    },
    {
      address: '0x3028c176B0fB834e410Ae66595e5D05B6a078478',
      amount: '0.02ETH'
    },
    {
      address: '0x3028c176B0fB834e410Ae66595e5D05B6a078478',
      amount: '0.02ETH'
    },
  ]

  useEffect(() => {
    handleGetOwner()
  }, [])


  return (
    <div className='wrapper'>
      <div className='blankSection' />

      <main id='fundMe' className='main'>
        <section id='aboutMe' className='aboutMe'>
          <div className='avatarWrapper'>
            <img className='avatar' src={profileImage} alt="Profile Avatar" />
          </div>

          <h1 className='title'>João Rambo</h1>

          <p className='paragraph'>
            Edit inspect slice move pencil inspect plugin. Library vertical undo figma thumbnail image figjam. 
            Undo distribute edit scale content layer.
          </p>

          <ul className='socialMedias'>
            {SOCIAL_MEDIAS.map(({ href, icon, title }) => {
              return (
                <li key={title}>
                  <a target='_blank' href={href}>
                    {icon}
                  </a>
                </li>
              )
            })}
          </ul>

          <button onClick={handleConnectWallet} className='actionButton'>Connect</button>
          <button onClick={getOwner} className='actionButton'>View funder</button>
        </section>

        <section className='donators' id='donators'>
          <h2 className='title'>Donators</h2>

          <ul className='donatesList'>
            {DONATES.map(({ address, amount }, index) => {
              return (
                <li key={index} className='donateItem' data-is-first={index === 0}>
                  <span className='paragraph'>{address}</span>
                  <strong className='donateAmount'>+{amount}</strong>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
