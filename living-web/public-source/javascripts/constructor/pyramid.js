var pyramideRadiusTop = 0;
var pyramideRadiusBottom = 4;
var pyramideRadiusSegments = 4;
var pyramideRadiusOpenEnded = false;

var pyramideTopHeight = 8;
var pyramideBottomHeight = 5;

var colorHeart = 0xecf0f1;
var colorWireframe = 0x000000;


//Pyramide Spawn
  // Top 
  var pyramideGeometryTop = new THREE.CylinderGeometry(pyramideRadiusTop, pyramideRadiusBottom, pyramideTopHeight, pyramideRadiusSegments, pyramideRadiusOpenEnded); 
  var pyramidMaterialTop = new THREE.MeshBasicMaterial({ color: colorHeart,transparent: true}); 
  var pyramidMeshTopWireframe = new THREE.MeshBasicMaterial({ color: colorWireframe,wireframe: true}); 

  var pyramidMeshTop = new THREE.SceneUtils.createMultiMaterialObject(pyramideGeometryTop,[pyramidMeshTopWireframe,pyramidMaterialTop]); 

  // setting top position of the pyramid
  pyramidMeshTop.position.set(0, 4, 0);
  pyramidMeshTop.name = "pyramid";
  scene.add(pyramidMeshTop);

  // Bottom 
  var pyramidGeometryBottom = new THREE.CylinderGeometry(pyramideRadiusTop, pyramideRadiusBottom, pyramideBottomHeight, pyramideRadiusSegments, pyramideRadiusOpenEnded); 
  var pyramidMaterialBottom = new THREE.MeshBasicMaterial({ color: colorHeart});
  var pyramidMaterialBottomWireframe = new THREE.MeshBasicMaterial({ color: colorWireframe,wireframe: true,wireframeLinewidth: 1});  

  var pyramidMeshBottom = new THREE.SceneUtils.createMultiMaterialObject(pyramidGeometryBottom,[pyramidMaterialBottomWireframe,pyramidMaterialBottom]);
  
  // setting bottom position of the pyramid, and inverted position with rotation
  pyramidMeshBottom.position.set(0, -2.5, 0);
  pyramidMeshBottom.rotation.x=- 1 * Math.PI;
  pyramidMeshBottom.name = "pyramid";
  scene.add(pyramidMeshBottom);

// Sphere inside pyramide
var sphereGeometry = new THREE.SphereGeometry(1.5,20,20);
var sphereMaterial = new THREE.MeshBasicMaterial({color: 0xc0392b});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

// position the sphere
sphere.position.x=0;
sphere.position.y=0;
sphere.position.z=0;

// add the sphere to the scene
scene.add(sphere);
