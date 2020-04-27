import axios from 'axios'

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vuejs-http-5b198/databases/(default)/documents'

axios.interceptors.request.use(
    config => {
        
    },
    error => {}
);
axios.interceptors.response.use()

export default axios.create({
})