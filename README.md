# Pav Império — Gestão Integrada da Produção, Manutenção e Qualidade

Aplicação de suporte à operação industrial da Pav Império, organizada em dois módulos integrados:

1. **Planeamento & Produção.** Encomenda → Planeamento → Produção → Corte → Levantamento → Stock.
2. **Manutenção & Qualidade.** Equipamentos → Planos preventivos → Ordens de manutenção → Qualidade → Documentação técnica → Analytics & IA.

A solução centraliza informação operacional, suporta o planeamento das pistas, digitaliza ordens e intervenções, estrutura manutenção preventiva e corretiva, assegura rastreabilidade de qualidade e disponibiliza indicadores e conhecimento técnico para apoio à decisão.

## Publicação

A aplicação é disponibilizada como projeto web estático e pode ser publicada diretamente no Vercel.

1. Importar o repositório `ilidiofaria/Pavimperio` no Vercel.
2. Selecionar o framework `Other`.
3. Não definir comando de build.
4. Publicar o projeto.

A entrada principal é `index.html`. O módulo de Manutenção & Qualidade está disponível em `maintenance.html` e pode ser acedido através do seletor de módulos da aplicação.

## Módulo Planeamento & Produção

1. **Cockpit operacional.** Indicadores de encomendas abertas, necessidades sem cobertura, Work in Progress, ocupação das pistas e exceções prioritárias.
2. **Encomendas & stock.** Consulta das encomendas, cobertura por stock, prioridades e necessidades a produzir.
3. **Planeamento.** Gestão das pistas, capacidade, ordens, replaneamento e recomendações de prioridade.
4. **Chão de fábrica.** Execução das ordens de produção, atualização de estados e registo de exceções.
5. **Corte & levantamento.** Gestão das ordens de corte, medidas, divergências, levantamento e entrada em stock.
6. **Rastreabilidade.** Genealogia digital entre encomenda, produção, corte, levantamento e stock.
7. **Histórico & auditoria.** Registo das alterações, causas, utilizadores e timestamps.
8. **Integrações & inteligência.** Estado das integrações, projeção de stock e apoio à otimização do plano.

## Módulo Manutenção & Qualidade

1. **Cockpit de manutenção.** Ordens abertas, cumprimento preventivo, indisponibilidade, ativos críticos, prioridades e próximas intervenções.
2. **Equipamentos.** Cadastro, hierarquia, criticidade, estado, QR Code, histórico, documentação e indicadores por ativo.
3. **Ordens de manutenção.** Preventiva e corretiva, workflow, checklists, tempos de paragem, peças, evidências e validação.
4. **Qualidade.** Registos de ensaio, certificados, lotes, materiais e dados provenientes dos equipamentos industriais.
5. **Documentação técnica.** Repositório pesquisável de manuais, planos, procedimentos, certificados e fichas técnicas.
6. **Assistente IA.** Consulta em linguagem natural com fontes, controlo de acesso, feedback e validação humana.
7. **Indicadores & integrações.** MTBF, MTTR, cumprimento preventivo, indisponibilidade, fontes de dados, segurança e operação.
8. **Histórico & auditoria.** Registo de intervenções, alterações, validações, utilizadores e timestamps.

## Arquitetura de referência

A solução está organizada em camadas funcionais independentes:

1. **Experiência operacional.** Interface web responsiva para produção, planeamento, manutenção, qualidade e consulta técnica.
2. **Dados operacionais.** Modelo comum para encomendas, stock, equipamentos, planos, ordens, qualidade, documentos e auditoria.
3. **Integração.** Ligação ao PHC, equipamentos industriais, central de betão e restantes fontes através de mecanismos suportados.
4. **Automação.** Regras de negócio, geração de ordens, alertas, workflows e tratamento de documentos.
5. **Inteligência e reporting.** Indicadores operacionais, projeções, recomendações e Assistente IA suportado por documentação autorizada.

## Segurança e governação

A arquitetura contempla autenticação, perfis de acesso, princípio de menor privilégio, TLS, gestão segura de credenciais, logging centralizado, alertas, backups, audit trail e separação entre ambientes de desenvolvimento, testes e produção.

O Assistente IA utiliza documentação autorizada, apresenta as fontes utilizadas e não executa autonomamente alterações sobre equipamentos, planos ou ordens de manutenção.

## Requisitos

A cobertura detalhada dos requisitos funcionais e técnicos da Recomendação 2 encontra-se em `RECOMMENDATION_2_REQUIREMENTS.md`.
