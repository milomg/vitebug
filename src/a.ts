import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";

window.tmp = {
  css: new cssWorker(),
  ts: new tsWorker(),
  editor: new editorWorker(),
};
