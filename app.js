const state = {
  currentView: 'dashboard',
  syncedAt: '20/08/2026 14:30',
  products: [
    {id:'P1',name:'Viga P1'}, {id:'P2',name:'Viga P2'}, {id:'P3',name:'Viga P3'},
    {id:'P4',name:'Viga P4'}, {id:'P5',name:'Viga P5'}, {id:'P6',name:'Viga P6'}
  ],
  stock: {P1:18,P2:6,P3:24,P4:3,P5:11,P6:8},
  orders: [
    {id:'ENC-260821',client:'Construtora Norte',product:'P2',qty:18,length:4.2,due:'24/08/2026',priority:'Alta',status:'Parcial',covered:6},
    {id:'ENC-260822',client:'Obra Mais',product:'P1',qty:10,length:3.8,due:'25/08/2026',priority:'Normal',status:'Coberta',covered:10},
    {id:'ENC-260823',client:'Edifica',product:'P4',qty:14,length:5.0,due:'26/08/2026',priority:'Alta',status:'Parcial',covered:3},
    {id:'ENC-260824',client:'Construções Minho',product:'P5',qty:8,length:4.5,due:'28/08/2026',priority:'Normal',status:'Coberta',covered:8},
    {id:'ENC-260825',client:'Atlas Engenharia',product:'P6',qty:12,length:3.6,due:'29/08/2026',priority:'Normal',status:'Parcial',covered:8}
  ],
  lanes: [
    {id:'PISTA-1',name:'Pista 1',capacity:24,product:'P2',qty:20,status:'Em produção',progress:72,orderId:'OP-260814',availableCut:'22/08/2026',priority:true},
    {id:'PISTA-2',name:'Pista 2',capacity:24,product:'P4',qty:18,status:'Cura',progress:100,orderId:'OP-260812',availableCut:'21/08/2026',priority:true},
    {id:'PISTA-3',name:'Pista 3',capacity:24,product:'P1',qty:22,status:'Planeada',progress:0,orderId:'OP-260816',availableCut:'23/08/2026',priority:false}
  ],
  productionOrders: [
    {id:'OP-260814',lane:'PISTA-1',product:'P2',qty:20,status:'Em produção',started:'20/08/2026 08:34',finished:'',operator:'Carlos Silva'},
    {id:'OP-260812',lane:'PISTA-2',product:'P4',qty:18,status:'Cura',started:'19/08/2026 08:17',finished:'19/08/2026 12:45',operator:'Miguel Costa'},
    {id:'OP-260816',lane:'PISTA-3',product:'P1',qty:22,status:'Planeada',started:'',finished:'',operator:'João Martins'}
  ],
  cutting: [
    {id:'OC-260807',production:'OP-260812',product:'P4',plannedQty:14,length:5.0,status:'Aguardando corte',linkedOrder:'ENC-260823',actualQty:null,deviation:''},
    {id:'OC-260808',production:'OP-260812',product:'P4',plannedQty:4,length:3.5,status:'Aguardando corte',linkedOrder:'Stock',actualQty:null,deviation:''},
    {id:'OC-260809',production:'OP-260811',product:'P3',plannedQty:12,length:4.0,status:'Cortada',linkedOrder:'ENC-260819',actualQty:12,deviation:''}
  ],
  lifting: [
    {id:'OL-260503',cut:'OC-260809',product:'P3',qty:12,destination:'Stock A',status:'Pendente'},
    {id:'OL-260501',cut:'OC-260805',product:'P1',qty:16,destination:'Stock B',status:'Concluída'}
  ],
  audit: [
    {when:'20/08/2026 13:44',user:'Catarina',action:'Alteração de prioridade',detail:'ENC-260823 passou de Normal para Alta. Motivo: compromisso comercial.'},
    {when:'20/08/2026 11:12',user:'Sistema',action:'Alerta automático',detail:'Stock P2 insuficiente para ENC-260821. Necessidade descoberta: 12 unidades.'},
    {when:'20/08/2026 09:02',user:'Carlos Silva',action:'Execução',detail:'OP-260814 iniciada na Pista 1.'},
    {when:'20/08/2026 08:51',user:'Planeamento',action:'Replaneamento',detail:'OP-260814 antecipada. Motivo: stock abaixo do mínimo.'}
  ]
};

const titles = {
  dashboard:'Cockpit operacional', orders:'Encomendas & stock', planning:'Planeamento da produção', floor:'Chão de fábrica',
  cutting:'Corte & levantamento', trace:'Rastreabilidade ponta a ponta', history:'Histórico & auditoria', integrations:'Integrações & evolução'
};
const root = document.getElementById('view-root');
const modalRoot = document.getElementById('modal-root');
const toastRoot = document.getElementById('toast-root');

function badge(text){
  const t=String(text).toLowerCase(); let cls='info';
  if(t.includes('concl')||t.includes('coberta')||t.includes('cortada')) cls='good';
  if(t.includes('parcial')||t.includes('pend')||t.includes('cura')||t.includes('aguard')) cls='warn';
  if(t.includes('alta')||t.includes('erro')||t.includes('atras')) cls='bad';
  return `<span class="badge ${cls}">${text}</span>`;
}
function toast(message,type='success'){
  const n=document.createElement('div'); n.className=`toast ${type}`; n.textContent=message; toastRoot.appendChild(n); setTimeout(()=>n.remove(),3200);
}
function esc(v){ return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function modal(title,body,footer=''){
  modalRoot.innerHTML=`<div class="modal-backdrop" data-close="1"><div class="modal" onclick="event.stopPropagation()"><div class="modal-head"><h2>${title}</h2><button class="icon-button" data-close="1">✕</button></div><div class="modal-body">${body}</div>${footer?`<div class="modal-foot">${footer}</div>`:''}</div></div>`;
  modalRoot.querySelectorAll('[data-close]').forEach(x=>x.onclick=()=>modalRoot.innerHTML='');
}
function exportCSV(){
  const rows=[['Encomenda','Cliente','Produto','Quantidade','Cobertura','Prioridade','Estado'],...state.orders.map(o=>[o.id,o.client,o.product,o.qty,o.covered,o.priority,o.status])];
  const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='pavimperio-encomendas.csv'; a.click(); URL.revokeObjectURL(a.href);
  toast('Dados exportados em formato standard CSV.');
}
function uncovered(o){ return Math.max(0,o.qty-o.covered); }
function workInProgress(){ return state.productionOrders.filter(o=>!['Concluída','Stock'].includes(o.status)).length; }
function render(){
  document.getElementById('view-title').textContent=titles[state.currentView];
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===state.currentView));
  const fn=views[state.currentView]||views.dashboard; root.innerHTML=fn(); bindView();
}

const views={
  dashboard(){
    const uncoveredQty=state.orders.reduce((s,o)=>s+uncovered(o),0);
    return `<div class="grid kpis">
      <div class="card kpi"><div class="label">Encomendas abertas</div><div class="value">${state.orders.length}</div><div class="delta">PHC sincronizado ${state.syncedAt}</div></div>
      <div class="card kpi"><div class="label">Necessidade sem cobertura</div><div class="value">${uncoveredQty}</div><div class="delta bad">unidades a planear</div></div>
      <div class="card kpi"><div class="label">Work in Progress</div><div class="value">${workInProgress()}</div><div class="delta">ordens ativas</div></div>
      <div class="card kpi"><div class="label">Pistas ocupadas</div><div class="value">${state.lanes.filter(l=>l.status!=='Livre').length}/${state.lanes.length}</div><div class="delta good">visibilidade em tempo quase real</div></div>
    </div>
    <div class="grid two" style="margin-top:16px">
      <div class="card"><div class="section-head"><div><h2>Exceções prioritárias</h2><p>Sistema sinaliza necessidades sem cobertura e riscos de execução.</p></div></div>
        ${state.orders.filter(o=>uncovered(o)>0).map(o=>`<div class="job ${o.priority==='Alta'?'priority':''}"><strong>${o.id} · ${o.product}</strong><small>${o.client} · faltam ${uncovered(o)} un. · entrega ${o.due}</small><div style="margin-top:8px">${badge(o.priority)} ${badge(o.status)}</div></div>`).join('')}
      </div>
      <div class="card"><div class="section-head"><div><h2>Estado das pistas</h2><p>Planeamento e execução no mesmo cockpit.</p></div><button class="secondary-button" data-go="planning">Abrir planeamento</button></div>
        ${state.lanes.map(l=>`<div style="margin:13px 0"><div style="display:flex;justify-content:space-between"><strong>${l.name} · ${l.product}</strong>${badge(l.status)}</div><div class="note">${l.orderId} · ${l.qty}/${l.capacity} un. · corte a partir de ${l.availableCut}</div><div class="progress" style="margin-top:7px"><span style="width:${l.progress}%"></span></div></div>`).join('')}
      </div>
    </div>
    <div class="card" style="margin-top:16px"><div class="section-head"><div><h2>Fluxo operacional digital</h2><p>Rastreabilidade contínua da encomenda ao stock.</p></div></div>
      <div class="grid three">${['Encomendas e stock','Planeamento e produção','Corte, levantamento e stock'].map((x,i)=>`<div class="feature"><div class="id">ETAPA 0${i+1}</div><strong>${x}</strong><p>${['Integração PHC, cobertura e prioridades.','Pistas digitais, ordens e estados em tempo real.','Ordens digitais, confirmação e atualização de stock.'][i]}</p></div>`).join('')}</div>
    </div>`;
  },
  orders(){
    return `<div class="callout"><strong>Integração PHC simulada</strong>As encomendas e stocks abaixo representam os dados que serão lidos do PHC. A escrita de stock só deverá ser ativada após validação técnica do parceiro PHC.</div>
    <div class="section-head"><div><h2>Encomendas</h2><p>Cobertura automática por stock e identificação de necessidades.</p></div><div class="toolbar"><input id="order-filter" placeholder="Pesquisar encomenda ou cliente"><button class="secondary-button" id="export-csv">Exportar CSV</button></div></div>
    <div class="table-wrap"><table><thead><tr><th>Encomenda</th><th>Cliente</th><th>Produto</th><th>Qtd.</th><th>Stock coberto</th><th>Descoberto</th><th>Entrega</th><th>Prioridade</th><th>Ação</th></tr></thead><tbody id="orders-body">
      ${orderRows(state.orders)}
    </tbody></table></div>
    <div class="grid three" style="margin-top:16px">${Object.entries(state.stock).map(([p,q])=>`<div class="card kpi"><div class="label">Stock ${p}</div><div class="value">${q}</div><div class="delta">unidades disponíveis</div></div>`).join('')}</div>`;
  },
  planning(){
    return `<div class="section-head"><div><h2>Plano digital das pistas</h2><p>Plano base, produção em curso, capacidade e replaneamento Human in the Loop.</p></div><div class="toolbar"><button class="primary-button" id="suggest-plan">Gerar sugestão</button><button class="secondary-button" id="create-plan">Criar ordem</button></div></div>
    <div class="lanes">${state.lanes.map(l=>`<div class="lane"><h3>${l.name} ${badge(l.status)}</h3><div class="job ${l.priority?'priority':''}"><strong>${l.orderId} · ${l.product}</strong><small>${l.qty} unidades · capacidade ${l.capacity}</small><div class="progress" style="margin:10px 0"><span style="width:${l.progress}%"></span></div><small>Corte possível: ${l.availableCut}</small><div class="row-actions" style="margin-top:10px"><button class="secondary-button" data-replan="${l.orderId}">Replanear</button><button class="secondary-button" data-details="${l.orderId}">Detalhe</button></div></div></div>`).join('')}</div>
    <div class="grid two" style="margin-top:16px"><div class="card"><h2>Regras aplicadas</h2><div class="timeline"><div class="timeline-item"><strong>1. Cobrir encomenda com stock</strong><span>Evita produção desnecessária quando existe produto disponível.</span></div><div class="timeline-item"><strong>2. Procurar produção compatível em curso</strong><span>Enquanto não houver corte, a produção pode ser afetada a novas encomendas.</span></div><div class="timeline-item"><strong>3. Sugerir nova produção</strong><span>Prioriza descobertos, data de entrega e capacidade.</span></div><div class="timeline-item"><strong>4. Validação humana obrigatória</strong><span>Nenhuma sugestão altera o plano automaticamente.</span></div></div></div>
    <div class="card"><h2>Necessidades sem cobertura</h2>${state.orders.filter(o=>uncovered(o)>0).map(o=>`<div class="job ${o.priority==='Alta'?'priority':''}"><strong>${o.product}: ${uncovered(o)} un.</strong><small>${o.id} · ${o.client} · ${o.due}</small></div>`).join('')}</div></div>`;
  },
  floor(){
    return `<div class="section-head"><div><h2>Execução no chão de fábrica</h2><p>Interface simplificada para tablet ou terminal industrial.</p></div></div>
    <div class="grid three">${state.productionOrders.map(o=>`<div class="card"><div style="display:flex;justify-content:space-between;gap:8px"><div><div class="eyebrow">${o.lane}</div><h2>${o.id} · ${o.product}</h2></div>${badge(o.status)}</div><p><strong>${o.qty}</strong> unidades · Operador: ${o.operator}</p><div class="row-actions">${o.status==='Planeada'?`<button class="primary-button" data-start="${o.id}">Iniciar</button>`:''}${o.status==='Em produção'?`<button class="primary-button" data-finish="${o.id}">Concluir produção</button>`:''}<button class="secondary-button" data-exception="${o.id}">Registar exceção</button></div></div>`).join('')}</div>
    <div class="card" style="margin-top:16px"><h2>Estados normalizados</h2><p>Planeada → Preparação → Em produção → Cura → Disponível para corte → Cortada → Levantada → Entrada em stock.</p></div>`;
  },
  cutting(){
    return `<div class="grid two"><div><div class="section-head"><div><h2>Ordens de corte</h2><p>Medidas digitais, associação a encomenda e registo de divergências.</p></div></div><div class="table-wrap"><table><thead><tr><th>Ordem</th><th>Origem</th><th>Produto</th><th>Qtd.</th><th>Medida</th><th>Destino</th><th>Estado</th><th>Ação</th></tr></thead><tbody>${state.cutting.map(c=>`<tr><td><strong>${c.id}</strong></td><td>${c.production}</td><td>${c.product}</td><td>${c.plannedQty}</td><td>${c.length}m</td><td>${c.linkedOrder}</td><td>${badge(c.status)}</td><td><div class="row-actions">${c.status!=='Cortada'?`<button class="secondary-button" data-cut="${c.id}">Confirmar corte</button>`:''}<button class="ghost-button" data-cut-deviation="${c.id}">Desvio</button></div></td></tr>`).join('')}</tbody></table></div></div>
    <div><div class="section-head"><div><h2>Ordens de levantamento</h2><p>Substitui a circulação de papel e prepara a entrada em stock.</p></div></div><div class="table-wrap"><table><thead><tr><th>Ordem</th><th>Corte</th><th>Produto</th><th>Qtd.</th><th>Destino</th><th>Estado</th><th>Ação</th></tr></thead><tbody>${state.lifting.map(l=>`<tr><td><strong>${l.id}</strong></td><td>${l.cut}</td><td>${l.product}</td><td>${l.qty}</td><td>${l.destination}</td><td>${badge(l.status)}</td><td>${l.status!=='Concluída'?`<button class="primary-button" data-lift="${l.id}">Confirmar</button>`:'Concluída'}</td></tr>`).join('')}</tbody></table></div></div></div>`;
  },
  trace(){
    const o=state.orders[0];
    return `<div class="section-head"><div><h2>Genealogia digital</h2><p>Pesquisar uma encomenda e seguir a execução desde o PHC até ao stock.</p></div><div class="toolbar"><select id="trace-select">${state.orders.map(x=>`<option value="${x.id}">${x.id} · ${x.client}</option>`).join('')}</select><button class="secondary-button" id="trace-run">Pesquisar</button></div></div><div id="trace-result">${traceHTML(o.id)}</div>`;
  },
  history(){
    return `<div class="section-head"><div><h2>Audit trail e histórico</h2><p>Plano inicial, alterações, exceções, utilizadores e timestamps preservados.</p></div><button class="secondary-button" id="export-audit">Exportar histórico</button></div>
    <div class="card"><div class="timeline">${state.audit.map(a=>`<div class="timeline-item"><strong>${a.action}</strong><span>${a.when} · ${a.user}</span><p>${a.detail}</p></div>`).join('')}</div></div>
    <div class="card" style="margin-top:16px"><h2>Causas normalizadas de replaneamento</h2><div class="toolbar">${['Urgência comercial','Stock abaixo do mínimo','Avaria / indisponibilidade','Qualidade','Capacidade','Alteração de encomenda','Outro'].map(x=>`<span class="badge info">${x}</span>`).join('')}</div></div>`;
  },
  integrations(){
    const features=[
      ['RF01–02','Integração PHC','Encomendas e stock integrados com sincronização simulada.','Must'],
      ['RF03–06','Modelo produtivo','Seis tipologias, pistas e plano base/digital.','Must'],
      ['RF07–11','Apoio ao planeamento','Sugestões, cobertura por stock e janela pré-corte.','Should/Must'],
      ['RF12–16','Ordens de produção','Ordens digitais, execução em terminal e estados normalizados.','Must'],
      ['RF17–24','Corte, levantamento e stock','Ordens digitais, medidas, divergências e preparação/atualização de stock.','Must/Should'],
      ['RF25–35','Exceções e governação','Prioridades, causas, alertas, dashboards e audit trail.','Must/Should'],
      ['RF36–37','Histórico e dados','Histórico integral e exportação para análise.','Must/Should'],
      ['RF38–40','Evolução avançada','Otimização automática, previsão de stock e ML. Demonstrado como roadmap, não autonomia produtiva.','Could']
    ];
    return `<div class="callout"><strong>Arquitetura do protótipo</strong>Aplicação web estática para demonstração funcional. A implementação produtiva deverá integrar PHC e uma camada de dados persistente, com autenticação, logging e APIs suportadas.</div>
      <div class="grid two"><div class="card"><h2>Integrações</h2><table><tbody><tr><td>PHC</td><td>${badge('Simulado')}</td><td>Encomendas, stock e futura confirmação de stock.</td></tr><tr><td>Camada de dados</td><td>${badge('Protótipo')}</td><td>Estado mantido em memória no browser.</td></tr><tr><td>Power BI / Analytics</td><td>${badge('Preparado')}</td><td>Exportação CSV demonstrada.</td></tr><tr><td>Equipamentos</td><td>${badge('Fase futura')}</td><td>Não necessária para o MVP funcional definido.</td></tr></tbody></table></div>
      <div class="card"><h2>Evolução inteligente</h2><p><strong>Human in the Loop permanece obrigatório.</strong> O protótipo pode gerar sugestões de planeamento, mas nunca altera o plano de forma autónoma.</p><div class="job"><strong>APS / otimização matemática</strong><small>Futura proposta de plano com restrições de capacidade, stock e datas.</small></div><div class="job"><strong>Previsão de stock</strong><small>Projeção com encomendas, produção e histórico.</small></div><div class="job"><strong>Machine Learning</strong><small>Após histórico suficiente e qualidade de dados validada.</small></div></div></div>
      <div class="section-head" style="margin-top:20px"><div><h2>Cobertura funcional</h2><p>Mapeamento dos 40 requisitos funcionais definidos para a recomendação 3.</p></div></div><div class="feature-list">${features.map(f=>`<div class="feature"><div class="id">${f[0]} · ${f[3]}</div><strong>${f[1]}</strong><p>${f[2]}</p></div>`).join('')}</div>`;
  }
};

function orderRows(list){ return list.map(o=>`<tr><td><strong>${o.id}</strong></td><td>${o.client}</td><td>${o.product}<br><span class="note">${o.length}m</span></td><td>${o.qty}</td><td>${o.covered}</td><td><strong class="${uncovered(o)?'bad':'good'}">${uncovered(o)}</strong></td><td>${o.due}</td><td>${badge(o.priority)}</td><td><div class="row-actions"><button class="secondary-button" data-priority="${o.id}">Prioridade</button><button class="ghost-button" data-order-detail="${o.id}">Detalhe</button></div></td></tr>`).join(''); }
function traceHTML(id){
  const o=state.orders.find(x=>x.id===id)||state.orders[0]; const prod=state.productionOrders.find(p=>p.product===o.product); const cut=state.cutting.find(c=>c.product===o.product);
  return `<div class="card"><div class="timeline"><div class="timeline-item"><strong>${o.id} · ${o.client}</strong><span>Encomenda PHC · ${o.qty} un. ${o.product} · entrega ${o.due}</span><p>Stock coberto: ${o.covered}; necessidade descoberta: ${uncovered(o)}.</p></div><div class="timeline-item"><strong>${prod?prod.id:'Produção ainda por planear'}</strong><span>${prod?`${prod.lane} · ${prod.status}`:'Sem ordem compatível'}</span><p>${prod?`${prod.qty} unidades em fluxo produtivo.`:'A solução sinaliza necessidade ao planeamento.'}</p></div><div class="timeline-item"><strong>${cut?cut.id:'Corte ainda não gerado'}</strong><span>${cut?`${cut.plannedQty} un. a ${cut.length}m · ${cut.status}`:'Será criado após produção compatível'}</span></div><div class="timeline-item"><strong>Levantamento e stock</strong><span>Confirmação digital e preparação de atualização no PHC.</span></div></div></div>`;
}

function bindView(){
  root.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
  const f=document.getElementById('order-filter'); if(f) f.oninput=()=>{document.getElementById('orders-body').innerHTML=orderRows(state.orders.filter(o=>(o.id+' '+o.client).toLowerCase().includes(f.value.toLowerCase()))); bindView();};
  document.getElementById('export-csv')?.addEventListener('click',exportCSV);
  root.querySelectorAll('[data-priority]').forEach(b=>b.onclick=()=>changePriority(b.dataset.priority));
  root.querySelectorAll('[data-order-detail]').forEach(b=>b.onclick=()=>showOrder(b.dataset.orderDetail));
  root.querySelectorAll('[data-replan]').forEach(b=>b.onclick=()=>replan(b.dataset.replan));
  root.querySelectorAll('[data-details]').forEach(b=>b.onclick=()=>showProduction(b.dataset.details));
  document.getElementById('suggest-plan')?.addEventListener('click',suggestPlan);
  document.getElementById('create-plan')?.addEventListener('click',newProductionOrder);
  root.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>startProduction(b.dataset.start));
  root.querySelectorAll('[data-finish]').forEach(b=>b.onclick=()=>finishProduction(b.dataset.finish));
  root.querySelectorAll('[data-exception]').forEach(b=>b.onclick=()=>registerException(b.dataset.exception));
  root.querySelectorAll('[data-cut]').forEach(b=>b.onclick=()=>confirmCut(b.dataset.cut));
  root.querySelectorAll('[data-cut-deviation]').forEach(b=>b.onclick=()=>cutDeviation(b.dataset.cutDeviation));
  root.querySelectorAll('[data-lift]').forEach(b=>b.onclick=()=>confirmLift(b.dataset.lift));
  document.getElementById('trace-run')?.addEventListener('click',()=>{document.getElementById('trace-result').innerHTML=traceHTML(document.getElementById('trace-select').value)});
  document.getElementById('export-audit')?.addEventListener('click',()=>{const txt=state.audit.map(a=>`${a.when};${a.user};${a.action};${a.detail}`).join('\n'); const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'text/plain'}));a.download='audit-pavimperio.txt';a.click();toast('Histórico exportado.');});
}

function go(view){state.currentView=view;render();}
function log(action,detail,user='Utilizador demo'){state.audit.unshift({when:new Date().toLocaleString('pt-PT'),user,action,detail});}
function changePriority(id){const o=state.orders.find(x=>x.id===id);modal('Alterar prioridade',`<div class="form-grid"><label>Prioridade<select id="p-priority"><option>Normal</option><option>Alta</option></select></label><label class="full">Motivo<textarea id="p-reason" placeholder="Justificação obrigatória"></textarea></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-priority">Guardar</button>`);document.getElementById('p-priority').value=o.priority;document.getElementById('save-priority').onclick=()=>{const reason=document.getElementById('p-reason').value.trim();if(!reason){toast('É obrigatório indicar o motivo.','warning');return;}o.priority=document.getElementById('p-priority').value;log('Alteração de prioridade',`${id}: ${o.priority}. Motivo: ${reason}`);modalRoot.innerHTML='';render();toast('Prioridade atualizada e auditada.');};}
function showOrder(id){const o=state.orders.find(x=>x.id===id);modal(`Encomenda ${id}`,`<p><strong>Cliente:</strong> ${o.client}</p><p><strong>Produto:</strong> ${o.product} · ${o.qty} un. · ${o.length}m</p><p><strong>Stock coberto:</strong> ${o.covered}</p><p><strong>Necessidade descoberta:</strong> ${uncovered(o)}</p><p><strong>Entrega:</strong> ${o.due}</p><p><strong>Estado:</strong> ${o.status}</p>`);}
function replan(id){modal(`Replanear ${id}`,`<div class="form-grid"><label>Nova pista<select id="rp-lane">${state.lanes.map(l=>`<option>${l.id}</option>`).join('')}</select></label><label>Nova prioridade<select id="rp-priority"><option>Normal</option><option>Alta</option></select></label><label class="full">Motivo<select id="rp-reason"><option>Urgência comercial</option><option>Stock abaixo do mínimo</option><option>Avaria / indisponibilidade</option><option>Qualidade</option><option>Capacidade</option><option>Alteração de encomenda</option><option>Outro</option></select></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-replan">Guardar alteração</button>`);document.getElementById('save-replan').onclick=()=>{log('Replaneamento',`${id}: pista ${document.getElementById('rp-lane').value}. Motivo: ${document.getElementById('rp-reason').value}.`,'Planeamento');modalRoot.innerHTML='';toast('Alteração registada sem eliminar o plano anterior.');};}
function showProduction(id){const p=state.productionOrders.find(x=>x.id===id);modal(id,`<p><strong>Pista:</strong> ${p?.lane||'-'}</p><p><strong>Produto:</strong> ${p?.product||'-'}</p><p><strong>Quantidade:</strong> ${p?.qty||'-'}</p><p><strong>Estado:</strong> ${p?.status||'-'}</p><p><strong>Operador:</strong> ${p?.operator||'-'}</p>`);}
function suggestPlan(){const needs=state.orders.filter(o=>uncovered(o)>0).sort((a,b)=>(a.priority==='Alta'?-1:1)-(b.priority==='Alta'?-1:1)); const n=needs[0];modal('Sugestão de planeamento',`<div class="callout"><strong>Recomendação gerada</strong>Produzir ${uncovered(n)} unidades de ${n.product} para ${n.id}, com prioridade ${n.priority}. A recomendação considera stock disponível, necessidade descoberta e data de entrega.</div><p><strong>Human in the Loop:</strong> esta recomendação não altera o plano até ser aprovada.</p>`,`<button class="secondary-button" data-close="1">Rejeitar</button><button class="primary-button" id="approve-suggestion">Aprovar e criar ordem</button>`);document.getElementById('approve-suggestion').onclick=()=>{modalRoot.innerHTML='';newProductionOrder(n.product,uncovered(n));};}
function newProductionOrder(product='P1',qty=12){modal('Nova ordem de produção',`<div class="form-grid"><label>Produto<select id="np-product">${state.products.map(p=>`<option>${p.id}</option>`).join('')}</select></label><label>Quantidade<input id="np-qty" type="number" value="${qty}" min="1"></label><label>Pista<select id="np-lane">${state.lanes.map(l=>`<option>${l.id}</option>`).join('')}</select></label><label>Operador<input id="np-op" value="Operador demo"></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-production">Criar ordem</button>`);document.getElementById('np-product').value=product;document.getElementById('save-production').onclick=()=>{const id='OP-'+String(Date.now()).slice(-6);state.productionOrders.push({id,lane:document.getElementById('np-lane').value,product:document.getElementById('np-product').value,qty:+document.getElementById('np-qty').value,status:'Planeada',started:'',finished:'',operator:document.getElementById('np-op').value});log('Ordem de produção criada',`${id} criada e sujeita a execução humana.`,'Planeamento');modalRoot.innerHTML='';render();toast(`${id} criada.`);};}
function startProduction(id){const p=state.productionOrders.find(x=>x.id===id);p.status='Em produção';p.started=new Date().toLocaleString('pt-PT');log('Execução',`${id} iniciada.`,p.operator);render();toast('Produção iniciada.');}
function finishProduction(id){const p=state.productionOrders.find(x=>x.id===id);p.status='Cura';p.finished=new Date().toLocaleString('pt-PT');log('Execução',`${id} concluída e passou para Cura.`,p.operator);render();toast('Produção concluída. Estado: Cura.');}
function registerException(id){modal(`Exceção em ${id}`,`<div class="form-grid"><label class="full">Tipo<select id="ex-type"><option>Avaria / indisponibilidade</option><option>Qualidade</option><option>Capacidade</option><option>Material</option><option>Outro</option></select></label><label class="full">Descrição<textarea id="ex-note"></textarea></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-ex">Registar</button>`);document.getElementById('save-ex').onclick=()=>{log('Exceção de produção',`${id}: ${document.getElementById('ex-type').value}. ${document.getElementById('ex-note').value}`);modalRoot.innerHTML='';toast('Exceção registada e auditada.');};}
function confirmCut(id){const c=state.cutting.find(x=>x.id===id);modal(`Confirmar corte ${id}`,`<div class="form-grid"><label>Quantidade executada<input id="cut-qty" type="number" value="${c.plannedQty}"></label><label>Medida<input value="${c.length}m" disabled></label><label class="full">Observações<textarea id="cut-note"></textarea></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-cut">Confirmar</button>`);document.getElementById('save-cut').onclick=()=>{const q=+document.getElementById('cut-qty').value;c.actualQty=q;c.status='Cortada';if(q!==c.plannedQty)c.deviation=`Planeado ${c.plannedQty}, executado ${q}`;log('Corte confirmado',`${id}: ${q} unidades. ${c.deviation}`,'Operador corte');if(!state.lifting.find(l=>l.cut===id))state.lifting.push({id:'OL-'+String(Date.now()).slice(-6),cut:id,product:c.product,qty:q,destination:'Stock A',status:'Pendente'});modalRoot.innerHTML='';render();toast('Corte confirmado e levantamento preparado.');};}
function cutDeviation(id){modal(`Registar desvio ${id}`,`<div class="form-grid"><label class="full">Motivo<textarea id="dev-note" placeholder="Motivo obrigatório"></textarea></label></div>`,`<button class="secondary-button" data-close="1">Cancelar</button><button class="primary-button" id="save-dev">Guardar</button>`);document.getElementById('save-dev').onclick=()=>{const v=document.getElementById('dev-note').value.trim();if(!v){toast('Indique o motivo.','warning');return;}state.cutting.find(x=>x.id===id).deviation=v;log('Desvio de corte',`${id}: ${v}`,'Operador corte');modalRoot.innerHTML='';toast('Desvio registado.');};}
function confirmLift(id){const l=state.lifting.find(x=>x.id===id);l.status='Concluída';state.stock[l.product]=(state.stock[l.product]||0)+l.qty;log('Levantamento e stock',`${id} concluída. Preparada atualização PHC: +${l.qty} ${l.product}.`,'Armazém');render();toast('Levantamento concluído e stock atualizado no protótipo.');}

document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>go(b.dataset.view));
document.getElementById('menu-toggle').onclick=()=>document.getElementById('sidebar').classList.toggle('open');
document.getElementById('sync-button').onclick=()=>{state.syncedAt=new Date().toLocaleString('pt-PT');log('Sincronização PHC','Leitura simulada de encomendas e stock concluída.','Sistema');render();toast('Sincronização PHC simulada concluída.');};
document.getElementById('new-order-button').onclick=()=>newProductionOrder();
document.getElementById('global-search-button').onclick=()=>modal('Pesquisa global',`<div class="form-grid"><label class="full">Pesquisar<input id="global-search" placeholder="Encomenda, ordem, cliente ou produto"></label></div><p class="note">A pesquisa demonstra o requisito de consulta transversal. Use ENC-260821 ou P2.</p>`,`<button class="secondary-button" data-close="1">Fechar</button><button class="primary-button" id="run-global">Pesquisar</button>`);
modalRoot.addEventListener('click',e=>{if(e.target.id==='run-global'){const q=document.getElementById('global-search').value.toLowerCase();const o=state.orders.find(x=>(x.id+x.client+x.product).toLowerCase().includes(q));modalRoot.innerHTML='';if(o){state.currentView='trace';render();setTimeout(()=>{const s=document.getElementById('trace-select');if(s){s.value=o.id;document.getElementById('trace-result').innerHTML=traceHTML(o.id)}},0);}else toast('Sem resultados.','warning');}});
render();
