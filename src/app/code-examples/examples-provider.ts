import hljs from 'highlight.js/lib/core';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

import { getComponentCode } from './component-code-example';
import { getStyleCode } from './styles-code-example';
import { getTemplateCode } from './template-code-example';

export type CodeExample = {
  source: string;
  cssClass: string;
  codeLanguage: string;
};

export function loadCodeLanguages(): void {
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('html', html);
  hljs.registerLanguage('scss', scss);
}

export function getCodeExamples(): CodeExample[] {
  return [
    {
      source: getComponentCode(),
      cssClass: 'language-typescrip',
      codeLanguage: 'TypeScript',
    },
    {
      source: getTemplateCode(),
      cssClass: 'language-html',
      codeLanguage: 'HTML',
    },
    { source: getStyleCode(), cssClass: 'language-scss', codeLanguage: 'SCSS' },
  ];
}
