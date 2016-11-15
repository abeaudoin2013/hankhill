FlowRouter.route('/', {

	//once we render path, put layout
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}

});

FlowRouter.route('/test', {

	//once we render path, put layout
	name: 'test',
	action() {
		// Choose MainLayout, then dynamic layout name, and then template
		// you want to render into that dynamic layout
		BlazeLayout.render('MainLayout', {main: 'Test'});
	}

});