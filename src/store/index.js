import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            cart: [],
        }
    },
    mutations: {
        addCart(state, payload){
            state.cart.push(payload);
        },
        deleteCart(state, payload){
            const isbn = payload.summary.isbn;
            const idx = state.cart.findIndex((item) => item.book.summary.isbn === isbn);
            state.cart.splice(idx, 1);
        },
        resetCart(state){
            state.cart = [];
        }
    },
    actions: {
    },
    modules: {
    }
})
