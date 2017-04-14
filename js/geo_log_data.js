/*
*   geo_log_data.js
*
*
*/


AFRAME.registerComponent('geo_log_data', {
    multiple: false,
    
    schema: {
        foo: {default: "bar"}
    },
    
    init: function () {
        var data_loc = this.data;
        var el_loc = this.el;
        const mesh = this.el.getObject3D('mesh');
        console.log("Checking for mesh "+ this.el.id);
        
        is_ready = false;
        
        if (!mesh.children.length) {
            console.log("No Mesh Yet)");
            this.el.addEventListener('object3dset', this.init.bind(this));
        }
        else {
            console.log("There was a mesh for "+this.el.id+"\n\tit looks like:");
            console.log(mesh);
            console.log("");
            is_ready = true;
        }

        if(is_ready){
            console.log("geo_log_data INIT for "+el_loc.id);
            console.log(el_loc.id+" EL");
            console.log(el_loc);
            console.log(el_loc.id+" DATA");
            console.log(data_loc);
            console.log(el_loc.id+" 3D");
            console.log(el_loc.object3D);
            console.log(el_loc.id+" 3D.children");
            console.log(el_loc.object3D.children);
            console.log(el_loc.id+" 3D.children[0]");
            console.log(el_loc.object3D.children[0]);
            console.log(el_loc.id+" 3D.children[0].children");
            console.log(el_loc.object3D.children[0].children);
            console.log(el_loc.id+" 3D.children[0].children[0]");
            console.log(el_loc.object3D.children[0].children[0]);
            console.log(el_loc.id+" 3D.children[0].children[0].geometry");
            console.log(el_loc.object3D.children[0].children[0].geometry);
            console.log(el_loc.id+" 3D.children[0].children[0].geometry.attributes");
            console.log(el_loc.object3D.children[0].children[0].geometry.attributes);
            console.log("create the new uv1 array");
            console.log(el_loc.object3D.children[0].children[0].geometry.attributes.uv.array);
            var uv1 = new Float32Array( el_loc.object3D.children[0].children[0].geometry.attributes.uv.array );
            el_loc.object3D.children[0].children[0].geometry.addAttribute("uv1", new THREE.BufferAttribute(uv1, 2));
            console.log(el_loc.object3D.children[0].children[0].geometry.attributes);

            console.log(el_loc.object3D.children[0].children[0].geometry.attributes.uv.array[301]);
            console.log(el_loc.object3D.children[0].children[0].geometry.attributes.uv1.array[301]);

            //new THREE.BufferAttribute( vertices, 3 )
            //console.log(el_loc.id+" 3D.children[0].children[0].geometry.attributes.position");
            //console.log(el_loc.object3D.children[0].children[0].geometry.attributes.position);
            //console.log(el_loc.id+" 3D.children[0].children[0].geometry.attributes.position.array");
            //console.log(el_loc.object3D.children[0].children[0].geometry.attributes.position.array);
        }

        console.log("END "+el_loc.id+"\n\n");
    },

    update: function(data) {
        
    }
});


/*
    init: function () {
        console.log("geo_log_data INIT for "+this.el.id);
        //console.log("So here's what this.el");
        //console.log(this.el);
        //console.log("")
        
        const mesh = this.el.getObject3D('mesh');

        console.log("Checking for mesh "+ this.el.id);
        if (!mesh.children.length) {
            console.log("No Mesh Yet)");
            this.el.addEventListener('object3dset', this.init.bind(this));
        }
        else {
            console.log("There was a mesh for "+this.el.id+"\n\tit looks like:");
            console.log(mesh);
            console.log("");
        }

         console.log("\nBEGIN iterate over object3D for "+this.el.id);
         this.el.object3D.traverse(function(node) {
             console.log(node);
            //  if (node.geometry) {
             if (node.children) {
                 console.log("\n children:");
                 console.log(node.children);
                 console.log(node.children[0]);
                 console.log(node.children[0][0]);
                 console.log("");
                 //console.log("\nfirst element of posiiton array "); 
                 //console.log(node.geometry.attributes.position.array[0]);
             }
         });
        console.log("END iteration for "+this.el.id+"\n\n");
    },
*/
