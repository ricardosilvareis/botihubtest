import styled from "styled-components";

export const HomeContainer = styled.main`
    width:100%;
    max-width:1120px;
    margin:4rem auto 0;
    padding: 0 1.5rem ;
  
  ;
`
export const HomeTable = styled.table`
    width: 100%;
    border-collapse:separate ;
    border-spacing:0 0.5rem ;

td{
    padding: 1.25rem 2rem ;
    background:${props => props.theme['gray-600']} ;
    color:${props => props.theme['white']};
    width:700px ;
   
    &:first-child{
        border-top-left-radius:6px;
        border-bottom-left-radius:6px;
    }

    &:last-child{
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
    }
}
`
export const HomeButton = styled.button`
    height: 80px;
    width:200px ;
    border:0;
    background:${props => props.theme['green']};
    color:${props => props.theme['white']};
    font-weight:bold;
    padding:0 1.25rem ;
    border-radius:6px ;
    cursor:pointer;
    margin-left:30px ;

    &:hover{
        background:${props => props.theme['gray-600']};
        transition:backgroud-color 0.5s ;
    }   
`