const nameShorter = (theName) => {
  const splited = theName.split(" ");
  if (splited[1] === "-") {
    var newName = `${splited[0]} ${splited[1]} ${splited[2]}`;
  } else {
    var newName = `${splited[0]} ${splited[1]}`;
  }
  return newName;
};
const nameShorterForTitle = (theName1) => {
  const splited = theName1.split(" ");
  if (splited[1] === "-") {
    var newName1 = `${splited[0]} ${splited[1]} ${splited[2]} ${splited[3]} ${splited[4]} ${splited[5]}`;
  } else {
    var newName1 = `${splited[0]} ${splited[1]} ${splited[2]} ${splited[3]} ${splited[4]}`;
  }
  return newName1;
};
const descriptionShorter = (theDescription) => {
  const splited = theDescription.split(" ");
  const newDescription = `${splited[0]} ${splited[1]} ${splited[2]} ${splited[3]} ${splited[4]} ${splited[5]} ${splited[6]}...`;
  return newDescription;
};
const descriptionShorterForDetails = (theDescription1) => {
  const splited = theDescription1.split(" ");
  var newDescription1 = "";
  if (splited.length > 30) {
    for (let i = 0; i < 30; i++) {
      var newDescription1 = `${newDescription1} ${splited[i]}`;
    }
  } else {
    for (let i = 0; i < splited.length; i++) {
      var newDescription1 = `${newDescription1} ${splited[i]}`;
    }
  }
  return newDescription1;
};
const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((i) => i.id === id);
  return result;
};
const quantityCounter = (state, id) => {
  const index = state.selectedItems.findIndex((i) => i.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  nameShorter,
  nameShorterForTitle,
  descriptionShorter,
  descriptionShorterForDetails,
  isInCart,
  quantityCounter,
};
