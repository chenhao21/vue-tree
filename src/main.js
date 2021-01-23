import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app')

//app.config.warnHandler = () => null;
Array.prototype.findone = function(val) {
    for (var i = 0; i < this.length; i++) {
//        if (this[i].id == val.id) return i;
        if (this[i] === val) return i;
    }
    return -1;
};
Array.prototype.findremove = function(val) {
    var index = this.findone(val);
    if (index > -1) {
        this.splice(index, 1);
        return true;
    }
    return false;
};