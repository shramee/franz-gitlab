module.exports = (Franz) => {
	const getMessages = function getMessages() {
	  Franz.setBadge(
		  document.querySelectorAll('div.event-item').length // Total events
	  );
	};
  
	// Check for new messages every second and update Franz badge.
	Franz.loop(getMessages);
  };