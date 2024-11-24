import './App.css'

import fundMeAbi from "@/contracts/abi/FundMe.json"

import { AboutSection } from './components/molecules/AboutSection'

function App() {
  // async function handleGetOwner() {
  //   const readOnlyProvider = getReadOnlyProvider()

  //   console.log("readOnlyProvider ->", readOnlyProvider)


  //   const contract = new Contract(FUND_ME_ADDRESS, fundMeAbi.abi, readOnlyProvider)

  //   const owner = await contract.getOwner()

  //   console.log("owner ->", owner)
  // }

  // async function getOwner() {

  //   if (typeof window.ethereum !== 'undefined') {
  //     try {
  //       const provider = new ethers.BrowserProvider(window.ethereum)

  //       console.log('provider ->', provider)
  //       // const signer = await provider.getSigner()

  //       const contract = new Contract(FUND_ME_ADDRESS, fundMeAbi.abi, provider)
  //       console.log('contract ->', contract)
  
  //       const funder = await contract.getOwner()
  
  //       console.log("funder ->", funder)
  //     } catch (err) {
  //       console.log("ERR ->", err)
  //     }
   
  //   } else {
  //     console.log("exit ->")
  //     return
  //   }   

  // }

  

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

  return (
    <div className='wrapper'>
      <div className='blankSection' />

      <main id='fundMe' className='main'>
       <AboutSection />

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
