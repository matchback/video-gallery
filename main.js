jQuery(document).ready(function($) {
  console.log('load script!');
  
  $('.video-gallery').each(function() {
    let iframe = $(this).find('iframe');
    let thumbnailsContainer = $(this).find('.thumbnails-container');
    let thumbnails = thumbnailsContainer.find('ul li');
    let base = $(this).attr('data-base');
    let vidIds = $(this).attr('data-ids').split(',');
    let arrows = $(this).find('.arrow');
    let list = $(this).find('.thumbnails-container ul');
    
    // set up the width of the thumbnails container
    list.width(100/3 * thumbnails.length + '%');
    let width = list.width()/thumbnails.length;
    
    thumbnails.click(function() {
      let index = $(this).index();
      let newVid = base + vidIds[index];
      if (iframe.get(0).src !== newVid) {
        iframe.get(0).src = newVid;
      }
    });
    
    arrows.click(function() {
      if ($(this).hasClass('arrow-left')) {
        thumbnailsContainer.stop().animate({scrollLeft: '-=' + width});
      } else {
        thumbnailsContainer.stop().animate({scrollLeft: '+=' + width});
      }
    })
    
  })
  
});