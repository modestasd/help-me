import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

export const navigateWithHistory = () => {
    return browserHistory.push('/welcome');
}

export const useNavigation = () => {
    const history = useHistory();

    const navigate = (url: string, state?: unknown) => {
        history.push(url, state)
    };

    const navigateToHome = () => {
        navigate('/');
    };
    
    return {
        navigate,
        navigateToHome,
        history
    };
};