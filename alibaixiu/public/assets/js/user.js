$('#userFrom').on('submit', function() {
    var fromData = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/users",
        data: fromData,
        success: function(response) {
            location.reload()
        },
        error: function(response) {
            alert('error')
        }
    });

    return false
});

$('#modifyBox').on('change', '#avatar', function() {
    var formData = new FormData();
    formData.append('avatar', this.files[0]);
    $.ajax({
        type: "post",
        url: "/upload",
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
            $('#preview').attr('src', response[0].avatar);
            $('#hiddenAvatar').val(response[0].avatar)
        }
    });
});

$.ajax({
    type: "get",
    url: "/users",
    success: function(response) {
        console.log(response);
        var html = template('userTpl', {
            data: response
        });
        $('#userBox').html(html);
    }
});

$('#userBox').on('click', '.edit', function() {
    var id = $(this).attr('data-id')
    $.ajax({
        type: "get",
        url: "/users/" + id,
        success: function(response) {
            // console.log(response);
            var html = template('modifyTpl', response);
            // console.log(html);
            $('#modifyBox').html(html);
        }
    });
});

$('#modifyBox').on('submit', '#modifyFrom', function() {
    var fromData = $(this).serialize();
    var id = $(this).attr('data-id')
    $.ajax({
        type: "put",
        url: "/users/" + id,
        data: fromData,
        success: function(response) {
            location.reload()
        }
    });
    return false
});

$('#userBox').on('click', '.delete', function() {
    var tip = confirm('?')
    if (tip) {
        var id = $(this).attr('data-id')
        $.ajax({
            type: "delete",
            url: "/users/" + id,
            success: function(response) {
                location.reload()
            }
        });
    }
})