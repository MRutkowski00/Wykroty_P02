var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0036252145014792,
          "pitch": -0.06368201478049862,
          "rotation": 0,
          "target": "2-sala-konferencyjna"
        },
        {
          "yaw": 1.2171663852058732,
          "pitch": 0.030623062739453033,
          "rotation": 0,
          "target": "1-komunikacja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-komunikacja",
      "name": "Komunikacja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4436455042024008,
          "pitch": 0.01393743756298349,
          "rotation": 0,
          "target": "0-lobby"
        },
        {
          "yaw": -2.584226967201637,
          "pitch": 0.07213707665327007,
          "rotation": 0,
          "target": "3-wc-dla-ozn"
        },
        {
          "yaw": 0.05312291142958259,
          "pitch": -0.18763507557105719,
          "rotation": 0,
          "target": "4-open-space-a"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.051389049873671766,
          "pitch": -0.023110778062632065,
          "title": "Komunikacja na piętrze w opracowaniu",
          "text": ""
        }
      ]
    },
    {
      "id": "2-sala-konferencyjna",
      "name": "Sala konferencyjna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.204970608694569,
          "pitch": -0.01622243325060424,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc-dla-ozn",
      "name": "WC dla OzN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2777681416343256,
          "pitch": -0.0013496896449982643,
          "rotation": 0,
          "target": "1-komunikacja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-open-space-a",
      "name": "Open space A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4307537569158324,
          "pitch": 0.011205967124741534,
          "rotation": 0,
          "target": "5-open-space-b"
        },
        {
          "yaw": -3.135699210997034,
          "pitch": 0.054506392688159266,
          "rotation": 0,
          "target": "1-komunikacja"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.1276307851939613,
          "pitch": 0.1750827346931363,
          "title": "Komunikacja w opracowaniu",
          "text": ""
        }
      ]
    },
    {
      "id": "5-open-space-b",
      "name": "Open Space B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05612514593323503,
          "pitch": 0.011229295223028402,
          "rotation": 0,
          "target": "4-open-space-a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wykroty_02",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
