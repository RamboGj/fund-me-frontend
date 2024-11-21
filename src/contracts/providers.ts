import { ethers } from "ethers";

export function getReadOnlyProvider() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Jv4xFt7QJa3wWKrnITQ1ieItOXSLWbM9") 

  return provider
}