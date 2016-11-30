if (Meteor.isClient) {
	Accounts.onLogin(function () {
		//need to go to profile page (need to build profile page)
		FlowRouter.go('new');
	});

	Accounts.onLogout(function () {
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect) {
	if (!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);


FlowRouter.route('/', {

	//once we render path, put layout
	name: 'home',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Articles'});
	}

});

FlowRouter.route('/new', {
	name: 'new',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewArticle'})
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

FlowRouter.route('/article/:id', {

	//once we render path, put layout
	name: 'article',
	action() {
		GAnalytics.pageview();
		// Choose MainLayout, then dynamic layout name, and then template
		// you want to render into that dynamic layout
		BlazeLayout.render('MainLayout', {main: 'Article'});
	}

});