import { ReactNode, memo } from "react";
import ReactMarkdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Praise as SyntaxHighlighter } from "react-syntax-highlighter";

function Markdown({ children, className = "", ...props }: Options) {
  return <ReactMarkdown components={{}}>{children}</ReactMarkdown>;
}

export default memo(Markdown); // 缓存组件
