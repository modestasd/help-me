import { css } from "styled-components";

export enum DeviceType {
    PHONE= 'PHONE',
    TABLET_VERT= 'TABLET_VERT',
    TABLET_HORIZ= 'TABLET_HORIZ',
    BIG_DESKTOP= 'BIG_DESKTOP',
};


//not finished
export const responsive = (device: DeviceType, style: string) => {
    let mixin;
    switch (device) {
        case DeviceType.PHONE: //600px
            mixin = css`@media only screen and (max-width: 37.5rem) { 
                ${style} 
            }`;
            break;
        case DeviceType.TABLET_VERT: //900px
            mixin = css`@media only screen and (max-width: 56.25rem) { 
                ${style} 
            }`;       
            break;
        case DeviceType.TABLET_HORIZ: //1200px
            mixin = css`@media only screen and (max-width: 75rem) { 
                ${style} 
            }`;
            break;
        case DeviceType.BIG_DESKTOP: //1800px
            mixin = css`@media only screen and (min-width: 112.5rem) { 
                ${style} 
            }`;            
            break;
        default:
            break;
    }
    return mixin;
};