Projeto Automação Web CodeceptJs + JS

Primeiro de tudo é necessário que a máquina esteja configurada com as ferramentas necessárias para rodar os testes como: Node.js, Visual Studio Code e o CodeceptJS com os pacotes Playwright instalados.

O site utilizado para os testes é o site de estudos para testes automatizados da QAzando

Iniciando o projeto o nome dado a feature será "login" onde nesse caso, será criado 4 cenários de testes:

"login com sucesso"
"Tentando Logar digitando apenas o e-mail"
"Tentando logar sem digitar e-mail e senha"
"Tentando Logar digitando apenas a senha"

- para executar os testes basta digitar no terminal: npx codeceptjs run

- É importante observar que a medida que escrevemos os testes e preenchemos os campos (fillField) com as informações desejadas será preciso
  inspecionar o elemento do campo para copiar, de preferência, o ID (#ID) desse campo.

- Caso queira somente testar um cenário será necessario inserir uma "tag" ao final do cenário. ex: }).tag("sua teg"); e quando for executar é só digitar no terminal: codeceptjs run --grep "suatag"

- Uma informação muito válida é, acessando as configurações do projeto em codecept.conf.js na linha de código que se encontra a palavra "show" está como "true" (show: true,). Mudando para "false" não será exibido a tela abrindo navegador no momento do teste, isso faz com que diminua o uso de memória da máquina.
