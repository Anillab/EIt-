import { Meteor } from 'meteor/meteor';
import {Eits} from './eit.js';
import {Accounts} from 'meteor/accounts-base';
import {assert} from 'chai';

if (Meteor.isServer) {
  describe('Eits',function(){
    describe('methods',function () {
      let eitId, userId;
      before(function(){
        Meteor.users.remove({});
        let user=Meteor.users.findOne({firstName:'test'})
        if(!user){
          userId=Accounts.createUser({
            'firstName': "test",
            'lastName':"test",
            'email': "test@user.com",
            'phoneNumber': "test",
            'gender': "test",
            'country':"test"
          })

        }
        else {
         userId=user._id
        }
      })
      beforeEach(function() {
        Eits.remove({});
        eitId=Eits.insert({
          firstName: "test",
          lastName: "test",
          email: "test1@user.com",
          phoneNumber: "test",
          gender: "test",
          country:"test"
        });
      });


      it('eits is can be checked',function () {
        const eit = Eits.findOne(eitId);
        const checkEit=Meteor.server.method_handlers['eits.setChecked'];
        const invocation ={};
        checkEit.apply(invocation,[eitId, !eit.checked]);
        assert.strictEqual(Eits.find().count(),1);

      });
      
    });
  });
}
