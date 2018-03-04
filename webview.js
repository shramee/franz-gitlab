module.exports = ( Franz ) => {
	const getMessages = function getMessages() {
		const $todoCount = document.querySelectorAll( 'span.badge.todos-count' );
		if ( $todoCount.length ) {
			const todoCount = parseInt( $todoCount[0].innerHTML );
			Franz.setBadge( todoCount );
		} else {
			Franz.setBadge( 0 );
		}
	};
  
	// Check for new messages every second and update Franz badge.
	Franz.loop( getMessages );
  };
