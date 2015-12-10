(function(window, undefined) {
  var dictionary = {
    "a4d47934-ca31-4610-873c-e1e55acde97f": "Event2",
    "151add11-2032-499e-98bd-ad717b918abe": "Search",
    "07455d4a-64aa-44f3-94be-fb52c9303262": "Message",
    "68503a7d-e959-40d2-95b6-e671729aeb29": "Screen_1",
    "2b75d125-dae9-4035-b1a0-ae52151f7d77": "SearchResults",
    "b25617ac-3c30-419a-a041-d8c339a8b931": "Loading Screen",
    "cc5c9bd5-aaf6-489b-8661-cede3e146593": "Side_Panel_1",
    "9a44e91a-fa23-466d-a09b-7ff04c694555": "profile3",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);