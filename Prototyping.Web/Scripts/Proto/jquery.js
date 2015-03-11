
// Add/Remove element (http://jsperf.com/basic-prototyping-form-validation)
$('.validate-form').each(function (index, value) {
    var divIdName = 'my' + index + 'Div';
    $(this).append(
        $('<div>', {
            'id': 'my' + index + 'Div',
            'text': 'Element Number ' + index + ' has been added! "' + divIdName
        })
    );

    $(this).remove('#' + divIdName);
});