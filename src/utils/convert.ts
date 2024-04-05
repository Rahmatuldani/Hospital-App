/* eslint-disable @typescript-eslint/no-explicit-any */
function EmptyToNull(obj: Record<string, any>): Record<string, any> {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] === '') {
                obj[key] = null;
            }
        }
    }
    return obj;
}

function generateRandomString(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let randomString = '';
    for (let i = 0; i < 24; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomString;
}

export {
    EmptyToNull,
    generateRandomString
};