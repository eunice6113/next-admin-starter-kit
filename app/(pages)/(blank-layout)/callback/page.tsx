import * as React from 'react';
import { useLoginMutation } from '@/redux/services/base/auth.service';
import { getEmpId, setEmpId, setToken, setUserInfo } from '@/redux/services/base/base-api.service';
import useBasePage from '@/app/shared/hooks/base-page.hook';

const Callback:React.FC = () => {

    const { goPage } = useBasePage()
    const [login] = useLoginMutation()

    const params = new URLSearchParams(window.location.search)
    let id = params.get('empid')

    React.useEffect(() => {

        setEmpId(id)
        console.log('getEmpId', getEmpId())

        console.log('Callback params.empid =>', id)
        signin()

    }, [])

    const signin = () => {
        login({}).unwrap()
        .then(( response:any ) => {
            if(response) {
                console.log('Callback login =>', response)

                //token 정보 저장
                // dispatch(tokenReceived(response.isncTknInfoCon))
                setToken(response.isncTknInfoCon)

                //user 정보 저장
                // dispatch(setUser(response.user))
                setUserInfo(JSON.stringify(response))

                ///main 
                goPage('/man')
            }
        }).catch((error) => console.error('rejected', error))
    }

    return(
    <>
        <h1>Callback !!</h1>

    </>)
}
export default Callback;