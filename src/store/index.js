import { createStore } from 'vuex';

export default createStore({
    state:{
        tree: {
            msg: "this is root.",
            nextnodes: [{
                id:"1",
                msg: "node 1",
                nextnodes: []
            },{
                id:"2",
                msg: "node 2",
                nextnodes: []
            },{
                id:"3",
                msg: "node 3",
                nextnodes: []
            },{
                id:"4",
                msg: "node 4",
                nextnodes: []
            },{
                id:"5",
                msg: "node 5",
                nextnodes: []
            },{
                id:"6",
                msg: "node 6",
                nextnodes: []
            },{
                id:"7",
                msg: "node 7",
                nextnodes: []
            }]
        }
    },
    mutations: {},
    actions: {},
    modules: {
    }
});