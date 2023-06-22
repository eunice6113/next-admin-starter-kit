"use client"

import * as React from 'react';

import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';

import { BasePage } from '@/app/shared/components/base/BasePage';
import ClipboardCopy from '@/app/shared/components/clipboard-copy/ClipboardCopy';
import useBasePage from '@/app/shared/hooks/base-page.hook';
import { Column } from 'primereact/column';
import { noticeDummyData } from '@/app/shared/demo/data/noticeDummyData';
import { paginator } from '@/app/shared/utils/table-paginator';
import { SearchParams } from '@/app/redux/models/search-params';

const TableListGuide: React.FC = () => {

    const { goPage, goBack } = useBasePage()

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });

    //table
    const [data, setData] = React.useState([]);
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    //select option dummy data
    const options1 = [
        { name: '전체', code: 'NY' },
        { name: '제목', code: 'RM' },
        { name: '내용', code: 'LDN' },
        { name: '등록자', code: 'IST' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '공지사항', code: 'RM' },
        { name: '웹툰', code: 'LDN' },
        { name: '소식지', code: 'IST' },
        { name: '기타', code: 'PRS' }
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    
    //table page length
    let pages = 50;
    
    //신규 등록 버튼
    const register = (event:any) => {
        // goPage(`/board/register`);
    }

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/ui/table-view/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'type',
            header: '유형',
            sortable: false,
        },
        {
            field: 'subject',
            header: '제목',
            sortable: false,
        },
        {
            field: 'attach',
            header: '첨부파일',
            sortable: false,
        },
        {
            field: 'author',
            header: '등록자',
            sortable: false,
        },
        {
            field: 'hit',
            header: '조회수',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일',
            sortable: false,
        },
    ]

    return(
    <BasePage>
        <div className='previewBox'>
            <h3>List</h3>
        
            <div className='searchBar'>
                <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                    optionLabel='name' placeholder='전체' />
                <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
                    optionLabel='name' placeholder='전체' />

                <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

                <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                <span className='mt5'>~</span>
                <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
                <Button label='조회' />
            </div>

            <div className='toolbar mb10'>
                <p>총 <span className='pageNm'>{pages}</span>개</p>
                <Button className='ml-auto outline' label='신규등록' icon='pi pi-pencil' onClick={register} />
            </div>

            <DataTable value={noticeDummyData} paginator paginatorTemplate={paginator} 
                className="ntc"
                onRowClick={(e) => goDetail(e)}
                first={first} rows={rows} 
                onPage={onCustomPage} responsiveLayout='scroll'>
                {headerTemplate.map((col, index) => (
                    <Column key={col.header} field={col.field} header={col.header} ></Column>
                ))}
            </DataTable>
        </div>

        <h2 className='mb10'>Source</h2>
        <TabView>
            <TabPanel header='TableListGuide.tsx'>
                
                <ClipboardCopy showTitle={false} rows={295} copyText={`
                
                `} />

            </TabPanel>
            <TabPanel header='ViewTemplate.tsx'>

                <ClipboardCopy showTitle={false} rows={295} copyText={`
                
                `} />

            </TabPanel>
            <TabPanel header='ViewButtonsTemplate.tsx'>

                <ClipboardCopy showTitle={false} rows={295} copyText={`
                
                `} />

            </TabPanel>
        </TabView>
    </BasePage>)
}
export default TableListGuide;