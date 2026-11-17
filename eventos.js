// ═══════════════════════════════════════════════════════════════
// CALENDÁRIO DO PAINEL FX — editar aqui
// ─ hora:    horário de BRASÍLIA ("HH:MM")
// ─ impacto: 1 = baixo · 2 = médio · 3 = alto (3 também desenha linha vermelha na linha do tempo)
// ─ curto:   rótulo pequeno que aparece na linha do tempo
// Depois de salvar, é só recarregar o painel (F5).
// Fonte: nota "Semana 16-20 Nov 2026" (confirmar horários no calendário de manhã)
// ═══════════════════════════════════════════════════════════════
window.EVENTOS = [
  // segunda 16/11
  { data:"2026-11-16", hora:"10:30", pais:"EUA", impacto:1, curto:"Empire",   nome:"Empire State (nov)" },
  { data:"2026-11-16", hora:"14:00", pais:"EUA", impacto:2, curto:"Warsh",    nome:"Discurso do chair do Fed (Warsh)" },

  // terça 17/11
  { data:"2026-11-17", hora:"07:00", pais:"ALE", impacto:2, curto:"ZEW",      nome:"ZEW — sentimento econômico" },
  { data:"2026-11-17", hora:"10:30", pais:"EUA", impacto:2, curto:"Varejo",   nome:"Vendas no Varejo (out)" },
  { data:"2026-11-17", hora:"11:15", pais:"EUA", impacto:1, curto:"Prod.Ind", nome:"Produção Industrial (out)" },

  // quarta 18/11
  { data:"2026-11-18", hora:"04:00", pais:"UK",  impacto:3, curto:"CPI UK",   nome:"CPI do Reino Unido (out)" },
  { data:"2026-11-18", hora:"16:00", pais:"EUA", impacto:2, curto:"Ata FOMC", nome:"Ata do FOMC" },
  { data:"2026-11-18", hora:"18:20", pais:"EUA", impacto:2, curto:"Nvidia",   nome:"Resultado da Nvidia (após o fechamento)" },

  // quinta 19/11
  { data:"2026-11-19", hora:"10:30", pais:"EUA", impacto:1, curto:"Claims",   nome:"Pedidos de seguro-desemprego" },
  { data:"2026-11-19", hora:"20:30", pais:"JAP", impacto:2, curto:"CPI JP",   nome:"CPI nacional do Japão (out)" },

  // sexta 20/11
  { data:"2026-11-20", hora:"12:00", pais:"EUA", impacto:1, curto:"Michigan", nome:"Sentimento Michigan (final)" },
];
