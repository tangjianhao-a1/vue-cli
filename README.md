## vue/cli版本的区别    
vue/cli2基于webpack3版本搭建，可在配置文件里进行相关配置，webpack可视化   

 vue/cli3以后版本实行0配置，隐藏了webpack相关配置文件，增加vue ui指令搭建本地服务器进行项目可视化   

 template =>抽象语法树ast =>render函数=>虚拟dom=>真实dom 组件dom渲染可用render函数简写，节省内存，提高效率 


 这是创建vue/cli2时给出的两个选项runtime-compiler和runtime-only的区别，脚手架推荐大部分用户选择前者，但其实选择runtime-only更好用   
