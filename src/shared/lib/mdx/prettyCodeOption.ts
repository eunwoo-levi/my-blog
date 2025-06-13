import type { Options } from 'rehype-pretty-code';

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node) {
    // 타입 단언을 unknown을 거쳐서 처리
    const codeNode = node as unknown as {
      properties: { className?: string[] };
      children: Array<{ type: string; value?: string }>;
    };
    // 빈 줄 처리
    if (codeNode.children.length === 0) {
      codeNode.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // 타입 단언을 unknown을 거쳐서 처리
    const codeNode = node as unknown as {
      properties: { className?: string[] };
    };
    // 하이라이트된 라인 스타일링
    codeNode.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    // 타입 단언을 unknown을 거쳐서 처리
    const codeNode = node as unknown as {
      properties: { className?: string[] };
    };
    // 하이라이트된 문자 스타일링
    codeNode.properties.className = ['word--highlighted'];
  },
};
