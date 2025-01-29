import { config } from "@/config/config";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { ErrorResponse } from "./response";
import { Patient } from "@/data/patient/types";

const PatientApi = (() => {
    const server = axios.create({
        baseURL: config.serverUrl+"/patients",
    })

    async function createPatient(body: Patient): Promise<Patient | null> {
        try {
            const response: AxiosResponse = await server.post("", body)
            console.log(response);
            if (response.status !== 201) {
                Swal.fire({
                    icon: "error",
                    title: response.data.error,
                    text: response.data.message
                })
                
                return null
            }
            return response.data as Patient
        } catch (error) {
            ErrorResponse(error)
            return null
        }
    }

    async function getAllPatients(): Promise<Patient[] | []> {
        try {
            const response: AxiosResponse = await server.get("")
            if (response.status !== 200) {
                Swal.fire({
                    icon: "error",
                    title: response.data.error,
                    text: response.data.message
                })
                return []
            }
            return response.data as Patient[]
        } catch (error) {
            ErrorResponse(error)
            return []
        }
    }

    async function getPatient(id: string): Promise<Patient | undefined> {
        try {
            const response: AxiosResponse = await server.get(`/${id}`)
            if (response.status !== 200) {
                Swal.fire({
                    icon: "error",
                    title: response.data.error,
                    text: response.data.message
                })
                return undefined
            }
            return response.data as Patient
        } catch (error) {
            ErrorResponse(error)
            return undefined
        }
    }

    async function editPatient(id: string, body: Patient): Promise<Patient | undefined> {
        try {
            const response: AxiosResponse = await server.patch(`/${id}`, body)
            if (response.status !== 200) {
                Swal.fire({
                    icon: "error",
                    title: response.data.error,
                    text: response.data.message
                })
                return undefined
            }
            return response.data as Patient
        } catch (error) {
            ErrorResponse(error)
            return undefined
        }
    }
    
    async function deletePatient(id: string): Promise<boolean> {
        try {
            const response: AxiosResponse = await server.delete(`/${id}`)
            if (response.status !== 200) {
                Swal.fire({
                    icon: "error",
                    title: response.data.error,
                    text: response.data.message
                })
                return false
            }
            return true
        } catch (error) {
            ErrorResponse(error)
            return false
        }
    }

    return {
        createPatient,
        getAllPatients,
        getPatient,
        editPatient,
        deletePatient
    }
})()

export default PatientApi;