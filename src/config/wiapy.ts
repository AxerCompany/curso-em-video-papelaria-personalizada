/**
 * Configuração oficial do One-Click Upsell da Wiapy.
 * Caso você gere seu link definitivo com o código do checkout (ex: https://pay.wiapy.com/checkout/SEU_ID),
 * basta atualizar a propriedade linkUrl abaixo.
 */
export const wiapyConfig = {
  linkUrl: 'https://pay.wiapy.com/checkout/undefined',
  linkText: 'SIM, EU ACEITO ESSA OFERTA',
  styles: {
    backgroundColor: '#00d769',
    hoverBackgroundColor: '#00b85a',
    fontSize: '17px',
    borderRadius: '10px',
  },
  refusalLinkUrl: 'https://wiapy.com/login',
  refusalLinkText: 'Recusar está oferta',
  refusalLinkColor: '#000000',
};
