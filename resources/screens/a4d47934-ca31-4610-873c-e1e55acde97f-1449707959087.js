jQuery("#simulation")
  .on("click", ".s-a4d47934-ca31-4610-873c-e1e55acde97f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_1": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_1 span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_2": {
                      "attributes": {
                        "opacity": "0.77",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_2 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=77)",
                        "filter": "alpha(opacity=77)"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=77)",
                        "filter": "alpha(opacity=77)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/68503a7d-e959-40d2-95b6-e671729aeb29"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_3": {
                      "attributes": {
                        "opacity": "0.69",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_3 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=69)",
                        "filter": "alpha(opacity=69)"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=69)",
                        "filter": "alpha(opacity=69)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/68503a7d-e959-40d2-95b6-e671729aeb29"
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
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Label_58": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Avenir,Arial"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Label_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Label_58 span": {
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
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Label_59": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Label_59 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Label_59 span": {
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9a44e91a-fa23-466d-a09b-7ff04c694555",
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
    }
  })
  .on("click", ".s-a4d47934-ca31-4610-873c-e1e55acde97f .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
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
                      "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_1": {
                        "attributes": {
                          "opacity": "0.7"
                        }
                      }
                    },{
                      "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_1": {
                        "attributes-ie": {
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                          "filter": "alpha(opacity=70)"
                        }
                      }
                    },{
                      "#s-a4d47934-ca31-4610-873c-e1e55acde97f #s-Button_1": {
                        "attributes-ie8lte": {
                          "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)",
                          "filter": "alpha(opacity=70)"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimNavigation",
                    "parameter": {
                      "target": "screens/68503a7d-e959-40d2-95b6-e671729aeb29"
                    },
                    "exectype": "timed",
                    "delay": 500
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
  });