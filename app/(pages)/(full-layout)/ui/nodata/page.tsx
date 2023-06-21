"use client"

import * as React from "react";
import { BasePage } from "@/app/shared/components/base/BasePage";
import ClipboardCopy from "@/app/shared/components/clipboard-copy/ClipboardCopy";
import NoData from "@/app/shared/components/ui/NoData";

const NoDataGuide: React.FC = () => {

    return(
    <BasePage>
        <div className='previewBox'>
            <h3>Basic</h3>
            <NoData message="데이터가 없습니다" />

            <h3>Horizontal</h3>
            <NoData isVertical={false} isTriangleIcon={false} message="데이터가 없습니다" />
        </div>

        <ClipboardCopy rows={20} copyText={`
import * as React from "react";
import { BasePage } from "@/app/shared/components/base/BasePage";
import NoData from "@/app/shared/components/ui/NoData";

const NoDataGuide: React.FC = () => {

    return(
    <BasePage>
        <h3>Basic</h3>
        <NoData message="데이터가 없습니다" />

        <h3>Horizontal</h3>
        <NoData isVertical={false} isTriangleIcon={false} message="데이터가 없습니다" />
    </BasePage>)
}
export default NoDataGuide`} />
    </BasePage>)
}
export default NoDataGuide