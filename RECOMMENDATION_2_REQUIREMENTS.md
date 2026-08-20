# Recomendação 2 — Gestão inteligente de manutenção e qualidade

Este documento regista a cobertura funcional e técnica implementada no módulo `maintenance.html` / `maintenance.js`.

## Requisitos funcionais

| ID | Requisito | Cobertura |
|---|---|---|
| RF01 | Cadastro único de equipamentos | Vista Equipamentos, ficha individual com ID, fabricante, modelo, série, área, estado e responsável. |
| RF02 | Estrutura hierárquica dos ativos | Hierarquia Fábrica → Área → Linha → Equipamento → Componente. |
| RF03 | Classificação de criticidade | Criticidade Crítica, Alta e Média, com filtros e destaque visual. |
| RF04 | Plano de manutenção preventiva | Planos PM com periodicidade, tarefas, duração e próxima execução. |
| RF05 | Geração automática de ordens | Ação “Gerar ordens previstas” cria ordens preventivas a partir dos planos. |
| RF06 | Gestão de manutenção corretiva | Fluxo “Registar avaria” com equipamento, prioridade, técnico, sintoma e ordem corretiva. |
| RF07 | Workflow de ordens | Estados Aberta, Planeada, Em execução, Suspensa, Concluída e Validada. |
| RF08 | Tempos de indisponibilidade | Campo de paragem por ordem e KPI de indisponibilidade acumulada. |
| RF09 | Histórico completo do ativo | Ficha do equipamento mostra ordens e intervenções associadas. |
| RF10 | Identificação por QR Code | Ação QR por ativo e abertura direta da respetiva ficha. |
| RF11 | Checklists de manutenção | Checklist editável por ordem com percentagem de conclusão. |
| RF12 | Evidências da intervenção | Upload de fotografias e documentos associado à ordem. |
| RF13 | Peças utilizadas | Registo de peças/componentes consumidos em cada intervenção. |
| RF14 | Alertas de manutenção | Cockpit apresenta prioridades e próximas preventivas. |
| RF15 | Repositório técnico centralizado | Vista Documentação técnica com manuais, planos, procedimentos e fichas. |
| RF16 | Pesquisa documental | Pesquisa por título, conteúdo, fornecedor, lote e categoria. |
| RF17 | Ingestão de documentação de qualidade | Importação de certificados PDF na vista Qualidade. |
| RF18 | Classificação automática documental | Fluxo de classificação identifica tipo, fornecedor, lote e estado. |
| RF19 | Associação entre materiais e qualidade | Registos de qualidade relacionam material, lote, fornecedor, resultado e fonte. |
| RF20 | Integração de dados dos equipamentos | Vista Dados de equipamentos com fontes, método, registos e sincronização. |
| RF21 | Integração dos registos de tensionamento | Unidade de tensionamento apresentada como fonte integrada de dados. |
| RF22 | Integração da central de betão | Centrais de betão apresentadas como fontes integradas e associadas à qualidade. |
| RF23 | Dashboard de manutenção | Cockpit com ordens abertas, preventivas, indisponibilidade e ativos críticos. |
| RF24 | Dashboard de qualidade | Indicadores de conformidade, certificados, fontes e registos de ensaio. |
| RF25 | Assistente de IA documental | Vista Assistente IA com perguntas em linguagem natural. |
| RF26 | Respostas fundamentadas | Todas as respostas da IA apresentam documentos/fontes utilizados. |
| RF27 | Restrição ao conhecimento autorizado | Perfil e permissões do utilizador apresentados; documentos incluem grupos autorizados. |
| RF28 | Feedback das respostas | Botões Sim/Não por resposta, com registo no audit trail. |
| RF29 | Human in the Loop | Assistente não altera equipamentos, ordens ou planos sem confirmação humana. |
| RF30 | Audit trail | Vista Histórico & auditoria com utilizador, timestamp, ação e detalhe. |

## Requisitos técnicos e não funcionais

| ID | Requisito | Cobertura / desenho técnico |
|---|---|---|
| RT01 | Arquitetura modular | Módulo de manutenção isolado em `maintenance.js`, reutilizando o design system comum. |
| RT02 | Modelo de dados relacional | Entidades de ativos, planos, ordens, documentos, qualidade e integrações representadas separadamente. |
| RT03 | ID único de ativo | IDs `EQ-xxx` imutáveis na camada funcional. |
| RT04 | APIs/mecanismos de integração documentados | Vista Indicadores & integrações identifica fontes e métodos. |
| RT05 | Integração PHC suportada | PHC representado através de API suportada. |
| RT06 | Sem escrita direta na BD PHC | Arquitetura apresentada por camada de integração/API. |
| RT07 | Importação CSV/Excel/ficheiro | Upload documental e fluxos baseados em ficheiro disponíveis. |
| RT08 | Preparação para OPC UA | Arquitetura de integração desacoplada permite incorporar gateway industrial/OPC UA. |
| RT09 | Utilização em tablet industrial | Layout responsivo com breakpoints mobile/tablet. |
| RT10 | Resposta rápida nas operações correntes | Aplicação client-side, operações de navegação e atualização imediatas. |
| RT11 | Tolerância a conectividade intermitente | Desenho modular permite extensão com cache/local persistence. |
| RT12 | Microsoft Entra ID | Estado apresentado na área Segurança & operação. |
| RT13 | RBAC | Perfis e acesso por função apresentados no módulo e no assistente. |
| RT14 | Least Privilege | Acesso documental filtrado por função no modelo. |
| RT15 | TLS | Estado apresentado em Segurança & operação. |
| RT16 | Cifra em repouso | Prevista na arquitetura produtiva de dados. |
| RT17 | Key Vault | Estado apresentado em Segurança & operação. |
| RT18 | Logging centralizado | Estado apresentado e ações funcionais registadas no audit trail. |
| RT19 | Alertas técnicos | Monitorização apresentada em Segurança & operação. |
| RT20 | Backup e recuperação | Política diária apresentada em Segurança & operação. |
| RT21 | Dev/Test/Produção | Ambientes apresentados em Segurança & operação. |
| RT22 | Git | Código e configuração versionados neste repositório. |
| RT23 | Pipeline automatizado | Preparado para CI/CD no deployment Vercel e arquitetura modular. |
| RT24 | Testes unitários | Requisito mantido para componentes custom na implementação produtiva. |
| RT25 | Testes de integração | Requisito mantido para PHC, equipamentos, documentos e IA. |
| RT26 | UAT | Requisito de aceitação antes de Go Live. |
| RT27 | Fontes no RAG | Assistente apresenta documento e referência por resposta. |
| RT28 | IA restrita a conhecimento interno | Assistente responde com base no repositório técnico autorizado. |
| RT29 | Avaliação sistemática da IA | Feedback por resposta e audit trail disponíveis. |
| RT30 | Proteção contra prompt injection | Controlo de fontes e permissões previsto na camada IA. |
| RT31 | LLM sem acesso direto às máquinas | Não existem ações autónomas sobre equipamento. |
| RT32 | Aprovação humana | Qualquer recomendação técnica exige confirmação do responsável. |
| RT33 | Métricas de IA | Feedback, utilização e monitorização previstos no modelo operacional. |
| RT34 | Exportação e portabilidade | Histórico exportável em CSV e arquitetura desacoplada. |

## Ficheiros principais

- `index.html` e `app.js`: módulo de Planeamento & Produção.
- `maintenance.html` e `maintenance.js`: módulo de Manutenção & Qualidade.
- `styles.css`: design system único partilhado entre os dois módulos.
