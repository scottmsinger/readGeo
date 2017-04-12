/*
*   geo_log_data.js
*
*
*/


AFRAME.registerComponent('geo_log_data', {
    multiple: true,
    
    schema: {

    },
    
    init: function () {
        console.log("geo_log_data INIT");
       
        console.log("iterate over object3D")
        this.el.object3D.traverse(function(node) {
            console.log(node);
            if (node.geometry) {
                console.log("first element of posiiton array "); 
                console.log(node.geometry.attributes.position.array[0]);
            }
        });
    },

    update: function(data) {
        
    }
});
