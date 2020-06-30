import axios from 'axios'
const baseUrl = 'https://localhost:44334/api/PortfolioAppModels/'

const getAllProjects = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}


export default { getAllProjects }