const path = require('path')
let fsExtra = require('fs-extra')
const escapeRegExp =require('lodash/escapeRegExp')
const getRootDir = () => {
    // const reqSep = /\//g
    // const sysSep = escapeRegExp(path.sep)
    // const normalize = string => string.replace(reqSep, sysSep)
    // console.log(sysSep)
    // 获取文件所在的当前目录
    const isPath=path.resolve('.')

    // 分割目录为数组 path.sep 是获取当前系统的路径分隔符,因为 windows \\ 和 mac / 的路径分隔符不一样
    const pathArr=isPath.split(path.sep)

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
