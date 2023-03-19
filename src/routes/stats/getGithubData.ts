import initialData from '../../data/statsData'
import type { JSONValue } from '../../scripts/JSONValue';

export async function loadJson(url: string) {
    const response = await fetch(url);

    if (response.status == 200) {
        const json = await response.json();
        return json;
    }

    throw new Error(response.status.toString());
}

export function readJsonData(data: JSONValue) {
    return initialData.map((ini) => ({
        ...ini,
        value: data[ini.key]
    }));
}




