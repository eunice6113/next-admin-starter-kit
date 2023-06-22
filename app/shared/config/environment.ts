
export const environment = {
    title: process.env.NEXT_PUBLIC_TITLE,
    host : process.env.NEXT_PUBLIC_API_URL,
    sso: {
        auth: process.env.NEXT_PUBLIC_SSO_AUTH_URL,
        logout: process.env.NEXT_PUBLIC_SSO_LOGOUT_URL,
    },
    redirect: process.env.NEXT_PUBLIC_REDIRECT_URL,
    file: {
        upload : process.env.NEXT_PUBLIC_FILE_UPLOAD_URL,
        download : process.env.NEXT_PUBLIC_FILE_DOWNLOAD_URL,
        all_download : process.env.NEXT_PUBLIC_FILE_ALL_DOWNLOAD_URL,
    },
    mode: process.env.NEXT_PUBLIC_MODE,
};

