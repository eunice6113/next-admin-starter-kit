import { METHOD } from '@/app/shared/config/commonCode';
import { CommonUtils } from '@/app/shared/utils/commonUtils';
import { environment } from '@/app/shared/config/environment';
import { NextResponse } from 'next/server'
import * as querystring from 'querystring';

const host = environment.host;

// export async function GET(request: Request) {
export async function GET(path: string, params: object) {
    const parameters:any = CommonUtils.removeEmptyValue(params);
    const urlPath = encodeURI(path) + `?${querystring.stringify(parameters)}`;
    const url = host + urlPath;

    return await fetch( url, {
        method: METHOD.GET,
        headers: getHeaders(),
    }).then(response => {

        console.log('response =>', response)

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    })
}

// export async function POST(request: Request) {
export async function POST(path: string, body: object) {
    const urlPath = encodeURI(path);
    const url = host + urlPath;

    return await fetch( url, {
        method: METHOD.POST,
        body: JSON.stringify(CommonUtils.removeEmptyValue(body)),
        headers: getHeaders()
    });
}
 
// export async function PUT(request: Request) {
export async function PUT(path: string, body: object) {
    const urlPath = encodeURI(path);
    const url = host + urlPath;

    return await fetch( url, {
        method: METHOD.PUT,
        body: JSON.stringify(CommonUtils.removeEmptyValue(body)),
        headers: getHeaders()
    });
}
 
// export async function DELETE(request: Request) {
export async function DELETE(path: string, body: object) {
    const urlPath = encodeURI(path);
    const url = host + urlPath;

    return await fetch( url, {
        method: METHOD.DELETE,
        body: JSON.stringify(CommonUtils.removeEmptyValue(body)),
        headers: getHeaders()
    });
}
 
export async function PATCH(request: Request) {

}

//로컬에서 토큰 받아서 localStorage에 저장 -> 서버에서 토큰 꺼내오게 수정해야함
function getHeaders(): any {
    let headers = {};
    const token = ''// getToken();
    const empid = '' //getEmpId();

    if (empid) {
        headers = {
            ...headers,
            empid: `${empid}`
        }
    }

    if (token) {
        headers = {
            ...headers,
            Authorization: `${token}`
        }
    }

    return headers
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate res `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {

}

export async function HEAD(request: Request) {

}
 