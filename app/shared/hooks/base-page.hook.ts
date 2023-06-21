// import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BasePage } from '../components/base/BasePage';
import * as commonCode from '../config/commonCode';
import * as commonMsg from '../config/commonMsg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useBasePage = ( sortBy?:string ) => {

    //페이지 공통 기능
    // const navigate = useNavigate();

    // https://nextjs.org/docs/app/api-reference/functions/use-search-params
    const params = useSearchParams();
    const router = useRouter()

    // https://nextjs.org/docs/app/api-reference/functions/use-pathname
    const location = usePathname();
    const curLocation = location.split('/')
    const isRegister:boolean = curLocation[2] === 'register'

    // URL -> `/dashboard?id=my-project`
    // `id` -> 'my-project'
    const paramId = params.get('id')

    const CODE = commonCode;
    

    //url 라우터로 이동
    const goPage = ( url:string ) => {
        router.push(url)

        // router.push(url, as, options)
//          url: [필수] 라우팅 하려는 url
//          as: [선택] 브라우저 url 바에 보여지는 path
//          options: [선택] ]scroll(라우팅 후 스크롤업), shallow, locale 등의 옵션이 있습니다.
    } 

    const goPageWithData = ( url:string, data:object ) => {
        // navigate(url, { state: data });
    } 
     
    //뒤로 가기
    const goBack = () => {
        router.back()
    }

    return {
        //basePage
        // queryParam, 
        params,
        paramId, 
        isRegister, 
        location, 
        curLocation,
        commonCode,
        commonMsg,
        CODE,

        goPage, 
        goBack,
        goPageWithData,

        //공통 페이지 UI Component
        BasePage,
    }
}
export default useBasePage;