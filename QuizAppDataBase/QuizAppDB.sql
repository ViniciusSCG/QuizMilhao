CREATE DATABASE QUIZAPP;
USE QUIZAPP;
CREATE TABLE perguntas (
  id_pergunta     int PRIMARY KEY auto_increment not null,
  question        VARCHAR(500) NOT NULL,
  choice1  		  VARCHAR(500) NOT NULL,
  choice2  		  VARCHAR(500) NOT NULL,
  choice3  		  VARCHAR(500) NOT NULL,
  choice4  		  VARCHAR(500) NOT NULL,
  dica		      VARCHAR(500) NOT NULL,
  answer          int NOT NULL
);

INSERT PERGUNTAS VALUES (null, 'Quais tipos de dados especificamente serão protegidos?', 
'Todos os dados de qualquer pessoa que passar por um ou vários dos seguintes procedimentos: coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração. ', 
'Somente os dados dos seguintes procedimentos: armazenamento e recepção.', 
'Todos os dados de qualquer pessoa que passar por um ou vários dos seguintes procedimentos: coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, armazenamento. Exceto os procedimentos de arquivamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.', 
'Nenhum tipo de dado será protegido', 
'Praticamente todos os tipos de dados.' 
,1);

INSERT PERGUNTAS VALUES (null, 'Por qual motivo é liberado as operadoras de planos de saúde o tratamento de dados?', 
'Para selecionar casos de riscos', 
'Para gerenciar os pagamentos', 
'Para controlar a saúde nacional', 
'Nenhum tipo de dado será protegido', 
'A vida deve ser tratada como prioridade!' 
,1);

INSERT PERGUNTAS VALUES (null, 'O que a sigla LGPD significa?', 
'Lei Geral de proteção de dados ', 
'Lei Geral de privacidade de dados', 
'Lei Geral de proteção de data-base', 
'Lei Geral de propriedade de dados', 
'não se aplica apenas a banco de dados.' 
,1);

INSERT PERGUNTAS VALUES (null, 'Como é considerado o banco de dados dentro da LGPD? ', 
'Conjunto de dados armazenados somente em suporte eletrônico ', 
'Conjunto de dados armazenados somente em suporte físico', 
'Conjunto de dados armazenados em suporte eletrônico e físico', 
'Conjunto de dados armazenados em um cofre de banco', 
'Por mais que estejam em papéis, dados são dados.' 
,3);

INSERT PERGUNTAS VALUES (null, 'Qual foi o órgão criado para gerenciar o cumprimento da LGPD em território nacional?', 
'FNPD (FISCALIZAÇÃO NACIONAL DE PROTEÇÃO DE DADOS)', 
'ANPD (AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS)', 
'GNPD (GERENCIADORA NACIONAL DE PROTEÇÃO DE DADOS)', 
'ONPD (ORGANIZAÇÃO NACIONAL DE PROTEÇÃO DE DADOS)', 
'Será uma autoridade!' 
,3);

INSERT PERGUNTAS VALUES (null, 'Por qual motivo é liberado as operadoras de planos de saúde para tratamentos de dados?', 
'Para selecionar casos de riscos', 
'Para gerenciar os pagamentos', 
'Para controlar a saúde nacional', 
'Nenhuma das alternativas, pois não é liberado', 
'Será para um tipo especifico, mais urgentes.' 
,1);

INSERT PERGUNTAS VALUES (null, 'As normas gerais contidas nestas leis são de qual interesse?', 
'Mundial', 
'Estadual (apenas em estados específicos)', 
'Nacional', 
'Regionais (norte, sul, leste e oeste)', 
'Até onde as leis de nosso país podem atuar?' 
,3);

INSERT PERGUNTAS VALUES (null, 'O Brasil passou a fazer parte dos países que contam com uma legislação específica para proteção de dados e da privacidade dos seus cidadãos. Outras regulamento similar à LGPD no brasil é o Regulamento geral sobre a proteção de dados (GDPR), que é aplicada em:?', 
'Estados Unidos da América', 
'Apenas na Rússia', 
'Toda a América Latina', 
'Toda União Europeia', 
'Neste local o controle de dados e tráfego (como pirataria, por exemplo) já é levado a sério a muito tempo!' 
,4);

INSERT PERGUNTAS VALUES (null, 'Qual das alternativas abaixo não é uma das sanções administrativas no descumprimento da LGPD', 
'Advertência, com indicação de prazo para adoção de medidas corretivas', 
'Multa simples, de até 2% do faturamento líquido da pessoa jurídica de direito privado, grupo ou conglomerado no Brasil no seu último exercício, limitada, no total, a R$ 50.000.000,00 por infração e Multa diária.', 
'Bloqueio dos dados pessoais envolvidos na infração até a sua regularização.', 
'Encerramento instantâneo do CNPJ no caso de descumprimento.', 
'O foco da lei é proteção, e não impedir que você trabalhe!' 
,4);

INSERT PERGUNTAS VALUES (null, 'Quem irá fiscalizar o cumprimento da lei LGPD', 
'(AMPD) Autoridade mundial de Proteção de Dados', 
'O ministério da Justiça e Segurança pública', 
'(ANPD) Autoridade Nacional de Proteção de Dados', 
'A Policia Federal', 
'Foi criada especialmente para isso!' 
,3);

INSERT PERGUNTAS VALUES (null, 'O que acontece com dados que a própria pessoa publicar nas redes sociais?', 
'Se a própria pessoa publicar, não terá problema', 
'Redes sociais não podem mais usar dado nenhum', 
'As redes têm que pedir permissão pelo uso dos dados', 
'Será proibido postar dados pessoais nas redes', 
'Com a adequação, o controle será seu!' 
,3);

INSERT PERGUNTAS VALUES (null, 'Os dados serão apagados caso o usuário pedir?', 
'Sim, sempre que pedir', 
'Mais ou menos. Existem algumas condições para que eles fiquem', 
'Os dados movimentam a economia e nunca podem ser apagados', 
'Nunca, pois o usuário não tem controle aos seus dados', 
'Cada caso é um caso!' 
,2);

INSERT PERGUNTAS VALUES (null, 'A lei vale para empresas estrangeiras?', 
'Qualquer empresa que atue no Brasil terá que respeitar a lei', 
'A lei só vale para empresas criadas no País', 
'Depende do tamanho da receita da empresa', 
'Só empresas da área de tecnologia', 
'não se joga no campo do adversário utilizando suas regras ' 
,1);




select * from perguntas;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

drop table perguntas;
drop table alternativas;
select * from perguntas;

