function generateSlug(value) {
    return value.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

var parmalink = '';

$('#inpt').on('focusout', function () {
    if ($(this).val()) {
        if (!$('#slug-text').text()) {
            var title = $("#inpt").val()
            var slug = generateSlug(title)
            parmalink = 'http://' + document.domain + '/' + slug

            $('#parmalink').css('display', 'block')
            $('#slug-text').text(parmalink)
            $('#slug-text').attr('href', parmalink)
            $('#slug-field').val(slug)
        }
    }
})

$('#edit-btn').on('click', function (e) {
    e.preventDefault()
    $('#edit-box').val(parmalink)
    $('#slug-text').css('display', 'none')
    $('#edit-box').css('display', 'inline-block')

    var len = $('#edit-box').val().length + 1

    $('#edit-box').css('width', len * 8 + 'px')
    $('#edit-btn').css('display', 'none')
    $('#parmalink #done-btn').css('display', 'inline-block')
})

$('#done-btn').on('click', function (e) {
    e.preventDefault()
    parmalink = $('#edit-box').val()
    var arr = parmalink.split('/')
    updatedSlug = arr[arr.length - 1]
    $('#edit-box').css('display', 'none')
    $('#done-btn').css('display', 'none')
    $('#slug-text').css('display', 'inline-block')
    $('#slug-text').text(parmalink)
    $('#slug-text').attr('href', parmalink)
    $('#edit-btn').css('display', 'inline-block')
    $('#slug-field').val(updatedSlug)
})