import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`
});

export const api = {



  async  sendRequest (success) {
        try {
            const response = await
            instance.post(``, {success});
            console.log('answer: ', response.data);
            return response.data;
        } catch (e) {
            console.log('error: ', {...e});
            return 'error';
        }
    }

}

