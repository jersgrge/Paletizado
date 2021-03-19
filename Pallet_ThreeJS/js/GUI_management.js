//Definición de los displays.
var displayProjectDescription;
var displayBoxSize;
var displayPalletConfig;
var displayBoxPlacement;
var displayLayerControl;
var displayLayers;
var displaySliderLayers;
var displayExport;
var displayOptions;

//Displays activos.
var actualDisplay;
var optionsActive = false;

//Definición de las escenas.
var sceneBoxSize;
var scenePalletConfig;
var sceneBoxPlacement;
var sceneLayers;

//#region Carga y desactivación de los displays.

  //Selección de todos los divs con las distintas partes del programa.
  function loadAllDivs(){
    displayProjectDescription = document.getElementsByClassName("project-description");
    displayBoxSize = document.getElementsByClassName("box-size");
    displayPalletConfig = document.getElementsByClassName("pallet-size");
    displayBoxPlacement = document.getElementsByClassName("box-placement");
    displayLayerControl = document.getElementsByClassName("layer-control");
    displayLayers = document.getElementsByClassName("layer-specs");
    displaySliderLayers = document.getElementsByClassName("slider-layers");
    displayExport = document.getElementsByClassName("export-project");
    displayOptions = document.getElementsByClassName("options");
  }

  //Oculta todos los divs.
  function hideAllDivs(){
    displayProjectDescription[0].style.display = "none";
    displayBoxSize[0].style.display = "none";
    displayPalletConfig[0].style.display = "none";
    displayBoxPlacement[0].style.display = "none";
    displayLayerControl[0].style.display = "none";
    displayLayers[0].style.display = "none";
    displaySliderLayers[0].style.display = "none";
    displayExport[0].style.display = "none";
    displayOptions[0].style.display = "none";
  }

  //Selección de todos los divs con las distintas partes del programa.
  function loadAllScenes(){
    sceneBoxSize = document.getElementsByClassName("scene-box-size");
    scenePalletConfig = document.getElementsByClassName("scene-pallet-selection");
    sceneBoxPlacement = document.getElementsByClassName("scene-box-placement");
    sceneLayers = document.getElementsByClassName("scene-layer");
  }

  //Oculta todos los divs.
  function hideAllScenes(){
    sceneBoxSize[0].style.display = "none";
    scenePalletConfig[0].style.display = "none";
    sceneBoxPlacement[0].style.display = "none";
    sceneLayers[0].style.display = "none";
  }
//#endregion

//#region Activación de los displays.

  //Activa el primer div (descripción del proyecto).
  function activeProjectDescription(){
    hideAllDivs();
    hideAllScenes();
    displayProjectDescription[0].style.display = "block";
    actualDisplay = "project-description";

    var backButton = document.getElementsByClassName("back");
    backButton[0].style.display = "none";

    var optionsButtonActivated = document.getElementsByClassName("options-button");
    optionsButtonActivated[0].style.backgroundColor = "#494a49";
  }

  //Activa el tamaño de caja.
  function activeBoxSize(){
    hideAllDivs();
    hideAllScenes();
    displayBoxSize[0].style.display = "block";
    actualDisplay = "box-size";
    sceneBoxSize[0].style.display = "block";

    var backButton = document.getElementsByClassName("back");
    backButton[0].style.display = "block";

    activeBoxSizeNav();

    var optionsButtonActivated = document.getElementsByClassName("options-button");
    optionsButtonActivated[0].style.backgroundColor = "#494a49";
  }
  //Activa la selección del pallet.
  function activePalletSelection(){
    hideAllDivs();
    hideAllScenes();
    displayPalletConfig[0].style.display = "block";
    actualDisplay = "pallet-selection";
    scenePalletConfig[0].style.display = "block";

    var backButton = document.getElementsByClassName("back");
    backButton[0].style.display = "block";

    activePalletSelectionNav();

    var optionsButtonActivated = document.getElementsByClassName("options-button");
    optionsButtonActivated[0].style.backgroundColor = "#494a49";
  }
  //Activa el posicionado de cajas.
  function activeBoxPlacement(){
    hideAllDivs();
    hideAllScenes();
    displayBoxPlacement[0].style.display = "block";
    displayLayerControl[0].style.display = "none";
    actualDisplay = "box-placement";
    sceneBoxPlacement[0].style.display = "block";

    var backButton = document.getElementsByClassName("back");
    backButton[0].style.display = "block";

    activeBoxPlacementNav();

    var optionsButtonActivated = document.getElementsByClassName("options-button");
    optionsButtonActivated[0].style.backgroundColor = "#494a49";
  }
  //Activa la selección de pisos.
  function activeLayers(){
    hideAllDivs();
    hideAllScenes();
    displayLayers[0].style.display = "block";
    displaySliderLayers[0].style.display = "block";
    actualDisplay = "layers";
    sceneLayers[0].style.display = "block";

    var backButton = document.getElementsByClassName("back");
    backButton[0].style.display = "block";

    activeLayersNav();

    var optionsButtonActivated = document.getElementsByClassName("options-button");
    optionsButtonActivated[0].style.backgroundColor = "#494a49";
  }
  //Activa la exportación.
  function activeExport(){
    hideAllDivs();
    hideAllScenes();
    displayExport[0].style.display = "block";
    actualDisplay = "export";

    var backButton = document.getElementsByClassName("back");
    backButton[0].style.display = "block";

    var optionsButtonActivated = document.getElementsByClassName("options-button");
    optionsButtonActivated[0].style.backgroundColor = "#494a49";
  }
  //Activa las opciones.
  function activeOptions(){
    var optionsButtonActivated = document.getElementsByClassName("options-button");

    if(optionsActive == false){
      displayOptions[0].style.display = "block";
      console.log("hi");
      optionsActive = true;
      optionsButtonActivated[0].style.backgroundColor = "#262626";
    }
    else{
      //Vuelta a la pantalla original.
      if(actualDisplay == "project-description"){
        activeProjectDescription();
      }
      if(actualDisplay == "box-size"){
        activeBoxSize()
      }
      if(actualDisplay == "pallet-selection"){
        activePalletSelection()
      }
      if(actualDisplay == "box-placement"){
        activeBoxPlacement()
      }
      if(actualDisplay == "layers"){
        activeLayers()
      }
      if(actualDisplay == "export"){
        activeExport()
      }
      optionsActive = false;
      optionsButtonActivated[0].style.backgroundColor = "#494a49";
    }
  }

  //Ir a la pantalla anterior.
  function backDisplay(){
    //Vuelta a la pantalla original.
    if(actualDisplay == "box-size"){
      activeProjectDescription()
    }
    if(actualDisplay == "pallet-selection"){
      activeBoxSize()
    }
    if(actualDisplay == "box-placement"){
      activePalletSelection()
    }
    if(actualDisplay == "layers"){
      activeBoxPlacement()
    }
    if(actualDisplay == "export"){
      activeLayers()
    }
  }

//#endregion

//#region Selección en el navegador superior.

  //Selecciona el apartado de tamaño de caja en la barra de navegación superior.
  function activeBoxSizeNav(){
    var boxSizeNav = document.getElementsByClassName("box-size-nav-button");
    var palletSelectionNav = document.getElementsByClassName("pallet-selection-nav-button");
    var boxPlacementNav = document.getElementsByClassName("box-placement-nav-button");
    var layersNav = document.getElementsByClassName("layers-nav-button");
    boxSizeNav[0].style.backgroundColor = "#262626";
    palletSelectionNav[0].style.backgroundColor = "#494a49";
    boxPlacementNav[0].style.backgroundColor = "#494a49";
    layersNav[0].style.backgroundColor = "#494a49";
  }
  //Selecciona el apartado de tamaño de caja en la barra de navegación superior.
  function activePalletSelectionNav(){
    var boxSizeNav = document.getElementsByClassName("box-size-nav-button");
    var palletSelectionNav = document.getElementsByClassName("pallet-selection-nav-button");
    var boxPlacementNav = document.getElementsByClassName("box-placement-nav-button");
    var layersNav = document.getElementsByClassName("layers-nav-button");
    boxSizeNav[0].style.backgroundColor = "#494a49";
    palletSelectionNav[0].style.backgroundColor = "#262626";
    boxPlacementNav[0].style.backgroundColor = "#494a49";
    layersNav[0].style.backgroundColor = "#494a49";
  }
  //Selecciona el apartado de tamaño de caja en la barra de navegación superior.
  function activeBoxPlacementNav(){
    var boxSizeNav = document.getElementsByClassName("box-size-nav-button");
    var palletSelectionNav = document.getElementsByClassName("pallet-selection-nav-button");
    var boxPlacementNav = document.getElementsByClassName("box-placement-nav-button");
    var layersNav = document.getElementsByClassName("layers-nav-button");
    boxSizeNav[0].style.backgroundColor = "#494a49";
    palletSelectionNav[0].style.backgroundColor = "#494a49";
    boxPlacementNav[0].style.backgroundColor = "#262626";
    layersNav[0].style.backgroundColor = "#494a49";
  }
  //Selecciona el apartado de tamaño de caja en la barra de navegación superior.
  function activeLayersNav(){
    var boxSizeNav = document.getElementsByClassName("box-size-nav-button");
    var palletSelectionNav = document.getElementsByClassName("pallet-selection-nav-button");
    var boxPlacementNav = document.getElementsByClassName("box-placement-nav-button");
    var layersNav = document.getElementsByClassName("layers-nav-button");
    boxSizeNav[0].style.backgroundColor = "#494a49";
    palletSelectionNav[0].style.backgroundColor = "#494a49";
    boxPlacementNav[0].style.backgroundColor = "#494a49";
    layersNav[0].style.backgroundColor = "#262626";
  }

//#endregion