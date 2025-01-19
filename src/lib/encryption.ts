import { config } from "@/config/config"
import { AES, enc, format, lib, mode, pad, SHA256 } from "crypto-js"

export function hash(data: string): string {
    const iv = lib.WordArray.random(16)
    const key = SHA256(config.secretKey)
    

    const cipher = AES.encrypt(data, key, {
        iv: iv,
        mode: mode.CBC,
        format: format.Hex,
        padding: pad.Pkcs7
    })

    return `${enc.Hex.stringify(iv)}:${cipher.toString()}`
}