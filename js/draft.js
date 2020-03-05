function elmSelector(elmSelector,howmany) {
    var elm = document.querySelector(elmSelector);
    var counter = 0;
    var parenttarget = "";
    var parent = function doParent(elm) {
        var parent = elm.parentNode;
        parenttarget = parent;
        counter++;
        if (counter < howmany){
            doParent(parent)
        }
    };
    parent(elm);
    return parenttarget;
}

// find active service by active cats
function findactiveChildren(childsSelector,parentSelector, className){
    var elms = document.querySelectorAll(childsSelector);
    for (var i = 0 ; i < elms.length ; i++){
        if (elms[i].classList.contains(className)){
            $(elms[i]).parents(parentSelector).addClass(className);
        }
    }
}
//findactiveChildren(".navbar-nav ul li ul li","li","li_active");
//findactiveChildren(".footer-menu li","ul","li_active");