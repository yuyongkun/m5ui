import _ from 'lodash';
import './style.css';
import Icon from './1.jpg';
import Data from './data.json';
console.log(Data);
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon=new Image();
    myIcon.src='./'+Icon;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());