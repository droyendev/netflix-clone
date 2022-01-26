import { useEffect, useState } from 'react';
import { MovieList } from './components/MovieList';
import { FeaturedMovie } from './components/FeaturedMovie/index';
import tmdb from './services/tmdb';

export function App() {
    const [ movieList, setMovieList ] = useState<Array<any>>([]);
    const [ featuredData, setfeaturedData ] = useState({} as any);

    useEffect(() => {
        const loadAll = async () => {
            let list = await tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i => i.slug === 'originals');
            let randomChoose = Math.floor(Math.random() * originals[0].items.results.length - 1);

            let choosed = originals[0].items.results[randomChoose];
            let choosedInfos = await tmdb.getMovieInfo(choosed.id,'tv');

            setfeaturedData(choosedInfos);
        }

        loadAll();

    },[])

    return (
        <div>
            
            {Object.keys(featuredData).length > 1 &&
                <FeaturedMovie items={featuredData}/> 
            }

            {movieList.map((item,key) => {
                return(
                    <MovieList key={key} title={item.title} items={item.items} />
                )
            })}

            <h3>Feito por Gabriel Chaves de Lima Coelho</h3>
            <h4>Creditos de design ao Netflix</h4>
        </div>
    );
}
