this.Documents = new Mongo.Collection("documents");
EditingUsers = new Mongo.Collection("editingUsers");

if (Meteor.isClient) {
	Template.editor.helpers({
		docid() {
			var doc = Documents.findOne();
			if (doc) {
				return doc._id;
			} else {
				return undefined;
			}
		},

		config() {
			return function (editor) {
				editor.setOption("linenumbers", true);
				editor.setOption("mode", "html");
				editor.on("change", function (cm_editor, info) {
					$("#viewer_iframe").contents().find("html").html(cm_editor.getValue());

					EditingUsers.insert({ user: "mathew" });
				});
			}
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		if (!Documents.findOne()) {
			Documents.insert({ title: "my new document" });
		}
	})
}