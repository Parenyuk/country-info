type CountryType = {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: IDD;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: Record<string, unknown>; // Assuming coatOfArms is an empty object
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}

type Name = {
    common: string;
    official: string;
    nativeName: NativeName;
}

type NativeName = {
    fra: {
        official: string;
        common: string;
    };
}

type Currencies = {
    XPF: CurrencyDetails;
}

type CurrencyDetails = {
    name: string;
    symbol: string;
}

type IDD = {
    root: string;
    suffixes: string[];
}

type Languages = {
    fra: string;
}

type Translations = {
    ara: Translation;
    bre: Translation;
    ces: Translation;
    cym: Translation;
    deu: Translation;
    est: Translation;
    fin: Translation;
    fra: Translation;
    hrv: Translation;
    hun: Translation;
    ita: Translation;
    jpn: Translation;
    kor: Translation;
    nld: Translation;
    per: Translation;
    pol: Translation;
    por: Translation;
    rus: Translation;
    slk: Translation;
    spa: Translation;
    srp: Translation;
    swe: Translation;
    tur: Translation;
    urd: Translation;
    zho: Translation;
}

type Translation = {
    official: string;
    common: string;
}

type Demonyms = {
    eng: Demonym;
}

type Demonym = {
    f: string;
    m: string;
}

type Maps = {
    googleMaps: string;
    openStreetMaps: string;
}

type Car = {
    signs: string[];
    side: string;
}

type Flags = {
    png: string;
    svg: string;
}

type CapitalInfo = {
    latlng: number[];
}

type PostalCode = {
    format: string;
    regex: string;
}
