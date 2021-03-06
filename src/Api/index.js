// import Web3 from 'web3'
import apiCalls from './calls'
const Web3 = window.Web3

const END_POINT = "https://ropsten.infura.io/Tbh0rdlz4fqktixk6gL7"

// our "constructor"
const create = () => {

    const web3 = new Web3(new Web3.providers.HttpProvider(END_POINT))
    return apiCalls(web3)
}

const api = create()

// let's return back our create method as the default.
export default api
