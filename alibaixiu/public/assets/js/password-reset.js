$('#modityFrom').on('submit', function() {
    var fromData = $(this).serialize();
    $.ajax({
        type: "put",
        url: "/users/password",
        data: fromData,
        success: function(response) {
            alert('3s')
            setTimeout(function() {
                location.href = '/admin/login.html'
            }, 3000)
        }
    });
    return false;
});