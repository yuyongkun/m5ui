import './styles/base.less';
import Alert from './Alert'
const components = {
    Alert
};
let test = {};
test.install = Vue => {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}
export default { ...components, ...test };