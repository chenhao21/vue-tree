<template>
<li>
  <div class="node">
    {{state.node.id}}
    <input v-model="state.node.msg"/>
    <button @click="add(state.node)">add</button>
    <button @click="del(state.node)">del</button>
  </div>
  <ul>
    <li>
      <slot :node="node"></slot>
    </li>
  </ul>
</li>
</template>

<script>
import {onMounted, reactive} from 'vue';
import store from '@/store';

export default {
  name: 'Node',
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  setup(props){
    console.log('node setup');
    const state = reactive({
      node: props.node,
    })
    onMounted(()=>{
      console.log('node onMounted');
    })
    function add(node){
      let sub_node = JSON.parse(JSON.stringify(node));
      sub_node.id = node.id + "-" + (node.nextnodes.length+1);
      sub_node.nextnodes = [];  
      node.nextnodes.push(sub_node);
    }
    function del(node){
      findAndRemoveNode(store.state.tree,node);
      console.log(store.state.tree.nextnodes);
    }
    return{
      state,
      add,
      del
    }
  }
}
function findAndRemoveNode(root, target){
  if(!root.nextnodes.findremove(target)){
    for(let i=0; i<root.nextnodes.length; i++){
      if(findAndRemoveNode(root.nextnodes[i], target))
        return true;
    }
  }else{
    console.log(`removed node:` + target.id);
    return true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.node{
  background-color: #e6e4e4;
  text-align:left;
  &:hover{    
    background-color: #c0bdbd;
  }
}
li{
  margin: .2em;
}
</style>
