import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        counter: 0
    },

    getters: {
        /**
         * access counter in state from the paramater 
         */
        addCurrencyToCounter: function (state) {
            return `$ ${state.counter} (dollars)`;
        },

        incrementCounterByTen: function(state) {
            return state.counter + 10;
        }
    },

    mutations: {
        increase: function(state) {
            state.counter ++;
        },

        decrement: function(state) {
            state.counter++;
        },

        asyncIncrement: function(state, incrementalObject) {
            const { incrementalValue } = incrementalObject;
            state.counter += incrementalValue;
        }
    },

    actions: {
        /**
         * destruct the context, get the commit and call on the appropriate mutation
         */
        increase: function({ commit }) {
            commit('increase')
        },

        decrease: function({ commit }) {
            commit('decrement');
        },

        /**
         * demonstrate an async task
         */
        asyncIncrement: function({ commit }, incrementalObject) {
            setTimeout(function(){
                /**
                 * am done, kindly call appropriate mutation
                 */
                commit('asyncIncrement', incrementalObject)
            }, 3000);
        }
    }
});