import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Images } from '../both/startup.js';

document.write(Images.find().count());

Template.images.helpers({ images: Images.find() });

Template.images.events({
  'click .js-image': function (event) {
    $(event.target).css("width", "50px");

  },
  'click .js-del-image': function () {
    var image_id = this._id;
    console.log(image_id);
    $("#" + image_id).hide('slow', function () {
      Images.remove({ "_id": image_id });
    });


  },

  'click .js-rate-image': function (event) {
    var rating = $(event.currentTarget).data("userrating");
    console.log("rating:" + rating);
    var image_id = this.id;
    Images.update({ _id: image_id }, { $set: { rating: rating } });
  }

});




