import {DefaultTheme} from "styled-components";
import {colors} from "../colors";
import {typography} from '../typography';

const darkTheme: DefaultTheme = {
    colors: {
        ...colors,
        background: '#222222',
        secondary: '#1e2652',
        font: '#e2e2e2'
    },
    typography: {
        ...typography
    }
};

export default darkTheme;

