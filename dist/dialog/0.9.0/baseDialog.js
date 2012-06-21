define("#dialog/0.9.0/baseDialog",["$","overlay","mask"],function(a,b,c){var d=a("$"),e=a("overlay"),f=a("mask"),g=e.extend({attrs:{trigger:null,triggerType:"click",zIndex:999,confirmElement:null,cancelElement:null,closeElement:null,titleElement:null,title:"",contentElement:null,content:"",iframeUrl:"",ajaxUrl:"",ajaxCallback:function(){},hasMask:!1,onConfirm:function(){},onClose:function(){}},parseElement:function(){g.superclass.parseElement.call(this),this.set("trigger",d(this.get("trigger"))),this.set("confirmElement",this.$(this.get("confirmElement"))),this.set("cancelElement",this.$(this.get("cancelElement"))),this.set("closeElement",this.$(this.get("closeElement"))),this.set("titleElement",this.$(this.get("titleElement"))),this.set("contentElement",this.$(this.get("contentElement")))},events:{"click {{attrs.confirmElement}}":"_confirmHandler","click {{attrs.cancelElement}}":"_closeHandler","click {{attrs.closeElement}}":"_closeHandler"},_confirmHandler:function(){this.trigger("confirm")},_closeHandler:function(){this.trigger("close"),this.hide()},delegateEvents:function(){g.superclass.delegateEvents.call(this);var a=this;this.get("trigger").bind(this.get("triggerType"),function(b){b.preventDefault(),a.activeTrigger=this,a.show()})},show:function(){return g.superclass.show.call(this)},hide:function(){return g.superclass.hide.call(this)},setup:function(){this._setupMask()},_setupMask:function(){var a=this.mask=new f;this.before("show",function(){this.get("hasMask")&&a.show()}),this.before("hide",function(){this.get("hasMask")&&a.hide()}),this.before("destroy",function(){this.get("hasMask")&&a.hide()})},_onRenderTitle:function(a){d.isFunction(a)?this.get("titleElement").html(a.call(this)):this.get("titleElement").html(a)},_onRenderContent:function(a){d.isFunction(a)?this.get("contentElement").html(a.call(this)):this.get("contentElement").html(a)},_onRenderAjaxUrl:function(a){var b=this;d.get(a,this.get("ajaxCallback")||function(a){b.get("contentElement").html(a)})},_onRenderIframeUrl:function(a){this.$("iframe").eq(0).attr("src",a)}});c.exports=g});