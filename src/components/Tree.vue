<script>
import Node from "./Node";
import {reactive, h} from 'vue';
import store from '@/store';

export default {
  name: 'Tree',
  components: {Node},
  data(){
    return reactive({
      tree: store.state.tree
    });
  },
  render(){
    console.log('render');
    let tree = this.tree;
  
    let renderChildNodes = (node)=>{      
      let vnodes = [];
      node.nextnodes.forEach(node => {
        vnodes.push(renderChildNodes(node));
      });
      let vnode = h(Node,{node: node}, 
        {
          default: ()=>{
            return vnodes;
          }
        }
      );
      return vnode;
    };
    return h('ul', null, renderChildNodes(tree));
  }  
}
</script>