import { config } from "@/config/config";
import { ErrorResponse } from "./response";
import axios, { AxiosResponse } from "axios";

const AuthApi = (() => {
    const server = axios.create({
        baseURL: config.serverUrl
    })
    async function login(data: string) {
        try {
            const response: AxiosResponse = await server.post("/login", {data: data})
            console.log(response.status);
        } catch (error) {
            return ErrorResponse(error)
        }
        
    }
    // async function login(data: string) {
    //     try {
    //         const response = await fetch(config.serverUrl+"/login", {
    //             method: "post",
    //             headers: {
    //                 "Content-type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 data: data
    //             })
    //         })
    //         if (response.status !== 200) {
    //             const res: ResponseType = await response.json()
    //             return Swal.fire({
    //                 icon: "error",
    //                 title: res.error,
    //                 text: res.message
    //             })
    //         }
    //         return await response.json() as string
    //     } catch (error) {
    //         console.error(error)
    //         if (error instanceof TypeError) {
    //             return Swal.fire({
    //                 icon: "error",
    //                 title: "Network Error",
    //                 text: error.message
    //             })
    //         }
    //         return Swal.fire({
    //             icon: "error",
    //             title: "Error",
    //             text: "System error"
    //         })
    //     }
    // }

    return {
        login
    }
})();

export default AuthApi;