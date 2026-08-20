# Pav Império — Protótipo de Planeamento e Execução da Produção

Protótipo funcional da **Recomendação 3: Digitalização do planeamento e execução da produção**.

O objetivo é demonstrar o fluxo futuro **Encomenda → Planeamento → Produção → Corte → Levantamento → Stock**, cobrindo os requisitos funcionais definidos para a solução.

## Executar

A aplicação é estática e não requer build.

1. Clonar o repositório.
2. Abrir `index.html` localmente ou importar diretamente o repositório no Vercel.
3. No Vercel, usar `Other` / projeto estático, sem comando de build.

## Estado do protótipo

- Dados exclusivamente demonstrativos.
- Integração PHC simulada.
- Estado guardado apenas em memória no browser.
- Sem autenticação real.
- Sem base de dados persistente.
- Sem execução autónoma de decisões de planeamento.

A implementação produtiva deverá substituir estes elementos por integrações e componentes persistentes adequados.

## Cobertura dos requisitos funcionais

| ID | Requisito | Cobertura no protótipo |
|---|---|---|
| RF01 | Integração das encomendas PHC | Vista Encomendas, sincronização PHC simulada. |
| RF02 | Integração do stock PHC | Stock por tipologia e sincronização simulada. |
| RF03 | Seis tipologias de vigas | P1 a P6 parametrizadas. |
| RF04 | Representação digital das pistas | Vista Planeamento. |
| RF05 | Plano base de produção | Estrutura de pistas e ordens planeadas. |
| RF06 | Plano diário/semanal | Criação e alteração de ordens. |
| RF07 | Sugestão de prioridades | Botão `Gerar sugestão`. |
| RF08 | Human in the Loop | Sugestões exigem aprovação explícita. |
| RF09 | Encomendas não cobertas por stock | Cálculo de necessidade descoberta e alertas. |
| RF10 | Associação entre produção e encomendas | Genealogia e ordens de corte associadas. |
| RF11 | Gestão da janela fabrico/corte | Data `Corte possível` e regra pré-corte. |
| RF12 | Ordem digital de produção | Criação de ordem com ID único. |
| RF13 | Ordem disponível no chão de fábrica | Vista Chão de fábrica. |
| RF14 | Confirmação do início | Botão `Iniciar`. |
| RF15 | Registo do fim | Botão `Concluir produção`. |
| RF16 | Estados da produção | Estados normalizados apresentados no protótipo. |
| RF17 | Ordem de corte automática/assistida | Ordens de corte demonstradas e geradas no fluxo. |
| RF18 | Dimensões de corte | Medidas apresentadas em cada ordem. |
| RF19 | Confirmação do corte | Fluxo `Confirmar corte`. |
| RF20 | Divergências no corte | Registo de quantidade real e motivo de desvio. |
| RF21 | Ordem digital de levantamento | Vista Corte & levantamento. |
| RF22 | Confirmação do levantamento | Botão `Confirmar`. |
| RF23 | Preparação da entrada em stock | Levantamento concluído prepara atualização PHC. |
| RF24 | Atualização automática do stock | Simulada no estado do protótipo após levantamento. |
| RF25 | Gestão de exceções | Registo de exceção no chão de fábrica. |
| RF26 | Histórico de alterações | Vista Histórico & auditoria. |
| RF27 | Gestão de prioridades | Alteração com motivo obrigatório. |
| RF28 | Consulta de Work in Progress | KPI e estado das pistas. |
| RF29 | Dashboard operacional | Cockpit operacional. |
| RF30 | Dashboard stock/encomendas | Vista Encomendas & stock. |
| RF31 | Dashboard capacidade | Capacidade por pista no Planeamento. |
| RF32 | Alertas de desvios | Exceções prioritárias e alertas de cobertura. |
| RF33 | Pesquisa e rastreabilidade | Pesquisa e genealogia ponta a ponta. |
| RF34 | Audit trail | Histórico com utilizador e timestamp. |
| RF35 | Causas de replaneamento | Lista normalizada e motivo obrigatório. |
| RF36 | Histórico de produção | Audit trail e genealogia. |
| RF37 | Extração para análise | Exportação CSV e histórico. |
| RF38 | Otimização automática do plano | Representada como evolução futura, mantendo Human in the Loop. |
| RF39 | Previsão de stock futuro | Representada no roadmap de evolução. |
| RF40 | Machine Learning | Representado no roadmap após maturidade dos dados. |

## Áreas funcionais

1. **Cockpit operacional** — KPIs, exceções, pistas e fluxo digital.
2. **Encomendas & stock** — dados PHC simulados, cobertura e prioridades.
3. **Planeamento** — pistas, capacidade, sugestões e replaneamento auditado.
4. **Chão de fábrica** — início/fim de produção e exceções.
5. **Corte & levantamento** — medidas, divergências, confirmação e stock.
6. **Rastreabilidade** — genealogia digital da encomenda ao stock.
7. **Histórico & auditoria** — alterações, utilizadores, motivos e timestamps.
8. **Integrações & evolução** — cobertura RF01–RF40 e roadmap avançado.

## Arquitetura produtiva recomendada

O protótipo é deliberadamente simples. Para produção recomenda-se uma arquitetura modular com:

- Frontend web ou aplicação Power Apps/PWA para operação.
- Camada de dados persistente em Dataverse ou Azure SQL.
- Integração PHC através de API/web service/mecanismo oficialmente suportado pelo parceiro PHC.
- Workflows simples em Power Automate e lógica mais complexa em Azure Functions quando necessário.
- Power BI para reporting e análise.
- Microsoft Entra ID para autenticação e RBAC.
- Logging, monitorização e audit trail centralizados.
- Ambientes distintos de desenvolvimento, testes e produção.

## Princípio de desenho

A solução não pretende substituir automaticamente o responsável de produção. O planeamento avançado, otimização matemática e Machine Learning deverão produzir **recomendações sujeitas a validação humana** até existir maturidade operacional e histórica suficiente.
