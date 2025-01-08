type CONFIG = {
    name: string,
    hospitalName: string;
    hospitalSlug: string;
    hospitalAddress: string;
    hospitalPhone: string;
    hospitalUrl: string;
}
export const config: CONFIG = {
    name: import.meta.env.VITE_APP_NAME || undefined,
    hospitalName: import.meta.env.VITE_APP_HOSPITAL_NAME || undefined,
    hospitalSlug: import.meta.env.VITE_APP_HOSPITAL_SLUG || undefined,
    hospitalAddress: import.meta.env.VITE_APP_HOSPITAL_ADDRESS || undefined,
    hospitalPhone: import.meta.env.VITE_APP_HOSPITAL_PHONE || undefined,
    hospitalUrl: import.meta.env.VITE_APP_HOSPITAL_URL || undefined,
}