import './styles/base.less';
import Alert from './Alert'
const components = {
    Alert
};
let test = {};
components.install = Vue => {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}
export default { ...components, ...test };