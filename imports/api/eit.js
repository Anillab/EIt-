import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Eits = new Mongo.Collection('eits');

Meteor.methods({
  "eits.setChecked"(id, isChecked) {
    Eits.update(id, {
      $set: { checked: isChecked }
    });
  },

  "eits.update"(id, newData) {
    Eits.update(id, {
      $set: {...newData}
    });
  },

  "eits.bulkDelete"() {
    const checkedEits = Eits.find({ checked: { $eq: true } }).fetch();
    checkedEits.forEach(eit => Eits.remove(eit._id));
    console.log("Now");
  }
});
