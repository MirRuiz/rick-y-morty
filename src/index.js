import * as Utils from "./utils";
import * as DataBusiness from "./data-business"
import "./styles.css"


DataBusiness.getCharacter().then((datos) => {
 
  document.getElementById("root").innerText = " ";

  for (let character of datos) {
    const node = Utils.createCharacterRow(character);

    node.onclick = function () {
      Utils.showCharacter(character);
    };
   
    document.getElementById("root").append(node);
  }
});
