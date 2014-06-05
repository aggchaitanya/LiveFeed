Wines = new Meteor.Collection('wines');


if (Meteor.isClient) {

   Template.selected.positives = function(){
 //     return Wines.find({}, sort { time: -1 });
      return Wines.find({}, { sort: { time: -1 }});


  }

}




