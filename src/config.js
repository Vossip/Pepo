"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "CC0, NO ROADMAP, NO F*CKS GIVEN, JUST PIXEL ART PEPO PFPs.";
const baseUri = "ipfs://QmXN3jeNCyno7mhEeQvjzf4ypCtwidtQVRA7njEk8EyE89";

const layerConfigurations = [

// ------------------ Borat ------------------

{
  growEditionSizeTo: 50,
  layersOrder: [
    { name: "Borat" },
    { name: "Background" },
    { name: "Body"},
    { name: "Footwear"},
    { name: "Bottom"},
    { name: "Face"},
    { name: "Eyewear"},
    { name: "Headwear"},
    { name: "Accessory 1"},
    { name: "Accessory 2"}
  ]
},

// ------------------ Paper ------------------

{
  growEditionSizeTo: 100,
  layersOrder: [
    { name: "Paper" },
    { name: "Background" },
    { name: "Body"},
    { name: "Footwear"},
    { name: "Tops"},
    { name: "Bottom"},
    { name: "Face"},
    { name: "Accessory 1"},
    { name: "Accessory 2"}
  ]
},

// ------------------ Pepo ------------------

  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Pepo" },
      { name: "Background" },
      { name: "Body"},
      { name: "Footwear"},
      { name: "Bottom"},
      { name: "Tops"},
      { name: "Face"},
      { name: "Eyewear"},
      { name: "Headwear"},
      { name: "Accessory 1"},
      { name: "Accessory 2"}
    ]
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 360,
  height: 360,
};

const background = {
  generate: false,
  brightness: "80%",
};

const foreground = {
  generate: true
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  foreground,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
