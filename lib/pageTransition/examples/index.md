<style type="text/css">
        a{
            text-decoration:none;
        }
        .box {
            width: auto;
            margin: 0;
            padding: 0;
        }

        caption {
            text-align: left;
        }

        td {
            text-align: left;
        }

        table {
            margin: 10px 0;
        }

        table td:first-child {
            width: 100px;
        }
        .des{
            background:#F0F1F8;
            border:1px solid #D4D8EB;
            padding:10px;
            line-height:22px;
        }
        pre,code{
            padding:10px;
            background:#FCFBFA;
            border:1px solid #EFEEED;
            border-left-width:5px;
        }
        .bar{
            height:40px;
            background:black;
            color:#fff;
            text-align:center;
            margin:0 0 20px 0;
            font-size:14px;
            line-height:40px;
        }
        body{
            padding:0;
            margin:0;
        }
        .des{
            margin:0 30px;
        }
        .back{
            font-size:14px;
        }
        #J-bottom-btns{
            margin-top:50px;
            text-align:center;
        }
        #J-bottom-btns a{
            color:#fff;
            text-align:center;
            display:block;
            margin-bottom:10px;
            background:#000;
            padding:5px;
        }
</style>

<div class="box">
    <div id="J-page-box">
        <section data-pageTransition-role="page">
            <h1 class="bar">Example：PageTransition</h1>
            <p class="des" style="border-bottom:none;">PageTransition 提供一个模拟 iOS 原生应用页面过渡效果的 UI 组件。</p>
            <article class="des">
                PageTransition 暂时只提供水平过渡效果，未来的版本会增加过渡模式 (transition mode) 配置<br />
                PageTransition 水平过渡效果使用了 margin-left 动画，并没有使用 translate-x ，由此带来的问题是：<a href="http://qiqicartoon.com/?p=1023" target="_blank">动画运动不够平滑</a>,
                既然 margin-left 在移动平台的动画不够平滑，为何还要使用 margin-left 呢？您可以参考 <a href="http://qiqicartoon.com/?p=785" target="_blank">Android平台中CSS3 transition和animation问题</a><br />
                1、您可以<a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-page-box-nextPage">点击此</a>查看 PageTransition 组件所需的 HTML 结构<br />
                2、您可以<a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-page-box-nextPage2">查看 pageTransition 组件的基本配置</a><br />
                3、<a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-subPage-box">PageTransition 嵌套</a>
                建议您使用移动设备内置浏览器访问这个页面<br />
                <a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-page-box-nextPage">下一页</a>
            </article>
        </section>
    </div>
    <p style="margin:10px 30px;text-align:center;">@copy <a href="http://aralejs.org" target="_blank">arale.org</a></p>
</div>

<article id="J-page-box-nextPage" style="display:none;" data-pageTransition-role="page">
    <h1 class="bar">Example: PageTransition 所需的 HTML 结构</h1>
    <article class="des">
        <a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="back" class="back">返回</a><br />
 <pre>
 &lt;div id="J-page-box"&gt;这是最外层的容器
     &lt;section data-pageTransition-role="page"&gt;标识这个标签是 pageTransition 的页面
         &lt;a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-page-box-nextPage">点击此&lt;/a&gt;
         这是超链接是一个触点，它必须有 action，forward 和 role 配置，这是 pageTransition 组件的触点最基本的参数
     &lt;/section&gt;
 &lt;/div&gt;
 </pre>
     </article>
</article>

<article id="J-page-box-nextPage2" style="display:none;" data-pageTransition-role="page">
        <h1 class="bar">Example: PageTransition 的基本配置参数</h1>
        <article class="des">
            <a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="back" class="back">返回</a><br />
            <a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-page-box-nextPage">点击此</a>查看 PageTransition 组件所需的 HTML 结构<br />
            <a href="javascript:void(0)" id="J-destroy">点击此处销毁 pageTransition </a><br />
<pre>
实例化配置参数：
{
  element:
}
pageTransition 还需要trigger及page参数，这些参数是通过 data-pageTransition-attribute 定义在 html 标签上的
trigger:
  当在 html 中定义一个 PageTransition trigger 时，必须定义它的 action,role 和 forward/back 指向的目标元素，这些定义必须以 data 做前缀
  &lt;a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-page-box-nextPage"&gt;点击此&lt;/a&gt;
  如果你的触发器的作用是返回，则不需要指定返回的目标元素，PageTransition 会记录你上一张页面。

page:
  PageTransition 只需要一个 page 即可，它同样以 data 做前缀，以 role 做名称
  data-pageTransition-role="page"
  值得注意的是：凡是要做为 trigger 的 data-pageTransition-forward 属性值的目标元素，必须要定义 data-pageTransition-role="page"。
</pre>
        </article>
</article>

<article id="J-subPage-box" data-pageTransition-role="page" style="display:none;">
    <h1 class="bar">Example: PageTransition 嵌套</h1>
    <section data-pageTransition-role="page" class="des" id="J-subPage">
        <div data-pageTransition-role="page">
            PageTransition 支持深层嵌套<br />
            <form>
                <input type="text" /><br />
                <select>
                    <option>one</option>
                    <option>one</option>
                </select><br />
                <input type="radio" /><br />
                <input type="checkbox" />
            </form><br />
            <a href="javascript:void(0)" data-pageTransition-role="trigger" data-pageTransition-action="forward" data-pageTransition-forward="#J-subPage1">下一页</a>
        </div>
    </section>
    <br />
    <a href="javascript:void(0)" data-pageTransition-action="back" data-pageTransition-role="trigger" style="margin-left:30px;">返回上一页</a>
</article>

<p id="J-subPage1" style="display:none;" data-pageTransition-role="page">
    <a href="javascript:void(0)" data-pageTransition-action="back" data-pageTransition-role="trigger">返回</a>
    <a href="javascript:void(0)" id="J-subPage-destroy">销毁</a>
</p>

<a href="javascript:void(0)" id="J-getPage" style="text-align:center;display:block;padding:10px;">获取 PageTransition 当前页面</a>
<a href="javascript:void(0)" id="J-backPage" style="text-align:center;display:block;padding:10px;">返回 PageTransition 前一页</a>

<nav id="J-bottom-btns">
    <a href="javascript:void(0)" data-pageTransition-role="1">查看 PageTransition 组件所需的 HTML 结构</a>
    <a href="javascript:void(0)" data-pageTransition-role="2">查看 pageTransition 组件的基本配置</a>
    <a href="javascript:void(0)" data-pageTransition-role="3">PageTransition 嵌套</a>
</nav>

```javascript
    var getDom = function (dom) {
        return document.querySelector(dom);
    };

    seajs.use(['pageTransition'], function (PageTransition) {
        var pageTransition = new PageTransition({
            element: '#J-page-box'
        }),
        subPage = null;
        pageTransition.render();

        window.addEventListener('resize',function (){
            pageTransition.sync();
        },false);

        getDom('#J-destroy').addEventListener('click',function (){
            pageTransition.destroy();
        },false);
        getDom('#J-backPage').addEventListener('click',function (){
            pageTransition.back();
        },false);
        getDom('#J-subPage-destroy').addEventListener('click',function (){
            subPage.destroy();
        },false);
        getDom('#J-bottom-btns').addEventListener('click',function (e){
            if(!e.target.getAttribute('data-pageTransition-role')){return;}
            switch(parseInt(e.target.getAttribute('data-pageTransition-role'),10)){
                case 1:
                    pageTransition.transition('#J-page-box-nextPage');
                break;
                case 2:
                    pageTransition.transition('#J-page-box-nextPage2');
                break;
                case 3:
                    pageTransition.transition('#J-subPage-box');
                break;
            }
        },false);
        getDom('#J-getPage').addEventListener('click',function (e){
            alert(pageTransition.getPage().innerHTML)
        },false);

        pageTransition.on('transitionStart',function (type,page,o){
            // console.log(type,page,o)
        });
        pageTransition.on('transitionEnd',function (type,page,o){
            // console.log(type,page,o)
            if(page[0] === document.querySelector('#J-subPage-box')){
                subPage = subPage || new PageTransition({
                    element: '#J-subPage'
                })
                subPage.render();
            }
        });
    });
```