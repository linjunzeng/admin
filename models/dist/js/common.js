layui.use(["element"],function(){var t=layui.element,a=layui.jquery;a("[data-tab]").click(function(){var e=a(this).attr("id")||0,i=a(".layui-tab-title li[id="+e+"]");e||i||(e=(new Date).getTime(),a(this).attr("id",e),t.tabAdd("tab",{title:"新选项"+(1e3*Math.random()|0),content:"内容"+(1e3*Math.random()|0),id:(new Date).getTime()})),t.tabChange("tab",e)})});