/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTACT_EMAIL: string;
    /** E.164, e.g. +919876543210 */
    readonly VITE_CONTACT_PHONE: string;
    /** Digits with country code, e.g. 919876543210 */
    readonly VITE_WHATSAPP_NUMBER: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
