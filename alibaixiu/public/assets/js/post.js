$.ajax({
    type: "get",
    url: "/posts",
    success: function(response) {
        var html = template('postsTpl', response)
        $('#postBox').html(html)
    }
});

function formateDate(date) {
    date = new Date(date)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

$.ajax({
    type: "get",
    url: "/posts",
    data: {
        page
    },
    success: function(response) {
        var html = template('pageTpl', response)
        $('#pageBox').html(html)
        var html = template('pageTpl', response)
        $('#pageBox').html(html)
    }
});