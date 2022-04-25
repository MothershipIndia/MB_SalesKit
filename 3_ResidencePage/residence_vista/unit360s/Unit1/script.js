(function(){
    var script = {
 "shadow": false,
 "overflow": "visible",
 "id": "rootPlayer",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED92E3F1_F95A_4545_41EC_D9110EA82A31",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -102.55,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_t.jpg",
 "overlays": [
  "this.overlay_D0BFB1EE_C17B_5F6F_41B8_3BB35E71CBDA",
  "this.overlay_D7AD8B99_C1C8_C3B2_41E5_BE5FE2CDC07C",
  "this.overlay_FABDCAC1_F43F_5F4E_41E2_AAFD655BF8A3",
  "this.overlay_EED8AB12_F969_12EA_41E5_EBE8F394536C"
 ],
 "label": "11 Bedroom 2.1",
 "id": "panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB",
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.83,
   "class": "AdjacentPanorama",
   "yaw": 116.73,
   "distance": 1,
   "panorama": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749"
  },
  {
   "panorama": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1801.7,
   "class": "PanoramaMapLocation",
   "angle": 210.14,
   "y": 694.59
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAC4D5B9_F95A_4DC2_41CB_F440A2BBDEED",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 52,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED6DE376_F95A_454F_41DF_BAEDDB87A4A2",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D344DC22_C179_4497_41D3_08184DD4B575_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 87.94,
  "pitch": 0.45
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC40144E_F95A_435E_41E5_20D3970B1A95",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -2.07,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED6AF376_F95A_454F_41E5_C4263DF04EDE",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA84F365_F95A_454D_41DB_4F73B509C798",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9F6361_F95A_4545_41C1_AEF12A29B4AB",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA8AE368_F95A_4543_41E0_93610AD1EF37",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECFDA4BE_F95A_433F_41CA_C32BAE5E8DB0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -89.19,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDA2C3E7_F95A_454D_41E0_9FF1904DCDCB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 21.21,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED6E8378_F95A_4543_41ED_F55C42D338E8",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_t.jpg",
 "overlays": [
  "this.overlay_D06C5871_C157_4D75_41E2_F81AE33AFA96"
 ],
 "label": "06 Balcony View L.R.",
 "id": "panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.04,
   "class": "AdjacentPanorama",
   "yaw": -76.37,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 972.22,
   "class": "PanoramaMapLocation",
   "angle": -83.57,
   "y": 89.11
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED76036D_F95A_455D_41DB_E40011AD2D33",
 "items": [
  "this.PanoramaPlayListItem_ED488382_F95A_45C7_41C2_EE3128D42F06"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAB8E5D8_F95A_4D42_41AF_8FE4150BDE37",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 121.64,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED55337A_F95A_4547_41DD_C408DF536CD2",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9AB360_F95A_4543_41CF_2A2652382398",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -15.22,
  "pitch": -0.19
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA97D35E_F95A_457F_41E5_49AA0FE805EF",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9C9361_F95A_4545_41C9_255C175D17FA",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9D8360_F95A_4543_41CA_AA9A467EAD28",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 92.63,
  "pitch": 1.55
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D0C2C685_C148_C59D_41D9_A3266B046410_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 97,
  "pitch": 1.86
 },
 "automaticRotationSpeed": 0
},
{
 "thumbnailUrl": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_t.jpg",
 "overlays": [
  "this.overlay_D0C2F685_C148_C59D_41B5_EF045C67FE62"
 ],
 "label": "20 M.BEDROOM 1 Toilet",
 "id": "panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
 "adjacentPanoramas": [
  {
   "backwardYaw": 150.56,
   "class": "AdjacentPanorama",
   "yaw": 157.51,
   "distance": 1,
   "panorama": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 134.81,
   "class": "PanoramaMapLocation",
   "angle": -114.34,
   "y": 436.91
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED57537B_F95A_4545_41EA_FD455718948F",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8FC36A_F95A_4547_41CF_D5A4323A04CC",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA87B365_F95A_454D_41D4_FCD049C7DC6B",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF45A533_F95A_42C5_41E2_007E81D41725",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 174.81,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED63F372_F95A_4547_41BD_38FA0AB507A5",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA99635F_F95A_457D_41C3_99974C8C780A",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9B8360_F95A_4543_41ED_7D752C83C74E",
 "items": [
  "this.PanoramaPlayListItem_ED5A937D_F95A_453D_41CA_89EA6B46D6D6"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECDA34D4_F95A_4343_41D9_EC4EDBE01363",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 70.81,
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_t.jpg",
 "overlays": [
  "this.overlay_ECD0120E_F959_32FA_418C_7CC7E577256E",
  "this.overlay_EF73B1AE_F95B_113B_41DE_697A91B75201",
  "this.overlay_EC8889CC_F958_F17F_41EC_7B9024A74423"
 ],
 "label": "10 Bedroom 2 Passage",
 "id": "panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.39,
   "class": "AdjacentPanorama",
   "yaw": -4.68,
   "distance": 1,
   "panorama": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749"
  },
  {
   "backwardYaw": -109.19,
   "class": "AdjacentPanorama",
   "yaw": 60.82,
   "distance": 1,
   "panorama": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575"
  },
  {
   "backwardYaw": 90.24,
   "class": "AdjacentPanorama",
   "yaw": 77.45,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1505.49,
   "class": "PanoramaMapLocation",
   "angle": -162.56,
   "y": 489.98
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 31.38,
  "pitch": 0.1
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8D1368_F95A_4543_4199_5CABF390A088",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED625373_F95A_4545_41C0_105927B1D63E",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF55E525_F95A_42CD_41E1_9C87B89C35F5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -152.14,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_ED64B373_F95A_4545_41B0_FA6C28B7BCAB",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 30.06,
  "pitch": 0.03
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED664374_F95A_4543_41EC_4D27CA5B1554",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED677374_F95A_4543_41ED_52A223CFBBDE",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9B035F_F95A_457D_419E_27DACD86C0C5",
 "items": [
  "this.PanoramaPlayListItem_ED5A137D_F95A_453D_41E8_06A50F6F8F9B"
 ]
},
{
 "thumbnailUrl": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_t.jpg",
 "overlays": [
  "this.overlay_D1395BDC_C159_43B3_41E7_D95A520558BC",
  "this.overlay_D1394BDC_C159_43B3_41D2_8719B53A23EC",
  "this.overlay_D139BBDC_C159_43B3_41CE_6591D83960B9",
  "this.overlay_D139FBDC_C159_43B3_41B2_ED0C776F8299",
  "this.overlay_D139CBDC_C159_43B3_41C7_36B52FEBF0E1",
  "this.overlay_D1380BDC_C159_43B3_417E_0EF65CE757B0",
  "this.overlay_D1387BDC_C159_43B3_41C9_B0BCF8A822B8",
  "this.overlay_D1385BDC_C159_43B3_41D4_390FDDA0139C",
  "this.overlay_DB0AD25A_D519_93CB_41E7_B83D14FDC214",
  "this.overlay_DB00A25A_D519_93CB_41CF_57F049C7C430",
  "this.overlay_DB00B25A_D519_93CB_41E7_A69773A887DD"
 ],
 "label": "02 Dining Room View",
 "id": "panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 107.99,
   "class": "AdjacentPanorama",
   "yaw": -158.79,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  },
  {
   "panorama": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 32.09,
   "class": "AdjacentPanorama",
   "yaw": 90.81,
   "distance": 1,
   "panorama": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09"
  },
  {
   "panorama": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1236.9,
   "class": "PanoramaMapLocation",
   "angle": 87.7,
   "y": 613.24
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 71.03,
  "pitch": -0.54
 }
},
{
 "class": "PlayList",
 "id": "playList_ED527379_F95A_4545_41C8_AF325AC74A77",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED55E37A_F95A_4547_41E2_0AF41AAE0A21",
 "items": [
  "this.PanoramaPlayListItem_ED33E385_F95A_45CD_41E5_95FCF42BDB61"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED7EE370_F95A_4543_41E9_8F37CF9015FF",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EADE85AF_F95A_4DDE_41E9_31658166470D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -76.38,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA9C0361_F95A_4545_41E4_4F74CE807DA3",
 "items": [
  "this.PanoramaPlayListItem_ED5C637D_F95A_453D_41DB_6CE6FAE3EDAA"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED73136B_F95A_4545_41DD_C1F77995295A",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED608371_F95A_4545_41E5_B12EB40C60C2",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA418DF1_F871_A3DC_41E9_19384992453C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 55.18,
  "pitch": -0.03
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED72636C_F95A_4543_41E3_8BF3F20C67CE",
 "items": [
  "this.PanoramaPlayListItem_ED491382_F95A_45C7_41C9_178A098A5FFB"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED696375_F95A_454D_41E0_1C794C7B3D8D",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAA345E2_F95A_4D46_41EC_6859923F8DAA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -81.57,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA86D366_F95A_454F_41C9_0282CA6EE028",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC9944FD_F95A_433D_41D8_C5260E190555",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.17,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECBBB4E8_F95A_4343_41A3_42556B268562",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -53.09,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8F536A_F95A_4547_41DD_6867BE61123E",
 "items": [
  "this.PanoramaPlayListItem_ED46B381_F95A_45C5_41E8_1A7CCCCCDF22"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EA9635F6_F95A_4D4E_41D4_AFA2C8822581",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -63.27,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_EA92A35D_F95A_457D_41E5_C3370D4F9BD9",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED7C5370_F95A_4543_41EA_00D2D0480211",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF778511_F95A_42C5_41A9_52D52C6821B2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -81.54,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 97.95,
  "pitch": -0.24
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8BB367_F95A_454D_419A_54C11CE91619",
 "items": [
  "this.PanoramaPlayListItem_ED442380_F95A_45C3_41C8_938AD6F2406C"
 ]
},
{
 "thumbnailUrl": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_t.png",
 "overlays": [
  "this.overlay_E7370F14_F42F_56F6_41E7_A44061541F5D",
  "this.overlay_E7CBFF1F_F42E_B6F2_41E7_BA1A305E9102",
  "this.overlay_E73583B3_F42F_4D32_41D9_D2F307527E16",
  "this.overlay_E7884A40_F42F_7F4E_41EB_AC0486393606",
  "this.overlay_E0708E13_F42F_56F2_41DA_1222F7EEF3F2",
  "this.overlay_E7288EFC_F42E_F735_41E3_62E1F68E45DD",
  "this.overlay_E7B9D330_F42E_CECD_41DA_33BD50DEEBDB",
  "this.overlay_E78D94C9_F431_4B5E_41E6_E2B0129B0F1B",
  "this.overlay_E1797D09_F431_5ADF_41E8_ACF2F3B9ACF9",
  "this.overlay_E032B8F5_F431_5B37_41DB_C91F4DBCD738",
  "this.overlay_E7324B2D_F432_DED7_41E1_13BF120F1B13",
  "this.overlay_E06B68C8_F437_5B5D_41E0_CD58E749229E",
  "this.overlay_E8C9C0FF_F4D1_4B33_41CE_294124CA8F93",
  "this.overlay_EA1D6871_F4D7_7B4F_41E0_FA6195DED09F",
  "this.overlay_E9F89A26_F4D6_FED5_41D1_99E19B63AE59",
  "this.overlay_EAB28511_F4D1_CACF_41EA_5D9AB4E5DF77",
  "this.overlay_E934D2F1_F4D3_CF4F_41ED_6849F173EA69",
  "this.overlay_EB9628A1_F4D2_BBCF_41E4_89DD8DC96F97",
  "this.overlay_EAD69755_F4DF_5577_41E5_9D883931AFC1",
  "this.overlay_EBD99236_F4D3_4F35_41E4_415F53DD81CF",
  "this.overlay_D68899FD_F4D2_DD36_41D7_0BAE05DF567B",
  "this.overlay_D4BE8FDB_F4D1_F573_4188_3771CC8F1D8B",
  "this.overlay_F7718903_F8DF_3EE9_4198_6804A9BD4815",
  "this.overlay_E234AA97_F97B_F3E9_41E2_33483242E85B",
  "this.overlay_E506F615_F969_72E9_41E3_94917FE4C13B"
 ],
 "label": "Typical Floorplate - radar",
 "minimumZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.07,
 "width": 1920,
 "class": "Map",
 "id": "map_E79B7F69_F451_D551_41E8_857F790F1899",
 "image": {
  "levels": [
   {
    "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899.png",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   },
   {
    "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_lq.png",
    "width": 341,
    "class": "ImageResourceLevel",
    "height": 192,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.7,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#000000",
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1,
 "height": 1080
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED1F63A2_F95A_45C7_41E2_7A7C52641FDE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -149.28,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "thumbnailUrl": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_t.jpg",
 "overlays": [
  "this.overlay_E9EB43AF_F870_6044_41E3_905630B275AA",
  "this.overlay_E9EB23AF_F870_6044_41E0_5A7328B25774",
  "this.overlay_E9EB33AF_F870_6044_41E9_CC21B537896E"
 ],
 "label": "08 Bedroom 1.1",
 "id": "panorama_E9EB63AF_F870_6044_41D3_42F1B975F168",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 103.62,
   "class": "AdjacentPanorama",
   "yaw": 62.44,
   "distance": 1,
   "panorama": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 101.88,
   "class": "PanoramaMapLocation",
   "angle": 2.79,
   "y": 673.13
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EF9BC419_F957_1719_41E3_673C33102749_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.59,
  "pitch": -0.25
 }
},
{
 "thumbnailUrl": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_t.jpg",
 "overlays": [
  "this.overlay_EF356806_F850_6044_41DE_B4BCBAEF20EE",
  "this.overlay_EF354806_F850_6045_41E9_045997D7D46C",
  "this.overlay_EF353807_F850_6044_41EC_24F7096F956D",
  "this.overlay_EF352807_F850_6044_41D8_DD25E2BD7ABA",
  "this.overlay_EF351807_F850_6044_41D8_CCCB077FB95C"
 ],
 "label": "17 M.BEDROOM 1.1",
 "id": "panorama_EF357806_F850_6044_41DD_51927F40D33F",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -58.36,
   "class": "AdjacentPanorama",
   "yaw": 30.72,
   "distance": 1,
   "panorama": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05"
  },
  {
   "backwardYaw": 98.43,
   "class": "AdjacentPanorama",
   "yaw": -22.96,
   "distance": 1,
   "panorama": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 241.07,
   "class": "PanoramaMapLocation",
   "angle": 165.94,
   "y": 157.96
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECEDC4CA_F95A_4347_41B4_26596B0ABC6B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.61,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_EA825364_F95A_4543_41C2_09CC51544BFD",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_t.jpg",
 "overlays": [
  "this.overlay_EEC4F207_F850_6045_41B3_8F5F696D64B8",
  "this.overlay_EEC4D207_F850_6045_41E2_CD85A955918B"
 ],
 "label": "26 M.BEDROOM 2 Walk-In",
 "id": "panorama_EEC41207_F850_6045_41E3_A17D10963C1C",
 "adjacentPanoramas": [
  {
   "backwardYaw": 27.86,
   "class": "AdjacentPanorama",
   "yaw": 60.88,
   "distance": 1,
   "panorama": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0"
  },
  {
   "backwardYaw": -5.19,
   "class": "AdjacentPanorama",
   "yaw": -88.97,
   "distance": 1,
   "panorama": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1659.8,
   "class": "PanoramaMapLocation",
   "angle": 83.21,
   "y": 416.29
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDD633CA_F95A_4547_41A5_F7495B6CEFDB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -91.2,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA96C35E_F95A_457F_41B9_965209A56991",
 "items": [
  "this.PanoramaPlayListItem_ED58F37C_F95A_4543_41D1_5EC8012AC83D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDB493DD_F95A_457D_41A3_1FF6D49191D5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 118.54,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC1CD496_F95A_43CE_41BC_513CE6CDD1A4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 120.49,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA808363_F95A_4545_41D0_E871C5D3C68C",
 "items": [
  "this.PanoramaPlayListItem_ED41C37F_F95A_453D_41B9_F59A8A2340EC"
 ]
},
{
 "thumbnailUrl": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_t.jpg",
 "overlays": [
  "this.overlay_EC4CC493_F870_A05C_41EC_E6CF20E4AE43",
  "this.overlay_EC4CF493_F870_A05C_41EA_9AD9951F8FCD",
  "this.overlay_EC4C8493_F870_A05C_41D4_A66D87608A4D",
  "this.overlay_EC4C9493_F870_A05C_41E4_916892AFFE07",
  "this.overlay_EC4CA493_F870_A05C_41E6_B708995DDC5F"
 ],
 "label": "22 M.BEDROOM 2 2",
 "id": "panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3",
 "adjacentPanoramas": [
  {
   "backwardYaw": 103.61,
   "class": "AdjacentPanorama",
   "yaw": 179.84,
   "distance": 1,
   "panorama": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626"
  },
  {
   "backwardYaw": 141.12,
   "class": "AdjacentPanorama",
   "yaw": 58.28,
   "distance": 1,
   "panorama": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386"
  },
  {
   "panorama": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -88.97,
   "class": "AdjacentPanorama",
   "yaw": -5.19,
   "distance": 1,
   "panorama": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1637.88,
   "class": "PanoramaMapLocation",
   "angle": 182.16,
   "y": 141.35
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 93.23,
  "pitch": 0.22
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC0CF4AB_F95A_43C6_41ED_F660BC0FAD85",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -117.56,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA899366_F95A_454F_41E0_514E18BB1132",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF67A51B_F95A_42C5_41EC_B5EC6AE66700",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 99.53,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED77036D_F95A_455D_41E0_FC09AC66FA05",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_t.jpg",
 "overlays": [
  "this.overlay_E02E2A93_F851_E05C_41D8_087E1F280ACE",
  "this.overlay_E02E0A94_F851_E044_41E4_BE797FC249BF"
 ],
 "label": "18 M.BEDROOM 1 Walk-In",
 "id": "panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05",
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.72,
   "class": "AdjacentPanorama",
   "yaw": -58.36,
   "distance": 1,
   "panorama": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F"
  },
  {
   "backwardYaw": 157.51,
   "class": "AdjacentPanorama",
   "yaw": 150.56,
   "distance": 1,
   "panorama": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 237.81,
   "class": "PanoramaMapLocation",
   "angle": 66.28,
   "y": 428.05
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ECD0920D_F959_32FE_41E8_8275959593A0_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 9.64,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D12E6442_C159_C497_41D1_9F3574497E09_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA81E362_F95A_4547_41EB_6289EC69F58F",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED75036C_F95A_4543_41EE_7674603CD870",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED70836B_F95A_4545_41E1_A136173DD480",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED657373_F95A_4545_41D3_BEBEDED10275",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA88F367_F95A_454D_41B2_145181232F67",
 "items": [
  "this.PanoramaPlayListItem_ED455380_F95A_45C3_41C8_62F809FCE645"
 ]
},
{
 "thumbnailUrl": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_t.jpg",
 "overlays": [
  "this.overlay_D1070C46_C159_449E_41E0_ADCCF72C1DA7"
 ],
 "label": "00 Foyer View",
 "id": "panorama_D118DC46_C159_449E_41D8_4DF791AB41FF",
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.89,
   "class": "AdjacentPanorama",
   "yaw": 177.93,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 972.22,
   "class": "PanoramaMapLocation",
   "angle": 179.25,
   "y": 770.44
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED71936B_F95A_4545_41EE_4F131ACF6671",
 "items": [
  "this.PanoramaPlayListItem_ED466381_F95A_45C5_41A9_02DC623594F1"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED78636E_F95A_455F_41D6_70028F8EA97E",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA95635E_F95A_457F_41EB_275A613DFE8A",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA96735E_F95A_457F_41E6_3166971FE2F0",
 "items": [
  "this.PanoramaPlayListItem_ED58637C_F95A_4543_41E7_E88215415132"
 ]
},
{
 "thumbnailUrl": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_t.jpg",
 "overlays": [
  "this.overlay_EF36F4D6_F851_A1C4_41B4_ECE028CB5557"
 ],
 "label": "19 M.BEDROOM 1 Balcony",
 "id": "panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25",
 "adjacentPanoramas": [
  {
   "backwardYaw": 98.46,
   "class": "AdjacentPanorama",
   "yaw": 125.21,
   "distance": 1,
   "panorama": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 269.43,
   "class": "PanoramaMapLocation",
   "angle": -4.63,
   "y": 54.4
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_EA99E35F_F95A_457D_41EA_8735B6BBD5DB",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED505378_F95A_4543_4177_F48D0D488DC0",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9A0360_F95A_4543_41D9_1634C183C675",
 "items": [
  "this.PanoramaPlayListItem_ED5D037D_F95A_453D_41E1_B52BEE6C1279"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED65D373_F95A_4545_41E5_A3EB77452BBF",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EF357806_F850_6044_41DD_51927F40D33F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 34.6,
  "pitch": -0.22
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED698375_F95A_454D_41DD_A0350F5221DD",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_t.jpg",
 "overlays": [
  "this.overlay_D177A92A_C158_CC97_41D4_7E9E57103D5C",
  "this.overlay_D177992A_C158_CC97_41E5_D9B8EB9B5120",
  "this.overlay_D177692A_C158_CC97_41DD_92F9E160BEAD",
  "this.overlay_D177792A_C158_CC97_41DC_FD0E5FB7A28F",
  "this.overlay_D177592A_C158_CC97_41E0_D96C1260A3BD",
  "this.overlay_D177092A_C158_CC97_41E6_EA148B92A128",
  "this.overlay_D174E92A_C158_CC97_41E0_84019549270B",
  "this.overlay_D174A92A_C158_CC97_41D7_EC5AF4920433",
  "this.overlay_D174B92B_C158_CC95_41D6_F26CD5B81BCD",
  "this.overlay_D174992B_C158_CC95_41E3_BCE19C49B410",
  "this.overlay_D174692B_C158_CC95_41B6_3E8528D2C10B"
 ],
 "label": "01 Living Room View",
 "id": "panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
 "adjacentPanoramas": [
  {
   "backwardYaw": 137.28,
   "class": "AdjacentPanorama",
   "yaw": -128,
   "distance": 1,
   "panorama": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826"
  },
  {
   "backwardYaw": -61.46,
   "class": "AdjacentPanorama",
   "yaw": -84.26,
   "distance": 1,
   "panorama": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E"
  },
  {
   "backwardYaw": -158.79,
   "class": "AdjacentPanorama",
   "yaw": 107.99,
   "distance": 1,
   "panorama": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7"
  },
  {
   "backwardYaw": 77.45,
   "class": "AdjacentPanorama",
   "yaw": 90.24,
   "distance": 1,
   "panorama": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0"
  },
  {
   "backwardYaw": -154.01,
   "class": "AdjacentPanorama",
   "yaw": -80.47,
   "distance": 1,
   "panorama": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E"
  },
  {
   "backwardYaw": -64.09,
   "class": "AdjacentPanorama",
   "yaw": 126.91,
   "distance": 1,
   "panorama": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83"
  },
  {
   "backwardYaw": -76.37,
   "class": "AdjacentPanorama",
   "yaw": 5.04,
   "distance": 1,
   "panorama": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808"
  },
  {
   "panorama": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -97.86,
   "class": "AdjacentPanorama",
   "yaw": 88.8,
   "distance": 1,
   "panorama": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386"
  },
  {
   "backwardYaw": 177.93,
   "class": "AdjacentPanorama",
   "yaw": 179.89,
   "distance": 1,
   "panorama": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF"
  },
  {
   "backwardYaw": -98.27,
   "class": "AdjacentPanorama",
   "yaw": -83.68,
   "distance": 1,
   "panorama": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 973.53,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 291.93
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECCBB4DF_F95A_437D_41DE_80D99F1D2872",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -89.76,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8CE369_F95A_4545_41EE_C9D16B58E63C",
 "items": [
  "this.PanoramaPlayListItem_ED474380_F95A_45C3_41EC_2BF77878B815"
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9D0360_F95A_4543_41E7_FF85D5BC278F",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED7DA36F_F95A_455D_41C0_454238C34B22",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EA80D600_F95A_4EC2_41D1_F63E5B2C814C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -29.44,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA883366_F95A_454F_41CD_6B07D94F90F3",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 74.28,
  "pitch": 0.31
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED79436E_F95A_455F_41D3_EBF171833E57",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -42.07,
  "pitch": 0.07
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EA8A860A_F95A_4EC6_41E6_E5D59EE94D01",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 156.44,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED55B37A_F95A_4547_41E9_8727FAAB8F31",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_ED618371_F95A_4545_41E8_F86DD8899405",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_t.jpg",
 "overlays": [
  "this.overlay_EC737CF6_F870_61C7_41CD_B3401972561E",
  "this.overlay_EC734CF6_F870_61C7_418E_CED632867D14",
  "this.overlay_EC732CF6_F870_61C7_41C7_73AA29514D37",
  "this.overlay_EC731CF6_F870_61C7_41BE_D5030CDE64ED",
  "this.overlay_EC73ECF7_F870_61C5_41DE_18EA6BB19449"
 ],
 "label": "21 M.BEDROOM 2 1",
 "id": "panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 58.28,
   "class": "AdjacentPanorama",
   "yaw": 141.12,
   "distance": 1,
   "panorama": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3"
  },
  {
   "backwardYaw": 88.8,
   "class": "AdjacentPanorama",
   "yaw": -97.86,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  },
  {
   "panorama": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1336.26,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 353.78
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_EA98B35F_F95A_457D_41D5_E65C97CCBB38",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED824405_F95A_42CD_41DE_5F3A9DDD0561",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 25.99,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC2EB487_F95A_43CE_41E6_2117150D8760",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 96.32,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA80D363_F95A_4545_41EE_4BAAA0FC6F46",
 "items": [
  "this.PanoramaPlayListItem_ED5EE37E_F95A_453F_41EB_1DD539072C60"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED50D378_F95A_4543_41D4_1BB5B849FB17",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED74136C_F95A_4543_41E2_A2867931B2D5",
 "items": [
  "this.PanoramaPlayListItem_ED49C382_F95A_45C7_41E2_81E547C98FD7"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "thumbnailUrl": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_t.jpg",
 "overlays": [
  "this.overlay_D344FC22_C179_4497_41E1_ABE28AD1A073"
 ],
 "label": "12 Bedroom 2 Toilet",
 "id": "panorama_D344DC22_C179_4497_41D3_08184DD4B575",
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.82,
   "class": "AdjacentPanorama",
   "yaw": -109.19,
   "distance": 1,
   "panorama": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1412.38,
   "class": "PanoramaMapLocation",
   "angle": 93.13,
   "y": 570.97
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED57C37B_F95A_4545_41E8_341823733411",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED53C379_F95A_4545_41DA_0612B3419405",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_t.jpg",
 "overlays": [
  "this.overlay_D12E5442_C159_C497_41E4_522229395C8B",
  "this.overlay_D12E4442_C159_C497_41CA_04DEB832DD34",
  "this.overlay_D12E1447_C159_C49D_41E7_EB2646CCCF5E",
  "this.overlay_D12EC447_C159_C49D_41DC_8116D473A873"
 ],
 "label": "03 Pooja Room View",
 "id": "panorama_D12E6442_C159_C497_41D1_9F3574497E09",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 90.81,
   "class": "AdjacentPanorama",
   "yaw": 32.09,
   "distance": 1,
   "panorama": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7"
  },
  {
   "panorama": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1181.67,
   "class": "PanoramaMapLocation",
   "angle": 10.33,
   "y": 770.44
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED6FD377_F95A_454D_41E9_0A3D3E82F4AD",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED6B6375_F95A_454D_41E4_2EF0F1311EFE",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED6F4377_F95A_454D_41EA_F625FFD79199",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED534379_F95A_4545_41ED_0CBA37DEDD79",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED7CD370_F95A_4543_41CE_4A154CE84A3F",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAD0158F_F95A_4DDE_41EA_098FBF55BEAB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -76.39,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAAC55EB_F95A_4D46_41EE_EED69F0694A9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 175.32,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EADBC5A4_F95A_4DC2_41E7_14810AB6D435",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 91.03,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_EA8EF36A_F95A_4547_41D5_845DC4EB0C8C",
 "items": [
  "this.PanoramaPlayListItem_ED479381_F95A_45C5_41E6_B110385F2BB5"
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA866366_F95A_454F_41C0_5509A9D11492",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA8A2367_F95A_454D_41ED_680C2350D7B9",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 90.13,
  "pitch": 1.28
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC3ED472_F95A_434B_4196_833406B4EA62",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -119.12,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_ED52E37A_F95A_4547_41E8_FDD87AC424A4",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 50.95,
  "pitch": 0.16
 }
},
{
 "thumbnailUrl": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_t.jpg",
 "overlays": [
  "this.overlay_D01D4F05_C149_C49D_4182_1CA214C516AA"
 ],
 "label": "15 Home Office",
 "id": "panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.47,
   "class": "AdjacentPanorama",
   "yaw": -154.01,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 640.19,
   "class": "PanoramaMapLocation",
   "angle": 296.16,
   "y": 251.07
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_EA97535E_F95A_457F_41BE_02ED3C5D11A2",
 "items": [
  "this.PanoramaPlayListItem_ED59837C_F95A_4543_41EF_0F7F64D02D55"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDE6A3C0_F95A_4543_4194_5569686A47F0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -121.72,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC635429_F95A_42C2_41E6_4D650D563942",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 103.63,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "thumbnailUrl": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_t.jpg",
 "overlays": [
  "this.overlay_EA41EDF1_F871_A3DC_418F_2F427EAACD80",
  "this.overlay_EA401DF1_F871_A3DC_41E4_93793C7EF549",
  "this.overlay_EA404DF1_F871_A3DC_41E9_74E82D148F2D"
 ],
 "label": "07 Bedroom 1",
 "id": "panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.68,
   "class": "AdjacentPanorama",
   "yaw": -98.27,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  },
  {
   "backwardYaw": -59.51,
   "class": "AdjacentPanorama",
   "yaw": -23.56,
   "distance": 1,
   "panorama": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776"
  },
  {
   "backwardYaw": 62.44,
   "class": "AdjacentPanorama",
   "yaw": 103.62,
   "distance": 1,
   "panorama": "this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 344.26,
   "class": "PanoramaMapLocation",
   "angle": 134.3,
   "y": 551.66
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_t.jpg",
 "overlays": [
  "this.overlay_E9C321E8_F87F_A3CC_41D9_33EB330E4F3E"
 ],
 "label": "09 Bedroom 1 Toilet",
 "id": "panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776",
 "adjacentPanoramas": [
  {
   "backwardYaw": -23.56,
   "class": "AdjacentPanorama",
   "yaw": -59.51,
   "distance": 1,
   "panorama": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 426.45,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 584.5
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED6A7376_F95A_454F_41C7_390B810D317E",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED51B378_F95A_4543_41EB_20BEFF713814",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF33F53E_F95A_4D3F_41D7_5197B2B9145B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -54.79,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EACBE5C2_F95A_4D46_41C5_01589A1BC923",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -72.01,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA92235D_F95A_457D_41BC_9430D86FBF40",
 "items": [
  "this.PanoramaPlayListItem_ED56B37B_F95A_4545_41E8_0FA3AF3EF2CA"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC50043E_F95A_433E_41E4_54CC372EB384",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 82.14,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA811362_F95A_4547_41E0_25B4AF0730AC",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA85E365_F95A_454D_41DC_F7958A980431",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED76936D_F95A_455D_41C8_F25FEEC55AAC",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC73341A_F95A_42C6_41EB_68189196E4F0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 115.91,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "thumbnailUrl": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_t.jpg",
 "overlays": [
  "this.overlay_D2FBB014_C149_5CB3_41C5_692CEC3B7B5B"
 ],
 "label": "14 Powder Toilet",
 "id": "panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.91,
   "class": "AdjacentPanorama",
   "yaw": -64.09,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1360.7,
   "class": "PanoramaMapLocation",
   "angle": 0.64,
   "y": 697.39
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_t.jpg",
 "overlays": [
  "this.overlay_EDEC4B90_F850_A05C_41EA_A8F659CF9F0A"
 ],
 "label": "M.BEDROOM 2 Toilet",
 "id": "panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.88,
   "class": "AdjacentPanorama",
   "yaw": 27.86,
   "distance": 1,
   "panorama": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1772.41,
   "class": "PanoramaMapLocation",
   "angle": -65.22,
   "y": 437.84
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC87D507_F95A_42CD_41E8_9D5C2D98DF1C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -119.18,
  "pitch": 0
 }
},
{
 "viewerArea": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "id": "ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer"
},
{
 "class": "PlayList",
 "id": "playList_ED60C372_F95A_4547_41E0_482AFC1BB38E",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA8E0369_F95A_4545_41D3_BD1588B7B8FA",
 "items": [
  "this.PanoramaPlayListItem_ED463381_F95A_45C5_41B7_F9100A8CF064"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF107553_F95A_4D45_41D2_A5C6E0D4F9DC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 157.04,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA9EE362_F95A_4547_41EC_8A291D11CDAC",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED7BD36F_F95A_455D_4197_F9A19B0EC8B5",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA84A365_F95A_454D_41E7_A002B70724EE",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECA9B4F2_F95A_4347_41CF_5355F36F60E5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -0.11,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED129398_F95A_45C3_41AE_AD66143E2DDB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -0.16,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAD4159A_F95A_4DC6_41D4_A753BAAD8A0A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -38.88,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D0488A22_C157_4C97_41B1_6326EDD36826_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 179.57,
  "pitch": -1.21
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA9FE361_F95A_4545_41EA_2751B519490F",
 "items": [
  "this.PanoramaPlayListItem_ED5F637E_F95A_453F_41D7_3F2FCB8F3356"
 ]
},
{
 "thumbnailUrl": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_t.jpg",
 "overlays": [
  "this.overlay_D048CA22_C157_4C97_41E6_6F000731AB9D",
  "this.overlay_D0495A22_C157_4C97_41DB_C737748A1601",
  "this.overlay_D048AA22_C157_4C97_41E0_428AF1E21E8A"
 ],
 "label": "04 Kitchen View",
 "id": "panorama_D0488A22_C157_4C97_41B1_6326EDD36826",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -128,
   "class": "AdjacentPanorama",
   "yaw": 137.28,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 804.29,
   "class": "PanoramaMapLocation",
   "angle": -89.01,
   "y": 653.82
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED0A03AC_F95A_45C3_41D2_B6BAAD043DDF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -22.49,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA98335F_F95A_457D_41D1_6CB7FBE959D2",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA851364_F95A_4543_41D0_3A3CBA8119A1",
 "items": [
  "this.PanoramaPlayListItem_ED43137F_F95A_453D_41DE_8CD6A2899AF5"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED6C8377_F95A_454D_41E8_3B58A8CB5163",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED54237A_F95A_4547_41D7_75CD29FFF446",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_t.jpg",
 "overlays": [
  "this.overlay_D00E51FC_C149_5F73_41DE_A0B00833C01A",
  "this.overlay_D00191FC_C149_5F73_41DD_BF5592D3A537",
  "this.overlay_D001F1FC_C149_5F73_41CB_3045E15F5BF8",
  "this.overlay_D571B67F_C1D8_C56D_41D6_A71FCF58BB6E",
  "this.overlay_FAB11D6D_F431_D556_41C8_B0B33DA033AA"
 ],
 "label": "16 M.BEDROOM 1 ",
 "id": "panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 125.21,
   "class": "AdjacentPanorama",
   "yaw": 98.46,
   "distance": 1,
   "panorama": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25"
  },
  {
   "backwardYaw": -84.26,
   "class": "AdjacentPanorama",
   "yaw": -61.46,
   "distance": 1,
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A"
  },
  {
   "panorama": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -22.96,
   "class": "AdjacentPanorama",
   "yaw": 98.43,
   "distance": 1,
   "panorama": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 430.46,
   "class": "PanoramaMapLocation",
   "angle": -103.35,
   "y": 363.49
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "thumbnailUrl": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_t.jpg",
 "overlays": [
  "this.overlay_EA79B492_F870_605C_41E3_2AFC5B91127E"
 ],
 "label": "25 M.BEDROOM 2 Balcony",
 "id": "panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626",
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.84,
   "class": "AdjacentPanorama",
   "yaw": 103.61,
   "distance": 1,
   "panorama": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1393.54,
   "class": "PanoramaMapLocation",
   "angle": 90.69,
   "y": 63.73
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PlayList",
 "id": "playList_ED7A536F_F95A_455D_41EE_9C92D5999AE1",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA802363_F95A_4545_41D3_55E6732FB80B",
 "items": [
  "this.PanoramaPlayListItem_ED41437E_F95A_453F_41AA_6CFE38200216"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF220549_F95A_4D45_41D2_2F1884BA359F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 95.74,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA83E364_F95A_4543_41BF_1F55E0A93F48",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED7FD370_F95A_4543_4184_DA53FAE51231",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA9E1361_F95A_4545_41C3_C49DB397B085",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PlayList",
 "id": "playList_ED687375_F95A_454D_41EC_1F711EB1718C",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EAB0E5CD_F95A_4D42_41A5_24290A7E455C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -147.91,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA837364_F95A_4543_41DE_F00ECD10BB83",
 "items": [
  "this.PanoramaPlayListItem_ED40437F_F95A_453D_41E2_69D7426DD47E"
 ]
},
{
 "class": "PlayList",
 "id": "playList_ED601372_F95A_4547_41E1_29B56344E6D4",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_EA807362_F95A_4547_41EC_DB91AAD3AE6B",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDC453D3_F95A_4545_41CF_F4DC15DB8E04",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -42.72,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "thumbnailUrl": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_t.jpg",
 "overlays": [
  "this.overlay_EF676BFC_F969_111E_41C3_4E00BBE55789",
  "this.overlay_EE38DFBE_F96B_311B_41A4_B5E61AF1B388",
  "this.overlay_E0AB0AF0_F969_3326_41D2_9DB77E961CEA",
  "this.overlay_EE8A1A26_F969_132B_41C9_75AA3828F476"
 ],
 "label": "10 Bedroom 2 V2",
 "id": "panorama_EF9BC419_F957_1719_41E3_673C33102749",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -4.68,
   "class": "AdjacentPanorama",
   "yaw": -16.39,
   "distance": 1,
   "panorama": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0"
  },
  {
   "panorama": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 116.73,
   "class": "AdjacentPanorama",
   "yaw": 85.83,
   "distance": 1,
   "panorama": "this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_E79B7F69_F451_D551_41E8_857F790F1899",
   "x": 1589.46,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 565.75
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 11,
      "tags": "ondemand",
      "width": 5632,
      "rowCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC310463_F95A_4346_41EA_A554F10A8FBB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 81.73,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8DD368_F95A_4543_41D6_6BF349CBE342",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EEC41207_F850_6045_41E3_A17D10963C1C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_ED7B236E_F95A_455F_41E2_6973CC5023C4",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDF8B3B6_F95A_45CF_41C0_1D6CCAF62D1B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -174.96,
  "pitch": 0
 },
 "automaticRotationSpeed": 0
},
{
 "class": "PlayList",
 "id": "playList_EA8F1369_F95A_4545_41D0_95CA4B7CDCCC",
 "items": [
  {
   "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
   "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
  }
 ]
},
{
 "transitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "id": "MainViewer",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "right": 0,
 "width": "100%",
 "toolTipFontColor": "#606060",
 "progressBottom": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "height": "100%",
 "toolTipPaddingRight": 6,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "borderSize": 0,
 "playbackBarHeadHeight": 15,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "top": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "shadow": false,
 "overflow": "scroll",
 "id": "Container_9ED735C3_9271_436C_41E1_06A73D6E73F2",
 "left": "0%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "children": [
  "this.Container_9C2A965C_9292_C114_41DC_7DD575EABE99",
  "this.Container_9DBA1C59_92B1_411C_41DB_207AA8F4698B",
  "this.Container_9C899F00_92B1_40EC_41D0_CF5F7C9BCFF8",
  "this.Container_9C89F182_92B1_43ED_41D4_0131E1C35E10",
  "this.IconButton_A3B5D0B0_AC72_D720_41CE_8AD43357FD77"
 ],
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "Unitplan_Container"
 }
},
{
 "shadow": false,
 "overflow": "scroll",
 "id": "Container_864FABDC_97D1_800B_41C5_B7D6AB6511FE",
 "left": "0%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "children": [
  "this.WebFrame_86B1E718_97D3_800B_41DD_542A77282AA8",
  "this.WebFrame_8616990E_97D1_8004_41DE_D630A854BFCE",
  "this.WebFrame_86379ADD_97D1_8004_41C7_191CB85EF101",
  "this.WebFrame_85D66C65_97D1_8005_41D9_54DF35C4E322",
  "this.IconButton_B2564B94_9659_CCCE_41A7_67FC7D5805B7"
 ],
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "360 Pano container"
 }
},
{
 "shadow": false,
 "id": "Container_ACEABF0B_A155_DED3_41AB_D5D80FDD2C8A",
 "left": "0%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD",
  "this.MapViewer",
  "this.IconButton_8282E7FC_97F0_800B_41D6_C97DE033915A"
 ],
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "100%",
 "backgroundOpacity": 0,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll",
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "INTERIOR PANO CONTAINER"
 }
},
{
 "shadow": false,
 "id": "Container_BCE2B0EF_AC71_D720_41B3_01CA9A7D0DC6",
 "left": "0.02%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "20.016%",
 "children": [
  "this.IconButton_B3265AF3_9669_CC4B_41D0_D9B6BFF35224"
 ],
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "height": "99.943%",
 "backgroundOpacity": 0,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "visible": false,
 "overflow": "scroll",
 "gap": 10,
 "horizontalAlign": "center",
 "data": {
  "name": "Container4497"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_0_0_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.53,
   "hfov": 12.98,
   "pitch": 10.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_0_0.png",
      "width": 599,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.21,
   "hfov": 12.98,
   "yaw": 109.53
  }
 ],
 "id": "overlay_D0BFB1EE_C17B_5F6F_41B8_3BB35E71CBDA",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA97D35E_F95A_457F_41E5_49AA0FE805EF, 0, this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_2_0_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.53,
   "hfov": 13.12,
   "pitch": 5.76
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_2_0.png",
      "width": 599,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.76,
   "hfov": 13.12,
   "yaw": 109.53
  }
 ],
 "id": "overlay_D7AD8B99_C1C8_C3B2_41E5_BE5FE2CDC07C",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA96735E_F95A_457F_41E6_3166971FE2F0, 0, this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BEDROOM 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_3_0_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.73,
   "hfov": 13.14,
   "pitch": -4.6
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_3_0.png",
      "width": 599,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.6,
   "hfov": 13.14,
   "yaw": 116.73
  }
 ],
 "id": "overlay_FABDCAC1_F43F_5F4E_41E2_AAFD655BF8A3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF9BC419_F957_1719_41E3_673C33102749, this.camera_EC9944FD_F95A_433D_41D8_C5260E190555); this.setMediaBehaviour(this.playList_EA96C35E_F95A_457F_41B9_965209A56991, 0, this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_4_0_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.45,
   "hfov": 13.16,
   "pitch": 0.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_1_HS_4_0.png",
      "width": 598,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.93,
   "hfov": 13.16,
   "yaw": 109.45
  }
 ],
 "id": "overlay_EED8AB12_F969_12EA_41E5_EBE8F394536C",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA99635F_F95A_457D_41C3_99974C8C780A, 0, this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.37,
   "hfov": 10.98,
   "pitch": 2.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_1_HS_0_0.png",
      "width": 499,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.05,
   "hfov": 10.98,
   "yaw": -76.37
  }
 ],
 "id": "overlay_D06C5871_C157_4D75_41E2_F81AE33AFA96",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EDF8B3B6_F95A_45CF_41C0_1D6CCAF62D1B); this.setMediaBehaviour(this.playList_EA8F1369_F95A_4545_41D0_95CA4B7CDCCC, 0, this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED488382_F95A_45C7_41C2_EE3128D42F06, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED488382_F95A_45C7_41C2_EE3128D42F06",
 "camera": "this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "WALK IN"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.51,
   "hfov": 20.96,
   "pitch": 20.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0C2C685_C148_C59D_41D9_A3266B046410_1_HS_0_0.png",
      "width": 1018,
      "class": "ImageResourceLevel",
      "height": 587
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.51,
   "hfov": 20.96,
   "yaw": 157.51
  }
 ],
 "id": "overlay_D0C2F685_C148_C59D_41B5_EF045C67FE62",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05, this.camera_EA80D600_F95A_4EC2_41D1_F63E5B2C814C); this.setMediaBehaviour(this.playList_EA80D363_F95A_4545_41EE_4BAAA0FC6F46, 0, this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED5A937D_F95A_453D_41CA_89EA6B46D6D6, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED5A937D_F95A_453D_41CA_89EA6B46D6D6",
 "camera": "this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_1_HS_1_0_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.82,
   "hfov": 19.78,
   "pitch": -0.01
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_1_HS_1_0.png",
      "width": 899,
      "class": "ImageResourceLevel",
      "height": 330
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.01,
   "hfov": 19.78,
   "yaw": 60.82
  }
 ],
 "id": "overlay_ECD0120E_F959_32FA_418C_7CC7E577256E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D344DC22_C179_4497_41D3_08184DD4B575, this.camera_ECDA34D4_F95A_4343_41D9_EC4EDBE01363); this.setMediaBehaviour(this.playList_EA99E35F_F95A_457D_41EA_8735B6BBD5DB, 0, this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_1_HS_4_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.45,
   "hfov": 19.55,
   "pitch": 8.69
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_1_HS_4_0.png",
      "width": 899,
      "class": "ImageResourceLevel",
      "height": 338
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.69,
   "hfov": 19.55,
   "yaw": 77.45
  }
 ],
 "id": "overlay_EF73B1AE_F95B_113B_41DE_697A91B75201",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_ECCBB4DF_F95A_437D_41DE_80D99F1D2872); this.setMediaBehaviour(this.playList_EA98335F_F95A_457D_41D1_6CB7FBE959D2, 0, this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BEDROOM 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_1_HS_5_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.68,
   "hfov": 16.48,
   "pitch": 0.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0920D_F959_32FE_41E8_8275959593A0_1_HS_5_0.png",
      "width": 749,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.9,
   "hfov": 16.48,
   "yaw": -4.68
  }
 ],
 "id": "overlay_EC8889CC_F958_F17F_41EC_7B9024A74423",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF9BC419_F957_1719_41E3_673C33102749, this.camera_ECEDC4CA_F95A_4347_41B4_26596B0ABC6B); this.setMediaBehaviour(this.playList_EA98B35F_F95A_457D_41D5_E65C97CCBB38, 0, this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED5A137D_F95A_453D_41E8_06A50F6F8F9B, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED5A137D_F95A_453D_41E8_06A50F6F8F9B",
 "camera": "this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "POOJA ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.81,
   "hfov": 10.96,
   "pitch": 3.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_0_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 289
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.93,
   "hfov": 10.96,
   "yaw": 90.81
  }
 ],
 "id": "overlay_D1395BDC_C159_43B3_41E7_D95A520558BC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D12E6442_C159_C497_41D1_9F3574497E09, this.camera_EAB0E5CD_F95A_4D42_41A5_24290A7E455C); this.setMediaBehaviour(this.playList_ED72636C_F95A_4543_41E3_8BF3F20C67CE, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "POWDER ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.09,
   "hfov": 10.95,
   "pitch": 4.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_1_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.61,
   "hfov": 10.95,
   "yaw": 55.09
  }
 ],
 "id": "overlay_D1394BDC_C159_43B3_41D2_8719B53A23EC",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED75036C_F95A_4543_41EE_7674603CD870, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "ENTRANCE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.27,
   "hfov": 10.96,
   "pitch": 4.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_2_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.05,
   "hfov": 10.96,
   "yaw": 166.27
  }
 ],
 "id": "overlay_D139BBDC_C159_43B3_41CE_6591D83960B9",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED74136C_F95A_4543_41E2_A2867931B2D5, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_4_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.86,
   "hfov": 15.05,
   "pitch": 4.07
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_4_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 265
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.07,
   "hfov": 15.05,
   "yaw": -115.86
  }
 ],
 "id": "overlay_D139FBDC_C159_43B3_41B2_ED0C776F8299",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED77036D_F95A_455D_41E0_FC09AC66FA05, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "ENTRANCE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.93,
   "hfov": 10.96,
   "pitch": 4.02
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_6_0.png",
      "width": 500,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.02,
   "hfov": 10.96,
   "yaw": 128.93
  }
 ],
 "id": "overlay_D139CBDC_C159_43B3_41C7_36B52FEBF0E1",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED76036D_F95A_455D_41DB_E40011AD2D33, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_9_0_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.91,
   "hfov": 11.16,
   "pitch": -0.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_9_0.png",
      "width": 508,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62,
   "hfov": 11.16,
   "yaw": -18.91
  }
 ],
 "id": "overlay_D1380BDC_C159_43B3_417E_0EF65CE757B0",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED76936D_F95A_455D_41C8_F25FEEC55AAC, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BEDROOM 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_10_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.44,
   "hfov": 13.15,
   "pitch": 4.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_10_0.png",
      "width": 599,
      "class": "ImageResourceLevel",
      "height": 226
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.2,
   "hfov": 13.15,
   "yaw": -1.44
  }
 ],
 "id": "overlay_D1387BDC_C159_43B3_41C9_B0BCF8A822B8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "living view 3"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_12_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.79,
   "hfov": 11.83,
   "pitch": -10.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_12_0.png",
      "width": 547,
      "class": "ImageResourceLevel",
      "height": 187
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.51,
   "hfov": 11.83,
   "yaw": -158.79
  }
 ],
 "id": "overlay_D1385BDC_C159_43B3_41D4_390FDDA0139C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EACBE5C2_F95A_4D46_41C5_01589A1BC923); this.setMediaBehaviour(this.playList_ED79436E_F95A_455F_41D3_EBF171833E57, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BDROOM 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_13_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.55,
   "hfov": 10.48,
   "pitch": -1.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_13_0.png",
      "width": 477,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.31,
   "hfov": 10.48,
   "yaw": -173.55
  }
 ],
 "id": "overlay_DB0AD25A_D519_93CB_41E7_B83D14FDC214",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED78636E_F95A_455F_41D6_70028F8EA97E, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_14_0_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.38,
   "hfov": 8.93,
   "pitch": 2.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_14_0.png",
      "width": 406,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.98,
   "hfov": 8.93,
   "yaw": -176.38
  }
 ],
 "id": "overlay_DB00A25A_D519_93CB_41CF_57F049C7C430",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED7B236E_F95A_455F_41E2_6973CC5023C4, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "HOME OFFICE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_15_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.62,
   "hfov": 9.22,
   "pitch": -6.07
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_1_HS_15_0.png",
      "width": 421,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.07,
   "hfov": 9.22,
   "yaw": -174.62
  }
 ],
 "id": "overlay_DB00B25A_D519_93CB_41E7_A69773A887DD",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED7BD36F_F95A_455D_4197_F9A19B0EC8B5, 0, this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED33E385_F95A_45CD_41E5_95FCF42BDB61, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED33E385_F95A_45CD_41E5_95FCF42BDB61",
 "camera": "this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB_camera"
},
{
 "media": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED5C637D_F95A_453D_41DB_6CE6FAE3EDAA, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED5C637D_F95A_453D_41DB_6CE6FAE3EDAA",
 "camera": "this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_camera"
},
{
 "media": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED491382_F95A_45C7_41C9_178A098A5FFB, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED491382_F95A_45C7_41C9_178A098A5FFB",
 "camera": "this.panorama_D12E6442_C159_C497_41D1_9F3574497E09_camera"
},
{
 "media": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED46B381_F95A_45C5_41E8_1A7CCCCCDF22, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED46B381_F95A_45C5_41E8_1A7CCCCCDF22",
 "camera": "this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_camera"
},
{
 "media": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED442380_F95A_45C3_41C8_938AD6F2406C, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED442380_F95A_45C3_41C8_938AD6F2406C",
 "camera": "this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_camera"
},
{
 "map": {
  "width": 64,
  "x": 608.19,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 218.59,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 608.19,
  "y": 218.59,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_1.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E7370F14_F42F_56F6_41E7_A44061541F5D",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED657373_F95A_4545_41D3_BEBEDED10275.set('selectedIndex', -1); }, this); this.playList_ED657373_F95A_4545_41D3_BEBEDED10275.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "HOME OFFICE"
 }
},
{
 "map": {
  "width": 64,
  "x": 1304.26,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 321.31,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1304.26,
  "y": 321.31,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_2.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E7CBFF1F_F42E_B6F2_41E7_BA1A305E9102",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED65D373_F95A_4545_41E5_A3EB77452BBF.set('selectedIndex', -1); }, this); this.playList_ED65D373_F95A_4545_41E5_A3EB77452BBF.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 2 V1"
 }
},
{
 "map": {
  "width": 64,
  "x": 398.46,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 331.01,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 398.46,
  "y": 331.01,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_3.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E73583B3_F42F_4D32_41D9_D2F307527E16",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED64B373_F95A_4545_41B0_FA6C28B7BCAB.set('selectedIndex', -1); }, this); this.playList_ED64B373_F95A_4545_41B0_FA6C28B7BCAB.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 1 V1"
 }
},
{
 "map": {
  "width": 64,
  "x": 312.26,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 519.18,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 312.26,
  "y": 519.18,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_4.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E7884A40_F42F_7F4E_41EB_AC0486393606",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED677374_F95A_4543_41ED_52A223CFBBDE.set('selectedIndex', -1); }, this); this.playList_ED677374_F95A_4543_41ED_52A223CFBBDE.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 1 V1"
 }
},
{
 "map": {
  "width": 64,
  "x": 772.29,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 621.34,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 772.29,
  "y": 621.34,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_5.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E0708E13_F42F_56F2_41DA_1222F7EEF3F2",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED664374_F95A_4543_41EC_4D27CA5B1554.set('selectedIndex', -1); }, this); this.playList_ED664374_F95A_4543_41EC_4D27CA5B1554.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "KITCHEN"
 }
},
{
 "map": {
  "width": 64,
  "x": 1204.9,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 580.76,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1204.9,
  "y": 580.76,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_6.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E7288EFC_F42E_F735_41E3_62E1F68E45DD",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED696375_F95A_454D_41E0_1C794C7B3D8D.set('selectedIndex', -1); }, this); this.playList_ED696375_F95A_454D_41E0_1C794C7B3D8D.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "DINING ROOM"
 }
},
{
 "map": {
  "width": 64,
  "x": 941.53,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 259.45,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 941.53,
  "y": 259.45,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_7.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E7B9D330_F42E_CECD_41DA_33BD50DEEBDB",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED698375_F95A_454D_41DD_A0350F5221DD.set('selectedIndex', -1); }, this); this.playList_ED698375_F95A_454D_41DD_A0350F5221DD.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "map": {
  "width": 64,
  "x": 237.43,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_8_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 21.92,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 237.43,
  "y": 21.92,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_8.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E78D94C9_F431_4B5E_41E6_E2B0129B0F1B",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED687375_F95A_454D_41EC_1F711EB1718C.set('selectedIndex', -1); }, this); this.playList_ED687375_F95A_454D_41EC_1F711EB1718C.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 1 BALCONY"
 }
},
{
 "map": {
  "width": 64,
  "x": 940.22,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_9_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 56.63,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 940.22,
  "y": 56.63,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_9.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E1797D09_F431_5ADF_41E8_ACF2F3B9ACF9",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6B6375_F95A_454D_41E4_2EF0F1311EFE.set('selectedIndex', -1); }, this); this.playList_ED6B6375_F95A_454D_41E4_2EF0F1311EFE.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "LIVING ROOM BALCONY "
 }
},
{
 "map": {
  "width": 64,
  "x": 940.22,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_10_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 737.96,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 940.22,
  "y": 737.96,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_10.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E032B8F5_F431_5B37_41DB_C91F4DBCD738",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6A7376_F95A_454F_41C7_390B810D317E.set('selectedIndex', -1); }, this); this.playList_ED6A7376_F95A_454F_41C7_390B810D317E.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "ENTRANCE FOYER"
 }
},
{
 "map": {
  "width": 64,
  "x": 1361.54,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_11_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 31.25,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1361.54,
  "y": 31.25,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_11.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E7324B2D_F432_DED7_41E1_13BF120F1B13",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6AF376_F95A_454F_41E5_C4263DF04EDE.set('selectedIndex', -1); }, this); this.playList_ED6AF376_F95A_454F_41E5_C4263DF04EDE.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 2 BALCONY"
 }
},
{
 "map": {
  "width": 64,
  "x": 1149.67,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_13_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 737.96,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1149.67,
  "y": 737.96,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_13.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E06B68C8_F437_5B5D_41E0_CD58E749229E",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6DE376_F95A_454F_41DF_BAEDDB87A4A2.set('selectedIndex', -1); }, this); this.playList_ED6DE376_F95A_454F_41DF_BAEDDB87A4A2.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "POOJA ROOM"
 }
},
{
 "map": {
  "width": 64,
  "x": 1328.7,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_14_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 664.91,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1328.7,
  "y": 664.91,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_14.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E8C9C0FF_F4D1_4B33_41CE_294124CA8F93",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6C8377_F95A_454D_41E8_3B58A8CB5163.set('selectedIndex', -1); }, this); this.playList_ED6C8377_F95A_454D_41E8_3B58A8CB5163.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "POWDER ROOM"
 }
},
{
 "map": {
  "width": 64,
  "x": 209.07,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_15_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 125.48,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 209.07,
  "y": 125.48,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_15.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_EA1D6871_F4D7_7B4F_41E0_FA6195DED09F",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6F4377_F95A_454D_41EA_F625FFD79199.set('selectedIndex', -1); }, this); this.playList_ED6F4377_F95A_454D_41EA_F625FFD79199.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 1 V2"
 }
},
{
 "map": {
  "width": 64,
  "x": 102.81,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_16_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 404.43,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 102.81,
  "y": 404.43,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_16.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E9F89A26_F4D6_FED5_41D1_99E19B63AE59",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6FD377_F95A_454D_41E9_0A3D3E82F4AD.set('selectedIndex', -1); }, this); this.playList_ED6FD377_F95A_454D_41E9_0A3D3E82F4AD.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 1 TOILET"
 }
},
{
 "map": {
  "width": 64,
  "x": 205.81,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_17_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 395.57,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 205.81,
  "y": 395.57,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_17.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_EAB28511_F4D1_CACF_41EA_5D9AB4E5DF77",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED6E8378_F95A_4543_41ED_F55C42D338E8.set('selectedIndex', -1); }, this); this.playList_ED6E8378_F95A_4543_41ED_F55C42D338E8.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 1 WALK-IN"
 }
},
{
 "map": {
  "width": 64,
  "x": 69.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_18_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 640.65,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 69.88,
  "y": 640.65,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_18.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E934D2F1_F4D3_CF4F_41ED_6849F173EA69",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED51B378_F95A_4543_41EB_20BEFF713814.set('selectedIndex', -1); }, this); this.playList_ED51B378_F95A_4543_41EB_20BEFF713814.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 1 V2"
 }
},
{
 "map": {
  "width": 64,
  "x": 394.45,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_19_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 552.02,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 394.45,
  "y": 552.02,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_19.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_EB9628A1_F4D2_BBCF_41E4_89DD8DC96F97",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED505378_F95A_4543_4177_F48D0D488DC0.set('selectedIndex', -1); }, this); this.playList_ED505378_F95A_4543_4177_F48D0D488DC0.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 1 TOILET"
 }
},
{
 "map": {
  "width": 64,
  "x": 1605.88,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_20_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 108.87,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1605.88,
  "y": 108.87,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_20.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_EAD69755_F4DF_5577_41E5_9D883931AFC1",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED50D378_F95A_4543_41D4_1BB5B849FB17.set('selectedIndex', -1); }, this); this.playList_ED50D378_F95A_4543_41D4_1BB5B849FB17.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 2 V2"
 }
},
{
 "map": {
  "width": 64,
  "x": 1627.8,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_22_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 383.81,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1627.8,
  "y": 383.81,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_22.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_EBD99236_F4D3_4F35_41E4_415F53DD81CF",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED534379_F95A_4545_41ED_0CBA37DEDD79.set('selectedIndex', -1); }, this); this.playList_ED534379_F95A_4545_41ED_0CBA37DEDD79.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 2 WALK-IN"
 }
},
{
 "map": {
  "width": 64,
  "x": 1380.38,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_23_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 538.5,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1380.38,
  "y": 538.5,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_23.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_D68899FD_F4D2_DD36_41D7_0BAE05DF567B",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED53C379_F95A_4545_41DA_0612B3419405.set('selectedIndex', -1); }, this); this.playList_ED53C379_F95A_4545_41DA_0612B3419405.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 2 TOILET"
 }
},
{
 "map": {
  "width": 64,
  "x": 1740.41,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_24_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 405.36,
  "offsetY": 0,
  "height": 64.96,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1740.41,
  "y": 405.36,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_24.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64.96
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_D4BE8FDB_F4D1_F573_4188_3771CC8F1D8B",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED527379_F95A_4545_41C8_AF325AC74A77.set('selectedIndex', -1); }, this); this.playList_ED527379_F95A_4545_41C8_AF325AC74A77.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "M.BED 2 TOILET"
 }
},
{
 "map": {
  "width": 63,
  "x": 1739.48,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_26_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 660.15,
  "offsetY": 0,
  "height": 63,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1739.48,
  "y": 660.15,
  "width": 63,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_26.png",
     "width": 63,
     "class": "ImageResourceLevel",
     "height": 63
    }
   ],
   "class": "ImageResource"
  },
  "height": 63
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_F7718903_F8DF_3EE9_4198_6804A9BD4815",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED55E37A_F95A_4547_41E2_0AF41AAE0A21.set('selectedIndex', -1); }, this); this.playList_ED55E37A_F95A_4547_41E2_0AF41AAE0A21.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 2 V2"
 }
},
{
 "map": {
  "width": 64,
  "x": 1560.54,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_27_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 536.72,
  "offsetY": 0,
  "height": 64,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1560.54,
  "y": 536.72,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_27.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E234AA97_F97B_F3E9_41E2_33483242E85B",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED52E37A_F95A_4547_41E8_FDD87AC424A4.set('selectedIndex', -1); }, this); this.playList_ED52E37A_F95A_4547_41E8_FDD87AC424A4.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 2 V1"
 }
},
{
 "map": {
  "width": 64,
  "x": 1473.49,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_28_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 457.98,
  "offsetY": 0,
  "height": 64,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1473.49,
  "y": 457.98,
  "width": 64,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_E79B7F69_F451_D551_41E8_857F790F1899_HS_28.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 64
    }
   ],
   "class": "ImageResource"
  },
  "height": 64
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_E506F615_F969_72E9_41E3_94917FE4C13B",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_ED55337A_F95A_4547_41DD_C408DF536CD2.set('selectedIndex', -1); }, this); this.playList_ED55337A_F95A_4547_41DD_C408DF536CD2.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "BED 2 PASSAGE"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_1_HS_0_0_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.26,
   "hfov": 17.45,
   "pitch": 7.04
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_1_HS_0_0.png",
      "width": 799,
      "class": "ImageResourceLevel",
      "height": 272
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.04,
   "hfov": 17.45,
   "yaw": 74.26
  }
 ],
 "id": "overlay_E9EB43AF_F870_6044_41E3_905630B275AA",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA8BB367_F95A_454D_419A_54C11CE91619, 0, this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_1_HS_1_0_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.61,
   "hfov": 17.44,
   "pitch": 7.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_1_HS_1_0.png",
      "width": 799,
      "class": "ImageResourceLevel",
      "height": 194
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.12,
   "hfov": 17.44,
   "yaw": 47.61
  }
 ],
 "id": "overlay_E9EB23AF_F870_6044_41E0_5A7328B25774",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA8A2367_F95A_454D_41ED_680C2350D7B9, 0, this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_1_HS_3_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.44,
   "hfov": 14.5,
   "pitch": -7.71
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_1_HS_3_0.png",
      "width": 665,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.71,
   "hfov": 14.5,
   "yaw": 62.44
  }
 ],
 "id": "overlay_E9EB33AF_F870_6044_41E9_CC21B537896E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C, this.camera_EADE85AF_F95A_4DDE_41E9_31658166470D); this.setMediaBehaviour(this.playList_EA8AE368_F95A_4543_41E0_93610AD1EF37, 0, this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.54,
   "hfov": 14.52,
   "pitch": 3.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_0_0.png",
      "width": 330,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.62,
   "hfov": 14.52,
   "yaw": -19.54
  }
 ],
 "id": "overlay_EF356806_F850_6044_41DE_B4BCBAEF20EE",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA83E364_F95A_4543_41BF_1F55E0A93F48, 0, this.panorama_EF357806_F850_6044_41DD_51927F40D33F)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_1_0_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.34,
   "hfov": 14.48,
   "pitch": 5.44
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_1_0.png",
      "width": 330,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.44,
   "hfov": 14.48,
   "yaw": 29.34
  }
 ],
 "id": "overlay_EF354806_F850_6045_41E9_045997D7D46C",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA825364_F95A_4543_41C2_09CC51544BFD, 0, this.panorama_EF357806_F850_6044_41DD_51927F40D33F)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.24,
   "hfov": 14.05,
   "pitch": 8.89
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_2_0.png",
      "width": 323,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.89,
   "hfov": 14.05,
   "yaw": -168.24
  }
 ],
 "id": "overlay_EF353807_F850_6044_41EC_24F7096F956D",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA851364_F95A_4543_41D0_3A3CBA8119A1, 0, this.panorama_EF357806_F850_6044_41DD_51927F40D33F)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "WALK IN"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_4_0_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.72,
   "hfov": 11.36,
   "pitch": -0.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_4_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.72,
   "hfov": 11.36,
   "yaw": 30.72
  }
 ],
 "id": "overlay_EF352807_F850_6044_41D8_DD25E2BD7ABA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05, this.camera_EAB8E5D8_F95A_4D42_41AF_8FE4150BDE37); this.setMediaBehaviour(this.playList_EA85E365_F95A_454D_41DC_F7958A980431, 0, this.panorama_EF357806_F850_6044_41DD_51927F40D33F)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_5_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.96,
   "hfov": 13.54,
   "pitch": -7.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF357806_F850_6044_41DD_51927F40D33F_1_HS_5_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "hfov": 13.54,
   "yaw": -22.96
  }
 ],
 "id": "overlay_EF351807_F850_6044_41D8_CCCB077FB95C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E, this.camera_EAA345E2_F95A_4D46_41EC_6859923F8DAA); this.setMediaBehaviour(this.playList_EA84A365_F95A_454D_41E7_A002B70724EE, 0, this.panorama_EF357806_F850_6044_41DD_51927F40D33F)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.88,
   "hfov": 16.09,
   "pitch": 10.07
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_1_HS_1_0.png",
      "width": 371,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.07,
   "hfov": 16.09,
   "yaw": 60.88
  }
 ],
 "id": "overlay_EEC4F207_F850_6045_41B3_8F5F696D64B8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0, this.camera_EF55E525_F95A_42CD_41E1_9C87B89C35F5); this.setMediaBehaviour(this.playList_EA9B8360_F95A_4543_41ED_7D752C83C74E, 0, this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_1_HS_2_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.97,
   "hfov": 17.79,
   "pitch": -3.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEC41207_F850_6045_41E3_A17D10963C1C_1_HS_2_0.png",
      "width": 405,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.88,
   "hfov": 17.79,
   "yaw": -88.97
  }
 ],
 "id": "overlay_EEC4D207_F850_6045_41E2_CD85A955918B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3, this.camera_EF45A533_F95A_42C5_41E2_007E81D41725); this.setMediaBehaviour(this.playList_EA9A0360_F95A_4543_41D9_1634C183C675, 0, this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED58F37C_F95A_4543_41D1_5EC8012AC83D, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED58F37C_F95A_4543_41D1_5EC8012AC83D",
 "camera": "this.panorama_EF9BC419_F957_1719_41E3_673C33102749_camera"
},
{
 "media": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED41C37F_F95A_453D_41B9_F59A8A2340EC, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED41C37F_F95A_453D_41B9_F59A8A2340EC",
 "camera": "this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "living view 3"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_1_0_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.65,
   "hfov": 13.63,
   "pitch": 2.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_1_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.74,
   "hfov": 13.63,
   "yaw": 49.65
  }
 ],
 "id": "overlay_EC4CC493_F870_A05C_41EC_E6CF20E4AE43",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA9D8360_F95A_4543_41CA_AA9A467EAD28, 0, this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.84,
   "hfov": 15.6,
   "pitch": 2.79
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_2_0.png",
      "width": 355,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79,
   "hfov": 15.6,
   "yaw": 179.84
  }
 ],
 "id": "overlay_EC4CF493_F870_A05C_41EA_9AD9951F8FCD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626, this.camera_EAD0158F_F95A_4DDE_41EA_098FBF55BEAB); this.setMediaBehaviour(this.playList_EA9C0361_F95A_4545_41E4_4F74CE807DA3, 0, this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "WALK IN"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.19,
   "hfov": 12.52,
   "pitch": 1.02
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_3_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.02,
   "hfov": 12.52,
   "yaw": -5.19
  }
 ],
 "id": "overlay_EC4C8493_F870_A05C_41D4_A66D87608A4D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C, this.camera_EADBC5A4_F95A_4DC2_41E7_14810AB6D435); this.setMediaBehaviour(this.playList_EA9C9361_F95A_4545_41C9_255C175D17FA, 0, this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_4_0_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.71,
   "hfov": 14.51,
   "pitch": -4.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_4_0.png",
      "width": 331,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.26,
   "hfov": 14.51,
   "yaw": -4.71
  }
 ],
 "id": "overlay_EC4C9493_F870_A05C_41E4_916892AFFE07",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA9F6361_F95A_4545_41C1_AEF12A29B4AB, 0, this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.28,
   "hfov": 11.92,
   "pitch": -2.11
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_1_HS_5_0.png",
      "width": 271,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.11,
   "hfov": 11.92,
   "yaw": 58.28
  }
 ],
 "id": "overlay_EC4CA493_F870_A05C_41E6_B708995DDC5F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386, this.camera_EAD4159A_F95A_4DC6_41D4_A753BAAD8A0A); this.setMediaBehaviour(this.playList_EA9FE361_F95A_4545_41EA_2751B519490F, 0, this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_1_HS_2_0_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.56,
   "hfov": 18.57,
   "pitch": 9.85
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_1_HS_2_0.png",
      "width": 428,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.85,
   "hfov": 18.57,
   "yaw": 150.56
  }
 ],
 "id": "overlay_E02E2A93_F851_E05C_41D8_087E1F280ACE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D0C2C685_C148_C59D_41D9_A3266B046410, this.camera_ED0A03AC_F95A_45C3_41D2_B6BAAD043DDF); this.setMediaBehaviour(this.playList_EA808363_F95A_4545_41D0_E871C5D3C68C, 0, this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_1_HS_3_0_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.36,
   "hfov": 11.33,
   "pitch": -4.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_1_HS_3_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.14,
   "hfov": 11.33,
   "yaw": -58.36
  }
 ],
 "id": "overlay_E02E0A94_F851_E044_41E4_BE797FC249BF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF357806_F850_6044_41DD_51927F40D33F, this.camera_ED1F63A2_F95A_45C7_41E2_7A7C52641FDE); this.setMediaBehaviour(this.playList_EA837364_F95A_4543_41DE_F00ECD10BB83, 0, this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED455380_F95A_45C3_41C8_62F809FCE645, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED455380_F95A_45C3_41C8_62F809FCE645",
 "camera": "this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.93,
   "hfov": 10.98,
   "pitch": -2.25
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D118DC46_C159_449E_41D8_4DF791AB41FF_1_HS_0_0.png",
      "width": 499,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25,
   "hfov": 10.98,
   "yaw": 177.93
  }
 ],
 "id": "overlay_D1070C46_C159_449E_41E0_ADCCF72C1DA7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_ECA9B4F2_F95A_4347_41CF_5355F36F60E5); this.setMediaBehaviour(this.playList_ED7A536F_F95A_455D_41EE_9C92D5999AE1, 0, this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED466381_F95A_45C5_41A9_02DC623594F1, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED466381_F95A_45C5_41A9_02DC623594F1",
 "camera": "this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7_camera"
},
{
 "media": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED58637C_F95A_4543_41E7_E88215415132, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED58637C_F95A_4543_41E7_E88215415132",
 "camera": "this.panorama_D344DC22_C179_4497_41D3_08184DD4B575_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_1_HS_0_0_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.21,
   "hfov": 11.36,
   "pitch": 1.7
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_1_HS_0_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7,
   "hfov": 11.36,
   "yaw": 125.21
  }
 ],
 "id": "overlay_EF36F4D6_F851_A1C4_41B4_ECE028CB5557",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E, this.camera_EF778511_F95A_42C5_41A9_52D52C6821B2); this.setMediaBehaviour(this.playList_EA802363_F95A_4545_41D3_55E6732FB80B, 0, this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED5D037D_F95A_453D_41E1_B52BEE6C1279, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED5D037D_F95A_453D_41E1_B52BEE6C1279",
 "camera": "this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "POOJA ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151,
   "hfov": 9.45,
   "pitch": 3.33
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_4_0.png",
      "width": 430,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33,
   "hfov": 9.45,
   "yaw": 151
  }
 ],
 "id": "overlay_D177A92A_C158_CC97_41D4_7E9E57103D5C",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED7DA36F_F95A_455D_41C0_454238C34B22, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "POWDER ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_5_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.91,
   "hfov": 8.77,
   "pitch": 3.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_5_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.61,
   "hfov": 8.77,
   "yaw": 126.91
  }
 ],
 "id": "overlay_D177992A_C158_CC97_41E5_D9B8EB9B5120",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83, this.camera_EC73341A_F95A_42C6_41EB_68189196E4F0); this.setMediaBehaviour(this.playList_ED7C5370_F95A_4543_41EA_00D2D0480211, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BEDROOM 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_6_0_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.24,
   "hfov": 9.82,
   "pitch": 1.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_6_0.png",
      "width": 447,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.58,
   "hfov": 9.82,
   "yaw": 90.24
  }
 ],
 "id": "overlay_D177692A_C158_CC97_41DD_92F9E160BEAD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0, this.camera_ED92E3F1_F95A_4545_41EC_D9110EA82A31); this.setMediaBehaviour(this.playList_ED7CD370_F95A_4543_41CE_4A154CE84A3F, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "ENTRANCE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_8_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128,
   "hfov": 10.98,
   "pitch": 2.33
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_8_0.png",
      "width": 499,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33,
   "hfov": 10.98,
   "yaw": -128
  }
 ],
 "id": "overlay_D177792A_C158_CC97_41DC_FD0E5FB7A28F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826, this.camera_EDC453D3_F95A_4545_41CF_F4DC15DB8E04); this.setMediaBehaviour(this.playList_ED7FD370_F95A_4543_4184_DA53FAE51231, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BDROOM 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_11_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.68,
   "hfov": 10.48,
   "pitch": -1.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_11_0.png",
      "width": 477,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.12,
   "hfov": 10.48,
   "yaw": -83.68
  }
 ],
 "id": "overlay_D177592A_C158_CC97_41E0_D96C1260A3BD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C, this.camera_EC310463_F95A_4346_41EA_A554F10A8FBB); this.setMediaBehaviour(this.playList_ED7EE370_F95A_4543_41E9_8F37CF9015FF, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_12_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.04,
   "hfov": 12.22,
   "pitch": 4.55
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_12_0.png",
      "width": 558,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.55,
   "hfov": 12.22,
   "yaw": 5.04
  }
 ],
 "id": "overlay_D177092A_C158_CC97_41E6_EA148B92A128",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808, this.camera_EC635429_F95A_42C2_41E6_4D650D563942); this.setMediaBehaviour(this.playList_ED618371_F95A_4545_41E8_F86DD8899405, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "DINING"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_13_0_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.99,
   "hfov": 8.77,
   "pitch": 4.01
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_13_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 148
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.01,
   "hfov": 8.77,
   "yaw": 107.99
  }
 ],
 "id": "overlay_D174E92A_C158_CC97_41E0_84019549270B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7, this.camera_EDA2C3E7_F95A_454D_41E0_9FF1904DCDCB); this.setMediaBehaviour(this.playList_ED608371_F95A_4545_41E5_B12EB40C60C2, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "ENTRANCE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_14_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.89,
   "hfov": 9.92,
   "pitch": 6.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_14_0.png",
      "width": 454,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.93,
   "hfov": 9.92,
   "yaw": 179.89
  }
 ],
 "id": "overlay_D174A92A_C158_CC97_41D7_EC5AF4920433",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D118DC46_C159_449E_41D8_4DF791AB41FF, this.camera_EC40144E_F95A_435E_41E5_20D3970B1A95); this.setMediaBehaviour(this.playList_ED601372_F95A_4547_41E1_29B56344E6D4, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_15_0_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.26,
   "hfov": 8.93,
   "pitch": 2.86
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_15_0.png",
      "width": 406,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.86,
   "hfov": 8.93,
   "yaw": -84.26
  }
 ],
 "id": "overlay_D174B92B_C158_CC95_41D6_F26CD5B81BCD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E, this.camera_EDB493DD_F95A_457D_41A3_1FF6D49191D5); this.setMediaBehaviour(this.playList_ED60C372_F95A_4547_41E0_482AFC1BB38E, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "HOME OFFICE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_16_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.47,
   "hfov": 9.23,
   "pitch": -5.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_16_0.png",
      "width": 421,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "hfov": 9.23,
   "yaw": -80.47
  }
 ],
 "id": "overlay_D174992B_C158_CC95_41E3_BCE19C49B410",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E, this.camera_ED824405_F95A_42CD_41DE_5F3A9DDD0561); this.setMediaBehaviour(this.playList_ED63F372_F95A_4547_41BD_38FA0AB507A5, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_17_0_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.8,
   "hfov": 8.46,
   "pitch": -2.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_1_HS_17_0.png",
      "width": 385,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.17,
   "hfov": 8.46,
   "yaw": 88.8
  }
 ],
 "id": "overlay_D174692B_C158_CC95_41B6_3E8528D2C10B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386, this.camera_EC50043E_F95A_433E_41E4_54CC372EB384); this.setMediaBehaviour(this.playList_ED625373_F95A_4545_41C0_105927B1D63E, 0, this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED474380_F95A_45C3_41EC_2BF77878B815, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED474380_F95A_45C3_41EC_2BF77878B815",
 "camera": "this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_0_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.86,
   "hfov": 26.23,
   "pitch": 8.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_0_0.png",
      "width": 603,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.45,
   "hfov": 26.23,
   "yaw": -97.86
  }
 ],
 "id": "overlay_EC737CF6_F870_61C7_41CD_B3401972561E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EDD633CA_F95A_4547_41A5_F7495B6CEFDB); this.setMediaBehaviour(this.playList_EA9E1361_F95A_4545_41C3_C49DB397B085, 0, this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_1_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.34,
   "hfov": 12.49,
   "pitch": 5.13
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_1_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.13,
   "hfov": 12.49,
   "yaw": 129.34
  }
 ],
 "id": "overlay_EC734CF6_F870_61C7_418E_CED632867D14",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA9EE362_F95A_4547_41EC_8A291D11CDAC, 0, this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_2_0_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.29,
   "hfov": 14.52,
   "pitch": 3.23
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_2_0.png",
      "width": 330,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.23,
   "hfov": 14.52,
   "yaw": 157.29
  }
 ],
 "id": "overlay_EC732CF6_F870_61C7_41C7_73AA29514D37",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA811362_F95A_4547_41E0_25B4AF0730AC, 0, this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "WALK IN"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_3_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.44,
   "hfov": 11.81,
   "pitch": 7.46
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_3_0.png",
      "width": 271,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.46,
   "hfov": 11.81,
   "yaw": 170.44
  }
 ],
 "id": "overlay_EC731CF6_F870_61C7_41BE_D5030CDE64ED",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA81E362_F95A_4547_41EB_6289EC69F58F, 0, this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_5_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.12,
   "hfov": 14.12,
   "pitch": -2.55
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_1_HS_5_0.png",
      "width": 321,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.55,
   "hfov": 14.12,
   "yaw": 141.12
  }
 ],
 "id": "overlay_EC73ECF7_F870_61C5_41DE_18EA6BB19449",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3, this.camera_EDE6A3C0_F95A_4543_4194_5569686A47F0); this.setMediaBehaviour(this.playList_EA807362_F95A_4547_41EC_DB91AAD3AE6B, 0, this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED5EE37E_F95A_453F_41EB_1DD539072C60, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED5EE37E_F95A_453F_41EB_1DD539072C60",
 "camera": "this.panorama_E02E3A93_F851_E05C_41EB_F4DA8F907B05_camera"
},
{
 "media": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED49C382_F95A_45C7_41E2_81E547C98FD7, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED49C382_F95A_45C7_41E2_81E547C98FD7",
 "camera": "this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BDROOM 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_1_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.19,
   "hfov": 27.19,
   "pitch": 20.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D344DC22_C179_4497_41D3_08184DD4B575_1_HS_0_0.png",
      "width": 1324,
      "class": "ImageResourceLevel",
      "height": 506
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.84,
   "hfov": 27.19,
   "yaw": -109.19
  }
 ],
 "id": "overlay_D344FC22_C179_4497_41E1_ABE28AD1A073",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0, this.camera_EC87D507_F95A_42CD_41E8_9D5C2D98DF1C); this.setMediaBehaviour(this.playList_EA97535E_F95A_457F_41BE_02ED3C5D11A2, 0, this.panorama_D344DC22_C179_4497_41D3_08184DD4B575)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "POWDER ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.96,
   "hfov": 10.97,
   "pitch": 3.49
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_0_0.png",
      "width": 499,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.49,
   "hfov": 10.97,
   "yaw": 61.96
  }
 ],
 "id": "overlay_D12E5442_C159_C497_41E4_522229395C8B",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA8EF36A_F95A_4547_41D5_845DC4EB0C8C, 0, this.panorama_D12E6442_C159_C497_41D1_9F3574497E09)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "DINING"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.09,
   "hfov": 10.97,
   "pitch": 3.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_1_0.png",
      "width": 499,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16,
   "hfov": 10.97,
   "yaw": 32.09
  }
 ],
 "id": "overlay_D12E4442_C159_C497_41CA_04DEB832DD34",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D1396BDC_C159_43B3_41E5_BF65C551B1B7, this.camera_ECFDA4BE_F95A_433F_41CA_C32BAE5E8DB0); this.setMediaBehaviour(this.playList_ED71936B_F95A_4545_41EE_4F131ACF6671, 0, this.panorama_D12E6442_C159_C497_41D1_9F3574497E09)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_2_0_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.67,
   "hfov": 11.57,
   "pitch": 2.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_2_0.png",
      "width": 526,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.22,
   "hfov": 11.57,
   "yaw": -23.67
  }
 ],
 "id": "overlay_D12E1447_C159_C49D_41E7_EB2646CCCF5E",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED70836B_F95A_4545_41E1_A136173DD480, 0, this.panorama_D12E6442_C159_C497_41D1_9F3574497E09)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_5_0_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.51,
   "hfov": 9.35,
   "pitch": -3.36
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D12E6442_C159_C497_41D1_9F3574497E09_1_HS_5_0.png",
      "width": 426,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.36,
   "hfov": 9.35,
   "yaw": 25.51
  }
 ],
 "id": "overlay_D12EC447_C159_C49D_41DC_8116D473A873",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED73136B_F95A_4545_41DD_C1F77995295A, 0, this.panorama_D12E6442_C159_C497_41D1_9F3574497E09)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED479381_F95A_45C5_41E6_B110385F2BB5, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED479381_F95A_45C5_41E6_B110385F2BB5",
 "camera": "this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING "
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.01,
   "hfov": 15.36,
   "pitch": 2.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E_1_HS_0_0.png",
      "width": 699,
      "class": "ImageResourceLevel",
      "height": 600
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.98,
   "hfov": 15.36,
   "yaw": -154.01
  }
 ],
 "id": "overlay_D01D4F05_C149_C49D_4182_1CA214C516AA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EF67A51B_F95A_42C5_41EC_B5EC6AE66700); this.setMediaBehaviour(this.playList_EA883366_F95A_454F_41CD_6B07D94F90F3, 0, this.panorama_D01D6F05_C149_C49D_41B1_72CAD4333B2E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED59837C_F95A_4543_41EF_0F7F64D02D55, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED59837C_F95A_4543_41EF_0F7F64D02D55",
 "camera": "this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_1_HS_0_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.27,
   "hfov": 21.6,
   "pitch": 9.92
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_1_HS_0_0.png",
      "width": 998,
      "class": "ImageResourceLevel",
      "height": 666
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "hfov": 21.6,
   "yaw": -98.27
  }
 ],
 "id": "overlay_EA41EDF1_F871_A3DC_418F_2F427EAACD80",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EC2EB487_F95A_43CE_41E6_2117150D8760); this.setMediaBehaviour(this.playList_EA8D1368_F95A_4543_4199_5CABF390A088, 0, this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_1_HS_1_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.56,
   "hfov": 21.61,
   "pitch": 9.77
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_1_HS_1_0.png",
      "width": 998,
      "class": "ImageResourceLevel",
      "height": 666
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.77,
   "hfov": 21.61,
   "yaw": -23.56
  }
 ],
 "id": "overlay_EA401DF1_F871_A3DC_41E4_93793C7EF549",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776, this.camera_EC1CD496_F95A_43CE_41BC_513CE6CDD1A4); this.setMediaBehaviour(this.playList_EA8DD368_F95A_4543_41D6_6BF349CBE342, 0, this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_1_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.62,
   "hfov": 14.47,
   "pitch": 0.36
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA418DF1_F871_A3DC_41E9_19384992453C_1_HS_3_0.png",
      "width": 658,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.36,
   "hfov": 14.47,
   "yaw": 103.62
  }
 ],
 "id": "overlay_EA404DF1_F871_A3DC_41E9_74E82D148F2D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9EB63AF_F870_6044_41D3_42F1B975F168, this.camera_EC0CF4AB_F95A_43C6_41ED_F660BC0FAD85); this.setMediaBehaviour(this.playList_EA8CE369_F95A_4545_41EE_C9D16B58E63C, 0, this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BDROOM 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_1_HS_0_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.51,
   "hfov": 21.9,
   "pitch": 2.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776_1_HS_0_0.png",
      "width": 997,
      "class": "ImageResourceLevel",
      "height": 666
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.84,
   "hfov": 21.9,
   "yaw": -59.51
  }
 ],
 "id": "overlay_E9C321E8_F87F_A3CC_41D9_33EB330E4F3E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA418DF1_F871_A3DC_41E9_19384992453C, this.camera_EA8A860A_F95A_4EC6_41E6_E5D59EE94D01); this.setMediaBehaviour(this.playList_EA88F367_F95A_454D_41B2_145181232F67, 0, this.panorama_E9C301E8_F87F_A3CC_41C6_A453D7F4A776)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED56B37B_F95A_4545_41E8_0FA3AF3EF2CA, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED56B37B_F95A_4545_41E8_0FA3AF3EF2CA",
 "camera": "this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.09,
   "hfov": 26.74,
   "pitch": 19.48
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83_1_HS_0_0.png",
      "width": 1290,
      "class": "ImageResourceLevel",
      "height": 666
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.48,
   "hfov": 26.74,
   "yaw": -64.09
  }
 ],
 "id": "overlay_D2FBB014_C149_5CB3_41C5_692CEC3B7B5B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_ECBBB4E8_F95A_4343_41A3_42556B268562); this.setMediaBehaviour(this.playList_EA9AB360_F95A_4543_41CF_2A2652382398, 0, this.panorama_D2FB8014_C149_5CB3_41E1_3E0886A8BF83)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "WALK IN"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.86,
   "hfov": 12.51,
   "pitch": 2.65
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0_1_HS_0_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.65,
   "hfov": 12.51,
   "yaw": 27.86
  }
 ],
 "id": "overlay_EDEC4B90_F850_A05C_41EA_A8F659CF9F0A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EEC41207_F850_6045_41E3_A17D10963C1C, this.camera_EC3ED472_F95A_434B_4196_833406B4EA62); this.setMediaBehaviour(this.playList_EA9B035F_F95A_457D_419E_27DACD86C0C5, 0, this.panorama_EDEC5B90_F850_A05C_41E1_B8CD6DF3E4E0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "transitionDuration": 500,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "id": "ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BD",
 "left": "0%",
 "playbackBarHeadShadow": true,
 "firstTransitionDuration": 0,
 "right": "0%",
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingTop": 4,
 "class": "ViewerArea",
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "borderSize": 0,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "show": "this.setMediaBehaviour(this.playList_EA92235D_F95A_457D_41BC_9430D86FBF40, 0)",
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "top": "0%",
 "paddingRight": 0,
 "playbackBarProgressBorderRadius": 0,
 "bottom": "0%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "data": {
  "name": "INTERIOR PANO VIEWER"
 }
},
{
 "media": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED463381_F95A_45C5_41B7_F9100A8CF064, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED463381_F95A_45C5_41B7_F9100A8CF064",
 "camera": "this.panorama_D06C4871_C157_4D75_41D7_42F38EDFF808_camera"
},
{
 "media": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED5F637E_F95A_453F_41D7_3F2FCB8F3356, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED5F637E_F95A_453F_41D7_3F2FCB8F3356",
 "camera": "this.panorama_EC7C9CF6_F870_61C7_41D1_023602F64386_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.26,
   "hfov": 8.12,
   "pitch": 2.43
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_1_HS_1_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.43,
   "hfov": 8.12,
   "yaw": 122.26
  }
 ],
 "id": "overlay_D048CA22_C157_4C97_41E6_6F000731AB9D",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA8E0369_F95A_4545_41D3_BD1588B7B8FA, 0, this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "HOME OFFICE"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_1_HS_4_0_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.15,
   "hfov": 8.1,
   "pitch": 3.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_1_HS_4_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16,
   "hfov": 8.1,
   "yaw": 86.15
  }
 ],
 "id": "overlay_D0495A22_C157_4C97_41DB_C737748A1601",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA8F536A_F95A_4547_41DD_6867BE61123E, 0, this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING "
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.28,
   "hfov": 10.96,
   "pitch": -1.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D0488A22_C157_4C97_41B1_6326EDD36826_1_HS_0_0.png",
      "width": 498,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "hfov": 10.96,
   "yaw": 137.28
  }
 ],
 "id": "overlay_D048AA22_C157_4C97_41E0_428AF1E21E8A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EAC4D5B9_F95A_4DC2_41CB_F440A2BBDEED); this.setMediaBehaviour(this.playList_EA8FC36A_F95A_4547_41CF_D5A4323A04CC, 0, this.panorama_D0488A22_C157_4C97_41B1_6326EDD36826)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED43137F_F95A_453D_41DE_8CD6A2899AF5, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED43137F_F95A_453D_41DE_8CD6A2899AF5",
 "camera": "this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_0_0_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.46,
   "hfov": 18.81,
   "pitch": 8.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_0_0.png",
      "width": 432,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.22,
   "hfov": 18.81,
   "yaw": -61.46
  }
 ],
 "id": "overlay_D00E51FC_C149_5F73_41DE_A0B00833C01A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D177D92A_C158_CC97_41C9_C0A33DC4DE6A, this.camera_EF220549_F95A_4D45_41D2_2F1884BA359F); this.setMediaBehaviour(this.playList_EA84F365_F95A_454D_41DB_4F73B509C798, 0, this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BALCONY"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.46,
   "hfov": 12.24,
   "pitch": 6.02
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_2_0.png",
      "width": 280,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.02,
   "hfov": 12.24,
   "yaw": 98.46
  }
 ],
 "id": "overlay_D00191FC_C149_5F73_41DD_BF5592D3A537",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF36D4D6_F851_A1C4_41E0_3258AA03FF25, this.camera_EF33F53E_F95A_4D3F_41D7_5197B2B9145B); this.setMediaBehaviour(this.playList_EA87B365_F95A_454D_41D4_FCD049C7DC6B, 0, this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "WALK IN"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_3_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.55,
   "hfov": 10.65,
   "pitch": 12.11
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_3_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.11,
   "hfov": 10.65,
   "yaw": 47.55
  }
 ],
 "id": "overlay_D001F1FC_C149_5F73_41CB_3045E15F5BF8",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA866366_F95A_454F_41C0_5509A9D11492, 0, this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_5_0_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.08,
   "hfov": 12.03,
   "pitch": 5.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_5_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.97,
   "hfov": 12.03,
   "yaw": 48.08
  }
 ],
 "id": "overlay_D571B67F_C1D8_C56D_41D6_A71FCF58BB6E",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA86D366_F95A_454F_41C9_0282CA6EE028, 0, this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_6_0_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.43,
   "hfov": 11.82,
   "pitch": -0.09
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_1_HS_6_0.png",
      "width": 268,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.09,
   "hfov": 11.82,
   "yaw": 98.43
  }
 ],
 "id": "overlay_FAB11D6D_F431_D556_41C8_B0B33DA033AA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF357806_F850_6044_41DD_51927F40D33F, this.camera_EF107553_F95A_4D45_41D2_A5C6E0D4F9DC); this.setMediaBehaviour(this.playList_EA899366_F95A_454F_41E0_514E18BB1132, 0, this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "M.B 1"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_1_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.61,
   "hfov": 11.43,
   "pitch": 0.11
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626_1_HS_0_0.png",
      "width": 260,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "hfov": 11.43,
   "yaw": 103.61
  }
 ],
 "id": "overlay_EA79B492_F870_605C_41E3_2AFC5B91127E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC533493_F870_A05C_41E4_CA6DE4172CC3, this.camera_ED129398_F95A_45C3_41AE_AD66143E2DDB); this.setMediaBehaviour(this.playList_EA9D0360_F95A_4543_41E7_FF85D5BC278F, 0, this.panorama_EA79D492_F870_605C_41C3_F6C9FD8E2626)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED41437E_F95A_453F_41AA_6CFE38200216, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED41437E_F95A_453F_41AA_6CFE38200216",
 "camera": "this.panorama_D00E71FC_C149_5F73_41DC_E893269B9E5E_camera"
},
{
 "transitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "id": "MapViewer",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "right": "2%",
 "width": "25%",
 "toolTipFontColor": "#606060",
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarOpacity": 1,
 "paddingBottom": 10,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "height": "25%",
 "toolTipPaddingRight": 6,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "borderSize": 0,
 "playbackBarHeadHeight": 15,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "show": "this.setMediaBehaviour(this.playList_EA92A35D_F95A_457D_41E5_C3370D4F9BD9, 0)",
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 10,
 "playbackBarProgressBorderRadius": 0,
 "bottom": "10%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "media": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_ED40437F_F95A_453D_41E2_69D7426DD47E, this.MapViewerMapPlayer)",
 "player": "this.ViewerAreaLabeled_B64E8396_9870_8004_41D1_1AF317F0A4BDPanoramaPlayer",
 "id": "PanoramaPlayListItem_ED40437F_F95A_453D_41E2_69D7426DD47E",
 "camera": "this.panorama_EF357806_F850_6044_41DD_51927F40D33F_camera"
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_0_0_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.25,
   "hfov": 19.67,
   "pitch": 5.96
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_0_0.png",
      "width": 899,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.96,
   "hfov": 19.67,
   "yaw": -16.25
  }
 ],
 "id": "overlay_EF676BFC_F969_111E_41C3_4E00BBE55789",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED55B37A_F95A_4547_41E9_8727FAAB8F31, 0, this.panorama_EF9BC419_F957_1719_41E3_673C33102749)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "LIVING ROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_1_0_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.29,
   "hfov": 19.33,
   "pitch": 12.24
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_1_0.png",
      "width": 899,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.24,
   "hfov": 19.33,
   "yaw": -16.29
  }
 ],
 "id": "overlay_EE38DFBE_F96B_311B_41A4_B5E61AF1B388",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_ED54237A_F95A_4547_41D7_75CD29FFF446, 0, this.panorama_EF9BC419_F957_1719_41E3_673C33102749)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BEDROOM 2"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_2_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.83,
   "hfov": 16.48,
   "pitch": -0.89
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_2_0.png",
      "width": 749,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89,
   "hfov": 16.48,
   "yaw": 85.83
  }
 ],
 "id": "overlay_E0AB0AF0_F969_3326_41D2_9DB77E961CEA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D0BE61EE_C17B_5F6F_41CB_00A0097D77AB, this.camera_EA9635F6_F95A_4D4E_41D4_AFA2C8822581); this.setMediaBehaviour(this.playList_ED57537B_F95A_4545_41EA_FD455718948F, 0, this.panorama_EF9BC419_F957_1719_41E3_673C33102749)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "BED 1 BATHROOM"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_3_0_0_map.gif",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.39,
   "hfov": 19.58,
   "pitch": 0.11
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF9BC419_F957_1719_41E3_673C33102749_1_HS_3_0.png",
      "width": 891,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "hfov": 19.58,
   "yaw": -16.39
  }
 ],
 "id": "overlay_EE8A1A26_F969_132B_41C9_75AA3828F476",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECD0920D_F959_32FE_41E8_8275959593A0, this.camera_EAAC55EB_F95A_4D46_41EE_EED69F0694A9); this.setMediaBehaviour(this.playList_ED57C37B_F95A_4545_41E8_341823733411, 0, this.panorama_EF9BC419_F957_1719_41E3_673C33102749)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "shadow": false,
 "id": "Container_9C2A965C_9292_C114_41DC_7DD575EABE99",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Image_9C6C70A9_92B2_C13C_41DC_8C4948658E49",
  "this.IconButton_B7A76875_9850_8005_41C3_294DD79CABC8"
 ],
 "contentOpaque": false,
 "top": "12.5%",
 "paddingRight": 0,
 "bottom": "12.5%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "visible": false,
 "overflow": "scroll",
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "Unit01_Container"
 }
},
{
 "shadow": false,
 "id": "Container_9DBA1C59_92B1_411C_41DB_207AA8F4698B",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Image_9D858C33_92B1_412C_41C5_7E401E5A78E3",
  "this.IconButton_B35749BC_966B_CC3E_41DA_DEC16507CF4B",
  "this.IconButton_B3E5BD81_965A_44C7_41D9_EBF63C7F421B"
 ],
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "75%",
 "backgroundOpacity": 0,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "visible": false,
 "overflow": "scroll",
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "Unit02_Container"
 }
},
{
 "shadow": false,
 "id": "Container_9C899F00_92B1_40EC_41D0_CF5F7C9BCFF8",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Image_9C83DEE7_92B1_4133_41D3_4DA19128E932",
  "this.IconButton_8AB2DBE8_9629_CC45_41CE_A029683E9E81",
  "this.IconButton_B3EE5EE2_9659_C44A_41DC_9F7EC12A856E"
 ],
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "75%",
 "backgroundOpacity": 0,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "visible": false,
 "overflow": "scroll",
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "Unit03_Container"
 }
},
{
 "shadow": false,
 "id": "Container_9C89F182_92B1_43ED_41D4_0131E1C35E10",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Image_9C80616A_92B1_433D_4199_A9113F4AEDA0",
  "this.IconButton_9DE7CA1D_92BF_4114_41CA_3C34135FCDAE",
  "this.IconButton_B5CD6FD5_967A_444F_41CC_F0A1204E15E3"
 ],
 "contentOpaque": false,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "75%",
 "backgroundOpacity": 0,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "visible": false,
 "overflow": "scroll",
 "gap": 10,
 "horizontalAlign": "left",
 "data": {
  "name": "Unit04_Container"
 }
},
{
 "shadow": false,
 "id": "IconButton_A3B5D0B0_AC72_D720_41CE_8AD43357FD77",
 "paddingTop": 0,
 "width": "18%",
 "right": "0%",
 "horizontalAlign": "center",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_A3B5D0B0_AC72_D720_41CE_8AD43357FD77_pressed.png",
 "click": "this.setComponentVisibility(this.Container_864FABDC_97D1_800B_41C5_B7D6AB6511FE, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_86B1E718_97D3_800B_41DD_542A77282AA8, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_A3B5D0B0_AC72_D720_41CE_8AD43357FD77_rollover.png",
 "height": "6%",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minWidth": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_A3B5D0B0_AC72_D720_41CE_8AD43357FD77.png",
 "propagateClick": false,
 "data": {
  "name": "Unit01_Btn360"
 },
 "cursor": "hand"
},
{
 "shadow": false,
 "id": "WebFrame_86B1E718_97D3_800B_41DD_542A77282AA8",
 "paddingTop": 0,
 "width": "100%",
 "scrollEnabled": true,
 "right": "0%",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "insetBorder": false,
 "propagateClick": false,
 "height": "100%",
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UNIT 01 360"
 }
},
{
 "shadow": false,
 "id": "WebFrame_8616990E_97D1_8004_41DE_D630A854BFCE",
 "left": "0%",
 "paddingTop": 0,
 "width": "100%",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "insetBorder": false,
 "propagateClick": false,
 "height": "100%",
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UNIT 02 360"
 }
},
{
 "shadow": false,
 "id": "WebFrame_86379ADD_97D1_8004_41C7_191CB85EF101",
 "left": "0%",
 "paddingTop": 0,
 "width": "100%",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "insetBorder": false,
 "propagateClick": false,
 "height": "100%",
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UNIT 03 360"
 }
},
{
 "shadow": false,
 "id": "WebFrame_85D66C65_97D1_8005_41D9_54DF35C4E322",
 "left": "0%",
 "paddingTop": 0,
 "width": "100%",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "insetBorder": false,
 "propagateClick": false,
 "height": "100%",
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UNIT 04 360"
 }
},
{
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "id": "IconButton_B2564B94_9659_CCCE_41A7_67FC7D5805B7",
 "paddingTop": 0,
 "width": 23.61,
 "toolTipOpacity": 1,
 "right": "5%",
 "toolTipFontSize": "1.11vmin",
 "horizontalAlign": "center",
 "maxWidth": 128,
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipTextShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "top": "9%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "mode": "toggle",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTip": "Fullscreen",
 "height": 21.2,
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_B2564B94_9659_CCCE_41A7_67FC7D5805B7.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "click": "this.setComponentVisibility(this.WebFrame_86B1E718_97D3_800B_41DD_542A77282AA8, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_8616990E_97D1_8004_41DE_D630A854BFCE, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_86379ADD_97D1_8004_41C7_191CB85EF101, false, 0, null, null, false); this.setComponentVisibility(this.WebFrame_85D66C65_97D1_8005_41D9_54DF35C4E322, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_B2564B94_9659_CCCE_41A7_67FC7D5805B7, false, 0, null, null, false)",
 "visible": false,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Clear/close Overall"
 },
 "cursor": "hand",
 "toolTipShadowSpread": 0
},
{
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "id": "IconButton_8282E7FC_97F0_800B_41D6_C97DE033915A",
 "paddingTop": 0,
 "width": 24,
 "toolTipOpacity": 1,
 "right": "2%",
 "toolTipFontSize": "1.11vmin",
 "horizontalAlign": "center",
 "maxWidth": 128,
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipTextShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "top": "4%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "mode": "toggle",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTip": "Fullscreen",
 "height": 21,
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_8282E7FC_97F0_800B_41D6_C97DE033915A_rollover.png",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_8282E7FC_97F0_800B_41D6_C97DE033915A.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "visible": false,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Clear/close BALCONY"
 },
 "cursor": "hand",
 "toolTipShadowSpread": 0
},
{
 "shadow": false,
 "id": "IconButton_B3265AF3_9669_CC4B_41D0_D9B6BFF35224",
 "paddingTop": 0,
 "width": "89.804%",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_B3265AF3_9669_CC4B_41D0_D9B6BFF35224_pressed.png",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "mode": "push",
 "click": "this.setMediaBehaviour(this.playList_EA95635E_F95A_457F_41EB_275A613DFE8A, 0); this.overlay_D174A92A_C158_CC97_41D7_EC5AF4920433.set('enabled', true); this.overlay_D177A92A_C158_CC97_41D4_7E9E57103D5C.set('enabled', true); this.overlay_D177992A_C158_CC97_41E5_D9B8EB9B5120.set('enabled', true); this.overlay_D177692A_C158_CC97_41DD_92F9E160BEAD.set('enabled', true); this.overlay_D174692B_C158_CC95_41B6_3E8528D2C10B.set('enabled', true); this.overlay_D177792A_C158_CC97_41DC_FD0E5FB7A28F.set('enabled', true); this.overlay_D174992B_C158_CC95_41E3_BCE19C49B410.set('enabled', true); this.overlay_D174B92B_C158_CC95_41D6_F26CD5B81BCD.set('enabled', true); this.overlay_D177592A_C158_CC97_41E0_D96C1260A3BD.set('enabled', true); this.overlay_D177092A_C158_CC97_41E6_EA148B92A128.set('enabled', true); this.overlay_D174E92A_C158_CC97_41E0_84019549270B.set('enabled', true)",
 "rollOverIconURL": "skin/IconButton_B3265AF3_9669_CC4B_41D0_D9B6BFF35224_rollover.png",
 "height": "4.435%",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minWidth": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_B3265AF3_9669_CC4B_41D0_D9B6BFF35224.png",
 "propagateClick": false,
 "data": {
  "name": "Unit01_Btn360"
 },
 "cursor": "hand"
},
{
 "shadow": false,
 "id": "Image_9C6C70A9_92B2_C13C_41DC_8C4948658E49",
 "left": -1,
 "paddingTop": 0,
 "width": "100%",
 "maxWidth": 1727,
 "url": "skin/Image_9C6C70A9_92B2_C13C_41DC_8C4948658E49.png",
 "maxHeight": 694,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Unit01_Image"
 },
 "horizontalAlign": "center"
},
{
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "id": "IconButton_B7A76875_9850_8005_41C3_294DD79CABC8",
 "left": "0%",
 "paddingTop": 0,
 "width": 23.61,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "horizontalAlign": "center",
 "maxWidth": 128,
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipTextShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "mode": "toggle",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTip": "Fullscreen",
 "height": 21.2,
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_B7A76875_9850_8005_41C3_294DD79CABC8_rollover.png",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_B7A76875_9850_8005_41C3_294DD79CABC8.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Clear/close"
 },
 "cursor": "hand",
 "toolTipShadowSpread": 0
},
{
 "shadow": false,
 "id": "Image_9D858C33_92B1_412C_41C5_7E401E5A78E3",
 "left": "0%",
 "paddingTop": 0,
 "right": "0%",
 "maxWidth": 1727,
 "url": "skin/Image_9D858C33_92B1_412C_41C5_7E401E5A78E3.png",
 "maxHeight": 694,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Unit02_Image"
 },
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "id": "IconButton_B35749BC_966B_CC3E_41DA_DEC16507CF4B",
 "paddingTop": 0,
 "width": "18%",
 "right": "0%",
 "horizontalAlign": "center",
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_B35749BC_966B_CC3E_41DA_DEC16507CF4B_pressed.png",
 "click": "this.setComponentVisibility(this.Container_864FABDC_97D1_800B_41C5_B7D6AB6511FE, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_8616990E_97D1_8004_41DE_D630A854BFCE, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_B35749BC_966B_CC3E_41DA_DEC16507CF4B_rollover.png",
 "height": "6%",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minWidth": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_B35749BC_966B_CC3E_41DA_DEC16507CF4B.png",
 "propagateClick": false,
 "data": {
  "name": "Unit02_Btn360"
 },
 "cursor": "hand"
},
{
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "id": "IconButton_B3E5BD81_965A_44C7_41D9_EBF63C7F421B",
 "left": "0%",
 "paddingTop": 0,
 "width": 23.61,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "horizontalAlign": "center",
 "maxWidth": 128,
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipTextShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "top": "0%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "mode": "toggle",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTip": "Fullscreen",
 "height": 21.2,
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_B3E5BD81_965A_44C7_41D9_EBF63C7F421B_rollover.png",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_B3E5BD81_965A_44C7_41D9_EBF63C7F421B.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Clear/close"
 },
 "cursor": "hand",
 "toolTipShadowSpread": 0
},
{
 "shadow": false,
 "id": "Image_9C83DEE7_92B1_4133_41D3_4DA19128E932",
 "left": "0%",
 "paddingTop": 0,
 "right": "0%",
 "maxWidth": 1727,
 "url": "skin/Image_9C83DEE7_92B1_4133_41D3_4DA19128E932.png",
 "maxHeight": 694,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Unit03_Image"
 },
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "id": "IconButton_8AB2DBE8_9629_CC45_41CE_A029683E9E81",
 "left": "3.4%",
 "paddingTop": 0,
 "right": "78.6%",
 "horizontalAlign": "center",
 "top": "78%",
 "paddingRight": 0,
 "bottom": "16%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_8AB2DBE8_9629_CC45_41CE_A029683E9E81_pressed.png",
 "click": "this.setComponentVisibility(this.Container_864FABDC_97D1_800B_41C5_B7D6AB6511FE, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_86379ADD_97D1_8004_41C7_191CB85EF101, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_8AB2DBE8_9629_CC45_41CE_A029683E9E81_rollover.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minWidth": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_8AB2DBE8_9629_CC45_41CE_A029683E9E81.png",
 "propagateClick": false,
 "data": {
  "name": "Unit03_Btn360"
 },
 "cursor": "hand"
},
{
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "id": "IconButton_B3EE5EE2_9659_C44A_41DC_9F7EC12A856E",
 "left": "0%",
 "paddingTop": 0,
 "width": 23.61,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "horizontalAlign": "center",
 "maxWidth": 128,
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipTextShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "mode": "toggle",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTip": "Fullscreen",
 "height": 21.2,
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_B3EE5EE2_9659_C44A_41DC_9F7EC12A856E_rollover.png",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_B3EE5EE2_9659_C44A_41DC_9F7EC12A856E.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Clear/close"
 },
 "cursor": "hand",
 "toolTipShadowSpread": 0
},
{
 "shadow": false,
 "id": "Image_9C80616A_92B1_433D_4199_A9113F4AEDA0",
 "left": "0%",
 "paddingTop": 0,
 "right": "0%",
 "maxWidth": 1727,
 "url": "skin/Image_9C80616A_92B1_433D_4199_A9113F4AEDA0.png",
 "maxHeight": 694,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "Unit04_Image"
 },
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "id": "IconButton_9DE7CA1D_92BF_4114_41CA_3C34135FCDAE",
 "left": "3.4%",
 "paddingTop": 0,
 "right": "78.6%",
 "horizontalAlign": "center",
 "top": "78%",
 "paddingRight": 0,
 "bottom": "16%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_9DE7CA1D_92BF_4114_41CA_3C34135FCDAE_pressed.png",
 "click": "this.setComponentVisibility(this.Container_864FABDC_97D1_800B_41C5_B7D6AB6511FE, true, 0, null, null, false); this.setComponentVisibility(this.WebFrame_85D66C65_97D1_8005_41D9_54DF35C4E322, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_9DE7CA1D_92BF_4114_41CA_3C34135FCDAE_rollover.png",
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "minWidth": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_9DE7CA1D_92BF_4114_41CA_3C34135FCDAE.png",
 "propagateClick": false,
 "data": {
  "name": "Unit04_Btn360"
 },
 "cursor": "hand"
},
{
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "id": "IconButton_B5CD6FD5_967A_444F_41CC_F0A1204E15E3",
 "left": "0%",
 "paddingTop": 0,
 "width": 23.61,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "horizontalAlign": "center",
 "maxWidth": 128,
 "toolTipShadowBlurRadius": 3,
 "maxHeight": 128,
 "toolTipTextShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowBlurRadius": 3,
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "mode": "toggle",
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "toolTip": "Fullscreen",
 "height": 21.2,
 "backgroundOpacity": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_B5CD6FD5_967A_444F_41CC_F0A1204E15E3_rollover.png",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_B5CD6FD5_967A_444F_41CC_F0A1204E15E3.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "data": {
  "name": "Clear/close"
 },
 "cursor": "hand",
 "toolTipShadowSpread": 0
}],
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_9ED735C3_9271_436C_41E1_06A73D6E73F2",
  "this.Container_864FABDC_97D1_800B_41C5_B7D6AB6511FE",
  "this.Container_ACEABF0B_A155_DED3_41AB_D5D80FDD2C8A",
  "this.Container_BCE2B0EF_AC71_D720_41B3_01CA9A7D0DC6"
 ],
 "vrPolyfillScale": 0.5,
 "start": "this.init(); this.playList_EA92A35D_F95A_457D_41E5_C3370D4F9BD9.set('selectedIndex', 0)",
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "scripts": {
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); }
 },
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "layout": "absolute",
 "class": "Player",
 "minWidth": 20,
 "borderSize": 0,
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "gap": 10,
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "data": {
  "name": "Player486"
 },
 "mobileMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
