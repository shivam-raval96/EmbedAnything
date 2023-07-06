(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(36),o=n.n(r),s=(n(56),n(6)),l=n(7),c=n(9),d=n(8),h=n(10),u=(n(58),n(12)),m=n(2),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.setSidebarCanvas(this.side_canvas),this.handleSelectAlgorithm=this.handleSelectAlgorithm.bind(this)}},{key:"handleSelectAlgorithm",value:function(e){var t=e.target.value;this.props.selectAlgorithm(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.sidebar_orientation,i=t.sidebar_image_size,r=t.grem,o=t.p,s=t.hover_index,l=t.mnist_labels,c=t.color_array,d=t.algorithm_options,h=t.algorithm_choice;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",flexGrow:1}},a.a.createElement("div",null," ",a.a.createElement("div",{style:{padding:r/2,display:"flex",justifyContent:"space-between",alignItems:"center"}},a.a.createElement("div",null,"Algorithm:"),a.a.createElement("select",{onChange:this.handleSelectAlgorithm,value:d[h]},d.map(function(e,t){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("div",{style:{display:"flex",flexDirection:"horizontal"===n?"row":"column"}},a.a.createElement("div",null,a.a.createElement("canvas",{ref:function(t){e.side_canvas=t},width:i,height:i})),a.a.createElement("div",{style:{flexGrow:1}},a.a.createElement("div",{style:{background:s?"rgb(".concat(c[l[s]].join(","),")"):"transparent",color:s?"#000":"#fff",padding:o(r/4,r/2),display:"flex",justifyContent:"space-between",transition:"all 0.1s linear"}},a.a.createElement("div",null,"Label:"),s?a.a.createElement("div",null,l[s]):null),a.a.createElement("div",{style:{padding:o(r/4,r/2),display:"flex",justifyContent:"space-between"}},"Index:",s?a.a.createElement("div",null,s):null)),a.a.createElement("div",null,a.a.createElement("b",null,"NOTE: Scroll up/down to zoom in/out",a.a.createElement("br",null)," ",a.a.createElement("br",null),"Image and Text positions are synthetically genreated, meant only as placeholders",a.a.createElement("br",null)," ",a.a.createElement("br",null),"Hover-over-to-view is active for images only",a.a.createElement("br",null)," ",a.a.createElement("br",null),"Label and index will be used if additional metadata is included.")))),a.a.createElement("div",{style:{padding:r/2}},a.a.createElement("div",null,"A WIP Multimodal embedding viewer."," ",a.a.createElement("button",{onClick:function(){e.props.toggleAbout(!0)}},"About"))))}}]),t}(i.Component),g=n(14),f=n(27),b=n(1),p=n(5),y=n(4),_=n(20),w=n(61),x=Object(f.a)(Array(19)).map(function(e,t){return"".concat("/EmbedAnything","/sprites/").concat("tile_").concat(t,".png")}),j=x.map(function(e){var t=document.createElement("img");return t.src=e,t});function O(e,t){void 0===t&&(t={});var n=t.hasOwnProperty("fontface")?t.fontface:"Cambria",i=t.hasOwnProperty("fontsize")?t.fontsize:18,a=t.hasOwnProperty("borderThickness")?t.borderThickness:4,r=t.hasOwnProperty("borderColor")?t.borderColor:{r:0,g:0,b:0,a:1},o=t.hasOwnProperty("backgroundColor")?t.backgroundColor:{r:255,g:0,b:255,a:1},s=t.hasOwnProperty("textColor")?t.textColor:{r:0,g:0,b:0,a:1},l=document.createElement("canvas"),c=l.getContext("2d");c.font=i+"px "+n;var d=c.measureText(e).width;c.fillStyle="rgba("+o.r+","+o.g+","+o.b+","+o.a+")",c.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+r.a+")",c.fillStyle="rgba("+s.r+", "+s.g+", "+s.b+", 1.0)",c.fillText(e,a,i+a,d);var h=new b.p(l);h.needsUpdate=!0;var u=new b.o({map:h,useScreenCoordinates:!1}),m=new b.n(u);return m.scale.set(.1*i,.05*i,.75*i),m}var E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleResize=function(e,t){n.camera.aspect=e/t,n.camera.updateProjectionMatrix(),n.renderer.setSize(e,t);var i=n.getScaleFromZ(n.camera.position.z),a=-n.camera.position.x*i+n.props.width/2,r=n.camera.position.y*i+n.props.height/2,o=y.f.translate(a,r).scale(i),s=y.d(n.mount);n.d3_zoom.transform(s,o)},n.state={},n.init=n.init.bind(Object(m.a)(Object(m.a)(n))),n.addPoints=n.addPoints.bind(Object(m.a)(Object(m.a)(n))),n.handleResize=n.handleResize.bind(Object(m.a)(Object(m.a)(n))),n.setUpCamera=n.setUpCamera.bind(Object(m.a)(Object(m.a)(n))),n.animate=n.animate.bind(Object(m.a)(Object(m.a)(n))),n.getScaleFromZ=n.getScaleFromZ.bind(Object(m.a)(Object(m.a)(n))),n.getZFromScale=n.getZFromScale.bind(Object(m.a)(Object(m.a)(n))),n.changeEmbeddings=n.changeEmbeddings.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"changeEmbeddings",value:function(e,t){for(var n=this,i=[],a=0;a<19;a++){var r=256*a,o=256*(a+1);18===a&&(o=4864),i.push([r,o])}for(var s=i.map(function(e){return n.props[n.props.algorithm_embedding_keys[t]].slice(e[0],e[1])}),l=function(){for(var e=s[c],t=n.scene.children[0].children[c],i=e.length,a=t.geometry.attributes.position.array,r=new Float32Array(3*i),o=0,l=0,d=i;o<d;o++,l+=3){var h=e[o][0],u=e[o][1];r[l]=h,r[l+1]=u,r[l+2]=0}var m=new _.Tween(a).to(r,1e3).easing(_.Easing.Linear.None);m.onUpdate(function(){t.geometry.attributes.position=new b.a(a,3),t.geometry.attributes.position.needsUpdate=!0}),m.start()},c=0;c<19;c++)l()}},{key:"getZFromScale",value:function(e){var t=b.g.degToRad(this.camera.fov);return this.props.height/e/(2*Math.tan(t/2))}},{key:"getScaleFromZ",value:function(e){var t=b.g.degToRad(this.camera.fov),n=2*(Math.tan(t/2)*e);return this.props.height/n}},{key:"zoomHandler",value:function(){var e=y.a.transform,t=e.k,n=-(e.x-this.props.width/2)/t,i=(e.y-this.props.height/2)/t,a=this.getZFromScale(t);this.camera.position.set(n,i,a);for(var r=function(e){var t=y.c().domain([20,5]).range([14,28]).clamp(!0);y.c().domain([2,.1]).range([28,56]);return e>=5?t(e):28}(a),o=this.scene.children[0].children,s=0;s<o.length;s++)o[s].material.uniforms.size.value=r}},{key:"setUpCamera",value:function(){var e,t=this.props,n=t.width,i=t.height,a=t.txt_embeddings,r=(this.camera.aspect,this.camera.fov),o=b.g.degToRad(r),s=a.map(function(e){return e[0]}),l=p.min(s),c=p.max(s),d=a.map(function(e){return e[1]}),h=p.min(d),u=p.max(d),m=p.max([l,c].map(function(e){return Math.abs(e)})),v=p.max([h,u].map(function(e){return Math.abs(e)})),g=1.25*(e=Math.max(m,v)/Math.tan(o/2));this.camera.far=g,this.camera.position.z=1.1*e,this.d3_zoom=y.e().scaleExtent([this.getScaleFromZ(g-1),this.getScaleFromZ(.1)]).on("zoom",this.zoomHandler.bind(this));var f=y.d(this.mount);this.view=f,f.call(this.d3_zoom);var _=this.getScaleFromZ(this.camera.position.z),w=y.f.translate(n/2,i/2).scale(_);this.d3_zoom.transform(f,w)}},{key:"addPoints",value:function(){for(var e=this.props,t=e.mnist_embeddings,n=(e.img_embeddings,e.mnist_labels),i=(e.img_labels,e.color_array),a=[],r=0;r<19;r++){var o=256*r,s=256*(r+1);18===r&&(s=4864),a.push([o,s])}console.log(a);var l=a.map(function(e){return t.slice(e[0],e[1])}),c=a.map(function(e){return n.slice(e[0],e[1])}),d=new b.q;this.textures=x.map(function(e){var t=d.load(e);return t.flipY=!1,t.magFilter=b.h,t});for(var h=new b.d,u=0;u<19;u++){for(var m=l[u],v=c[u],g=[],f=0;f<m.length;f++){var p=m[f],y=new b.s(p[0],p[1],0);g[f]=y}var _=new b.b,w=g.length,j=new Float32Array(3*w),O=new Float32Array(2*w),E=new Float32Array(3*w);_.addAttribute("position",new b.a(j,3)),_.addAttribute("offset",new b.a(O,2)),_.addAttribute("color",new b.a(E,3));for(var k=0,A=0,S=w;k<S;k++,A+=3){var C=m[k][0],z=m[k][1];j[A]=C,j[A+1]=z,j[A+2]=0}for(var P=0,F=0,M=w;P<M;P++,F+=2){var T=P%16*128/2048,D=128*Math.floor(P/16)/2048;O[F]=T,O[F+1]=D}for(var H=0,U=0,I=w;H<I;H++,U+=3){var Z=i[v[H]];E[U]=Z[0]/255,E[U+1]=Z[1]/255,E[U+2]=Z[2]/255}var L={texture:{value:this.textures[u]},repeat:{value:new b.r(1/16,1/16)},size:{value:50*this.sprite_image_size},clusterActive:{value:0}},R=new b.m({uniforms:L,vertexShader:"\n        attribute vec2 offset;\n        varying vec2 vOffset;\n        attribute vec3 cluster;\n        varying vec3 vCluster;\n        attribute float filteredActive;\n        varying float vFilteredActive;\n        uniform float clusterActive;\n        varying float vClusterActive;\n        uniform float size;\n        uniform float greyTransparency;\n        varying float vGreyTransparency;\n        uniform float imageTransparency;\n        varying float vImageTransparency;\n\n        void main() {\n          vOffset = offset;\n          vFilteredActive = filteredActive;\n          vCluster = cluster;\n          vClusterActive = clusterActive;\n          vGreyTransparency = greyTransparency;\n          vImageTransparency = imageTransparency;\n          gl_PointSize = size;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }",fragmentShader:"\n        uniform sampler2D texture;\n        uniform vec2 repeat;\n        varying vec2 vOffset;\n        varying vec3 vCluster;\n        varying float vClusterActive;\n        varying float vFilteredActive;\n        varying float vGreyTransparency;\n        varying float vImageTransparency;\n        void main() {\n          vec2 uv = vec2( gl_PointCoord.x, gl_PointCoord.y );\n          vec4 tex = texture2D( texture, uv * repeat + vOffset );\n          // make transparent images\n          if ( tex.a < 0.003 ) discard;\n\n          // Display clusters\n          vec4 replace_color = vec4(vCluster,1.0);\n          vec4 default_border_color = vec4(0.00392156863,0.00392156863,0.00392156863,0.0);\n          vec4 diff = tex - default_border_color;\n          float equality = float(dot(diff,diff) < 0.99 && vClusterActive > 0.9);\n          tex = mix( tex, replace_color, equality);\n           \n          // make transparent images\n          tex = mix( tex,  vec4(0.0,0.0,0.0,0.0), vImageTransparency);\n\n          // Grey images filter our selection \n          vec4 filterout_color = vec4(0.3,0.3,0.3,vGreyTransparency);\n          float filterout_equality = float(vFilteredActive > 0.9);\n          tex = mix( tex, filterout_color, filterout_equality );\n          gl_FragColor = tex; //* vec4(vColor, 1.0);\n        }"}),G=new b.j(_,R);G.userData={sprite_index:u},h.add(G)}this.scene.add(h)}},{key:"addTextPoints",value:function(){var e=this.props,t=e.txt_embeddings,n=e.txt,i=(e.color_array,new b.q);this.textures=x.map(function(e){var t=i.load(e);return t.flipY=!1,t.magFilter=b.h,t});for(var a=new b.d,r=0;r<500;r++){var o=[],s=new b.s(t[0],t[1],-1);o[r]=s;var l=new b.b,c=o.length,d=new Float32Array(3*c);new Float32Array(2*c);l.addAttribute("position",new b.a(d,3));for(var h=0,u=0,m=c;h<m;h++,u+=3){var v=t[h][0],g=t[h][1];d[u]=v,d[u+1]=g,d[u+2]=-1}var f=O(n[r][1],{fontsize:15,textColor:{r:0,g:0,b:0,a:.8}});f.position.set(t[r][0],t[r][1],-1);var p={texture:{value:f},size:{value:12.8}},y=new b.m({uniforms:p,vertexShader:"\n        attribute vec2 offset;\n        varying vec2 vOffset;\n        attribute vec3 color;\n        varying vec3 vColor;\n        uniform float size;\n        void main() {\n          vOffset = offset;\n          vColor = color;\n          gl_PointSize = size;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }",fragmentShader:"\n        uniform sampler2D texture;\n        uniform vec2 repeat;\n        varying vec2 vOffset;\n        varying vec3 vColor;\n        void main() {\n          vec2 uv = vec2( gl_PointCoord.x, gl_PointCoord.y );\n          vec4 tex = texture2D( texture, uv * repeat + vOffset );\n          if ( tex.r < 0.5 ) discard;\n          tex.r = 1.0;\n          tex.g = 1.0;\n          tex.b = 1.0;\n          gl_FragColor = tex * vec4(vColor, 1.0);\n        }"}),_=new b.j(l,y);_.userData={sprite_index:r},a.add(_)}this.scene.add(a)}},{key:"addtexts",value:function(){for(var e=this.props,t=e.txt,n=e.txt_embeddings,i=0;i<400;i++){var a=O(t[i][1],{fontsize:13,textColor:{r:0,g:0,b:0,a:.8}});a.position.set(n[i][0],n[i][1],-1),this.scene.add(a)}}},{key:"addBlankHighlightPoints",value:function(){var e=new b.d;this.scene.add(e);var t=[new b.s(0,0,0)],n=new b.b,i=t.length,a=new Float32Array(3*i),r=new Float32Array(2*i);n.addAttribute("position",new b.a(a,3)),n.addAttribute("offset",new b.a(r,2));var o={texture:{value:this.textures[0]},repeat:{value:new b.r(1/16,1/16)},size:{value:500}},s=new b.m({uniforms:o,vertexShader:"\n    attribute vec2 offset;\n    varying vec2 vOffset;\n    uniform float size;\n    void main() {\n      vOffset = offset;\n      gl_PointSize = size;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    uniform sampler2D texture;\n    uniform vec2 repeat;\n    varying vec2 vOffset;\n    void main() {\n      vec2 uv = vec2( gl_PointCoord.x, gl_PointCoord.y );\n      vec4 tex = texture2D( texture, uv * repeat + vOffset );\n      gl_FragColor = tex;\n    }",transparent:!0}),l=new b.j(n,s);l.frustumCulled=!1,this.scene.children[1].visible=!1,this.scene.children[1].add(l)}},{key:"highlightPoint",value:function(e,t,n){var i=this.props,a=i.algorithm_embedding_keys,r=i.algorithm_choice,o=this.scene.children[1].children[0],s=this.props[a[r]][n],l=[new b.s(s[0],s[1],0)],c=new Float32Array(2),d=t%16*128/2048,h=128*Math.floor(t/16)/2048;c[0]=d,c[1]=h,o.geometry.attributes.position.copyVector3sArray(l),o.geometry.attributes.position.needsUpdate=!0,o.geometry.attributes.offset.array=c,o.geometry.attributes.offset.needsUpdate=!0,o.material.uniforms.texture.value=this.textures[e]}},{key:"removeHighlights",value:function(){var e=this.scene.children[1],t=e.children;e.remove.apply(e,Object(f.a)(t))}},{key:"checkIntersects",value:function(e){var t=this.props,n=t.width,i=t.height,a=t.sidebar_ctx,r=t.sidebar_image_size;this.getScaleFromZ(this.camera.position.z);var o=function(e){var t=Object(g.a)(e,2),a=t[0],r=t[1];return new b.s(a/n*2-1,-r/i*2+1,1)}(e);this.raycaster.setFromCamera(o,this.camera),this.raycaster.params.Points.threshold=.25;var s=this.raycaster.intersectObjects(this.scene.children[0].children);if(s[0]){console.log("hi");var l=function(e){return p.sortBy(e,"distanceToRay")}(s)[0],c=l.object.userData.sprite_index,d=l.index,h=256*c+d;this.props.setHoverIndex(h),this.highlightPoint(c,d,h),this.scene.children[1].visible=!0,a.fillRect(0,0,r,r),a.drawImage(j[c],d%16*128,128*Math.floor(d/16),128,128,0,0,r,r)}else this.props.setHoverIndex(null),this.scene.children[1].visible=!1,a.fillRect(0,0,r,r)}},{key:"handleMouse",value:function(){var e=this,t=y.d(this.renderer.domElement);this.raycaster=new b.k,t.on("mousemove",function(){if(!y.a.shiftKey){var n=y.b(t.node()),i=Object(g.a)(n,2),a=[i[0],i[1]];e.checkIntersects(a)}})}},{key:"handlelasso",value:function(){var e=this,t=this.props,n=t.width,i=t.height;t.sidebar_ctx,t.sidebar_image_size;function a(e,t){var a=Object(g.a)(e,2),r=a[0],o=a[1];return new b.s(t*(r/n*2-1.5),-t*(o/i*2-1),1)}function r(e,t){var a=Object(g.a)(e,2),r=a[0],o=a[1];return[t*(r/n*2-1.5),-t*(o/i*2-1)]}this.selectionPoints=[];var o=new b.f({color:255});this.renderer.domElement.addEventListener("pointerdown",function(t){e.lasso=[],e.selectionPoints.length=0,e.points=[],e.points.push(r([t.clientX,t.clientY],e.getScaleFromZ(e.camera.position.z))),e.lasso.push(a([t.clientX,t.clientY],e.getScaleFromZ(e.camera.position.z)))}),this.renderer.domElement.addEventListener("pointerup",function(){console.log(e.points);var t=e.props.mnist_embeddings;e.checkinside(t,e.points)}),this.renderer.domElement.addEventListener("pointermove",function(t){if(0!==(1&t.buttons)){e.points.push(r([t.clientX,t.clientY],e.getScaleFromZ(e.camera.position.z))),e.lasso.push(a([t.clientX,t.clientY],e.getScaleFromZ(e.camera.position.z)));var n=(new b.b).setFromPoints(e.lasso),i=new b.e(n,o);e.scene.add(i)}})}},{key:"checkinside",value:function(e,t){var n=e.map(function(e){return w(e,t)});console.log(n.reduce(function(e,t){return 1*e+1*t},0))}},{key:"init",value:function(){var e=this.props,t=e.width,n=e.height;this.scene=new b.l,this.scene.background=new b.c("#ffffff");var i=t/n;this.camera=new b.i(75,i,.01,1e3),this.renderer=new b.t,this.renderer.setClearColor(1118481,1),this.renderer.setSize(t,n),this.mount.appendChild(this.renderer.domElement),this.addPoints(),this.addBlankHighlightPoints(),this.setUpCamera(),this.animate(),this.handleMouse(),this.addtexts()}},{key:"animate",value:function(){requestAnimationFrame(this.animate),_.update(),this.renderer.render(this.scene,this.camera)}},{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.width,i=t.height;n===e.width&&i===e.height||this.handleResize(n,i),e.algorithm_choice!==this.props.algorithm_choice&&this.changeEmbeddings(e.algorithm_choice,this.props.algorithm_choice)}},{key:"componentWillUnmount",value:function(){this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,i=t.height;return a.a.createElement("div",{style:{width:n,height:i,overflow:"hidden"},ref:function(t){e.mount=t}})}}]),t}(i.Component),k=n(37),A=n.n(k),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.grem;t.p;return a.a.createElement("div",{style:{position:"fixed",left:0,top:0,right:0,bottom:0,background:"#222",color:"#fff",paddingTop:2*n,overflowY:"auto",fontSize:16,lineHeight:1.5}},a.a.createElement("div",{style:{background:"#333",position:"fixed",left:0,top:0,right:0,padding:n/2}},"About",a.a.createElement("button",{onClick:function(){e.props.toggleAbout(!1)},className:"hover-555",style:{position:"absolute",right:0,top:0,height:2*n,width:2*n,padding:n/2,textAlign:"center",cursor:"pointer",textDecoration:"none"}},"\xd7")),a.a.createElement("div",{style:{maxWidth:30*n,margin:"0 auto",padding:n/2,color:"#fff"}},a.a.createElement(A.a,null,"\n# About EmbedAnything\nThis is an interactive visualization that embeds, clusters and analyses multimodal data.\n\n# About UMAP explorer\nThe tool is build upon UMAP explorer. The original code is viewable [on github](https://github.com/GrantCuster/umap-explorer).\n")))}}]),t}(i.Component);function C(e,t){return"".concat(e,"px ").concat(t,"px")}var z=[[141,211,199],[255,255,179],[190,186,218],[251,128,114],[128,177,211],[253,180,98],[179,222,105],[252,205,229],[188,128,189],[204,235,197]],P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={ww:null,wh:null,sidebar_height:null,hover_index:null,show_about:null,algorithm_choice:0},n.sidebar_ctx=null,n.setSize=p.debounce(n.setSize.bind(Object(m.a)(Object(m.a)(n))),200),n.checkHash=n.checkHash.bind(Object(m.a)(Object(m.a)(n))),n.setSidebarCanvas=n.setSidebarCanvas.bind(Object(m.a)(Object(m.a)(n))),n.toggleAbout=n.toggleAbout.bind(Object(m.a)(Object(m.a)(n))),n.selectAlgorithm=n.selectAlgorithm.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"selectAlgorithm",value:function(e){var t=this.props.algorithm_options.indexOf(e);this.setState({algorithm_choice:t})}},{key:"setSize",value:function(){this.setState({ww:window.innerWidth,wh:window.innerHeight});var e=this.sidebar_mount.offsetHeight;this.setState({sidebar_height:e}),this.sidebar_ctx&&(this.sidebar_ctx.imageSmoothingEnabled=!1)}},{key:"setSidebarCanvas",value:function(e){var t=e.getContext("2d");t.imageSmoothingEnabled=!1,this.sidebar_ctx=t}},{key:"toggleAbout",value:function(e){!0===e?(window.history.pushState(null,"About UMAP Explorer","#about"),this.setState({show_about:!0})):!1===e&&(window.history.pushState(null,"UMAP Explorer",window.location.pathname),this.setState({show_about:!1}))}},{key:"setHoverIndex",value:function(e){this.setState({hover_index:e})}},{key:"componentWillMount",value:function(){this.setSize(),this.checkHash()}},{key:"checkHash",value:function(){window.location.hash&&"#about"===window.location.hash?this.setState({show_about:!0}):this.setState({show_about:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setSize),window.addEventListener("popstate",this.checkHash)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setSize)}},{key:"render",value:function(){var e,t,n=this,i=this.props,r=i.mnist_embeddings,o=i.txt,s=i.txt_embeddings,l=i.img_embeddings,c=i.nn50_mnist_embeddings,d=i.md08_umap_mnist_embeddings,h=i.mnist_labels,m=i.algorithm_options,g=i.algorithm_embedding_keys,f=this.state,b=f.ww,p=f.wh,y=f.sidebar_height,_=f.hover_index,w=f.show_about,x=f.algorithm_choice,j=this.sidebar_ctx,O={position:"absolute",left:0,top:0,height:"100vh",overflow:"auto",background:"#222",display:"flex",flexDirection:"column"},k={position:"relative",height:"100vh",background:"#111",overflow:"hidden"},A=16;if(b<800)A=14,O=Object(u.a)({},O,{flexDirection:"row",width:"100%",top:"auto",height:"auto",bottom:0}),k={width:b,height:p-y},e=1.5*A*3,t="horizontal";else if(b<1400){var P=200+(b-800)/600*100;A=14+(b-800)/600*2,e=(O=Object(u.a)({},O,{width:P})).width,k=Object(u.a)({},k,{width:b-P,left:P,height:p}),t="vertical"}else O=Object(u.a)({},O,{width:300}),k=Object(u.a)({},k,{width:b-300,left:300,height:p}),e=O.width,t="vertical";var F=1.5*A,M={fontSize:A,lineHeight:1.5};return null!==b?a.a.createElement("div",{style:M},a.a.createElement("div",{style:O,ref:function(e){n.sidebar_mount=e}},a.a.createElement(v,{sidebar_orientation:t,sidebar_image_size:e,grem:F,p:C,color_array:z,setSidebarCanvas:this.setSidebarCanvas,hover_index:_,mnist_labels:h,txt:o,toggleAbout:this.toggleAbout,algorithm_options:m,algorithm_choice:x,selectAlgorithm:this.selectAlgorithm})),a.a.createElement("div",{style:k},a.a.createElement(E,{width:k.width,height:k.height,mnist_embeddings:r,txt:o,txt_embeddings:s,img_embeddings:l,nn50_mnist_embeddings:c,md08_umap_mnist_embeddings:d,mnist_labels:h,color_array:z,sidebar_ctx:j,sidebar_image_size:e,setHoverIndex:this.setHoverIndex.bind(this),algorithm_embedding_keys:g,algorithm_choice:x})),w?a.a.createElement(S,{grem:F,p:C,toggleAbout:this.toggleAbout}):null):a.a.createElement("div",{style:{padding:"1rem"}},"Loading projections...")}}]),t}(i.Component),F=["UMAP","UMAP min_dist=0.8","UMAP n_neighbors=50"],M=["mnist_embeddings","md08_umap_mnist_embeddings","nn50_mnist_embeddings"],T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={mnist_embeddings:null,mnist_labels:null,md08_umap_mnist_embeddings:null,txt_embeddings:null},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"scaleEmbeddings",value:function(e){var t=e.map(function(e){return Math.abs(e[0])}),n=e.map(function(e){return Math.abs(e[1])}),i=p.max(t),a=p.max(n),r=Math.max(i,a),o=y.c().domain([-r,r]).range([-20,20]);return e.map(function(e){return[o(e[0]),o(e[1])]})}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat("/EmbedAnything","/mnist_embeddings.json")).then(function(e){return e.json()}).then(function(t){var n=e.scaleEmbeddings(t);e.setState({mnist_embeddings:n})}),fetch("".concat("/EmbedAnything","/md08_umap_mnist_embeddings.json")).then(function(e){return e.json()}).then(function(t){var n=e.scaleEmbeddings(t);console.log("got em"),e.setState({md08_umap_mnist_embeddings:n})}),fetch("".concat("/EmbedAnything","/nn50_mnist_embeddings.json")).then(function(e){return e.json()}).then(function(t){var n=e.scaleEmbeddings(t);e.setState({nn50_mnist_embeddings:n})}),fetch("".concat("/EmbedAnything","/mnist_labels.json")).then(function(e){return e.json()}).then(function(t){return e.setState({mnist_labels:t})}),fetch("".concat("/EmbedAnything","/txt_embeddings.json")).then(function(e){return e.json()}).then(function(t){var n=e.scaleEmbeddings(t);e.setState({txt_embeddings:n})}),fetch("".concat("/EmbedAnything","/txt.json")).then(function(e){return e.json()}).then(function(t){e.setState({txt:t})}),fetch("".concat("/EmbedAnything","/img_embeddings.json")).then(function(e){return e.json()}).then(function(t){e.setState({img_embeddings:t})}),fetch("".concat("/EmbedAnything","/img_labels.json")).then(function(e){return e.json()}).then(function(t){e.setState({img_labels:t})})}},{key:"render",value:function(){return console.log(this.state),this.state.mnist_embeddings&&this.state.mnist_labels?a.a.createElement(P,Object.assign({},this.state,{algorithm_options:F,algorithm_embedding_keys:M})):a.a.createElement("div",{style:{padding:"1rem"}},"Loading data...")}}]),t}(i.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(T,null)}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,n){e.exports=n(116)},56:function(e,t,n){},58:function(e,t,n){}},[[49,2,1]]]);
//# sourceMappingURL=main.41b83417.chunk.js.map