import {DefaultTheme} from "styled-components";
import {colors} from "../colors";
import {typography} from '../typography';

const lightTheme: DefaultTheme = {
    colors: {
        ...colors,
        primary: '#e6f704'
    },
    typography: {
        ...typography
    }
};

export default lightTheme;

