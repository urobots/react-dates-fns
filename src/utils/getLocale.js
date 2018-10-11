import enUS from 'date-fns/locale/en-US';
import ptBR from 'date-fns/locale/pt-BR';
import zhCN from 'date-fns/locale/zh-CN';

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
