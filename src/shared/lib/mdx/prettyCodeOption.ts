import type { Options } from 'rehype-pretty-code';

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node) {
    const codeNode = node as unknown as {
      properties: { className?: string[] };
      children: Array<{ type: string; value?: string }>;
    };
    if (codeNode.children.length === 0) {
      codeNode.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    const codeNode = node as unknown as {
      properties: { className?: string[] };
    };
    codeNode.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    const codeNode = node as unknown as {
      properties: { className?: string[] };
    };
    codeNode.properties.className = ['word--highlighted'];
  },
};
