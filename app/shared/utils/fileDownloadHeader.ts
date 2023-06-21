import { getEmpId, getToken } from "@/redux/services/base/base-api.service";

const getHeaders = () => {
    
    const token = getToken();
    const empid = getEmpId();
    
    let headers = {
        'Content-Type':'application/json',
        'empid': empid ? empid : null,
        'authorization': token ? token: null,
    }
    return headers
}

export {
    getHeaders,
}