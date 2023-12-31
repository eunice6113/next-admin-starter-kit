import * as React from "react";
import { PanelMenu } from 'primereact/panelmenu';
import { usePathname } from 'next/navigation';
import './lnb.css';

interface IProps {
    open: boolean;
}

const LNB: React.FC<IProps> = ({open}) => {

    const pathName = usePathname();

    const getClsName = ( url:string ) => url === pathName ? 'selected' : '';

    const items = [
        {
            label:'SSR Post',
            visible: true,
            expanded: true,
            items:[
                {
                    label:'Post List',
                    url: '/ssr-post/list',
                    className: getClsName('/ssr-post/list')
                },
                {
                    label:'Post Detail',
                    url: '/ssr-post/detail/1',
                    className: getClsName('/ssr-post/detail')
                },
            ]
        },
        {
            label:'CSR Board',
            visible: true,
            expanded: true,
            items:[
                {
                    label:'Board List',
                    url: '/board/list',
                    className: getClsName('/board/list')
                },
                {
                    label:'Board Detail',
                    url: '/board/detail/1',
                    className: getClsName('/board/detail')
                },
                {
                    label:'Board Register',
                    url: '/board/register',
                    className: getClsName('/board/register')
                },
            ]
        },
        {
            label:'UI',
            visible: true,
            expanded: true,
            items:[
                {
                    label:'Layout Guide',
                    url: '/ui/layout',
                    className: getClsName('/ui/layout')
                },
                {
                    label:'Button',
                    url: '/ui/button',
                    className: getClsName('/ui/button')
                },
                {
                    label:'Input',
                    url: '/ui/input',
                    className: getClsName('/ui/input')
                },
                {
                    label:'Select',
                    url: '/ui/select',
                    className: getClsName('/ui/select')
                },
                {
                    label:'Radio',
                    url: '/ui/radio',
                    className: getClsName('/ui/radio')
                },
                {
                    label:'Checkbox',
                    url: '/ui/check',
                    className: getClsName('/ui/check')
                },
                {
                    label:'DatePicker',
                    url: '/ui/datepicker',
                    className: getClsName('/ui/datepicker')
                },
                {
                    label:'Popup',
                    url: '/ui/popup',
                    className: getClsName('/ui/popup')
                },
                {
                    label:'Table List',
                    url: '/ui/table-list',
                    className: getClsName('/ui/table-list')
                },
                {
                    label:'Table View',
                    url: '/ui/table-view/0',
                    className: getClsName('/ui/table-view')
                },
                {
                    label:'No Data',
                    url: '/ui/nodata',
                    className: getClsName('/ui/nodata')
                },
                {
                    label:'Excel Import/Export',
                    url: '/ui/excel',
                    className: getClsName('/ui/excel')
                },
                {
                    label:'Chart',
                    url: '/ui/chart',
                    className: getClsName('/ui/chart')
                },
                {
                    label:'Upload',
                    url: '/ui/upload',
                    className: getClsName('/ui/upload')
                },
            ]
        }
    ];

    return <PanelMenu className={`cldLnb navi ${open ? 'open':'close'}`} model={items} multiple />
}
export default LNB;