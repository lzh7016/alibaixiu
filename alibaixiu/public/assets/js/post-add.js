$.ajax({
    type: "get",
    url: "/categories",
    success: function(response) {
        var html = template('categoryTpl', {
            data: response
        })
        $('#category').html(html)
    }
});

$('#feature').on('change', function() {
    var fromData = new FormData
    fromData.append('cover', this.files[0])
    $.ajax({
        type: "post",
        url: "/upload",
        data: fromData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
            $('#thumbnail').val(response[0].cover)
        }
    });
})

$('#postFrom').on('submit', function() {
    var fromData = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/posts",
        data: fromData,
        success: function(response) {
            location.href = '/admin/posts.html'
        }
    });
    return false
})