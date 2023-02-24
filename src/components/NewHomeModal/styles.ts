import *as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlaay = styled(Dialog.Overlay)`
    position:fixed ;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color:rgba(0,0,0,0.75) ;
`
export const Content = styled(Dialog.Content)`
    min-width:32rem ;
    border-radius:6px ;
    padding:2.5rem ;
    background: ${props => props.theme['gray-900']};
    
    position:fixed ;
    top:50% ;
    left:50%;
    transform:translate(-50%, -50%); ;
`
export const TextContent = styled.p`
    color:white ;
`
export const CloseButton = styled(Dialog.Close)`
    position:absolute ;
    background:transparent;
    border:0;
    top:1.5em ;
    right:1.5em ;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme['white']};
`


