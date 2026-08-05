import fs from 'fs';
import path from 'path';

// Valid minimal GLTF binary header / structure or valid JSON GLTF file
// Create public/models and uploads/models directories
const publicModelsDir = path.join(process.cwd(), 'public', 'models');
const uploadsModelsDir = path.join(process.cwd(), 'uploads', 'models');

if (!fs.existsSync(publicModelsDir)) fs.mkdirSync(publicModelsDir, { recursive: true });
if (!fs.existsSync(uploadsModelsDir)) fs.mkdirSync(uploadsModelsDir, { recursive: true });

// Minimal valid GLTF JSON string (embedded base64 mesh buffer)
const createSampleGLTF = (name, color) => {
  return JSON.stringify({
    asset: { version: "2.0", generator: "Decorate3D GLTF Generator" },
    scene: 0,
    scenes: [{ name: name, nodes: [0] }],
    nodes: [{ mesh: 0, name: name }],
    meshes: [{
      name: name,
      primitives: [{
        attributes: { POSITION: 0, NORMAL: 1 },
        indices: 2,
        material: 0
      }]
    }],
    materials: [{
      name: `${name}_material`,
      pbrMetallicRoughness: {
        baseColorFactor: color,
        metallicFactor: 0.1,
        roughnessFactor: 0.4
      }
    }],
    buffers: [{
      byteLength: 288,
      // 8 vertices box coordinates + normals + indices
      uri: "data:application/octet-stream;base64,AACAPwAAgD8AAIC/AACAPwAAgD8AAIA/AACAPwAAgL8AAIC/AACAPwAAgL8AAIA/AACAvwAAgD8AAIC/AACAvwAAgD8AAIA/AACAvwAAgL8AAIC/AACAvwAAgL8AAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAABAAIAAAACAAMABAAFAAYAAAAGAAcACAANAAsACAAKAAsACAAJAAoACwAEAAYACwAFABYAFwAYABcAGQAZABoAGwAZABsAHAA="
    }],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: 96, target: 34962 }, // positions
      { buffer: 0, byteOffset: 96, byteLength: 96, target: 34962 }, // normals
      { buffer: 0, byteOffset: 192, byteLength: 96, target: 34963 }  // indices
    ],
    accessors: [
      { bufferView: 0, byteOffset: 0, componentType: 5126, count: 8, type: "VEC3", max: [1, 1, 1], min: [-1, -1, -1] },
      { bufferView: 1, byteOffset: 0, componentType: 5126, count: 8, type: "VEC3", max: [1, 1, 1], min: [-1, -1, -1] },
      { bufferView: 2, byteOffset: 0, componentType: 5123, count: 36, type: "SCALAR", max: [35], min: [0] }
    ]
  }, null, 2);
};

const chairGltf = createSampleGLTF('SampleChair', [0.63, 0.48, 0.09, 1.0]);
const sofaGltf = createSampleGLTF('SampleSofa', [0.26, 0.35, 0.30, 1.0]);
const tableGltf = createSampleGLTF('SampleTable', [0.23, 0.13, 0.07, 1.0]);

fs.writeFileSync(path.join(publicModelsDir, 'sample_chair.gltf'), chairGltf);
fs.writeFileSync(path.join(publicModelsDir, 'sample_sofa.gltf'), sofaGltf);
fs.writeFileSync(path.join(publicModelsDir, 'sample_table.gltf'), tableGltf);

fs.writeFileSync(path.join(uploadsModelsDir, 'sample_chair.gltf'), chairGltf);
fs.writeFileSync(path.join(uploadsModelsDir, 'sample_sofa.gltf'), sofaGltf);
fs.writeFileSync(path.join(uploadsModelsDir, 'sample_table.gltf'), tableGltf);

console.log('Sample GLTF 3D model files created successfully!');
