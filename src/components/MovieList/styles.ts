import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 2vw;
`

export const Title = styled.h1`
    margin: 0 0 0.5vw 4.4vw;
    font: 500 1.4vw 'Poppins',Roboto;
    color: #e0e0e0;

    &:hover {
        color: #fff;
        cursor: pointer;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

export const MovieImage = styled.img`
    width: 11vw;
    transform: scale(0.91);
    transition: .2s;

    &:first-child {
        margin-left: 4.5vw;
    }

    &:hover {
        transform: scale(1);
        opacity: 0.9;
    }
`