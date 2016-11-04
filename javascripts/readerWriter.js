"use strict";
var Cathy = (function (oldCathy) {

  let msgArray = [];

  oldCathy.getMsgArray = () => msgArray;

  oldCathy.writeMsgArray = (msgObject) => {msgArray.push(msgObject);};

  //this function fills out the main chat box, INCLUDING the footer
  oldCathy.writeMsgDOM = function(elementID, msgObject, idCounter){

    // console.log("msgObject", msgObject);

    let msgHTML = '',
    userName = msgObject.user.split(" "),
    firstName = userName[0],
    lastName = userName[userName.length - 1];

    // console.log("writeMsgDom's msgObject", msgObject);

    firstName = firstName.slice(0, 1);
    lastName = lastName.slice(0, 1);

    let initials = (firstName + lastName).toUpperCase();


    msgHTML = `<li class="right clearfix" id="${idCounter}" style="color:${txtPicker.value}; background:${bgPicker.value}"><span class="chat-img pull-left"><img src="http://placehold.it/50/008844/fff&text=${initials}" alt="User Avatar" class="img-circle"></span><span class="chat-img pull-right"><button class="btn btn-default btnEdit" type="button" style="color:${txtPicker.value}; background:${bgPicker.value}">Edit</button></span><span class="chat-img pull-right"><button class="btn btn-default btnDelete" type="button" style="color:${txtPicker.value}; background:${bgPicker.value}">Delete</button></span><div class="chat-body clearfix"><div class="header"><small><span class="glyphicon glyphicon-time"></span><stamp>${msgObject.timestamp}</stamp></small><p class="pull-right primary-font">${msgObject.user}</p></div><strong class="msgFinder">${msgObject.message}</strong></div></li>`;

    $(elementID).append(msgHTML);

    btnClear.disabled = false;
 



 // gonna termporarily disable this if statement which limits the message number to 20.
//     if (idCounter == 19) {
//       // Cathy.removeMsg($(elementID).children().eq(0));
//       Cathy.removeMsg(elementID.firstElementChild);
//     }






    footerMain.html(`<span class="pull-left">&copy; gitHeadz 2016. ****SAM REDUX****</span><span class="pull-right">Number of Messages: ${idCounter + 1}</span>`);
  };

  oldCathy.removeMsgArray = function(index, $element){
    msgArray = $.grep(msgArray, function(message, n) {
    
       return message.message === $element.find("strong").html();
//now works, but only if there are no identical messages.... gonna try to filter by both message AND timestamp now....
//forget that, just spent an hour trying to make it work with no headway. For now, let's just hope that no messages have the same content
    }, true);
  };
  oldCathy.clearMsgArray = () => {msgArray = [];};
 
  return oldCathy;

})(Cathy || {});





















