# Vector.js
Vector.js is a lightweight JavaScript library for p erforming 2D and 3D vector operations . It provides convenient methods for vector arithmetic ,transformations, and projections.

## Installation
You can include Vector.js directly in your HTML file:

```html
<script src="./src/vector.js" defer></script>
```
API Reference
============
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
    dot(obj): Calculates the dot product with another vector.
    magnitude(): Returns the magnitude of the vector.
    unit(): Normalizes the vector.
    rotX(theta): Rotates the vector around the X-axis.
    rotY(theta): Rotates the vector around the Y-axis.
    rotZ(theta): Rotates the vector around the Z-axis.
    toArray(): Returns an array representation of the vector.
    clone(): Creates a deep copy of the vector.
    project(cameraPosition, scalingFactor, viewportWidth, viewportHeight): Projects the 3D vector onto a 2D plane.