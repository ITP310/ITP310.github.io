jQuery("#simulation")
  .on("click", ".s-151add11-2032-499e-98bd-ad717b918abe .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_12",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "9"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_11",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-15"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_16"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_12",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_11",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_8",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "9"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_7",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-15"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_8",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_7",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-blue_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "7px 7px 7px 7px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px"
                      },
                      "expressions": {
                        "width": "Math.max(375 - 1 - 1 - 4 - 4, 0) + 'px'",
                        "height": "Math.max(49 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "7px 7px 7px 7px",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(375 - 1 - 1 - 4 - 4, 0) + 'px'",
                        "height": "Math.max(49 - 1 - 1 - 4 - 4, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2b75d125-dae9-4035-b1a0-ae52151f7d77",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Label_58": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Avenir,Arial"
                      }
                    }
                  },{
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Label_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Label_58 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Avenir,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "200"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Label_59": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Label_59 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-151add11-2032-499e-98bd-ad717b918abe #s-Label_59 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/68503a7d-e959-40d2-95b6-e671729aeb29",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-151add11-2032-499e-98bd-ad717b918abe .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button-blue")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue": {
                        "attributes": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions": {
                          "width": "Math.max(162 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue": {
                        "attributes-ie": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions-ie": {
                          "width": "Math.max(162 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Button-blue_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_1": {
                        "attributes": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions": {
                          "width": "Math.max(161 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_1": {
                        "attributes-ie": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions-ie": {
                          "width": "Math.max(161 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Button-blue_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_2": {
                        "attributes": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions": {
                          "width": "Math.max(162 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_2": {
                        "attributes-ie": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions-ie": {
                          "width": "Math.max(162 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Button-blue_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_3": {
                        "attributes": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions": {
                          "width": "Math.max(161 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_3": {
                        "attributes-ie": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions-ie": {
                          "width": "Math.max(161 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Button-blue_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_4": {
                        "attributes": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px",
                          "font-size": "11.0pt",
                          "font-family": "Roboto-Regular,Arial"
                        },
                        "expressions": {
                          "width": "Math.max(162 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_4 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "center"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_4 span": {
                        "attributes": {
                          "color": "#80B8F1",
                          "text-align": "center",
                          "text-decoration": "none",
                          "font-family": "Roboto-Regular,Arial",
                          "font-size": "11.0pt"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_4": {
                        "attributes-ie": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions-ie": {
                          "width": "Math.max(162 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Button-blue_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_5": {
                        "attributes": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px",
                          "font-size": "11.0pt",
                          "font-family": "Roboto-Regular,Arial"
                        },
                        "expressions": {
                          "width": "Math.max(161 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_5 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "center"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_5 span": {
                        "attributes": {
                          "color": "#80B8F1",
                          "text-align": "center",
                          "text-decoration": "none",
                          "font-family": "Roboto-Regular,Arial",
                          "font-size": "11.0pt"
                        }
                      }
                    },{
                      "#s-151add11-2032-499e-98bd-ad717b918abe #s-Button-blue_5": {
                        "attributes-ie": {
                          "border-top-width": "5px",
                          "border-top-style": "solid",
                          "border-top-color": "#70B892",
                          "border-right-width": "5px",
                          "border-right-style": "solid",
                          "border-right-color": "#70B892",
                          "border-bottom-width": "5px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#70B892",
                          "border-left-width": "5px",
                          "border-left-style": "solid",
                          "border-left-color": "#70B892",
                          "border-radius": "5px 5px 5px 5px",
                          "padding-top": "3px",
                          "padding-right": "3px",
                          "padding-bottom": "3px",
                          "padding-left": "3px"
                        },
                        "expressions-ie": {
                          "width": "Math.max(161 - 5 - 5 - 3 - 3, 0) + 'px'",
                          "height": "Math.max(33 - 5 - 5 - 3 - 3, 0) + 'px'"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("drag", ".s-151add11-2032-499e-98bd-ad717b918abe .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Group_2",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-151add11-2032-499e-98bd-ad717b918abe .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-151add11-2032-499e-98bd-ad717b918abe .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("swipeleft", ".s-151add11-2032-499e-98bd-ad717b918abe .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_12",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "9"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_11",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-15"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_16"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_8",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "9"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_7",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-15"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("swiperight", ".s-151add11-2032-499e-98bd-ad717b918abe .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_12",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_11",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_8",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_7",
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "26"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });