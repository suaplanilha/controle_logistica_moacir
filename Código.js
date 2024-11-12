/** 
 * Função que lida com requisições GET e retorna o index.html
 */
function doGet(e) {

   // Obter a URL do serviço do WebApp
  var url = ScriptApp.getService().getUrl();

  // Adiciona os parâmetros de largura e altura desejados
  url += "?width=100%&height=100%";
  
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Controle de Alunos')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

/**
 * Função para incluir outros arquivos HTML no index.html
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


