# Vector.js

Vector.js is a lightweight JavaScript library for p erforming 2D and 3D vector operations . It provides convenient methods for vector arithmetic ,transformations, and projections.

## Installation

You can include Vector.js directly in your HTML file:

```html
<script src="path/to/vector.js"></script>
```

## Usage
### Vec2
```js
// Create a new 2D vector
const v1 = new Vector.Vec2(2, 3);

// Scale the vector by a factor of 2
v1.scale(2);

// Add another vector to it
const v2 = new Vector.Vec2(1, 1);
v1.add(v2);

// Calculate the dot product with another vector
const dotProduct = v1.dot(v2);

// Get the magnitude of the vector
const magnitude = v1.magnitude();

// Normalize the vector
v1.unit();
```

### Vec3
```js
// Create a new 3D vector
const v3 = new Vector.Vec3(1, 2, 3);

// Scale the vector by a factor of 3
v3.scale(3);

// Cross product with another vector
const crossProduct = v3.cross(new Vector.Vec3(4, 5, 6));

// Rotate the vector around the X-axis
v3.rotX(90);

// Project the 3D vector onto a 2D plane
const projectedVec = v3.project(cameraPosition, scalingFactor, viewportWidth, viewportHeight);
````

API Reference
### Vec2 Methods
    scale(n): Scales the vector by a scalar.
    add(v): Adds another vector to this vector.
    sub(v): Subtracts another vector from this vector.
    dot(v): Calculates the dot product with another vector.
    magnitude(): Returns the magnitude of the vector.
    unit(): Normalizes the vector.
    rotX(theta): Rotates the vector around the X-axis.
    rotY(theta): Rotates the vector around the Y-axis.
    toArray(): Returns an array representation of the vector.
    clone(): Creates a deep copy of the vector.

### Vec3 Methods
    scale(num): Scales the vector by a scalar.
    add(obj): Adds another vector to this vector.
    sub(obj): Subtracts another vector from this vectorross(obj): Calculates the cross product with another vector.
    dot(obj): Calculates the dot product with another v```
    ector.
    magnitude(): Returns the magnitude of the vector.
    unit(): Normalizes the vector.
    rotX(theta): Rotates the vector around the X-axis.
    rotY(theta): Rotates the vector around the Y-axis.
    rotZ(theta): Rotates the vector around the Z-axis.
    toArray(): Returns an array representation of the vector.
    clone(): Creates a deep copy of the vector.
    project(cameraPosition, scalingFactor, viewportWidth, viewportHeight): Projects the 3D vector onto a 2D plane.