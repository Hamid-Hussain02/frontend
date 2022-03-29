import axios from 'axios'
const token = localStorage.getItem("token")
// export  const headers={
//     'Authorization': `Basic ${token}` 
//   }

export const customAxios = axios.create({
    headers: {
        'Authorization': `Basic ${token}`
    }
  })