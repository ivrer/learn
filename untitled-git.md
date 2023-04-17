<h1>gitbash/cmd</h1>
$ git config --global user.email "zhangxiaoxingZX@outlook.com :
$ git config --global user.name "zhangxiaoxing" : 
$ git add file/files/--all  将文件移至暂存区（all前没有空格
$ git reset HEAD -- file/files /\.文件撤回（--后有空格
$ git statue  :查看工作区和暂存区
$ git commit -m "name" :保存为历史版本
$ git log :查看历史版本
$ git reset --hard id ：回滚到该历史版本
$ git rebase -i id :删除历史版本
$ git remote add origin https://github.com/ivrer/first-repository.git  设置上传地址
$ git push -u origin master    上传历史版本（-u表示上传本次的那个地址的分支，不写表示和上次一样），（master（分支））

<h2>分支操作</h2>
>git branch 分支名称:创建分支（有独立的工作，暂存和历史区
>git checkout 分支名称：切换分支
>git marge 分支名称：要合并的分支，添加到当前分支上
>git branch -d 分支：要删除的名称
>git branch -D 分支：强制删除
>git push origin 分支：上传分支
>git push origin 分支 --delete ：删除远程上传的分支

创立  gh-pages分支，用github服务器打开项目文件

hub中拉去自己的代码
>直接下载
>$ git clone repository of address ：克隆一个这个仓库到你的文件中（并保存这个上传地址
>$ git pull :对于已经克隆的文件 ，需要再次拉取更新时，有这个来自动补充完毕不用再次克隆

hub拉取别人代码
>与自己克隆相同

历史回滚的问题解决
>因为有回滚所以github上传会存在失败的情况，要明确文件间的关系，即需要重新拉取github文件git pull然后再和现在文件形成历史版本再上传

git上需要的三个文件和插件
>.gitkeep,放置在空文件夹中用来上传时保持目录结构不会被git忽略
>.gitignore ,放置在.git当前目录下，里面书写需要忽视的文件比如node_modules等不必要上传的文件的文件名
>readme.md，说明内容文件
>octotree,github网站方面查询插件

<h2>attention</h2>

>git的命令语句咋文件目录下不是在.git下
>

<h2>issue</h2>

>git的添加命令在cmd中不起作用=---a-1
>历史删除语句没成功