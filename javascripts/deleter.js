"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){

    let $element = $(myElement);

    Cathy.removeMsgArray(parseInt(myElement[0].id), $element);

    myElement.remove();
    // I'm pretty sure that tempArray is not used anywhere relevant to the app

    // var tempArray = $("li");
    // for (let i = parseInt(myElement.id); i < tempArray.length; i++){
    //   tempArray[i].setAttribute("id", i);
    // }
  };

  return oldCathy;

})(Cathy || {});