import singleSpaHtml from "single-spa-html";
import template from "./template.html";
import "./styles.css";

const htmlLifecycles = singleSpaHtml({
  template,
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = (props) => htmlLifecycles.mount(props)
  .then(() => { /* Further enhance this application by using JavaScript here */ });
export const unmount = htmlLifecycles.unmount;
