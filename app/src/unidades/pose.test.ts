import { Bone, BufferGeometry, Float32BufferAttribute, Skeleton, SkinnedMesh, Uint16BufferAttribute } from "three";
import { medirNaPose } from "./pose";

function malhaPresaAoOsso(): { malha: SkinnedMesh; osso: Bone } {
  const geometria = new BufferGeometry();
  geometria.setAttribute("position", new Float32BufferAttribute([0, 1, 0, 0, 2, 0], 3));
  geometria.setAttribute("skinIndex", new Uint16BufferAttribute([0, 0, 0, 0, 0, 0, 0, 0], 4));
  geometria.setAttribute("skinWeight", new Float32BufferAttribute([1, 0, 0, 0, 1, 0, 0, 0], 4));
  const osso = new Bone();
  const malha = new SkinnedMesh(geometria);
  malha.add(osso);
  malha.bind(new Skeleton([osso]));
  malha.computeBoundingBox();
  return { malha, osso };
}

it("mede a caixa na pose atual dos ossos, não na pose de repouso", () => {
  const { malha, osso } = malhaPresaAoOsso();
  expect(malha.boundingBox?.max.y).toBeCloseTo(2);
  osso.position.y = 3;
  medirNaPose(malha);
  expect(malha.boundingBox?.max.y).toBeCloseTo(5);
});
