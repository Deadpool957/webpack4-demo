import './index.scss'
import '../../assets/css/common.css'
var a = 1;
console.log(a,'打印参数', process.env.NODE_ENV);
const root = process.env.NODE_ENV;
console.log(process.env.BASE_URL,'当前api环境');
if(root=='development'){
    console.log("我是开发环境")
}
