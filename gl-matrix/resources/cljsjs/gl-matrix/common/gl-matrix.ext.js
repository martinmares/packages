var glMatrix = {};
glMatrix.setMatrixArrayType = function(type){};
glMatrix.toRadian = function(a){};
var vec2 = {};
vec2.create = function(){};
vec2.clone = function(a){};
vec2.fromValues = function(x, y){};
vec2.copy = function(out, a){};
vec2.set = function(out, x, y){};
vec2.add = function(out, a, b){};
vec2.subtract = function(out, a, b){};
vec2.sub = vec2.subtract;
vec2.multiply = function(out, a, b){};
vec2.mul = vec2.multiply;
vec2.divide = function(out, a, b){};
vec2.div = vec2.divide;
vec2.min = function(out, a, b){};
vec2.max = function(out, a, b){};
vec2.scale = function(out, a, b){};
vec2.scaleAndAdd = function(out, a, b, scale){};
vec2.distance = function(a, b){};
vec2.dist = vec2.distance;
vec2.squaredDistance = function(a, b){};
vec2.sqrDist = vec2.squaredDistance;
vec2.length = function (a){};
vec2.len = vec2.length;
vec2.squaredLength = function (a){};
vec2.sqrLen = vec2.squaredLength;
vec2.negate = function(out, a){};
vec2.normalize = function(out, a){};
vec2.dot = function (a, b){};
vec2.cross = function(out, a, b){};
vec2.lerp = function (out, a, b, t){};
vec2.random = function (out, scale){};
vec2.transformMat2 = function(out, a, m){};
vec2.transformMat2d = function(out, a, m){};
vec2.transformMat3 = function(out, a, m){};
vec2.transformMat4 = function(out, a, m){};
vec2.forEach = function(a, stride, offset, count, fn, arg){};
vec2.str = function (a){};
var vec3 = {};
vec3.create = function(){};
vec3.clone = function(a){};
vec3.fromValues = function(x, y, z){};
vec3.copy = function(out, a){};
vec3.set = function(out, x, y, z){};
vec3.add = function(out, a, b){};
vec3.subtract = function(out, a, b){};
vec3.sub = vec3.subtract;
vec3.multiply = function(out, a, b){};
vec3.mul = vec3.multiply;
vec3.divide = function(out, a, b){};
vec3.div = vec3.divide;
vec3.min = function(out, a, b){};
vec3.max = function(out, a, b){};
vec3.scale = function(out, a, b){};
vec3.scaleAndAdd = function(out, a, b, scale){};
vec3.distance = function(a, b){};
vec3.dist = vec3.distance;
vec3.squaredDistance = function(a, b){};
vec3.sqrDist = vec3.squaredDistance;
vec3.length = function (a){};
vec3.len = vec3.length;
vec3.squaredLength = function (a){};
vec3.sqrLen = vec3.squaredLength;
vec3.negate = function(out, a){};
vec3.normalize = function(out, a){};
vec3.dot = function (a, b){};
vec3.cross = function(out, a, b){};
vec3.lerp = function (out, a, b, t){};
vec3.random = function (out, scale){};
vec3.transformMat4 = function(out, a, m){};
vec3.transformMat3 = function(out, a, m){};
vec3.transformQuat = function(out, a, q){};
vec3.rotateX = function(out, a, b, c){};
vec3.rotateY = function(out, a, b, c){};
vec3.rotateZ = function(out, a, b, c){};
vec3.forEach = function(a, stride, offset, count, fn, arg){};
vec3.angle = function(a, b){};
vec3.str = function (a){};
var vec4 = {};
vec4.create = function(){};
vec4.clone = function(a){};
vec4.fromValues = function(x, y, z, w){};
vec4.copy = function(out, a){};
vec4.set = function(out, x, y, z, w){};
vec4.add = function(out, a, b){};
vec4.subtract = function(out, a, b){};
vec4.sub = vec4.subtract;
vec4.multiply = function(out, a, b){};
vec4.mul = vec4.multiply;
vec4.divide = function(out, a, b){};
vec4.div = vec4.divide;
vec4.min = function(out, a, b){};
vec4.max = function(out, a, b){};
vec4.scale = function(out, a, b){};
vec4.scaleAndAdd = function(out, a, b, scale){};
vec4.distance = function(a, b){};
vec4.dist = vec4.distance;
vec4.squaredDistance = function(a, b){};
vec4.sqrDist = vec4.squaredDistance;
vec4.length = function (a){};
vec4.len = vec4.length;
vec4.squaredLength = function (a){};
vec4.sqrLen = vec4.squaredLength;
vec4.negate = function(out, a){};
vec4.normalize = function(out, a){};
vec4.dot = function (a, b){};
vec4.lerp = function (out, a, b, t){};
vec4.random = function (out, scale){};
vec4.transformMat4 = function(out, a, m){};
vec4.transformQuat = function(out, a, q){};
vec4.forEach = function(a, stride, offset, count, fn, arg){};
vec4.str = function (a){};
var mat2 = {};
mat2.create = function(){};
mat2.clone = function(a){};
mat2.copy = function(out, a){};
mat2.identity = function(out){};
mat2.transpose = function(out, a){};
mat2.invert = function(out, a){};
mat2.adjoint = function(out, a){};
mat2.determinant = function (a){};
mat2.multiply = function (out, a, b){};
mat2.mul = mat2.multiply;
mat2.rotate = function (out, a, rad){};
mat2.scale = function(out, a, v){};
mat2.str = function (a){};
mat2.frob = function (a){};
mat2.LDU = function (L, D, U, a){};
var mat2d = {};
mat2d.create = function(){};
mat2d.clone = function(a){};
mat2d.copy = function(out, a){};
mat2d.identity = function(out){};
mat2d.invert = function(out, a){};
mat2d.determinant = function (a){};
mat2d.multiply = function (out, a, b){};
mat2d.mul = mat2d.multiply;
mat2d.rotate = function (out, a, rad){};
mat2d.scale = function(out, a, v){};
mat2d.translate = function(out, a, v){};
mat2d.str = function (a){};
mat2d.frob = function (a){};
var mat3 = {};
mat3.create = function(){};
mat3.fromMat4 = function(out, a){};
mat3.clone = function(a){};
mat3.copy = function(out, a){};
mat3.identity = function(out){};
mat3.transpose = function(out, a){};
mat3.invert = function(out, a){};
mat3.adjoint = function(out, a){};
mat3.determinant = function (a){};
mat3.multiply = function (out, a, b){};
mat3.mul = mat3.multiply;
mat3.translate = function(out, a, v){};
mat3.rotate = function (out, a, rad){};
mat3.scale = function(out, a, v){};
mat3.fromMat2d = function(out, a){};
mat3.fromQuat = function (out, q){};
mat3.normalFromMat4 = function (out, a){};
mat3.str = function (a){};
mat3.frob = function (a){};
var mat4 = {};
mat4.create = function(){};
mat4.clone = function(a){};
mat4.copy = function(out, a){};
mat4.identity = function(out){};
mat4.transpose = function(out, a){};
mat4.invert = function(out, a){};
mat4.adjoint = function(out, a){};
mat4.determinant = function (a){};
mat4.multiply = function (out, a, b){};
mat4.mul = mat4.multiply;
mat4.translate = function (out, a, v){};
mat4.scale = function(out, a, v){};
mat4.rotate = function (out, a, rad, axis){};
mat4.rotateX = function (out, a, rad){};
mat4.rotateY = function (out, a, rad){};
mat4.rotateZ = function (out, a, rad){};
mat4.fromRotationTranslation = function (out, q, v){};
mat4.fromQuat = function (out, q){};
mat4.frustum = function (out, left, right, bottom, top, near, far){};
mat4.perspective = function (out, fovy, aspect, near, far){};
mat4.ortho = function (out, left, right, bottom, top, near, far){};
mat4.lookAt = function (out, eye, center, up){};
mat4.str = function (a){};
mat4.frob = function (a){};
var quat = {};
quat.create = function(){};
quat.rotationTo = function(out, a, b){};
quat.setAxes = function(out, view, right, up){};
quat.clone = vec4.clone;
quat.fromValues = vec4.fromValues;
quat.copy = vec4.copy;
quat.set = vec4.set;
quat.identity = function(out){};
quat.setAxisAngle = function(out, axis, rad){};
quat.add = vec4.add;
quat.multiply = function(out, a, b){};
quat.mul = quat.multiply;
quat.scale = vec4.scale;
quat.rotateX = function (out, a, rad){};
quat.rotateY = function (out, a, rad){};
quat.rotateZ = function (out, a, rad){};
quat.calculateW = function (out, a){};
quat.dot = vec4.dot;
quat.lerp = vec4.lerp;
quat.slerp = function (out, a, b, t){};
quat.invert = function(out, a){};
quat.conjugate = function (out, a){};
quat.length = vec4.length;
quat.len = quat.length;
quat.squaredLength = vec4.squaredLength;
quat.sqrLen = quat.squaredLength;
quat.normalize = vec4.normalize;
quat.fromMat3 = function(out, m){};
quat.str = function (a){};
