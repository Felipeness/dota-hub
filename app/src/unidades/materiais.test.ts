import { Mesh, MeshStandardMaterial, Object3D, Texture } from "three";
import { foscar } from "./materiais";

it("tira o metal e o brilho próprio que escurecem os materiais do Dota", () => {
  const material = new MeshStandardMaterial({ metalness: 1, emissiveMap: new Texture() });
  material.emissive.setScalar(1);
  const raiz = new Object3D();
  raiz.add(new Mesh(undefined, material));
  foscar(raiz);
  expect(material.metalness).toBe(0);
  expect(material.emissiveMap).toBeNull();
  expect(material.emissive.getHex()).toBe(0);
});
