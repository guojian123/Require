define(["jquery","a"],function(_,a){
    function bClick(){
        alert("Hey man,b.js is running.And It relys on a.js");
        a.aClick();
    }

    return {
        bClick:bClick
    }
});