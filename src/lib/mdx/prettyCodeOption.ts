import type { Options } from 'rehype-pretty-code';
import type { Element } from 'hast';

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node: Element) {
    // 빈 줄 처리
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // 하이라이트된 라인 스타일링
    node.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    // 하이라이트된 문자 스타일링
    node.properties.className = ['word--highlighted'];
  },
};
