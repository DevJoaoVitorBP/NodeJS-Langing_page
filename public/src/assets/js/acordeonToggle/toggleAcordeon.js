// Add a click event to each element with the class '.section__container-faq'
$('.section__container-faq').click(function() {
    // Find the '.content' element within the clicked element
    var content = $(this).find('.content');
    
    // Check if the 'maxHeight' property of the content is not '0px'
    if (content.css('maxHeight') !== '0px') {
        // If it's not, set 'maxHeight' to '0px'
        content.css('maxHeight', '0px');
        // And remove the 'active' class from the clicked element
        $(this).removeClass('active');
    } else {
        // If 'maxHeight' is '0px', set 'maxHeight' to the scroll height of the content
        content.css('maxHeight', content[0].scrollHeight + "px");
        // And add the 'active' class to the clicked element
        $(this).addClass('active');
    }
});
