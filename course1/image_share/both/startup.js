import { Meteor } from 'meteor/meteor';

export const Images = new Mongo.Collection("images");

Meteor.startup(() => {
  
  if (Images.find().count() == 0) {

    for (i = 1; i <= 18; i++) {
      Images.insert({
        img_src: "img_" + i + ".jpg",
        img_alt: "image-" + i
      });
    }



  }
  console.log("count=", Images.find().count());

});
