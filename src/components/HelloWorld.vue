<template>
  <div class="hello">
    <Tree></Tree>
  </div>
</template>

<script>
import Tree from "./Tree";
import store from '@/store';

export default {
  name: 'HelloWorld',
  components: {Tree},
  props: {
    msg: String
  },
  data(){
    return{
      store
    }
  },
  methods:{
    buildTree(){
      store.state.tree.nextnodes.push(JSON.parse(JSON.stringify(store.state.tree)));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
