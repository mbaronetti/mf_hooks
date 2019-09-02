//helpers
import { debounce } from "lodash";

export const useScrollTop = debounce(() => {
  const min = 400;
  const max = 800;
  const winscroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (winscroll > min)
    document.getElementById("headerMenu").classList.add("menu__hidden");
  if (winscroll > max)
    document.getElementById("header").classList.add("header__hidden");
  if (winscroll < min)
    document.getElementById("headerMenu").classList.remove("menu__hidden");
  if (winscroll < max)
    document.getElementById("header").classList.remove("header__hidden");
}, 250);
