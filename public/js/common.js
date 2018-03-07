layui.use(['element'], function(){
    var element = layui.element,
        $ = layui.jquery;

    $('#admin-menu').on('click', '.data-tab', function(e){
        e.preventDefault();
        var id = $(this).attr('tab-id') || 0,
            tab = $('.layui-tab-title [lay-id='+id+']').length,
            title = $(this).data('title'),
            url = $(this).attr('href');
        if(!tab){
            id = new Date().getTime();
            $(this).attr('tab-id', id);
            element.tabAdd('tab', {
                title: title,
                content: '<iframe id='+ id +' style="width: 100%;height: 100%;" src='+ url +'></iframe>',
                id: id
            })
        }else{
            $('#'+id).attr('src', url);
        }
        element.tabChange('tab', id);
    })
});
