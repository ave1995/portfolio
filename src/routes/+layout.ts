export const prerender = true;
import { getLocaleFromNavigator, init, addMessages } from "svelte-i18n";

import en from "../localization/en.json";

addMessages("en", en);

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
