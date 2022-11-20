# Bing Auto Search

## 部署

### 本机 部署

```bash
# 获取脚本
git clone https://github.com/emtry/Bing-Auto-Search.git

cd Bing-Auto-Search

# 安装依赖
npm install axios https-proxy-agent --save

# 运行
BingAutoSearch_MicroSoft_COOKIE="填入获取的Cookie" \
  node Bing-Auto-Search.js
```

### 青龙 部署

1. `依赖管理`——`新建依赖`——nodejs

```bash
axios
https-proxy-agent
```

2. `定时任务`——`新建任务`

```bash
# 命令
ql raw https://raw.githubusercontent.com/emtry/Bing-Auto-Search/main/Bing-Auto-Search.js

# 定时规则
0 0 15 * * *
```

3. `环境变量`–`新建变量`

```bash
# 名称
BingAutoSearch_MicroSoft_COOKIE

# 值
填入获取的Cookie
```

4. 运行新建的任务获取脚本`raw_main_Bing-Auto-Search.js`，并设置每天下午5点自动执行脚本
```bash
# 定时规则
0 0 17 * * *
```


### docker 部署

```bash
# 获取脚本
git clone https://github.com/emtry/Bing-Auto-Search.git

cd Bing-Auto-Search

# 构建镜像
docker build -t bing-auto-search:v2 .

# 创建容器
docker create --name=Bing-Auto-Search \
  -e BingAutoSearch_MicroSoft_COOKIE="填入获取的Cookie" \
  bing-auto-search:v2

# 运行
docker start -a Bing-Auto-Search
```

### Tampermonkey 部署（暂停维护）

[安装](https://github.com/emtry/Bing-Auto-Search/raw/main/Bing%20Auto%20Search.user.js)

work in https://rewards.bing.com/pointsbreakdown


## 配置说明

### 获取Cookie

推荐：浏览器隐身模式

先登录 http://www.bing.com

再在同一标签页打开 http://rewards.bing.com/

控制台里复制`rewards.bing.com`的`cookie`


### 环境变量

| 环境变量 | 说明 | 默认值 |
| ---------- | -------------- | -------------- |
| BingAutoSearch_MicroSoft_COOKIE | 获取的Cookie | 空 |
| BingAutoSearch_sleep_sec | 每次搜索间隔秒数 | 5 |
| BingAutoSearch_proxy   | 如 http://127.0.0.1:9870 | 空 |
| BingAutoSearch_edgeUserAgent   | Edge User-Agent | 略 |
| BingAutoSearch_mobileUserAgent   | 手机 User-Agent | 略 |
| BingAutoSearch_wordlists | 搜索内容 | 略 |
