"use client";

import Link from "next/link";
import { Button } from "primereact/button";

export default function GoPortalButton() {

    const PERMITTED_DOMAIN = process.env.NEXT_PUBLIC_USER_URL

    return (
        <Link href={PERMITTED_DOMAIN} target="_blank" prefetch={false}>
            <Button 
                label="Cloud Portal 접속하기" 
                className='p-button-rounded roundBtn mt20' 
            />
        </Link>
    )
}