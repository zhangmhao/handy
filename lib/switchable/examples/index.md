<style>
    * {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    li a {
        text-decoration: none;
    }

    h2 {
        margin: 30px 0 10px; font-size: 17px;
    }

    p.code-switch {
        color: #09f; cursor: pointer; margin-top: 10px;
    }
    pre.code {
        color: #444;
        cursor: auto;
        border-left: 2px solid #7F96AA;
        margin-top: 5px;
        padding: 0 10px 20px 10px;
        font-size: 14px;
    }
</style>

<h2>Tabs - 普通标签页</h2>
<style>
    #demo1 {
        position: relative; width: 300px; padding-top: 29px;
    }
    #demo1 .ui-switchable-nav-test {
        position: absolute; left: 20px; margin-top: -29px; z-index: 99;
    }
    #demo1 .ui-switchable-nav-test li {
        float: left;
        width: 50px;
        line-height: 21px;
        text-align: center;
        background: #AEC7E5;
        margin-right: 3px;
        padding-top: 8px;
        cursor: pointer;
    }
    #demo1 .ui-switchable-nav-test li.ui-switchable-active {
        background:blue;color:#fff;
    }
    #demo1 .ui-switchable-content-test {
        position: relative;
        height: 120px;
        padding: 20px;
        border: 1px solid #AEC7E5;
    }
</style>
<div id="demo1" class="section">
    <ul class="ui-switchable-nav-test" data-role="nav">
        <li data-role="trigger">标题 A</li>
        <li data-role="trigger">标题 B</li>
        <li data-role="trigger">标题 C</li>
    </ul>
    <div class="ui-switchable-content-test" data-role="content">
        <div>内容 A</div>
        <div style="display: none">内容 B</div>
        <div style="display: none">内容 C</div>
    </div>
</div>


<h2>Slide - 卡盘轮播</h2>
<style>
    #demo2 {
        position: relative; width: 300px; height: 176px; border: 1px solid #B6D1E6; overflow: hidden;
    }
    #demo2 .ui-switchable-nav {
        position: absolute; bottom: 5px; right: 5px; z-index: 99;
    }
    #demo2 .ui-switchable-nav li {
        float: left;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-left: -1px;
        background-color: #FCF2CF;
        border: 1px solid #F47500;
        color: #D94B01;
        text-align: center;
        cursor: pointer;
    }
    #demo2 .ui-switchable-nav li.ui-switchable-active {
        width: 18px;
        height: 18px;
        line-height: 18px;
        margin-top: -1px;
        color: #FFF;
        background-color: #FFB442;
        font-weight: bold;
    }
    #demo2 .ui-switchable-content-test li {
        height: 176px; width: 710px; overflow: hidden;
    }
    /* for countdown plugin */
    #demo2 .ui-switchable-nav li,
    #demo2 .ui-switchable-trigger-content {
        position: relative;
    }
    #demo2 .ui-switchable-trigger-mask {
        position: absolute;
        right: 0;
        width: 18px;
        height: 18px;
        background-color: #FF9415;
        visibility: hidden
    }
    #demo2 .ui-switchable-active .ui-switchable-trigger-mask {
        visibility: visible
    }

    .hidden {
        display: none
    }

</style>
<div id="demo2" class="section" data-effect="fade" data-easing="easeOutStrong">
    <ol class="ui-switchable-content-test" data-role="content">
        <li><a href="http://fun.alipay.com/buy/index.htm?src=5buy03" target="_blank"><img alt="" src="https://i.alipayobjects.com/e/201205/2lOsygtTn7.jpg"/></a></li>
        <li class="hidden"><a target="_blank" href="http://fun.alipay.com/hkwhb/index.htm?_adType=aedacbacdeajaefcehdg"><img alt="" width="710" height="175" border="0" src="https://i.alipayobjects.com/e/201205/3H1Kii949r.jpg"/></a></li>
        <li class="hidden"><a target="_blank" href="http://fun.alipay.com/lvmama/index.htm"><img alt="" width="710" height="175" border="0" src="https://i.alipayobjects.com/e/201206/2muugwqegL.png"/></a></li>
        <li class="hidden"><a href="http://fun.alipay.com/sj/index.htm" target="_blank"><img alt="" src="https://i.alipayobjects.com/e/201205/37t81c9HYx.jpg"/></a></li>
    </ol>
</div>

```javascript
    var T, $, tabs, slide;

    seajs.use(['$', 'tabs', 'slide'], function(jQuery, Tabs, Slide) {
        T = Tabs;
        $ = jQuery;

        tabs = new Tabs({
            element: '#demo1',
            activeIndex: 1,
            effect: 'fade'
        });

        slide = new Slide({
            element: '#demo2',
            effect: 'scrolly',
            interval: 2000
        });
    });
```