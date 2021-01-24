import { useHistory } from 'react-router-dom';

export const useNavigation = () => {
    const history = useHistory();

    const navigate = (url: string, state?: unknown) => {
        history.push(url, state)
    };

    const goBack = () => {
        history.goBack();
    };

    const navigateToHome = () => {
        navigate('/');
    };
    
    return {
        navigate,
        navigateToHome,
        goBack,
        history
    };
};