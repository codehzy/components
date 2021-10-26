// 总入口
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

// 这几个组件一起打包
const plugins = [
    Button,
    Icon,
    ButtonGroup
]
// 将每个插件注册
const install = (app) => {
    plugins.forEach(plugin => app.use(plugin))
}

export default {
    install
}