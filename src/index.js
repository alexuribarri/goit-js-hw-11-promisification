import './styles.css';

import * as one from './js/1';
import * as two from './js/2';
import * as three from './js/3';

const button1 = document.querySelector('#workOne');
const button2 = document.querySelector('#workTwo');
const button3 = document.querySelector('#workThree');

button1.addEventListener('click', one.importWorkOne);
button2.addEventListener('click', two.importWorkTwo);
button3.addEventListener('click', three.importWorkThree);
