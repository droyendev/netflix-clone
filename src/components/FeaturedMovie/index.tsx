import {
    Container,
    ContainerVerticalSmoke,
    ContainerHorizontalSmoke,

    Header,
    HeaderButtons,
    WebsiteTitle,
    MainMenuButton,
    User,

    InfosBox,
    MovieTitle,
    Desc,
    MovieAvaliation,
    Paragraph,
    MovieOverview,

    ButtonsContainer,
    Button,
    Icon
} from './styles';

type FeaturedMovieProps = {
    items: object | any;
};

import userIcon from '../../assets/char.jpg';
import playIcon from '../../assets/play.svg';
import infoIcon from '../../assets/info.svg';

export function FeaturedMovie(props: FeaturedMovieProps) {

    let inaugurationDate = new Date(props.items.first_air_date);
    let genres = [];
    for(let i in props.items.genres){
        genres.push( props.items.genres[i].name );
    }

    return (
        <Container style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.items.backdrop_path})`
        }}>
            <ContainerVerticalSmoke>
                <ContainerHorizontalSmoke>
                    <Header>
                        <HeaderButtons>
                            <WebsiteTitle>Movies</WebsiteTitle>
                            <MainMenuButton selected>Inicio</MainMenuButton>
                            <MainMenuButton>Idioma e legendas</MainMenuButton>
                            <MainMenuButton>Series</MainMenuButton>
                            <MainMenuButton>Filmes</MainMenuButton>
                            <MainMenuButton>Bombando</MainMenuButton>
                            <MainMenuButton>Minha Lista</MainMenuButton>
                        </HeaderButtons>
                        <User src={userIcon} alt="User Icon"/>
                    </Header>
                    <InfosBox>
                        <MovieTitle>{props.items.original_name}</MovieTitle>
                        <Desc>
                            <MovieAvaliation>{props.items.vote_average} Pontos</MovieAvaliation>
                            <Paragraph>{inaugurationDate.getFullYear()}</Paragraph>
                            <Paragraph>{
                                props.items.number_of_seasons > 1 ? props.items.number_of_seasons+' Temporadas' 
                                : props.items.number_of_seasons+' Temporada'
                            }
                            </Paragraph>
                        </Desc>
                        <MovieOverview>{props.items.overview}</MovieOverview>
                        <ButtonsContainer>
                            <Button types='Primary'><Icon src={playIcon}/>Assistir</Button>
                            <Button types='Secundary'><Icon style={{width: '2vw'}} src={infoIcon}/>Mais Informações</Button>
                        </ButtonsContainer>
                        <Paragraph style={{font: '400 1vw "Poppins"',color: '#e3e3e3'}}>Gêneros: {genres.join(', ')}</Paragraph>
                    </InfosBox>
                </ContainerHorizontalSmoke>
            </ContainerVerticalSmoke>
                {/* {props.items.original_name} */}
        </Container>
    )
}