function likeThis(postId) {
	if (postId != '') {
		jQuery('#'+postId+'.ilt_counter_widget_counter').text('...');
		
		jQuery.post(blogUrl + "/wp-content/plugins/i-like-this/like.php",{ id: postId },function(data){
				jQuery('#'+postId+'.ilt_counter_widget_counter').text(data);
				jQuert('.ilt_counter_widget_btn').text('Voted !')
			});
	}
}