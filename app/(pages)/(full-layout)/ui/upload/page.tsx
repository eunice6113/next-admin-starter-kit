"use client";

import * as React from 'react';
import { BasePage } from '@/app/shared/components/base/BasePage';
import CldFileUpload from '@/app/shared/components/CldFileUpload';
import ClipboardCopy from '@/app/shared/components/clipboard-copy/ClipboardCopy';

const UploadGuide: React.FC = () => {

    return(
    <BasePage>
        <div className='previewBox'>
            <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />
        </div>
        <ClipboardCopy rows={20} copyText={`
import * as React from 'react';
import { BasePage } from '@/app/shared/components/base/BasePage';
import CldFileUpload from '@/app/shared/components/CldFileUpload';

const UploadGuide: React.FC = () => {

    return(
    <BasePage>
        <div className='previewBox'>
            <CldFileUpload name='files' url={''} onUpload={() => {}} multiple accept='image/*' maxFileSize={5000000} maxFileCnt={5} acceptFileType='png,jpg' />
        </div>
    </BasePage>)
}
export default UploadGuide
        `} />
    </BasePage>)
}
export default UploadGuide