import React, {useContext} from 'react';
import { DaoServiceContext } from '../../contexts/Store';

export const Web3SignIn = ({ history }) => {
    const [daoService] = useContext(DaoServiceContext);
    return (
        <button
            onClick={async () => {
                localStorage.setItem('loginType', 'web3');
                history.push('/dao/'+daoService.daoAddress.toLowerCase()+'/proposals');
                window.location.reload();
            }}
        >
            Sign In With Web3
    </button>
    );
};