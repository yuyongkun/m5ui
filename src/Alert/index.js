import '../styles/components/alert.less';
import Alert from './Alert'
Alert.install = Vue => {
	console.log('[Alert]',Alert);
	Vue.component(Alert.name, Alert);
}
export default Alert;