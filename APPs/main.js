const { createApp } = Vue;

createApp({
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: '我的网站',
                    sites: [
                        { url: 'https://weexy.cn/', title: '主页', description: '这是我的个人主页' },
                        { url: 'https://blog.weexy.cn/', title: '博客', description: '这是我的小博客，欢迎光临~' },
                        { url: 'https://blog.weexy.cn/daily', title: '动态', description: '相当于微信朋友圈的功能' }
                    ]
                },
                {
                    id: 2,
                    name: 'APPs',
                    sites: [
                        { url: 'https://music.weexy.cn/', title: 'Weexy Music', description: '第三方网易云播放器' },
                        { url: 'https://calculator.weexy.cn/', title: '计算器', description: '一个多功能的在线计算器' },
                        { url: 'https://reader.weexy.cn/', title: 'Reader', description: '专为电脑端设计的在线阅读器' },
                        { url: 'https://draw.weexy.cn/', title: '画板', description: '一个功能强大的在线白板' },
                        { url: 'https://chat.weexy.cn/', title: 'NextChat', description: '一个需要填写key才可以用的AI' },
                        { url: 'https://umami.weexy.cn/', title: 'Umami', description: '自建网站统计' }
                    ]
                },
                {
                    id: 3,
                    name: 'API',
                    sites: [
                        { url: 'https://blog.weexy.cn/index.php/random-img.html', title: '随机图片', description: '随机返回一张二次元图片，欢迎补充' },
                        { url: 'https://music.api.weexy.cn/', title: '网易云音乐API', description: '网易云音乐官方API接口' }
                    ]
                },
                {
                    id: 4,
                    name: '访问统计',
                    sites: [
                        { url: 'https://status.weexy.cn/', title: '站点监测', description: '监测各网站在线状态' },
                        { url: 'https://umami.weexy.cn/statistics', title: '博客访问统计', description: '记录博客访问信息' }
                    ]
                }
            ]
        };
    }
}).mount('#app');
