"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "CC0, NO ROADMAP, NO F*CKS GIVEN, JUST PIXEL ART PEPO PFPs.";
const baseUri = "ipfs://QmW8xifodMjxdmRstRhfvtszrwtsA6X7sLF4x7nChQAySe";

const layerConfigurations = [

// ------------------ Borat ------------------

{
  growEditionSizeTo: 30,
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
  growEditionSizeTo: 70,
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

// ------------------ The Eye ------------------

{
  growEditionSizeTo: 90,
  layersOrder: [
    { name: "The Eye" },
    { name: "Background" },
    { name: "Body"},
    { name: "Footwear"},
    { name: "Headwear"}
  ]
},

// ------------------ Smiley ------------------

{
  growEditionSizeTo: 100,
  layersOrder: [
    { name: "Smiley" },
    { name: "Background" },
    { name: "Body"},
    { name: "Footwear"},
    { name: "Eyewear"},
    { name: "Headwear"}
  ]
},

// ------------------ Pepo ------------------

  {
    growEditionSizeTo: 3333,
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

const shuffleLayerConfigurations = false;

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
