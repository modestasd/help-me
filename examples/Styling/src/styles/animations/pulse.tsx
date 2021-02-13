import { rgba } from "polished"
import { Keyframes, keyframes } from "styled-components"

export const pulse = (color: string):Keyframes => {
    return (
        keyframes`
            0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 ${rgba(color, 0.7)};
            }
            70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px ${rgba(color, 0)};
            }
            100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 ${rgba(color, 0)};
            }
        `
    )
};