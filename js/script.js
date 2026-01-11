// Импорт и инициализация header.js компонента
import { initHeader } from "./сomponents/header.js"; 

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
}
);

// <---------------------------------------------
// Импорт и инициализация main.js компонента
import { initMain} from "./сomponents/.main.js"; 

document.addEventListener("DOMContentLoaded", () => { 
  initMain();
}
);

// <-------------------------------------------------
// Импорт и инициализация footer.js компонента
import { initFooter } from "./сomponents/footer .js"; 

document.addEventListener("DOMContentLoaded", () => {
  initFooter();
}
);