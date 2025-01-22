import { AxiosError } from "axios";
import Swal from "sweetalert2";

export type ResponseType = {
    message: string;
    error: string;
    statusCode: 400;
}

export function ErrorResponse(error: unknown) {
    if (error instanceof AxiosError) {
        console.error(error);
        if (error.code === "ERR_NETWORK") {
            return Swal.fire({
                icon: "error",
                title: error.message
            })
        }
        return Swal.fire({
            icon: "error",
            title: error.response?.data.error,
            text: error.response?.data.message
        })
    }
    return Swal.fire({
        icon: "error",
        title: "Error",
        text: "System Error"
    })
}