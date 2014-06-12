Wines = new Meteor.Collection('comments');


if (Meteor.isClient) {

   Template.selected.positives = function(){
 
      return Wines.find({}, { sort: { time: -1 }});


  }


}




