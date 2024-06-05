;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Vector = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const Vector = {};

  function Vec2(x = 0, y = 0) {
    if (!(this instanceof Vec2)) {
      return new Vec2(x, y);
    }
    this.x = x;
    this.y = y;
    return this;
  }

  Object.defineProperty(Vec2, "I", {
    value: new Vec2(1, 0),
    writable: false,
    configurable: false,
  });

  Object.defineProperty(Vec2, "J", {
    value: new Vec2(0, 1),
    writable: false,
    configurable: false,
  });

  Vec2.prototype.scale = function (n) {
    const self = this;
    self.x *= n;
    self.y *= n;
    return self;
  };

  Vec2.prototype.add = function (v) {
    const self = this;
    self.x += v.x;
    self.y += v.y;
    return self;
  };

  Vec2.prototype.sub = function (v) {
    const self = this;
    self.x -= v.x;
    self.y -= v.y;
    return self;
  };

  Vec2.prototype.dot = function (v) {
    return this.x * v.x + this.y * v.y;
  };

  Vec2.prototype.div = function (v) {
    const self = this;
    self.x /= v.x;
    self.y /= v.y;
    return self;
  };

  Vec2.prototype.magnitude = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  };

  Vec2.prototype.unit = function () {
    const mag = this.magnitude();
    this.x /= mag;
    this.y /= mag;
    return this;
  };

  Vec2.prototype.rotX = function (theta) {
    const angleInRadian = (Math.PI / 180) * theta;
    const cosTheta = Math.cos(angleInRadian);
    const sinTheta = Math.sin(angleInRadian);
    const newY = this.y * cosTheta - this.x * sinTheta;
    this.x = this.y * sinTheta + this.x * cosTheta;
    this.y = newY;
  };

  Vec2.prototype.rotY = function (theta) {
    const angleInRadian = (Math.PI / 180) * theta;
    const cosTheta = Math.cos(angleInRadian);
    const sinTheta = Math.sin(angleInRadian);
    const newX = this.x * cosTheta - this.z * sinTheta;
    this.z = this.x * sinTheta + this.z * cosTheta;
    this.x = newX;
  };

  Vec2.prototype.toArray = function () {
    return [this.x, this.y];
  };

  Vec2.prototype.clone = function () {
    return new Vec2(this.x, this.y);
  };

  Vector["Vec2"] = Vec2;

  function Vec3(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  Object.defineProperty(Vec3, "I", {
    value: new Vec3(1, 0, 0),
    configurable: false,
    writable: false,
  });

  Object.defineProperty(Vec3, "J", {
    value: new Vec3(0, 1, 0),
    configurable: false,
    writable: false,
  });

  Object.defineProperty(Vec3, "K", {
    value: new Vec3(0, 0, 1),
    configurable: false,
    writable: false,
  });

  /**
   * 
   * @param {*} num 
   * @returns 
   */
  Vec3.prototype.scale = function (num) {
    this.x *= num;
    this.y *= num;
    this.z *= num;
    return this;
  };

  /**
   * Add a 3D Vector
   * @memberof Vec3
   * @param {*} obj 
   * @returns 
   */
  Vec3.prototype.add = function (obj) {
    this.x += obj.x;
    this.y += obj.y;
    this.z += obj.z;
    return this;
  };

  /**
   * 
   * @param {*} obj 
   * @returns Vec3
   */
  Vec3.prototype.sub = function (obj) {
    this.x -= obj.x;
    this.y -= obj.y;
    this.z -= obj.z;
    return this;
  };

  /**
   * Cross Product of a 3D Vector
   * @memberof Vec3
   * @param {object} obj  Vec3
   * @returns Vec3
   */
  Vec3.prototype.cross = function (obj) {
    const newX = this.y * obj.z - this.z * obj.y;
    const newY = this.z * obj.x - this.x * obj.z;
    const newZ = this.x * obj.y - this.y * obj.x;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    return this;
  };

  /**
   * @
   * @memberof Vec3
   * @param {*}
   */
  Vec3.prototype.dot = function (obj) {
    return this.x * obj.x + this.y * obj.y + this.z * obj.z;
  };

  Vec3.prototype.div = function (obj) {
    this.x /= obj.x;
    this.y /= obj.y;
    this.z /= obj.z;
    return this;
  };
  
  Vec3.prototype.magnitude = function () {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  };

  Vec3.prototype.unit = function () {
    const mag = this.magnitude();
    this.x /= mag;
    this.y /= mag;
    this.z /= mag;
    return this;
  };

  Vec3.prototype.rotX =function(theta) {
    const angleInRadian = (Math.PI / 180) * theta;
    const cosTheta = Math.cos(angleInRadian);
    const sinTheta = Math.sin(angleInRadian);
    const newY = this.y * cosTheta - this.z * sinTheta;
    const newZ = this.y * sinTheta + this.z * cosTheta;
    this.y = newY;
    this.z = newZ;
    return this;
  }

  Vec3.prototype.rotY = function(theta) {
    const angleInRadian = (Math.PI / 180) * theta;
    const cosTheta = Math.cos(angleInRadian);
    const sinTheta = Math.sin(angleInRadian);
    const newX = this.x * cosTheta + this.z * sinTheta;
    const newZ = -this.x * sinTheta + this.z * cosTheta;
    this.x = newX;
    this.z = newZ;
    return this;
  },

  Vec3.prototype.rotZ = function(theta) {
    const angleInRadian = (Math.PI / 180) * theta;
    const cosTheta = Math.cos(angleInRadian);
    const sinTheta = Math.sin(angleInRadian);
    const newX = this.x * cosTheta - this.y * sinTheta;
    const newY = this.x * sinTheta + this.y * cosTheta;
    this.x = newX;
    this.y = newY;
    return this;
  },

  Vec3.prototype.toArray = function () {
    return [this.x, this.y, this.z];
  };

  Vec3.prototype.clone = function () {
    return new Vec3(this.x, this.y, this.z);
  };

  
Vec3.prototype.project = function(cameraPosition, viewport = { height: 100, width: 100 }, scalingFactor = 1) {
  const { height, width } = viewport;
  const cameraToPoint = new Vec3(
    this.x - cameraPosition.x,
    this.y - cameraPosition.y,
    this.z - cameraPosition.z
  );

  const projectedX = (cameraToPoint.x / cameraToPoint.z) * scalingFactor + (width / 2);
  const projectedY = (cameraToPoint.y / cameraToPoint.z) * scalingFactor + (height / 2);
  return new Vec2(projectedX, projectedY);
 }, 

  Vector["Vec3"] = Vec3;
  return Vector;

}));
