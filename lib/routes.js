FlowRouter.route('/', {

	//once we render path, put layout
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}

});

FlowRouter.route('/articles', {

	//once we render path, put layout
	name: 'articles',
	action() {
		GAnalytics.pageview();
		// Choose MainLayout, then dynamic layout name, and then template
		// you want to render into that dynamic layout
		BlazeLayout.render('MainLayout', {main: 'Articles'});
	}

});