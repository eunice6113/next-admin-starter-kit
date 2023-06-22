import * as commonCode from '../config/commonCode';
import { environment } from '../config/environment';
import { getHeaders } from './fileDownloadHeader';

const downloadFile = (condition:string) => {
  console.log('condition', condition)

  const url= environment.file.download;
  
  fetch(url,{
      method : 'POST',
      body: JSON.stringify(condition),
      headers: getHeaders()
  })
  .then((res) => {
    
    if(res.ok){
      return res.blob();
    }
    if(!res.ok){
      throw res
    }

  })
  .then((blob:any) =>{
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = condition.atchNm;
    document.body.appendChild(a);
    a.click();
    setTimeout((_) => {
        window.URL.revokeObjectURL(url);
    },60000);
    a.remove();

  }).catch((error) =>{

    error.text().then(msg =>  
      console.log('msg:',msg)
    )
   
  })

}

export default downloadFile;