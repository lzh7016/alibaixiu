$('#addCategories').on('submit', function() {
    var fromData = $(this).serialize()
    $.ajax({
        type: "post",
        url: "/categories",
        data: fromData,
        success: function(response) {
            location.reload()
        }
    });
    return false
});

$.ajax({
    type: "get",
    url: "/categories",
    success: function(response) {
        console.log(response);
        var html = template('categoriesTpl', {
            data: response
        })
        $('#categoriesBox').html(html)
    }
});

$('#categoriesBox').on('click', '.edit', function() {
    var id = $(this).attr('data-id')
    $.ajax({
        type: "get",
        url: "/categories/" + id,
        success: function(response) {
            var html = template('modifyCategoriesTpl', response)
            $("#fromBox").html(html)
        }
    });
})

$('#fromBox').on('submit', '#modifyCategories', function() {
    var fromData = $(this).serialize()
    var id = $(this).attr('data-id')
    $.ajax({
        type: "put",
        url: "/categories/" + id,
        data: fromData,
        success: function(response) {
            location.reload()
        }
    });
    return false
})

$('#categoriesBox').on('click', '.delete', function() {
    var tip = confirm('?')
    var id = $(this).attr('data-id')
    if (tip) {
        $.ajax({
            type: "delete",
            url: "/categories/" + id,
            success: function(response) {
                location.reload();
            }
        });
    }
})