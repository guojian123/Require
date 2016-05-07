require(["config"],function(){
    require(["jquery"],function(_){
        require(["a","b"],function(a,b){
            $("#btn-01").bind("click",function(){
                a.aClick();
            });
            $("#btn-02").bind("click",function(){
                b.bClick();
            });
            $("#btn-03").bind("click",function(){
                alert("a.js add b.js will work together");
                a.aClick();
                b.bClick();
            });
        });
    });
});