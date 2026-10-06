import { SkinnedMesh, type Object3D } from "three";

// A caixa de uma malha com ossos fica guardada da pose de repouso; o enquadramento precisa dela na pose animada.
export function medirNaPose(cena: Object3D): void {
  cena.updateMatrixWorld(true);
  cena.traverse((objeto) => {
    if (!(objeto instanceof SkinnedMesh)) return;
    objeto.skeleton.update();
    objeto.computeBoundingBox();
  });
}
