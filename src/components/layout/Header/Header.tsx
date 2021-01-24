import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import {SingleSelect} from 'src/components/common';
import { ROUTES } from 'src/routes/types';
import { Locales } from './constants';
import { NavItem, Wrapper } from './Header.styles';

interface IProps {
    
}
// const functions: Set<any> = new Set();

const Header:React.FC<IProps> = (props) => {
    const { i18n, t } = useTranslation();
    const changeLanguageHandler = useCallback((language: string)=> {
        i18n.changeLanguage(language);
    }, []);
    // functions.add(changeLanguageHandler);
    // console.log(functions.size)
    return (
        <Wrapper>
            {/* PERKELT I CONSTANTAS PAVADINIMUS */}
            <NavItem to={ROUTES.HOME}>{t('header.home_route', 'home')}</NavItem>
            <NavItem to={ROUTES.WELCOME}>welcome</NavItem>
            <NavItem to={ROUTES.OTIMIZATION}>OTIMIZATION</NavItem>
            <NavItem to={ROUTES.LOCALIZATION}>LOCALIZATION</NavItem>
            <NavItem to={ROUTES.EREORHANDLING}>ERROR HANDLING</NavItem>
            <NavItem to={ROUTES.ABOUTME}>{t('header.about_route', 'about')}</NavItem>
            <SingleSelect defaultSelected={Locales.English}>
                {Object.values(Locales).map(locale => 
                    <SingleSelect.Item 
                        value={locale}
                        onItemClick={()=>changeLanguageHandler(locale)}
                        key={locale}
                    >
                        {locale}
                    </SingleSelect.Item>
                )}
            </SingleSelect>
        </Wrapper>
    )
}

export default Header;
