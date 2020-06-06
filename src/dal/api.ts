import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`
});

type SendRequestType = {
    errorText: string
}


export const api = {
    sendRequest(success: boolean) {
        return instance.post<SendRequestType>(``, {success})
    }
}

// export const tryCatch = async (func) => {
//     try {
//         const response = await func()
//         console.log('answer: ', response.data);
//         return response.data;
//     } catch (e) {
//         console.log('error: ', {...e});
//         return 'error';
//     }
// }


