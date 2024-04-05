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

export {
    EmptyToNull
};