/** Quem é a conta: avatar da Steam (se houver) e nome. Sem avatar, as iniciais. */
export function ContaNaLista({ nome, avatar, detalhe }: { nome: string; avatar: string | null; detalhe?: string }) {
  return (
    <span className="jog-conta">
      {avatar
        ? <img className="jog-avatar" src={avatar} alt="" width={32} height={32} referrerPolicy="no-referrer" loading="lazy" />
        : <span className="jog-avatar jog-avatar-vazio" aria-hidden="true">{nome.slice(0, 1).toUpperCase()}</span>}
      <span className="jog-conta-nome">
        <strong>{nome}</strong>
        {detalhe && <span className="numero">{detalhe}</span>}
      </span>
    </span>
  );
}
