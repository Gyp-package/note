### 1. 本地仓库推送到远程步骤：

1. 初始化仓库

`git init`



2. 连接本地仓库与远程仓库

`git remote add <命名远程仓库>  <远程仓库地址连接.git>` 

查看两者连接 

`git remote -v`



3. 将本地仓库的默认分支更改为  main

`git branch -M main`



3.1 本地创建并切换到main分支

`git checkout -b main`



4. ### 本地仓库推送到缓存区

4.1  推送全部改正内容到缓存区          

   `git add .`

4.2  推送特定名为  special  的内容        `git add special`

4.3 查看缓冲区文件           git diff --name-only --cached



5. 缓存区内容推送到远程仓库**【如果远程仓库有更改内容，先做见6】**

`git push --set-upstream <远程仓库名> main`

   5.1 如果远程同样有人提交出现冲突解决：

从远程仓库获取最新代码， 

有助于将本地与远程变更合并为一个

```js
git fetch <仓库名> main
```

合并分支

```
git merge <仓库名>/main
```

解决完成，可以执行

```js
git add 矛盾文件.txt
```

### **提交修改**,

```
git commit -m "解决的矛盾"
```

### 推送修改到远程仓库

```js
git push <仓库名> main
```



6. ### 拉取远程更新

git pull <命名远程仓库> main



:q  结束





2. ### 远程库拉取到本地

`git pull <远程库名称> main`



查看拉取分支

`git status`



查看新增内容

`cat <文件名称>`



### 3.克隆到本地

1. 在本地文件夹下

`git clone <需要的 .git 链接>`





























