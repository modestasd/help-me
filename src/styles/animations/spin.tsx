import { Keyframes, keyframes } from "styled-components"

export const spin = ():Keyframes => {
    return (
        keyframes`
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        `
    )
};