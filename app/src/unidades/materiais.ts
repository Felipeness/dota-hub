import { MeshStandardMaterial, type Object3D } from "three";

// Os materiais do Dota não são PBR: a máscara de metal deixa o modelo escuro sem mapa de ambiente.
export function foscar(cena: Object3D): void {
  cena.traverse((objeto) => {
    if (!("material" in objeto)) return;
    const materiais = Array.isArray(objeto.material) ? objeto.material : [objeto.material];
    for (const m of materiais) {
      if (!(m instanceof MeshStandardMaterial)) continue;
      m.metalness = 0;
      m.emissiveMap = null;
      m.emissive.setScalar(0);
    }
  });
}
