const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '6f42ec5ebc2f1e9025fd66f1539e0537';


export default {
    getHomeList: async () =>  {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            }
        ]
    }
}