import '../styles/components/alert.less';
import Alert from './Alert'
Alert.install = Vue => {
	Vue.component(Alert.name, Alert);
}
export default Alert;