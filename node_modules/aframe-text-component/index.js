/**
 * Text component for A-Frame.
 */
require('./lib/FontUtils');
require('./lib/TextGeometry');
require('./lib/helvetiker_regular.typeface');

module.exports.component = {
  schema: {
    bevelEnabled: { default: false },
    bevelSize: { default: 8, min: 0 },
    bevelThickness: { default: 12, min: 0 },
    curveSegments: { default: 12, min: 0 },
    font: { default: 'helvetiker', min: 0 },
    height: { default: 0.05, min: 0 },
    size: { default: 0.5, min: 0 },
    style: { default: 'normal', oneOf: [ 'normal', 'italics' ] },
    text: { default: '' },
    weight: { default: 'normal', oneOf: [ 'normal', 'bold' ] }
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    this.el.object3D.geometry = getTextGeometry(this.data);
  }
};

function getTextGeometry (data) {
  return new THREE.TextGeometry(data.text, data);
}
