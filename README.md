# Pav Império — Planeamento e Execução da Produção

Aplicação de suporte ao processo integrado **Encomenda → Planeamento → Produção → Corte → Levantamento → Stock**.

A solução centraliza a informação operacional, suporta o planeamento das pistas, digitaliza as ordens de produção e corte, assegura rastreabilidade ponta a ponta e disponibiliza indicadores para apoio à decisão.

## Publicação

A aplicação é disponibilizada como projeto web estático e pode ser publicada diretamente no Vercel.

1. Importar o repositório `ilidiofaria/Pavimperio` no Vercel.
2. Selecionar o framework `Other`.
3. Não definir comando de build.
4. Publicar o projeto.

## Áreas funcionais

1. **Cockpit operacional.** Indicadores de encomendas abertas, necessidades sem cobertura, Work in Progress, ocupação das pistas e exceções prioritárias.
2. **Encomendas & stock.** Consulta das encomendas, cobertura por stock, prioridades e necessidades a produzir.
3. **Planeamento.** Gestão das pistas, capacidade, ordens, replaneamento e recomendações de prioridade.
4. **Chão de fábrica.** Execução das ordens de produção, atualização de estados e registo de exceções.
5. **Corte & levantamento.** Gestão das ordens de corte, medidas, divergências, levantamento e entrada em stock.
6. **Rastreabilidade.** Genealogia digital entre encomenda, produção, corte, levantamento e stock.
7. **Histórico & auditoria.** Registo das alterações, causas, utilizadores e timestamps.
8. **Integrações & inteligência.** Estado das integrações, projeção de stock e apoio à otimização do plano.

## Cobertura funcional

A aplicação contempla as capacidades funcionais definidas para a digitalização do planeamento e execução da produção, incluindo:

1. Integração de encomendas e stock PHC.
2. Parametrização das tipologias de produto.
3. Representação digital das pistas de produção.
4. Plano base e plano operacional.
5. Identificação de necessidades sem cobertura.
6. Associação entre encomendas e produção em curso.
7. Gestão da janela entre produção e corte.
8. Ordens digitais de produção.
9. Execução operacional no chão de fábrica.
10. Estados normalizados do processo produtivo.
11. Ordens de corte e respetivas medidas.
12. Registo de divergências de corte.
13. Ordens de levantamento.
14. Atualização de stock.
15. Gestão de exceções.
16. Replaneamento com motivo obrigatório.
17. Consulta de Work in Progress.
18. Dashboards de produção, stock e capacidade.
19. Alertas operacionais.
20. Rastreabilidade ponta a ponta.
21. Audit trail.
22. Histórico de produção.
23. Exportação estruturada de dados.
24. Projeção de stock.
25. Recomendação de prioridades de produção.

## Arquitetura de referência

A arquitetura funcional está organizada em quatro camadas:

1. **Experiência operacional.** Interface web responsiva para planeamento, produção, corte e armazém.
2. **Dados operacionais.** Modelo único para encomendas, stock, pistas, ordens de produção, corte, levantamento e auditoria.
3. **Integração.** Ligação entre PHC e os processos operacionais através de APIs, web services ou mecanismos suportados pelo parceiro PHC.
4. **Inteligência e reporting.** Indicadores operacionais, projeção de stock, apoio à priorização e disponibilização de dados para análise.

## Modelo de decisão

As recomendações de planeamento consideram stock disponível, produção em curso, prioridade das encomendas, datas de entrega e capacidade das pistas. As alterações ao plano são confirmadas pelo responsável e ficam registadas no histórico operacional.

## Segurança e governação

A evolução da solução deverá manter segregação de perfis, autenticação, controlo de acessos, logging, audit trail e separação entre ambientes de desenvolvimento, testes e produção.
