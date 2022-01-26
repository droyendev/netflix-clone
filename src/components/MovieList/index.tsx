
import {
    Container,
    Title,
    List,
    MovieImage
} from './styles'

type MovieListProps = {
    key: number;
    title: string;
    items: any;
}

export function MovieList(props : MovieListProps) {


    return(
        <Container>
            <Title>{props.title}</Title>
            <List>
                {props.items.results.length > 0 && props.items.results.map((item: any) => (
                    <MovieImage onClick={() => {    }} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                ))}
            </List>
        </Container>
    );
}