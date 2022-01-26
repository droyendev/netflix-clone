import styled from 'styled-components';
import { IButton } from '../../interfaces/Button';

export const Container = styled.div`
    height: 85vh;
    background-size: cover;
    background-position: center;
`

export const ContainerVerticalSmoke = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #141414 10%, transparent 100%);
`

export const ContainerHorizontalSmoke = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #141414, transparent);
`

export const Header = styled.div`
    width: 100%;
    height: 4vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const HeaderButtons = styled.div`
    width: 95vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const WebsiteTitle = styled.h1`
    color: #E50914;
    text-transform: uppercase;
    font: 700 2.2vw 'Poppins',sans-serif;
    margin-right: 3vw;
    margin-left: 4.8vw;
`

export const MainMenuButton = styled.a<any>`
    font: 400 0.95vw 'Poppins',sans-serif;
    color: ${(props) => props.selected ? '#fff' : '#e3e3e3'};
    font-weight: ${(props) => props.selected ? 'bold' : 'none'};
    margin-right: 1.3vw;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`

export const User = styled.img`
    float: right;
    right: 0;
    max-width: 2.2vw;
    border-radius: 0.4vw;
`

export const InfosBox = styled.div`
    position: absolute;
    top: 11vw;
    left: 4.8vw;
    width: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const MovieTitle = styled.h1`
    width: auto;
    font: 700 4.1vw 'Poppins',sans-serif;
    margin-bottom: 0.5vw;
`

export const MovieAvaliation = styled.p`
    color: #46d369;
    font: 600 1.3vw 'Poppins',sans-serif;
    margin-right: 1.4vw;
`

export const Desc = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 1vw;
`

export const Paragraph = styled.p`
    font: 500 1.3vw 'Poppins',sans-serif;
    margin-right: 1.4vw;
`

export const MovieOverview = styled.p`
    font: 500 1.2vw 'Poppins',sans-serif;
    max-width: 40vw;
    color: rgba(255,255,255,0.5);
    margin-bottom: 1vw;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1vw;
`

export const Button = styled.button<IButton>`
    width: max-content;
    height: 3.2vw;
    padding: 0 1.8vw;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: none;
    background: ${(props) => props.types === 'Primary' ? '#fff'
        : props.types === 'Secundary' ? 'rgba(255,255,255,0.25)' : 'none'};
    font: 600 1.1vw 'Poppins',sans-serif;
    color: ${(props) => props.types === 'Primary' ? 'black' 
        : props.types === 'Secundary' ? '#fff' : 'none'};
    margin-right: 0.7vw;

    &:hover {
        background: ${(props) => props.types === 'Primary' ? 'rgba(255,255,255,0.75)'
        : props.types === 'Secundary' ? 'rgba(255,255,255,0.1)' : 'none'};;
    }

    transition: .2s ease;
`

export const Icon = styled.img`
    width: 1.6vw;
    margin-right: 0.5vw;
`