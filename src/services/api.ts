import axios from 'axios';

//devemos por o endereço ip do pc uando real (telemovel-ip)
//json-server ./src/services/server.json --host 192.168.1.91 --port 3333

const api = axios.create({
    baseURL:'http://192.168.1.91:3333' 
})
export default api; 