Articles = new Meteor.Collection('articles');

ArticleSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	body: {
		type: String,
		label: "Write article here"
	},
	author: {
		type: String,
		label: "Author",
		// gives default val
		autoValue: function () {
			return this.userId;
		}
	}, 
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function () {
			return new Date();
		}
	}
});

Articles.attachSchema( ArticleSchema );