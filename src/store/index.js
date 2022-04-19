import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        stateHeader: "Welcome from Movies list....",
        movies: [
            {
                id: '1',
                movie_name: 'Mone Swal'
            },
            {
                id: '2',
                movie_name: 'ME'
            },
            {
                id: '3',
                movie_name: 'Nga Duu'
            },
            {
                id: '4',
                movie_name: 'Mystery of Burma'
            },
            {
                id: '5',
                movie_name: 'Phoe Shate'
            },
            {
                id: '6',
                movie_name: 'Mudras calling'
            },
            {
                id: '7',
                movie_name: 'Deception'
            }
        ],
        novels: [
            {
                book_name: 'Smooth of Love',
                price: '2000',
                author: 'Su Myat Mon Mon',
                date: '1/8/2019'
            },
            {
                book_name: 'My serious love',
                price: '1500',
                author: 'Yar sa koe',
                date: ' '
            },
            {
                book_name: 'Smooth of Love',
                price: '2000',
                author: 'Su Myat Mon Mon',
                date: '1/8/2019'
            },
            {
                book_name: 'My serious love',
                price: '1500',
                author: 'Yar sa koe',
                date: ' '
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        moviesNames: (state) => {
            return state.movies;
        },
        novelsNames: (state) => {
            return state.novels;
        }
    }
})