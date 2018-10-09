const enUS = require('date-fns/locale/en-US');
const ptBR = require('date-fns/locale/pt-BR');
const zhCN = require('date-fns/locale/zh-CN');

export default function getLocale(locale) {
  switch (locale) {
    case 'en-US':
      return enUS;
    case 'pt-BR':
      return ptBR;
    case 'zh-CN':
      return zhCN;
    default:
      return enUS;
  }
}
