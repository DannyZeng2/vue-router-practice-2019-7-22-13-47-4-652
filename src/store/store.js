import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        items: [],
        status: "All",
        
    },
    getters:{
        getItems(state){
            return state.items
        },
        getStatus(state){
            return state.status
        },

    },
    mutations: {
        editItem(state,id) {
            state.items[id - 1].isEdit = true;
        },

        finishEdit(state,id) {
            state.items[id - 1].isEdit = false;
        },

        add(state,todoItem) {
            var id = state.items.length + 1;
            var newItems = { id: id, name:todoItem, active: false, isEdit: false };
            state.items.push(newItems);
            
            
        },
        sendStatus(state,flag) {
            state.status = flag;
            //state.$emit('func', state.status);
        }
    }
})