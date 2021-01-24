import React from 'react'
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'src/routes/types';
import { Wrapper, EnterLink } from './styles';

interface IProps {
    
}

const Welcome = (props) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <EnterLink to={ROUTES.HOME}>
                {t('welcome.welcome_text', 'Welcome')}
            </EnterLink>
        </Wrapper>
    )
}

export default Welcome
