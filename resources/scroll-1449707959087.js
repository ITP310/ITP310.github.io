(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-a4d47934-ca31-4610-873c-e1e55acde97f .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-151add11-2032-499e-98bd-ad717b918abe .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-07455d4a-64aa-44f3-94be-fb52c9303262 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-68503a7d-e959-40d2-95b6-e671729aeb29 .ui-page").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-68503a7d-e959-40d2-95b6-e671729aeb29 #s-Panel_6").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-2b75d125-dae9-4035-b1a0-ae52151f7d77 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-2b75d125-dae9-4035-b1a0-ae52151f7d77 #s-Panel_6").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-b25617ac-3c30-419a-a041-d8c339a8b931 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-cc5c9bd5-aaf6-489b-8661-cede3e146593 .ui-page").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Panel_4").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-9a44e91a-fa23-466d-a09b-7ff04c694555 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);