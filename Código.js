/** 
 * Função que lida com requisições GET e retorna o index.html
 */
function doGet(e) {
    return HtmlService.createTemplateFromFile('index').evaluate()
        .setTitle('Controle de Alunos');
        // Removido: .setSandboxMode(HtmlService.SandboxMode.IFRAME); // Método depreciado
}

/**
 * Função para incluir outros arquivos HTML
 */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Função para salvar os dados do formulário na planilha
 * @param {Object} formData - Dados do formulário
 */
function salvarDados(formData) {
    try {
        var sheetId = '1ovkvcXeI--zkSOqfxLRFBmiAcRxwCoo-7EMKDX89Q88';
        var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('tabela_cadastro');
        sheet.appendRow([
            formData.DATA,
            formData.TU_AGENDAMENTO,
            formData.VALOR,
            formData.BOL,
            formData.DT,
            formData.DT_VENDAS,
            formData.CANCELADA,
            formData.MOPP,
            formData.DIV,
            formData.TIPO,
            formData.OPERACAO,
            formData.CODIGO,
            formData.ORIGEM,
            formData.DESTINO,
            formData.CID_DESTINO,
            formData.CAVALO,
            formData.CARRETA,
            formData.MOTORISTA,
            formData.AT,
            formData.OC,
            formData.SM,
            formData.AGENDA,
            formData.SAIDA,
            formData.PROXIMA_CARGA,
            formData.SENHA,
            formData.ESTADIAS
        ]);
    } catch (error) {
        throw new Error('Falha ao salvar os dados: ' + error.message);
    }
}

/**
 * Formata uma data para o formato dd-mm-yyyy
 * @param {Date|string} value - Valor da data
 * @return {string|*} - Data formatada ou valor original
 */
function formatDate(value) {
    if (value instanceof Date) {
        var day = value.getDate();
        var month = value.getMonth() + 1; // Meses são 0-based
        var year = value.getFullYear();
        return (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + year;
    } else if (typeof value === 'string') {
        var date = new Date(value);
        if (!isNaN(date)) {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + year;
        } else {
            return value;
        }
    } else {
        return value;
    }
}

/**
 * Função para obter os dados da planilha
 * @return {Array} - Dados da planilha
 */
function obterDados() {
    try {
        var sheetId = '1ovkvcXeI--zkSOqfxLRFBmiAcRxwCoo-7EMKDX89Q88';
        var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('tabela_cadastro');
        Logger.log('Planilha aberta com sucesso.');

        var data = sheet.getDataRange().getValues();
        Logger.log('Dados obtidos da planilha: ' + JSON.stringify(data));

        data.shift(); // Remove o cabeçalho
        Logger.log('Dados após remover o cabeçalho: ' + JSON.stringify(data));

        // Definir os índices das colunas de data (0, 4, 5, 21, 22)
        var dateColumns = [0, 4, 5, 21, 22];

        // Formatar as colunas de data
        data = data.map(function(row) {
            dateColumns.forEach(function(col) {
                if (row[col]) {
                    row[col] = formatDate(row[col]);
                }
            });
            return row;
        });

        Logger.log('Dados após formatação de datas: ' + JSON.stringify(data));

        return data;
    } catch (error) {
        Logger.log('Erro na função obterDados: ' + error.message);
        throw new Error('Falha ao obter os dados: ' + error.message);
    }
}

// Implementar tratamento de erros para as demais funções
function editarDados(formData) {
    try {
        // ...código para editar dados na planilha...
    } catch (error) {
        throw new Error('Falha ao editar os dados: ' + error.message);
    }
}

function excluirDados(id) {
    try {
        // ...código para excluir dados na planilha...
    } catch (error) {
        throw new Error('Falha ao excluir os dados: ' + error.message);
    }
}

function pesquisarDados(criterios) {
    try {
        // ...código para pesquisar dados na planilha...
    } catch (error) {
        throw new Error('Falha ao pesquisar os dados: ' + error.message);
    }
}


