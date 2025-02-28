import type { Options } from 'rehype-pretty-code';

// rehype-pretty-code에서 사용하는 노드 타입 정의
interface PrettyCodeNode {
  properties: {
    className?: string[];
    [key: string]: any;
  };
  children: Array<{ type: string; value?: string; [key: string]: any }>;
  [key: string]: any;
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine(node) {
    // 타입 단언을 사용하여 노드 처리
    const codeNode = node as PrettyCodeNode;
    // 빈 줄 처리
    if (codeNode.children.length === 0) {
      codeNode.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // 타입 단언을 사용하여 노드 처리
    const codeNode = node as PrettyCodeNode;
    // 하이라이트된 라인 스타일링
    codeNode.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    // 타입 단언을 사용하여 노드 처리
    const codeNode = node as PrettyCodeNode;
    // 하이라이트된 문자 스타일링
    codeNode.properties.className = ['word--highlighted'];
  },
};
