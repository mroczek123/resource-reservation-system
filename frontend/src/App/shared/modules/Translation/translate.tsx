import { Store } from "../Store/Store";
import * as PL from "@src/App/shared/modules/Translation/translation_files/PL.json"

export function translate(value: string): string {
  const LangCodeToJsonMap: Record<string, any> = {
    PL
  }
  const lang = Store.getState().settings.language;
  return LangCodeToJsonMap[lang][value] || value;
}
