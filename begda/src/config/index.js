const path = require('path')
let fsExtra = require('fs-extra')
const getRootDir = () => {
    // 获取文件所在的当前目录
    const isPath=path.resolve('.')

    // 分割目录为数组
    const pathArr=isPath.split('/')

    // 递减目录数组
    for (let a=pathArr.length-1 ; a>=0;a--){

        let c=[]
        for(let i=0; i<=a; i++){
            c.push(pathArr[i])
        }
        let file=c.join("/")+'/begda.config.js'

        if(fsExtra.pathExistsSync(file)){

            return c.join("/")
        }
    }
}
const rootDir = getRootDir()
if(!rootDir){
    throw new Error(`没有找到begda.config.js 请在项目根目录创建`)
}

module.exports={
    rootDir
}
