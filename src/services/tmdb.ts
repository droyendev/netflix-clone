const API_KEY = 'https://developers.themoviedb.org/3/getting-started/introduction';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint:string) => {
    console.log(API_KEY);
    
    const req = await fetch(`${API_BASE}${endpoint}language=pt-BR&api_key=${API_KEY}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return [
            {
                slug: "originals",
                title: 'Originais do Site',
                items: await basicFetch(`/discover/tv?with_network=213&`),
            }, 
            {
                slug: "trending",
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?`),
            }, 
            {
                slug: "toprated",
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?`),
            }, 
            {
                slug: "action",
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&`),
            }, 
            {
                slug: "comedy",
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&`),
            }, 
            {
                slug: "horror",
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&`),
            }, 
            {
                slug: "romance",
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&`),
            }, 
            {
                slug: "documentary",
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&`),
            }, 
        ]
    },

    getMovieInfo: async (movieId:number, type:string) => {
        let info = {};
        if(movieId){
            switch (type) {
                case 'movie':
                    info = basicFetch(`/movie/${movieId}?`);
                break;
                case 'tv':
                    info = basicFetch(`/tv/${movieId}?`);
                break;
            }
        }
        return info;
    }
}