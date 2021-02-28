import { Keyframes, keyframes } from "styled-components"

export enum MoveDirection {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
};

export interface IMoveParams {
    direction: MoveDirection;
    pixels: string,
    addidtionalStyles?: string;
};

export const move = (from: IMoveParams, to:IMoveParams):Keyframes => {
    return (
        keyframes`
            from {${from.direction}: ${from.pixels}; ${from.addidtionalStyles};}
            to {${to.direction}: ${to.pixels}; ${to.addidtionalStyles}''}}
        `
    )
};