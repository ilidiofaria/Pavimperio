const maintenanceState = {
  currentView: 'maintenance-dashboard',
  syncedAt: '20/08/2026 16:18',
  user: {name:'Catarina', role:'Responsável de Manutenção', access:['Manutenção','Qualidade','Documentação técnica']},
  assets: [
    {id:'EQ-001',name:'Unidade de tensionamento',area:'Produção',line:'Pistas de pré-esforço',component:'Sistema hidráulico e cabeça de tensionamento',manufacturer:'Nordimpianti',model:'NT 1610',serial:'NT1610-PI-01',criticality:'Crítica',status:'Operacional',last:'12/08/2026',next:'22/08/2026',meter:'3 842 ciclos',owner:'Manutenção',mtbf:486,mttr:2.1},
    {id:'EQ-002',name:'Central de betão 1',area:'Betão',line:'Central principal',component:'Doseamento e mistura',manufacturer:'Marcantonini',model:'CB-01',serial:'CBPI-001',criticality:'Crítica',status:'Operacional',last:'14/08/2026',next:'21/08/2026',meter:'1 126 h',owner:'Manutenção',mtbf:622,mttr:1.6},
    {id:'EQ-003',name:'Central de betão 2',area:'Betão',line:'Central secundária',component:'Doseamento e mistura',manufacturer:'Marcantonini',model:'CB-02',serial:'CBPI-002',criticality:'Alta',status:'Disponível',last:'10/08/2026',next:'25/08/2026',meter:'908 h',owner:'Manutenção',mtbf:701,mttr:1.4},
    {id:'EQ-004',name:'Máquina de corte',area:'Corte',line:'Linha de acabamento',component:'Serra e deslocação',manufacturer:'Tecnocom',model:'CUT-4',serial:'TC-CUT-04',criticality:'Alta',status:'Operacional',last:'18/08/2026',next:'28/08/2026',meter:'2 914 cortes',owner:'Manutenção',mtbf:398,mttr:2.5},
    {id:'EQ-005',name:'Ponte rolante nave principal',area:'Produção',line:'Nave principal',component:'Elevação e translação',manufacturer:'GH',model:'PR-12T',serial:'GH-12T-07',criticality:'Alta',status:'Operacional',last:'05/08/2026',next:'02/09/2026',meter:'5 806 h',owner:'Manutenção',mtbf:812,mttr:1.9},
    {id:'EQ-006',name:'Balde de alimentação',area:'Betão',line:'Transporte central-produção',component:'Descarga e rodas',manufacturer:'Interno',model:'BAL-02',serial:'PI-BAL-02',criticality:'Média',status:'Em observação',last:'19/08/2026',next:'26/08/2026',meter:'18 410 ciclos',owner:'Produção',mtbf:274,mttr:1.2}
  ],
  plans: [
    {id:'PM-001',asset:'EQ-001',name:'Inspeção sistema de tensionamento',frequency:'Mensal',due:'22/08/2026',duration:'90 min',tasks:['Inspecionar mangueiras e uniões','Verificar pressão de trabalho','Inspecionar cabeça de tensionamento','Confirmar calibração','Lubrificar pontos definidos','Registar leitura de ciclos'],auto:true},
    {id:'PM-002',asset:'EQ-002',name:'Verificação central de betão',frequency:'Semanal',due:'21/08/2026',duration:'60 min',tasks:['Verificar doseadores','Inspecionar misturador','Verificar circuito de água','Limpar sensores acessíveis','Confirmar receita padrão'],auto:true},
    {id:'PM-003',asset:'EQ-004',name:'Inspeção máquina de corte',frequency:'Quinzenal',due:'28/08/2026',duration:'75 min',tasks:['Verificar disco','Inspecionar proteções','Lubrificar guias','Validar batentes','Verificar cablagem'],auto:true},
    {id:'PM-004',asset:'EQ-005',name:'Inspeção ponte rolante',frequency:'Mensal',due:'02/09/2026',duration:'120 min',tasks:['Inspecionar cabos','Verificar travões','Testar fim de curso','Inspecionar gancho','Verificar comando'],auto:true}
  ],
  workOrders: [
    {id:'OM-260431',asset:'EQ-001',type:'Preventiva',priority:'Alta',status:'Planeada',opened:'20/08/2026 08:12',due:'22/08/2026',technician:'Miguel Costa',description:'Inspeção mensal do sistema de tensionamento.',downtime:0,parts:[],evidence:[],checklist:[{text:'Inspecionar mangueiras e uniões',done:false},{text:'Verificar pressão de trabalho',done:false},{text:'Inspecionar cabeça de tensionamento',done:false},{text:'Confirmar calibração',done:false},{text:'Lubrificar pontos definidos',done:false},{text:'Registar leitura de ciclos',done:false}]},
    {id:'OM-260432',asset:'EQ-002',type:'Corretiva',priority:'Alta',status:'Em execução',opened:'20/08/2026 10:24',due:'20/08/2026',technician:'Rui Ferreira',description:'Oscilação no caudal do circuito de água. Verificação da bomba doseadora e válvulas.',downtime:1.3,parts:['Vedante 32mm'],evidence:['foto-bomba-20082026.jpg'],checklist:[{text:'Confirmar sintoma',done:true},{text:'Verificar bomba doseadora',done:true},{text:'Inspecionar válvulas',done:false},{text:'Executar teste funcional',done:false}]},
    {id:'OM-260433',asset:'EQ-004',type:'Preventiva',priority:'Normal',status:'Em execução',opened:'20/08/2026 14:05',due:'20/08/2026',technician:'João Martins',description:'Inspeção preventiva da máquina de corte.',downtime:0.4,parts:[],evidence:[],checklist:[{text:'Verificar disco',done:true},{text:'Inspecionar proteções',done:true},{text:'Lubrificar guias',done:false},{text:'Validar batentes',done:false},{text:'Verificar cablagem',done:false}]},
    {id:'OM-260429',asset:'EQ-006',type:'Corretiva',priority:'Normal',status:'Validada',opened:'19/08/2026 09:18',due:'19/08/2026',technician:'Miguel Costa',description:'Ajuste do conjunto de descarga do balde.',downtime:0.8,parts:['Parafuso M12 x4'],evidence:['foto-antes.jpg','foto-depois.jpg'],checklist:[{text:'Inspecionar descarga',done:true},{text:'Apertar conjunto',done:true},{text:'Teste em carga',done:true}]}
  ],
  documents: [
    {id:'DOC-001',title:'Manual Técnico — Unidade de tensionamento',category:'Manual',asset:'EQ-001',supplier:'Nordimpianti',lot:'',date:'15/03/2024',version:'4.2',pages:86,status:'Publicado',access:['Manutenção','Qualidade'],keywords:'tensão pressão calibração hidráulico manutenção'},
    {id:'DOC-002',title:'Plano de manutenção — Central de betão',category:'Plano de manutenção',asset:'EQ-002',supplier:'Marcantonini',lot:'',date:'10/01/2026',version:'2.1',pages:34,status:'Publicado',access:['Manutenção'],keywords:'misturador doseamento água válvulas limpeza'},
    {id:'DOC-003',title:'Certificado aço pré-esforço — Lote AP260812',category:'Certificado',asset:'',supplier:'FAPRICELA',lot:'AP260812',date:'12/08/2026',version:'1',pages:4,status:'Validado',access:['Qualidade'],keywords:'aço pré esforço resistência lote certificado conformidade'},
    {id:'DOC-004',title:'Certificado cimento — Lote CEM260819',category:'Certificado',asset:'EQ-002',supplier:'CIMPOR',lot:'CEM260819',date:'19/08/2026',version:'1',pages:3,status:'Validado',access:['Qualidade','Produção'],keywords:'cimento 42.5 compressão conformidade lote'},
    {id:'DOC-005',title:'Procedimento de controlo de qualidade do betão',category:'Procedimento',asset:'EQ-002',supplier:'Pav Império',lot:'',date:'02/06/2026',version:'3.0',pages:18,status:'Publicado',access:['Qualidade','Produção'],keywords:'betão cubos ensaio compressão receita rastreabilidade'},
    {id:'DOC-006',title:'Ficha técnica — Máquina de corte',category:'Ficha técnica',asset:'EQ-004',supplier:'Tecnocom',lot:'',date:'18/11/2023',version:'1.3',pages:21,status:'Publicado',access:['Manutenção'],keywords:'corte disco guia lubrificação segurança'}
  ],
  qualityRecords: [
    {id:'QL-260118',type:'Ensaio compressão',material:'Betão',lot:'B260819-04',supplier:'Produção interna',value:'44,2 MPa',target:'≥ 40 MPa',date:'20/08/2026',status:'Conforme',source:'Central de betão 1'},
    {id:'QL-260119',type:'Certificado matéria-prima',material:'Aço pré-esforço',lot:'AP260812',supplier:'FAPRICELA',value:'1860 MPa',target:'Classe especificada',date:'20/08/2026',status:'Conforme',source:'DOC-003'},
    {id:'QL-260120',type:'Certificado matéria-prima',material:'Cimento 42.5',lot:'CEM260819',supplier:'CIMPOR',value:'42.5',target:'Classe especificada',date:'20/08/2026',status:'Conforme',source:'DOC-004'},
    {id:'QL-260121',type:'Registo tensionamento',material:'Aço pré-esforço',lot:'AP260812',supplier:'Produção interna',value:'Parâmetros dentro da tolerância',target:'Tolerância definida',date:'20/08/2026',status:'Conforme',source:'EQ-001'}
  ],
  equipmentData: [
    {source:'Unidade de tensionamento',asset:'EQ-001',last:'20/08/2026 16:14',records:'248 registos hoje',status:'Sincronizado',method:'Gateway de ficheiros'},
    {source:'Central de betão 1',asset:'EQ-002',last:'20/08/2026 16:16',records:'36 lotes hoje',status:'Sincronizado',method:'Interface de dados'},
    {source:'Central de betão 2',asset:'EQ-003',last:'20/08/2026 08:20',records:'0 lotes hoje',status:'Disponível',method:'Interface de dados'},
    {source:'PHC',asset:'',last:'20/08/2026 16:18',records:'Materiais e fornecedores',status:'Sincronizado',method:'API suportada'}
  ],
  audit: [
    {when:'20/08/2026 16:02',user:'Rui Ferreira',action:'Ordem atualizada',detail:'OM-260432: verificação da bomba doseadora concluída.'},
    {when:'20/08/2026 15:47',user:'Sistema',action:'Documento classificado',detail:'DOC-004 classificado como Certificado de cimento e associado ao lote CEM260819.'},
    {when:'20/08/2026 14:25',user:'João Martins',action:'Ordem iniciada',detail:'OM-260433 iniciada na máquina de corte.'},
    {when:'20/08/2026 11:08',user:'Qualidade',action:'Ensaio validado',detail:'QL-260118: resultado 44,2 MPa, conforme.'},
    {when:'20/08/2026 08:12',user:'Sistema',action:'Ordem preventiva gerada',detail:'OM-260431 criada a partir do plano PM-001.'}
  ],
  assistantMessages: [
    {role:'assistant',text:'Posso consultar manuais, planos de manutenção, procedimentos e certificados autorizados. As respostas técnicas incluem sempre as fontes utilizadas.',sources:[]}
  ]
};

const maintenanceTitles = {
  'maintenance-dashboard':'Cockpit de manutenção',
  assets:'Equipamentos',
  workorders:'Ordens de manutenção',
  quality:'Gestão da qualidade',
  documents:'Documentação técnica',
  assistant:'Assistente de manutenção',
  analytics:'Indicadores & integrações',
  'maintenance-audit':'Histórico & auditoria'
};

const root = document.getElementById('view-root');
const modalRoot = document.getElementById('modal-root');
const toastRoot = document.getElementById('toast-root');

function badge(text){
  const t=String(text).toLowerCase();
  let cls='info';
  if(t.includes('conforme')||t.includes('concl')||t.includes('valid')||t.includes('operacional')||t.includes('sincronizado')||t.includes('publicado')||t.includes('disponível')) cls='good';
  if(t.includes('planeada')||t.includes('pend')||t.includes('observação')||t.includes('execução')||t.includes('alta')) cls='warn';
  if(t.includes('crítica')||t.includes('vencida')||t.includes('não conforme')||t.includes('erro')) cls='bad';
  return `<span class="badge ${cls}">${text}</span>`;
}

function toast(message,type='success'){
  const n=document.createElement('div');
  n.className=`toast ${type}`;
  n.textContent=message;
  toastRoot.appendChild(n);
  setTimeout(()=>n.remove(),3200);
}

function modal(title,body,footer=''){
  modalRoot.innerHTML=`<div class="modal-backdrop" data-close="1"><div class="modal" onclick="event.stopPropagation()"><div class="modal-head"><h2>${title}</h2><button class="icon-button" data-close="1">✕</button></div><div class="modal-body">${body}</div>${footer?`<div class="modal-foot">${footer}</div>`:''}</div></div>`;
  modalRoot.querySelectorAll('[data-close]').forEach(x=>x.onclick=()=>modalRoot.innerHTML='');
}

function log(action,detail,user=maintenanceState.user.name){
  maintenanceState.audit.unshift({when:new Date().toLocaleString('pt-PT'),user,action,detail});
}

function assetById(id){ return maintenanceState.assets.find(a=>a.id===id); }
function orderById(id){ return maintenanceState.workOrders.find(o=>o.id===id); }
function planByAsset(id){ return maintenanceState.plans.filter(p=>p.asset===id); }
function docsByAsset(id){ return maintenanceState.documents.filter(d=>d.asset===id); }
function openOrders(){ return maintenanceState.workOrders.filter(o=>!['Validada','Concluída'].includes(o.status)); }
function preventiveCompliance(){
  const preventive=maintenanceState.workOrders.filter(o=>o.type==='Preventiva');
  const compliant=preventive.filter(o=>['Em execução','Concluída','Validada','Planeada'].includes(o.status)).length;
  return preventive.length ? Math.round(compliant/preventive.length*100) : 100;
}
function totalDowntime(){ return maintenanceState.workOrders.reduce((s,o)=>s+(Number(o.downtime)||0),0).toFixed(1); }
function checklistProgress(o){ return o.checklist.length ? Math.round(o.checklist.filter(x=>x.done).length/o.checklist.length*100) : 0; }

function render(){
  document.getElementById('view-title').textContent=maintenanceTitles[maintenanceState.currentView];
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===maintenanceState.currentView));
  root.innerHTML=(maintenanceViews[maintenanceState.currentView]||maintenanceViews['maintenance-dashboard'])();
  bindView();
}

const maintenanceViews = {
  'maintenance-dashboard'(){
    const critical=maintenanceState.assets.filter(a=>a.criticality==='Crítica');
    const due=maintenanceState.plans.filter(p=>['21/08/2026','22/08/2026'].includes(p.due));
    return `<div class="grid kpis">
      <div class="card kpi"><div class="label">Ordens abertas</div><div class="value">${openOrders().length}</div><div class="delta">preventivas e corretivas</div></div>
      <div class="card kpi"><div class="label">Cumprimento preventivo</div><div class="value">${preventiveCompliance()}%</div><div class="delta good">planos programados</div></div>
      <div class="card kpi"><div class="label">Indisponibilidade acumulada</div><div class="value">${totalDowntime()}h</div><div class="delta">período corrente</div></div>
      <div class="card kpi"><div class="label">Ativos críticos</div><div class="value">${critical.length}</div><div class="delta good">monitorização ativa</div></div>
    </div>

    <div class="grid two" style="margin-top:16px">
      <div class="card"><div class="section-head"><div><h2>Prioridades de manutenção</h2><p>Ordens e intervenções com maior impacto operacional.</p></div><button class="secondary-button" data-go="workorders">Abrir ordens</button></div>
        ${maintenanceState.workOrders.filter(o=>o.priority==='Alta' && !['Validada','Concluída'].includes(o.status)).map(o=>{const a=assetById(o.asset);return `<div class="job priority"><strong>${o.id} · ${a.name}</strong><small>${o.type} · ${o.description}</small><div class="job-meta">${badge(o.status)} ${badge(o.priority)} <span>${o.technician}</span></div></div>`}).join('')}
      </div>
      <div class="card"><div class="section-head"><div><h2>Próximas preventivas</h2><p>Planos a executar nos próximos dias.</p></div><button class="secondary-button" id="generate-planned-orders">Gerar ordens previstas</button></div>
        ${due.map(p=>{const a=assetById(p.asset);return `<div class="job"><strong>${p.id} · ${a.name}</strong><small>${p.name} · ${p.frequency}</small><div class="job-meta"><span>Prazo ${p.due}</span><span>${p.duration}</span>${p.auto?badge('Automática'):''}</div></div>`}).join('')}
      </div>
    </div>

    <div class="grid two" style="margin-top:16px">
      <div class="card"><div class="section-head"><div><h2>Estado dos equipamentos críticos</h2><p>Disponibilidade, próxima manutenção e indicadores.</p></div><button class="secondary-button" data-go="assets">Ver equipamentos</button></div>
        ${critical.map(a=>`<div class="asset-row"><div><strong>${a.id} · ${a.name}</strong><span>${a.area} · ${a.line}</span></div><div class="asset-row-right">${badge(a.status)}<span>Próxima ${a.next}</span></div></div>`).join('')}
      </div>
      <div class="card"><div class="section-head"><div><h2>Qualidade & dados industriais</h2><p>Conformidade e integração das principais fontes.</p></div><button class="secondary-button" data-go="quality">Abrir qualidade</button></div>
        <div class="grid two compact-grid">
          <div class="kpi"><div class="label">Registos conformes</div><div class="value">${maintenanceState.qualityRecords.filter(q=>q.status==='Conforme').length}/${maintenanceState.qualityRecords.length}</div><div class="delta good">validações registadas</div></div>
          <div class="kpi"><div class="label">Fontes sincronizadas</div><div class="value">${maintenanceState.equipmentData.filter(x=>x.status==='Sincronizado').length}</div><div class="delta">atualização ${maintenanceState.syncedAt}</div></div>
        </div>
        <div class="integration-strip">${maintenanceState.equipmentData.slice(0,3).map(x=>`<div><span class="dot"></span><strong>${x.source}</strong><small>${x.last}</small></div>`).join('')}</div>
      </div>
    </div>`;
  },

  assets(){
    return `<div class="section-head"><div><h2>Cadastro de equipamentos</h2><p>Estrutura, criticidade, estado, documentação e histórico num único registo.</p></div><div class="toolbar"><input id="asset-filter" placeholder="Pesquisar equipamento"><select id="asset-criticality"><option value="">Todas as criticidades</option><option>Crítica</option><option>Alta</option><option>Média</option></select></div></div>
    <div class="hierarchy-card"><div><span>Fábrica</span><strong>Pav Império</strong></div><i>›</i><div><span>Área</span><strong>Produção / Betão / Corte</strong></div><i>›</i><div><span>Equipamento</span><strong>Ativo técnico</strong></div><i>›</i><div><span>Componente</span><strong>Componente crítico</strong></div></div>
    <div class="table-wrap" style="margin-top:16px"><table><thead><tr><th>Equipamento</th><th>Área</th><th>Fabricante / modelo</th><th>Criticidade</th><th>Estado</th><th>Próxima manutenção</th><th>Ação</th></tr></thead><tbody id="assets-body">${assetRows(maintenanceState.assets)}</tbody></table></div>`;
  },

  workorders(){
    return `<div class="section-head"><div><h2>Ordens de manutenção</h2><p>Preventiva, corretiva, checklists, tempos, peças e evidências.</p></div><div class="toolbar"><select id="wo-status-filter"><option value="">Todos os estados</option><option>Aberta</option><option>Planeada</option><option>Em execução</option><option>Suspensa</option><option>Concluída</option><option>Validada</option></select><button class="secondary-button" id="new-corrective">Registar avaria</button><button class="primary-button" id="new-preventive">Nova ordem</button></div></div>
    <div class="grid three" style="margin-bottom:16px">
      <div class="card kpi"><div class="label">Abertas / planeadas</div><div class="value">${maintenanceState.workOrders.filter(o=>['Aberta','Planeada'].includes(o.status)).length}</div><div class="delta">por iniciar</div></div>
      <div class="card kpi"><div class="label">Em execução</div><div class="value">${maintenanceState.workOrders.filter(o=>o.status==='Em execução').length}</div><div class="delta warn">intervenções ativas</div></div>
      <div class="card kpi"><div class="label">Validadas</div><div class="value">${maintenanceState.workOrders.filter(o=>o.status==='Validada').length}</div><div class="delta good">fechadas tecnicamente</div></div>
    </div>
    <div id="workorders-list">${workOrderCards(maintenanceState.workOrders)}</div>
    <div class="card" style="margin-top:16px"><div class="section-head"><div><h2>Planos preventivos</h2><p>Geração automática baseada em periodicidade.</p></div><button class="secondary-button" id="generate-planned-orders-2">Gerar ordens previstas</button></div>
      <div class="table-wrap"><table><thead><tr><th>Plano</th><th>Equipamento</th><th>Periodicidade</th><th>Próxima execução</th><th>Duração</th><th>Geração</th></tr></thead><tbody>${maintenanceState.plans.map(p=>`<tr><td><strong>${p.id}</strong><br><span class="note">${p.name}</span></td><td>${assetById(p.asset).name}</td><td>${p.frequency}</td><td>${p.due}</td><td>${p.duration}</td><td>${p.auto?badge('Automática'):badge('Manual')}</td></tr>`).join('')}</tbody></table></div>
    </div>`;
  },

  quality(){
    const conform=maintenanceState.qualityRecords.filter(q=>q.status==='Conforme').length;
    return `<div class="grid kpis">
      <div class="card kpi"><div class="label">Registos de qualidade</div><div class="value">${maintenanceState.qualityRecords.length}</div><div class="delta">período corrente</div></div>
      <div class="card kpi"><div class="label">Conformidade</div><div class="value">${Math.round(conform/maintenanceState.qualityRecords.length*100)}%</div><div class="delta good">resultados conformes</div></div>
      <div class="card kpi"><div class="label">Certificados validados</div><div class="value">${maintenanceState.documents.filter(d=>d.category==='Certificado'&&d.status==='Validado').length}</div><div class="delta">associados a lotes</div></div>
      <div class="card kpi"><div class="label">Fontes industriais</div><div class="value">${maintenanceState.equipmentData.length}</div><div class="delta good">dados ligados à qualidade</div></div>
    </div>
    <div class="section-head" style="margin-top:20px"><div><h2>Registos e ensaios</h2><p>Rastreabilidade entre material, lote, resultado e origem.</p></div><button class="primary-button" id="import-quality-doc">Importar certificado</button></div>
    <div class="table-wrap"><table><thead><tr><th>Registo</th><th>Tipo</th><th>Material</th><th>Lote</th><th>Resultado</th><th>Referência</th><th>Estado</th></tr></thead><tbody>${maintenanceState.qualityRecords.map(q=>`<tr><td><strong>${q.id}</strong><br><span class="note">${q.date}</span></td><td>${q.type}</td><td>${q.material}<br><span class="note">${q.supplier}</span></td><td>${q.lot}</td><td>${q.value}</td><td>${q.target}<br><span class="note">${q.source}</span></td><td>${badge(q.status)}</td></tr>`).join('')}</tbody></table></div>
    <div class="grid two" style="margin-top:16px">
      <div class="card"><div class="section-head"><div><h2>Dados de equipamentos</h2><p>Registos disponíveis para manutenção e qualidade.</p></div></div>${maintenanceState.equipmentData.map(x=>`<div class="asset-row"><div><strong>${x.source}</strong><span>${x.records} · ${x.method}</span></div><div class="asset-row-right">${badge(x.status)}<span>${x.last}</span></div></div>`).join('')}</div>
      <div class="card"><div class="section-head"><div><h2>Rastreabilidade de materiais</h2><p>Certificados, lotes e resultados associados.</p></div></div>${maintenanceState.qualityRecords.filter(q=>q.lot).map(q=>`<div class="job"><strong>${q.lot} · ${q.material}</strong><small>${q.supplier} · ${q.type}</small><div class="job-meta">${badge(q.status)}<span>${q.source}</span></div></div>`).join('')}</div>
    </div>`;
  },

  documents(){
    return `<div class="section-head"><div><h2>Repositório técnico</h2><p>Manuais, planos, procedimentos, certificados e fichas técnicas.</p></div><div class="toolbar"><input id="doc-filter" placeholder="Pesquisar conteúdo ou documento"><select id="doc-category"><option value="">Todas as categorias</option><option>Manual</option><option>Plano de manutenção</option><option>Certificado</option><option>Procedimento</option><option>Ficha técnica</option></select><button class="primary-button" id="upload-document">Adicionar documento</button></div></div>
    <div class="document-grid" id="documents-grid">${documentCards(maintenanceState.documents)}</div>`;
  },

  assistant(){
    return `<div class="assistant-layout">
      <div class="card assistant-card"><div class="assistant-head"><div><h2>Assistente técnico</h2><p>Consulta de documentação autorizada com indicação das fontes.</p></div><div>${badge('Acesso autorizado')}</div></div>
        <div class="assistant-messages" id="assistant-messages">${assistantMessagesHTML()}</div>
        <div class="assistant-input"><textarea id="assistant-question" placeholder="Ex.: Qual é o procedimento de verificação do sistema de tensionamento?"></textarea><button class="primary-button" id="ask-assistant">Perguntar</button></div>
      </div>
      <div class="card"><h2>Perguntas frequentes</h2>
        ${['Que verificações são necessárias na unidade de tensionamento?','Qual é a manutenção semanal da central de betão?','Que documentação existe para o lote AP260812?','Quais são as causas mais frequentes de paragem registadas?'].map(q=>`<button class="suggestion-button" data-question="${q}">${q}</button>`).join('')}
        <div class="callout" style="margin-top:16px"><strong>Controlo técnico</strong>As respostas são fundamentadas nos documentos autorizados. Qualquer alteração a planos, ordens ou parâmetros de equipamento exige confirmação explícita do responsável.</div>
      </div>
    </div>`;
  },

  analytics(){
    const avgMtbf=Math.round(maintenanceState.assets.reduce((s,a)=>s+a.mtbf,0)/maintenanceState.assets.length);
    const avgMttr=(maintenanceState.assets.reduce((s,a)=>s+a.mttr,0)/maintenanceState.assets.length).toFixed(1);
    return `<div class="grid kpis">
      <div class="card kpi"><div class="label">MTBF médio</div><div class="value">${avgMtbf}h</div><div class="delta">ativos monitorizados</div></div>
      <div class="card kpi"><div class="label">MTTR médio</div><div class="value">${avgMttr}h</div><div class="delta">tempo médio de reparação</div></div>
      <div class="card kpi"><div class="label">Cumprimento preventivo</div><div class="value">${preventiveCompliance()}%</div><div class="delta good">ordens programadas</div></div>
      <div class="card kpi"><div class="label">Indisponibilidade</div><div class="value">${totalDowntime()}h</div><div class="delta">período corrente</div></div>
    </div>
    <div class="grid two" style="margin-top:16px">
      <div class="card"><div class="section-head"><div><h2>Estado das integrações</h2><p>Fontes operacionais e qualidade dos dados.</p></div></div>
        <div class="integration-table">${maintenanceState.equipmentData.map(x=>`<div class="integration-row"><div><strong>${x.source}</strong><span>${x.method}</span></div><div>${badge(x.status)}</div><div><span>${x.records}</span><small>${x.last}</small></div></div>`).join('')}</div>
      </div>
      <div class="card"><div class="section-head"><div><h2>Segurança & operação</h2><p>Controlo de acessos, proteção e monitorização.</p></div></div>
        <div class="system-status-grid">
          ${[['Identidade','Microsoft Entra ID','Ativo'],['Perfis de acesso','RBAC por função','Ativo'],['Comunicações','TLS','Ativo'],['Segredos','Key Vault','Ativo'],['Logging','Centralizado','Ativo'],['Alertas técnicos','Monitorização','Ativo'],['Backups','Política diária','Ativo'],['Ambientes','Dev · Test · Produção','Ativo']].map(x=>`<div class="system-status"><span>${x[0]}</span><strong>${x[1]}</strong>${badge(x[2])}</div>`).join('')}
        </div>
      </div>
    </div>
    <div class="grid two" style="margin-top:16px">
      <div class="card"><h2>Arquitetura aplicacional</h2><div class="architecture-flow"><span>Equipamentos / PHC / Documentos</span><i>→</i><span>Integração & Dados</span><i>→</i><span>Manutenção & Qualidade</span><i>→</i><span>Analytics & IA</span></div><p class="note">APIs documentadas, processos idempotentes, tratamento de erros, versionamento e monitorização central.</p></div>
      <div class="card"><h2>Controlo da IA</h2><div class="timeline"><div class="timeline-item"><strong>Fontes autorizadas</strong><span>Pesquisa limitada aos conteúdos permitidos para o utilizador.</span></div><div class="timeline-item"><strong>Respostas fundamentadas</strong><span>Documento e referência apresentados em cada resposta.</span></div><div class="timeline-item"><strong>Validação humana</strong><span>Sem atuação autónoma sobre equipamentos, planos ou ordens.</span></div><div class="timeline-item"><strong>Monitorização</strong><span>Feedback, utilização, latência e erros registados.</span></div></div></div>
    </div>`;
  },

  'maintenance-audit'(){
    return `<div class="section-head"><div><h2>Histórico e auditoria</h2><p>Intervenções, alterações, validações e ações relevantes com utilizador e timestamp.</p></div><button class="secondary-button" id="export-maintenance-audit">Exportar histórico</button></div>
    <div class="card"><div class="timeline">${maintenanceState.audit.map(a=>`<div class="timeline-item"><strong>${a.action}</strong><span>${a.when} · ${a.user}</span><p>${a.detail}</p></div>`).join('')}</div></div>`;
  }
};

function assetRows(list){
  return list.map(a=>`<tr><td><strong>${a.id} · ${a.name}</strong><br><span class="note">${a.component}</span></td><td>${a.area}<br><span class="note">${a.line}</span></td><td>${a.manufacturer}<br><span class="note">${a.model}</span></td><td>${badge(a.criticality)}</td><td>${badge(a.status)}</td><td>${a.next}</td><td><div class="row-actions"><button class="secondary-button" data-asset="${a.id}">Ficha</button><button class="ghost-button" data-qr="${a.id}">QR</button></div></td></tr>`).join('');
}

function workOrderCards(list){
  if(!list.length) return `<div class="empty">Sem ordens para os filtros selecionados.</div>`;
  return `<div class="workorder-grid">${list.map(o=>{const a=assetById(o.asset);const progress=checklistProgress(o);return `<div class="card workorder-card ${o.priority==='Alta'?'workorder-priority':''}"><div class="workorder-head"><div><div class="eyebrow">${o.type} · ${a.id}</div><h2>${o.id} · ${a.name}</h2></div>${badge(o.status)}</div><p>${o.description}</p><div class="workorder-meta"><span><strong>Técnico</strong>${o.technician}</span><span><strong>Prazo</strong>${o.due}</span><span><strong>Paragem</strong>${o.downtime}h</span><span><strong>Prioridade</strong>${o.priority}</span></div><div class="check-progress"><div><span>Checklist</span><strong>${progress}%</strong></div><div class="progress"><span style="width:${progress}%"></span></div></div><div class="row-actions"><button class="secondary-button" data-wo-detail="${o.id}">Detalhe</button><button class="secondary-button" data-checklist="${o.id}">Checklist</button>${o.status==='Planeada'||o.status==='Aberta'?`<button class="primary-button" data-wo-start="${o.id}">Iniciar</button>`:''}${o.status==='Em execução'?`<button class="secondary-button" data-wo-suspend="${o.id}">Suspender</button><button class="primary-button" data-wo-complete="${o.id}">Concluir</button>`:''}${o.status==='Concluída'?`<button class="primary-button" data-wo-validate="${o.id}">Validar</button>`:''}</div></div>`}).join('')}</div>`;
}

function documentCards(list){
  if(!list.length) return `<div class="empty">Nenhum documento encontrado.</div>`;
  return list.map(d=>`<div class="card document-card"><div class="document-icon">${d.category==='Certificado'?'C':d.category==='Manual'?'M':'D'}</div><div><div class="eyebrow">${d.category} · ${d.id}</div><h3>${d.title}</h3><p>${d.asset?`${d.asset} · `:''}${d.supplier}${d.lot?` · Lote ${d.lot}`:''}</p><div class="document-meta"><span>Versão ${d.version}</span><span>${d.pages} páginas</span><span>${d.date}</span>${badge(d.status)}</div><div class="row-actions"><button class="secondary-button" data-doc="${d.id}">Abrir</button><button class="ghost-button" data-ask-doc="${d.id}">Perguntar à IA</button></div></div></div>`).join('');
}

function assistantMessagesHTML(){
  return maintenanceState.assistantMessages.map((m,i)=>`<div class="assistant-message ${m.role}"><div class="assistant-role">${m.role==='assistant'?'Assistente técnico':'Utilizador'}</div><div>${m.text}</div>${m.sources?.length?`<div class="source-list"><strong>Fontes</strong>${m.sources.map(s=>`<button data-source="${s.id}">${s.title} · ${s.ref}</button>`).join('')}</div><div class="assistant-feedback"><span>Esta resposta foi útil?</span><button data-feedback="up" data-message="${i}">Sim</button><button data-feedback="down" data-message="${i}">Não</button></div>`:''}</div>`).join('');
}

function bindView(){
  root.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));

  const af=document.getElementById('asset-filter');
  const ac=document.getElementById('asset-criticality');
  const filterAssets=()=>{const q=(af?.value||'').toLowerCase();const c=ac?.value||'';const list=maintenanceState.assets.filter(a=>(!q||(a.id+' '+a.name+' '+a.area+' '+a.manufacturer).toLowerCase().includes(q))&&(!c||a.criticality===c));document.getElementById('assets-body').innerHTML=assetRows(list);bindView();};
  if(af) af.oninput=filterAssets;
  if(ac) ac.onchange=filterAssets;
  root.querySelectorAll('[data-asset]').forEach(b=>b.onclick=()=>showAsset(b.dataset.asset));
  root.querySelectorAll('[data-qr]').forEach(b=>b.onclick=()=>showQR(b.dataset.qr));

  const wof=document.getElementById('wo-status-filter');
  if(wof) wof.onchange=()=>{const list=maintenanceState.workOrders.filter(o=>!wof.value||o.status===wof.value);document.getElementById('workorders-list').innerHTML=workOrderCards(list);bindView();};
  document.getElementById('new-corrective')?.addEventListener('click',()=>newWorkOrder('Corretiva'));
  document.getElementById('new-preventive')?.addEventListener('click',()=>newWorkOrder('Preventiva'));
  document.getElementById('generate-planned-orders')?.addEventListener('click',generatePlannedOrders);
  document.getElementById('generate-planned-orders-2')?.addEventListener('click',generatePlannedOrders);
  root.querySelectorAll('[data-wo-detail]').forEach(b=>b.onclick=()=>showWorkOrder(b.dataset.woDetail));
  root.querySelectorAll('[data-checklist]').forEach(b=>b.onclick=()=>editChecklist(b.dataset.checklist));
  root.querySelectorAll('[data-wo-start]').forEach(b=>b.onclick=()=>transitionWorkOrder(b.dataset.woStart,'Em execução'));
  root.querySelectorAll('[data-wo-suspend]').forEach(b=>b.onclick=()=>transitionWorkOrder(b.dataset.woSuspend,'Suspensa'));
  root.querySelectorAll('[data-wo-complete]').forEach(b=>b.onclick=()=>completeWorkOrder(b.dataset.woComplete));
  root.querySelectorAll('[data-wo-validate]').forEach(b=>b.onclick=()=>transitionWorkOrder(b.dataset.woValidate,'Validada'));

  document.getElementById('import-quality-doc')?.addEventListener('click',importQualityDocument);

  const df=document.getElementById('doc-filter');
  const dc=document.getElementById('doc-category');
  const filterDocs=()=>{const q=(df?.value||'').toLowerCase();const c=dc?.value||'';const list=maintenanceState.documents.filter(d=>(!q||(d.title+' '+d.keywords+' '+d.supplier+' '+d.lot).toLowerCase().includes(q))&&(!c||d.category===c));document.getElementById('documents-grid').innerHTML=documentCards(list);bindView();};
  if(df) df.oninput=filterDocs;
  if(dc) dc.onchange=filterDocs;
  document.getElementById('upload-document')?.addEventListener('click',uploadDocument);
  root.querySelectorAll('[data-doc]').forEach(b=>b.onclick=()=>showDocument(b.dataset.doc));
  root.querySelectorAll('[data-ask-doc]').forEach(b=>b.onclick=()=>{const d=maintenanceState.documents.find(x=>x.id===b.dataset.askDoc);maintenanceState.currentView='assistant';maintenanceState.assistantMessages.push({role:'user',text:`Resume os pontos de manutenção relevantes de ${d.title}.`,sources:[]});maintenanceState.assistantMessages.push(answerQuestion(`manutenção ${d.asset||d.category}`,d));render();});

  document.getElementById('ask-assistant')?.addEventListener('click',askAssistant);
  root.querySelectorAll('[data-question]').forEach(b=>b.onclick=()=>{document.getElementById('assistant-question').value=b.dataset.question;askAssistant();});
  root.querySelectorAll('[data-feedback]').forEach(b=>b.onclick=()=>{log('Feedback IA',`Mensagem ${b.dataset.message}: ${b.dataset.feedback==='up'?'útil':'não útil'}.`);toast('Feedback registado.');});
  root.querySelectorAll('[data-source]').forEach(b=>b.onclick=()=>showDocument(b.dataset.source));

  document.getElementById('export-maintenance-audit')?.addEventListener('click',exportAudit);
}

function go(view){ maintenanceState.currentView=view; render(); }

function showAsset(id){
  const a=assetById(id);
  const plans=planByAsset(id);
  const orders=maintenanceState.workOrders.filter(o=>o.asset===id);
  const docs=docsByAsset(id);
  modal(`${a.id} · ${a.name}`,`<div class="asset-detail-grid"><div><span>Hierarquia</span><strong>Fábrica › ${a.area} › ${a.line} › ${a.name}</strong></div><div><span>Fabricante / modelo</span><strong>${a.manufacturer} · ${a.model}</strong></div><div><span>N.º série</span><strong>${a.serial}</strong></div><div><span>Criticidade</span><strong>${a.criticality}</strong></div><div><span>Estado</span><strong>${a.status}</strong></div><div><span>Contador</span><strong>${a.meter}</strong></div></div><div class="grid two" style="margin-top:16px"><div><h3>Planos preventivos</h3>${plans.map(p=>`<div class="job"><strong>${p.id} · ${p.name}</strong><small>${p.frequency} · próxima ${p.due}</small></div>`).join('')||'<p class="note">Sem planos associados.</p>'}</div><div><h3>Documentação</h3>${docs.map(d=>`<div class="job"><strong>${d.id} · ${d.category}</strong><small>${d.title}</small></div>`).join('')||'<p class="note">Sem documentos associados.</p>'}</div></div><h3 style="margin-top:18px">Histórico recente</h3>${orders.slice(0,4).map(o=>`<div class="asset-row"><div><strong>${o.id} · ${o.type}</strong><span>${o.description}</span></div><div>${badge(o.status)}</div></div>`).join('')}`,`<button class="secondary-button" id="asset-qr">Ver QR</button><button class="primary-button" id="asset-order">Criar ordem</button>`);
  document.getElementById('asset-qr').onclick=()=>showQR(id);
  document.getElementById('asset-order').onclick=()=>{modalRoot.innerHTML='';newWorkOrder('Preventiva',id)};
}

function qrPattern(id){
  let seed=[...id].reduce((s,c)=>s+c.charCodeAt(0),0);
  let cells='';
  for(let y=0;y<15;y++) for(let x=0;x<15;x++){
    const finder=(x<5&&y<5)||(x>9&&y<5)||(x<5&&y>9);
    const on=finder?((x%4===0)||(y%4===0)||((x%4===2)&&(y%4===2))):((x*y+seed+x*3+y*7)%5<2);
    cells+=`<i class="${on?'on':''}"></i>`;
  }
  return cells;
}

function showQR(id){
  const a=assetById(id);
  modal(`Identificação ${id}`,`<div class="qr-layout"><div class="qr-code">${qrPattern(id)}</div><div><div class="eyebrow">Identificação do equipamento</div><h2>${a.name}</h2><p>${a.area} · ${a.line}</p><p><strong>${id}</strong> · ${a.serial}</p><p class="note">A leitura do código abre diretamente a ficha técnica e o histórico do equipamento.</p></div></div>`,`<button class="primary-button" id="open-asset-from-qr">Abrir ficha</button>`);
  document.getElementById('open-asset-from-qr').onclick=()=>showAsset(id);
}

function newWorkOrder(type='Preventiva',asset='EQ-001'){
  modal(type==='Corretiva'?'Registar avaria':'Nova ordem de manutenção',`<div class="form-grid"><label>Equipamento<select id="nw-asset">${maintenanceState.assets.map(a=>`<option value="${a.id}">${a.id} · ${a.name}</option>`).join('')}</select></label><label>Tipo<select id="nw-type"><option>Preventiva</option><option>Corretiva</option></select></label><label>Prioridade<select id="nw-priority"><option>Normal</option><option>Alta</option></select></label><label>Técnico<input id="nw-tech" value="Miguel Costa"></label><label class="full">Descrição<textarea id="nw-description" placeholder="Descrever intervenção ou sintoma"></textarea></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-new-wo">Criar ordem</button>`);
  document.getElementById('nw-asset').value=asset;
  document.getElementById('nw-type').value=type;
  document.getElementById('save-new-wo').onclick=()=>{
    const desc=document.getElementById('nw-description').value.trim();
    if(!desc){toast('Indique a descrição da intervenção.','warning');return;}
    const id='OM-'+String(Date.now()).slice(-6);
    const assetId=document.getElementById('nw-asset').value;
    const woType=document.getElementById('nw-type').value;
    const plan=planByAsset(assetId)[0];
    maintenanceState.workOrders.unshift({id,asset:assetId,type:woType,priority:document.getElementById('nw-priority').value,status:woType==='Corretiva'?'Aberta':'Planeada',opened:new Date().toLocaleString('pt-PT'),due:'21/08/2026',technician:document.getElementById('nw-tech').value,description:desc,downtime:0,parts:[],evidence:[],checklist:(plan?.tasks||['Diagnóstico inicial','Executar intervenção','Teste funcional','Registar resultado']).map(t=>({text:t,done:false}))});
    log('Ordem criada',`${id} criada para ${assetById(assetId).name}. Tipo: ${woType}.`);
    modalRoot.innerHTML='';
    maintenanceState.currentView='workorders';
    render();
    toast(`${id} criada.`);
  };
}

function generatePlannedOrders(){
  let created=0;
  maintenanceState.plans.forEach(p=>{
    const exists=maintenanceState.workOrders.some(o=>o.asset===p.asset&&o.type==='Preventiva'&&['Aberta','Planeada','Em execução'].includes(o.status));
    if(!exists){
      const id='OM-'+String(Date.now()+created).slice(-6);
      maintenanceState.workOrders.unshift({id,asset:p.asset,type:'Preventiva',priority:assetById(p.asset).criticality==='Crítica'?'Alta':'Normal',status:'Planeada',opened:new Date().toLocaleString('pt-PT'),due:p.due,technician:'A atribuir',description:p.name,downtime:0,parts:[],evidence:[],checklist:p.tasks.map(t=>({text:t,done:false}))});
      log('Ordem preventiva gerada',`${id} criada automaticamente a partir de ${p.id}.`,'Sistema');
      created++;
    }
  });
  render();
  toast(created?`${created} ordem(ns) preventiva(s) criada(s).`:'Não existem novas preventivas por gerar.');
}

function showWorkOrder(id){
  const o=orderById(id); const a=assetById(o.asset);
  modal(`${o.id} · ${a.name}`,`<div class="asset-detail-grid"><div><span>Tipo</span><strong>${o.type}</strong></div><div><span>Estado</span><strong>${o.status}</strong></div><div><span>Prioridade</span><strong>${o.priority}</strong></div><div><span>Técnico</span><strong>${o.technician}</strong></div><div><span>Prazo</span><strong>${o.due}</strong></div><div><span>Indisponibilidade</span><strong>${o.downtime}h</strong></div></div><p>${o.description}</p><h3>Checklist</h3>${o.checklist.map(x=>`<div class="check-line"><span class="check-state ${x.done?'done':''}">${x.done?'✓':'•'}</span><span>${x.text}</span></div>`).join('')}<div class="grid two" style="margin-top:16px"><div><h3>Peças utilizadas</h3><p>${o.parts.length?o.parts.join(', '):'Sem consumos registados.'}</p></div><div><h3>Evidências</h3><p>${o.evidence.length?o.evidence.join(', '):'Sem evidências anexadas.'}</p></div></div>`,`<button class="secondary-button" id="wo-parts">Peças</button><button class="secondary-button" id="wo-evidence">Evidências</button><button class="primary-button" id="wo-checklist">Checklist</button>`);
  document.getElementById('wo-parts').onclick=()=>addPart(id);
  document.getElementById('wo-evidence').onclick=()=>addEvidence(id);
  document.getElementById('wo-checklist').onclick=()=>editChecklist(id);
}

function editChecklist(id){
  const o=orderById(id);
  modal(`Checklist · ${id}`,`<div class="checklist-editor">${o.checklist.map((x,i)=>`<label><input type="checkbox" data-check-index="${i}" ${x.done?'checked':''}><span>${x.text}</span></label>`).join('')}</div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-checklist">Guardar</button>`);
  document.getElementById('save-checklist').onclick=()=>{
    modalRoot.querySelectorAll('[data-check-index]').forEach(c=>o.checklist[+c.dataset.checkIndex].done=c.checked);
    log('Checklist atualizada',`${id}: ${checklistProgress(o)}% concluída.`,o.technician);
    modalRoot.innerHTML='';render();toast('Checklist atualizada.');
  };
}

function transitionWorkOrder(id,status){
  const o=orderById(id);
  const previous=o.status;
  o.status=status;
  if(status==='Em execução'&&o.downtime===0)o.downtime=0.1;
  log('Estado de ordem alterado',`${id}: ${previous} → ${status}.`,o.technician);
  render();toast(`${id}: ${status}.`);
}

function completeWorkOrder(id){
  const o=orderById(id);
  if(checklistProgress(o)<100){toast('Conclua a checklist antes de fechar a intervenção.','warning');editChecklist(id);return;}
  modal(`Concluir ${id}`,`<div class="form-grid"><label>Indisponibilidade total (h)<input id="complete-downtime" type="number" step="0.1" value="${o.downtime}"></label><label class="full">Resultado<textarea id="complete-result">Intervenção executada e teste funcional concluído.</textarea></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="confirm-complete">Concluir</button>`);
  document.getElementById('confirm-complete').onclick=()=>{o.downtime=+document.getElementById('complete-downtime').value;o.status='Concluída';log('Ordem concluída',`${id}: ${document.getElementById('complete-result').value}`,o.technician);modalRoot.innerHTML='';render();toast('Ordem concluída. Aguarda validação.');};
}

function addPart(id){
  const o=orderById(id);
  modal(`Peças · ${id}`,`<div class="form-grid"><label class="full">Peça / componente<input id="part-name" placeholder="Ex.: Vedante 32mm"></label></div><p><strong>Registadas:</strong> ${o.parts.join(', ')||'Nenhuma'}</p>`,`<button class="secondary-button" data-close="1">Fechar</button><button class="primary-button" id="save-part">Adicionar</button>`);
  document.getElementById('save-part').onclick=()=>{const p=document.getElementById('part-name').value.trim();if(!p)return;o.parts.push(p);log('Peça registada',`${id}: ${p}.`,o.technician);modalRoot.innerHTML='';toast('Peça associada à intervenção.');};
}

function addEvidence(id){
  const o=orderById(id);
  modal(`Evidências · ${id}`,`<label class="upload-zone"><input id="evidence-file" type="file" accept="image/*,.pdf"><strong>Adicionar fotografia ou documento</strong><span>Selecione uma evidência da intervenção.</span></label><p><strong>Registadas:</strong> ${o.evidence.join(', ')||'Nenhuma'}</p>`,`<button class="secondary-button" data-close="1">Fechar</button><button class="primary-button" id="save-evidence">Associar</button>`);
  document.getElementById('save-evidence').onclick=()=>{const f=document.getElementById('evidence-file').files[0];if(!f){toast('Selecione um ficheiro.','warning');return;}o.evidence.push(f.name);log('Evidência adicionada',`${id}: ${f.name}.`,o.technician);modalRoot.innerHTML='';toast('Evidência associada.');};
}

function importQualityDocument(){
  modal('Importar certificado',`<label class="upload-zone"><input id="quality-file" type="file" accept=".pdf"><strong>Selecionar certificado PDF</strong><span>A classificação e os campos principais serão identificados automaticamente.</span></label><div id="classification-preview"></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="classify-document">Classificar documento</button>`);
  document.getElementById('classify-document').onclick=()=>{
    const f=document.getElementById('quality-file').files[0];
    if(!f){toast('Selecione um PDF.','warning');return;}
    document.getElementById('classification-preview').innerHTML=`<div class="classification-result"><div><span>Tipo</span><strong>Certificado de matéria-prima</strong></div><div><span>Fornecedor</span><strong>Fornecedor identificado</strong></div><div><span>Lote</span><strong>LOT-${String(Date.now()).slice(-5)}</strong></div><div><span>Estado</span><strong>Para validação</strong></div></div><div class="row-actions" style="margin-top:12px"><button class="primary-button" id="confirm-classification">Confirmar e associar</button></div>`;
    document.getElementById('confirm-classification').onclick=()=>{
      const id='DOC-'+String(maintenanceState.documents.length+1).padStart(3,'0');
      maintenanceState.documents.unshift({id,title:f.name.replace('.pdf',''),category:'Certificado',asset:'',supplier:'Fornecedor identificado',lot:'LOT-'+String(Date.now()).slice(-5),date:'20/08/2026',version:'1',pages:1,status:'Para validação',access:['Qualidade'],keywords:'certificado matéria-prima lote conformidade'});
      log('Documento classificado',`${id}: ${f.name} classificado e associado a lote.`,'Sistema');
      modalRoot.innerHTML='';render();toast('Certificado classificado e registado.');
    };
  };
}

function uploadDocument(){
  modal('Adicionar documento técnico',`<div class="form-grid"><label class="full">Ficheiro<input id="doc-file" type="file" accept=".pdf,.doc,.docx,.xlsx"></label><label>Categoria<select id="doc-type"><option>Manual</option><option>Plano de manutenção</option><option>Certificado</option><option>Procedimento</option><option>Ficha técnica</option></select></label><label>Equipamento<select id="doc-asset"><option value="">Geral</option>${maintenanceState.assets.map(a=>`<option value="${a.id}">${a.id} · ${a.name}</option>`).join('')}</select></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-document">Adicionar</button>`);
  document.getElementById('save-document').onclick=()=>{const f=document.getElementById('doc-file').files[0];if(!f){toast('Selecione um documento.','warning');return;}const id='DOC-'+String(maintenanceState.documents.length+1).padStart(3,'0');maintenanceState.documents.unshift({id,title:f.name.replace(/\.[^.]+$/,''),category:document.getElementById('doc-type').value,asset:document.getElementById('doc-asset').value,supplier:'Pav Império',lot:'',date:'20/08/2026',version:'1.0',pages:1,status:'Publicado',access:['Manutenção','Qualidade'],keywords:f.name.toLowerCase()});log('Documento adicionado',`${id}: ${f.name}.`);modalRoot.innerHTML='';render();toast('Documento publicado no repositório.');};
}

function showDocument(id){
  const d=maintenanceState.documents.find(x=>x.id===id);
  modal(`${d.id} · ${d.title}`,`<div class="asset-detail-grid"><div><span>Categoria</span><strong>${d.category}</strong></div><div><span>Estado</span><strong>${d.status}</strong></div><div><span>Versão</span><strong>${d.version}</strong></div><div><span>Data</span><strong>${d.date}</strong></div><div><span>Equipamento</span><strong>${d.asset||'Geral'}</strong></div><div><span>Lote</span><strong>${d.lot||'—'}</strong></div></div><div class="callout" style="margin-top:16px"><strong>Acesso</strong>${d.access.join(' · ')}</div><p>Documento indexado para pesquisa técnica e consulta através do Assistente IA.</p>`,`<button class="primary-button" id="ask-current-doc">Perguntar à IA</button>`);
  document.getElementById('ask-current-doc').onclick=()=>{modalRoot.innerHTML='';maintenanceState.currentView='assistant';render();document.getElementById('assistant-question').value=`Quais são os pontos relevantes de ${d.title}?`;};
}

function askAssistant(){
  const input=document.getElementById('assistant-question');
  const q=input.value.trim();
  if(!q){toast('Escreva uma pergunta.','warning');return;}
  maintenanceState.assistantMessages.push({role:'user',text:q,sources:[]});
  maintenanceState.assistantMessages.push(answerQuestion(q));
  render();
  setTimeout(()=>{const box=document.getElementById('assistant-messages');if(box)box.scrollTop=box.scrollHeight;},0);
}

function answerQuestion(q,forcedDoc=null){
  const text=q.toLowerCase();
  let response='Com base na documentação técnica disponível, a intervenção deve seguir o procedimento publicado e ser confirmada pelo responsável de manutenção antes de qualquer alteração operacional.';
  let sources=[];
  if(forcedDoc){sources=[{id:forcedDoc.id,title:forcedDoc.title,ref:'secções relevantes'}];response=`O documento ${forcedDoc.title} reúne instruções técnicas, periodicidades e verificações aplicáveis ao respetivo processo. Os pontos devem ser incorporados na ordem de manutenção e confirmados através da checklist antes do fecho da intervenção.`;}
  else if(text.includes('tension')||text.includes('eq-001')){
    const d=maintenanceState.documents.find(x=>x.id==='DOC-001');
    response='A verificação da unidade de tensionamento deve incluir mangueiras e uniões, pressão de trabalho, cabeça de tensionamento, calibração e lubrificação. A leitura de ciclos deve ficar registada na ordem. Qualquer ajuste de parâmetros deve ser validado pelo responsável técnico.';
    sources=[{id:d.id,title:d.title,ref:'Manutenção preventiva e calibração'}];
  } else if(text.includes('central')||text.includes('betão')||text.includes('agua')||text.includes('água')){
    const d1=maintenanceState.documents.find(x=>x.id==='DOC-002'); const d2=maintenanceState.documents.find(x=>x.id==='DOC-005');
    response='Para a central de betão, a rotina semanal inclui verificação de doseadores, misturador, circuito de água, limpeza dos pontos definidos e confirmação da receita padrão. Se existir desvio de qualidade, devem ser cruzados os dados do lote com o ensaio de compressão e a receita utilizada.';
    sources=[{id:d1.id,title:d1.title,ref:'Rotina semanal'},{id:d2.id,title:d2.title,ref:'Controlo do betão'}];
  } else if(text.includes('ap260812')||text.includes('aço')||text.includes('aco')){
    const d=maintenanceState.documents.find(x=>x.id==='DOC-003');
    response='O lote AP260812 está associado ao certificado de aço pré-esforço e ao registo de tensionamento QL-260121. Ambos se encontram conformes nos registos atuais. A rastreabilidade liga o lote à documentação do fornecedor e aos parâmetros do processo de tensionamento.';
    sources=[{id:d.id,title:d.title,ref:'Lote AP260812'},{id:'DOC-001',title:'Manual Técnico — Unidade de tensionamento',ref:'Parâmetros de tensionamento'}];
  } else if(text.includes('paragem')||text.includes('avaria')){
    response='As intervenções abertas mostram indisponibilidade sobretudo na Central de betão 1 e na Máquina de corte. A análise deve considerar duração da paragem, reincidência por equipamento e causa registada. Recomenda-se priorizar os ativos críticos com MTBF inferior e maior impacto na continuidade da produção.';
    sources=[{id:'DOC-002',title:'Plano de manutenção — Central de betão',ref:'Plano preventivo'},{id:'DOC-006',title:'Ficha técnica — Máquina de corte',ref:'Manutenção'}];
  } else {
    const d=maintenanceState.documents.find(x=>x.id==='DOC-005');
    sources=[{id:d.id,title:d.title,ref:'Procedimento aplicável'}];
  }
  return {role:'assistant',text:response,sources};
}

function exportAudit(){
  const rows=[['Data','Utilizador','Ação','Detalhe'],...maintenanceState.audit.map(a=>[a.when,a.user,a.action,a.detail])];
  const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download='historico-manutencao-pavimperio.csv';a.click();URL.revokeObjectURL(a.href);toast('Histórico exportado.');
}

document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>go(b.dataset.view));
document.getElementById('menu-toggle').onclick=()=>document.getElementById('sidebar').classList.toggle('open');
document.getElementById('new-maintenance-order-button').onclick=()=>newWorkOrder('Preventiva');
document.getElementById('maintenance-sync-button').onclick=()=>{maintenanceState.syncedAt=new Date().toLocaleString('pt-PT');maintenanceState.equipmentData.forEach(x=>{if(x.status!=='Disponível')x.last=maintenanceState.syncedAt});log('Dados atualizados','Fontes operacionais e de qualidade atualizadas.','Sistema');render();toast('Dados atualizados.');};
document.getElementById('maintenance-search-button').onclick=()=>modal('Pesquisa global',`<div class="form-grid"><label class="full">Pesquisar<input id="maintenance-global-search" placeholder="Equipamento, ordem, documento ou lote"></label></div>`,`<button class="secondary-button" data-close="1">Fechar</button><button class="primary-button" id="run-maintenance-search">Pesquisar</button>`);
modalRoot.addEventListener('click',e=>{
  if(e.target.id==='run-maintenance-search'){
    const q=document.getElementById('maintenance-global-search').value.toLowerCase();
    const asset=maintenanceState.assets.find(a=>(a.id+' '+a.name+' '+a.serial).toLowerCase().includes(q));
    const wo=maintenanceState.workOrders.find(o=>(o.id+' '+o.description).toLowerCase().includes(q));
    const doc=maintenanceState.documents.find(d=>(d.id+' '+d.title+' '+d.lot).toLowerCase().includes(q));
    modalRoot.innerHTML='';
    if(asset) showAsset(asset.id); else if(wo) showWorkOrder(wo.id); else if(doc) showDocument(doc.id); else toast('Sem resultados.','warning');
  }
});

const params=new URLSearchParams(location.search);
if(params.get('asset')&&assetById(params.get('asset'))){maintenanceState.currentView='assets';render();setTimeout(()=>showAsset(params.get('asset')),0);}else render();
