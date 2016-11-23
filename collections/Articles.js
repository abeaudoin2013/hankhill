Articles = new Mongo.Collection('articles');

// specify rules for who can insert into articles
Articles.allow({
	insert: function (userId, doc) {
		// if userId exists, then you can add article
		return !!userId;
	}
});

Tag = new SimpleSchema({
	name: {
		type: String
	}
});

ArticleSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	body: {
		type: String,
		label: "Write article here",
		autoform: {
			afFieldInput: {
				type: 'summernote',
				class: 'summernote-editor',
				settings: {
					toolbar: [
				    // [groupName, [list of button]]
				    ['style', ['bold', 'italic', 'underline', 'clear', 'strikethrough', 'color']],
				    ['fontsize', ['fontsize']],
				    ['para', ['ul', 'ol', 'paragraph', 'height']],
				    ['insert', ['link', 'picture']],
				    ['misc', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]
				  ],
				  height: 500
				}
			}
		}
	},
	author: {
		type: String,
		label: "Author",
		// gives default val
		autoValue: function () {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	},
	onFrontPage: {
		type: Boolean,
		defaultValue: true,
		optional: true,
	},
	tags: {
		// [subDoc] makes incrementing fields
		type: [Tag]
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function () {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Articles.attachSchema( ArticleSchema );