type CONFIG = {
    name: string;

    meta: {
        author: string;
    };
    secretKey: string;

    hospitalName: string;
    hospitalSlug: string;
    hospitalAddress: string;
    hospitalPhone: string;
    hospitalUrl: string;
}
export const config: CONFIG = {
    name: import.meta.env.VITE_APP_NAME || undefined,

    meta: {
        author: import.meta.env.VITE_APP_META_AUTHOR || undefined,
    },
    secretKey: import.meta.env.VITE_APP_SECRET_KEY || undefined,

    hospitalName: import.meta.env.VITE_APP_HOSPITAL_NAME || undefined,
    hospitalSlug: import.meta.env.VITE_APP_HOSPITAL_SLUG || undefined,
    hospitalAddress: import.meta.env.VITE_APP_HOSPITAL_ADDRESS || undefined,
    hospitalPhone: import.meta.env.VITE_APP_HOSPITAL_PHONE || undefined,
    hospitalUrl: import.meta.env.VITE_APP_HOSPITAL_URL || undefined,
}