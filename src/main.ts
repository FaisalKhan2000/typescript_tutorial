import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

// import "./07interfaceChallenge.ts";
// import "./08interfaceVsTypeAlias.ts";
// import "./09tuples.ts";
// import "./11enumChallenge.ts";
// import "./12typeAssertion.ts";
// import "./13typeUnknown.ts";
// import "./14typeNever.ts";
// import "./15modules.ts";
// import "./16typeGuarding.ts";
// import "./17generics.ts";
// import "./18fetchData.ts";
// import "./19fetchDataChallenge.ts";
import "./21class.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
