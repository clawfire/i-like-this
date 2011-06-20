function likeThis(postId) {
	if (postId != '') {
		jQuery('#'+postId+'.ilt_counter_widget_counter.count').text('...');
		
		jQuery.post(blogUrl + "/wp-content/plugins/i-like-this/like.php",
			{ id: postId },
			function(data){
				jQuery('#'+postId+'.ilt_counter_widget_counter.count').text(data);
			});
	}
}