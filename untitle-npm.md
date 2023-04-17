出现问题解决
1.安装node-modules 
 Cannot read properties of null (reading ‘pickAlgorithm‘)下载报错

 >原因分析，该项目编译时采用的node版本比现在你使用的版本出现差异，你的版本编译不了

 >1.1  重新安装node解决

 >1.2 删了node models重新下
        或者直接下载CNPM（淘宝镜像）进行安装 CNPM安装办法
        npm install -g cnpm -registry=https://registry.npm.taobao.org
        查看cnpm是否真安装成功 cnpm -v 

 >1.3 清除缓存npm cache clear --force之后再重新安装依赖npm install(测试有效加1)

 >究极解决方案，找到package-lock.json文件。将图中圈红的内容保留，其余的全部删除，然后npm install重新编译，package-lock.json会生成一份新的文件。最后编译成功。得以解决。
<img src="./npm关联图1"></img>