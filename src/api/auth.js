import axios from 'axios';
export const loginAPI = async params => {

    const url = "/api/user/login";
    const data = {...params}
    const response = await axios.post(url, data, {timeout:60000});
    const isSuccess = response.status >= 200 && response.status< 300;
    if(isSuccess){
        const resp = response.data;
        return resp || null;
    }
    throw new Error('something went wrong')
}