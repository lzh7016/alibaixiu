$('#logout').on('click', function() {
    var tips = confirm('?')
    if (confirm) {
        $.ajax({
            type: "post",
            url: "/logout",
            success: function(response) {
                location.href = 'login.html'
            }
        });
    }
})