---
title: 记录一下我对Next主题进行的修改
tags: Hexo
categories: 其他
abbrlink: 74b1925e
---
兜兜转转，又换回了Hexo，虽然没其他博客框架方便，但稳定性没得说。

这次想用简洁点的风格，就用了Next主题，这里记录一下我对它进行的修改，防止以后忘了。

<!-- more -->



------



## 添加网站运行时间

在`\themes\next\layout\_partials`找到`footer.njk`文件，在最下方添加如下代码：

```html
<div class="run-time">
  <span id="timeDate">载入天数...</span>
  <span id="times">载入时分秒...</span>
</div>
<script>
    var now = new Date();
    function createtime() {
        var grt= new Date("6/08/2024 12:00:00"); //修改为你的网站开始运行的时间
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
        document.getElementById("timeDate").innerHTML = "本站已苟活 "+dnum+" 天 ";
        document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒.";
    }
setInterval("createtime()",250);
</script>
```



------



## 动态标题

可以在用户离开页面时改变标签标题。

新建一个js文件：

我放在了`source/js`文件夹下，文件名为`title`

```js
// 浏览器动态标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.querySelector('[rel="icon"]').setAttribute('href', "/images/failure.ico");
        document.title = '(っ °Д °;)っ 访问的页面不存在了';
        clearTimeout(titleTime);
    }
    else {
        document.querySelector('[rel="icon"]').setAttribute('href', "/images/favicon.ico");
        document.title = '(●\'◡\'●)噫？又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
```

在`<head>`中引用js：

next主题可以插入`next\layout\_layout.njk`

```html
  <script src="/js/title.js"></script>
```



------



## 其他修改

### hexo-next-twikoo

访问人数不显示，且用不蒜子了，故将文章mate的访问人数统计删除。

打开插件文件夹，打开`index.js`，将**第20行** `// Add post_meta`下面的代码全部注释掉，如下：

```js
// Add post_meta (20-37注释删除文章meta显示访问人数)
//hexo.extend.filter.register('theme_inject', injects => {

//  const config = utils.defaultConfigFile('twikoo', 'default.yaml');
//  if (!config.enable || !config.envId) return;
//  if (config.visitor) {
//    injects.postMeta.raw('twikoo', `
//    <span id="{{ url_for(post.path) }}" class="post-meta-item twikoo_visitors" data-flag-title="{{ post.title }}" title="{{ __('post.views') }}">
//      <span class="post-meta-item-icon">
//        <i class="far fa-eye"></i>
//      </span>
//      <span class="post-meta-item-text">{{ __('post.views') + __('symbol.colon') }}</span>
//      <span id="twikoo_visitors"></span>
//    </span>
//  `, {}, {});
//  }

//});
```

