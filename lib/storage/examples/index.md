<style type="text/css">
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
</style>
        <h1>Example：Storage</h1>
        Storage 提供移动设备浏览器端数据存储解决方案。<br />
        建议您在两个窗口或 两个 Tab 打开这个 Demo 页面<br />
        强烈建议您在移动设备内置浏览器测试这个 Demo 页面
        <p id="J-output2" class="des"></p>
        <table width="100%">
            <tr>
                <td>Key:</td>
                <td><input type="text" id="J-key1"/></td>
            </tr>
            <tr>
                <td>Value:</td>
                <td><input type="text" id="J-value1"/></td>
            </tr>
        </table>
        <a href="javascript:void(0)" id="J-sava1">保存</a><br/>
        <a href="javascript:void(0)" id="J-cleanAll">清除所有数据</a><br/>
        <a href="javascript:void(0)" id="J-getKeys">获取已存储所有的 key</a>
        <p id="J-output1"></p>


```javascript
    var getDom = function (dom) {
        return document.querySelector(dom);
    };

    seajs.use(['storage','$'], function (Storage,$) {
        if (!Storage.available) {
            return alert('您的浏览器不支持数据存储。');
        }

        // 初始化页面时，从本地取历史保存数据
        var html = '';
        Storage.keys().forEach(function (key,i){
            if(i === 0){
                html += '历史保存的数据：<br />';
            }
            html += key + ': ' + Storage.get(key) + '<br />';
        });
        getDom('#J-output2').innerHTML = html;
        if(Storage.keys().length >= 1){
            Storage.on('clear',function (){
                alert('数据被全部清除');
            })
        }

        var html = '',
            theFirstKey = null,
            title = null;

        getDom('#J-sava1').addEventListener('click', function (e) {
            theFirstKey = getDom('#J-key1').value;;

            if(!theFirstKey){
                return alert('请输入您要保存的数据');
            }

            Storage.off().on('change:' + theFirstKey,function (e){
              var data = {};
              data[theFirstKey] = e.newValue + '<span style="color:#f50;"> 数据已更新</span>';
              output(data,getDom('#J-output1'));
            }).on('remove:' + theFirstKey,function (e){
               alert(e.key + ' 成功删除。');
            }).on('clear',function (){
                alert('数据被全部清除');
            });

            Storage.set(theFirstKey, getDom('#J-value1').value);

            var data = {};
            data[theFirstKey] = Storage.get(theFirstKey);
            output(data,getDom('#J-output1'));
        }, false);

        getDom('#J-cleanAll').addEventListener('click', function (e) {
            title = null;
            Storage.clear();
            var key = Storage.keys();

            if (key.length === 0) {
                getDom('#J-output1').innerHTML = '';
                output({'提示':'数据已清空'},getDom('#J-output1').innerHTML = '');
            }
        }, false);

        getDom('#J-getKeys').addEventListener('click', function (e) {
            var keys = Storage.keys();
            keys.length >= 1 ? alert(keys) : alert('您还没有保存数据');
        }, false);

        function output(data,dom) {
            var html = '';
            if(!title){
                html = '<span>您刚存储的数据：</span><br />';
                title = true;
            }

            for (i in data) {
                if(i && data[i]){
                  if($(dom).find('.'+ i +'').get(0)){
                      $(dom).find('.'+ i +'').remove();
                  }
                  html += '<p class="'+ i +'"><span>'+ i +': </span>'+ data[i] +'  <a data-key="'+ i +'" href="javascript:void(0)">Remove</a><span style="font-size:12px;color:gray;padding-left:20px;">您可以在另一个窗口修改 '+i+' 的值</span></p>';
                }
            }

            dom.innerHTML +=  html;

            $(dom).find('a').click(function (e){
                Storage.remove($(e.currentTarget).attr('data-key'))
                $(e.currentTarget).parent().remove();
            });
        }
    });
```