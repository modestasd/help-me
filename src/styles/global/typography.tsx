import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: ${({theme})=> theme.typography.h1.fontSize};
`;

export const H2 = styled.h2`
    font-size: ${({theme})=> theme.typography.h2.fontSize};
`;

export const H3 = styled.h3`
    font-size: ${({theme})=> theme.typography.h3.fontSize};
`;

export const H4 = styled.h4`
    font-size: ${({theme})=> theme.typography.h4.fontSize};
`;

export const H5 = styled.h5`
    font-size: ${({theme})=> theme.typography.h5.fontSize};
`;

export const Text = styled.p`
    font-size: ${({theme})=> theme.typography.p.fontSize};
`;