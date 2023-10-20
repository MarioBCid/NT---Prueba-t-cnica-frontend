export interface DigimonAttribute {
    id: number;
    name: string;
    href: string;
}

export interface DigimonLevel {
    id: number;
    name: string;
    href: string;
}

export interface Digimon {
    id: number;
    name: string;
    href: string;
    image: string;
}

export interface searchProps {
    digimonName: string;
    attribute?: string;
    level?: string;
    page?: number;
    elements?: number;
}

export interface Pageable {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string | null;
    nextPage: string | null;
}

export interface Digimon {
    id: number;
    name: string;
    href: string;
    image: string;
}

export interface DigimonResponse {
    content: Digimon[];
    pageable: Pageable;
}

export interface Image {
    href: string;
    transparent: boolean;
}

export interface Level {
    id: number;
    level: string;
}

export interface Type {
    id: number;
    type: string;
}

export interface Attribute {
    id: number;
    attribute: string;
}

export interface Field {
    id: number;
    field: string;
    image: string;
}

export interface Description {
    origin: string;
    language: string;
    description: string;
}

export interface Skill {
    id: number;
    skill: string;
    translation: string;
    description: string;
}

export interface Evolution {
    id: number;
    digimon: string;
    condition: string;
    image: string;
    url: string;
}

export interface DetailedDigimon {
    id: number;
    name: string;
    xAntibody: boolean;
    images: Image[];
    levels: Level[];
    types: Type[];
    attributes: Attribute[];
    fields: Field[];
    releaseDate: string;
    descriptions: Description[];
    skills: Skill[];
    priorEvolutions: Evolution[];
    nextEvolutions: Evolution[];
}

export interface Field {
    id: number;
    name: string;
    href: string;
}

export interface FieldContent {
    name: string;
    description: string;
    fields: Field[];
}

export interface FieldPageable {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string | null;
    nextPage: string | null;
}

export interface FieldResponse {
    content: FieldContent;
    pageable: FieldPageable;
}


export interface SingleField {
    id: number;
    name: string;
    description: string;
    href: string;
}

export interface SearchParams {
    freeText: string;
    selectedOption1: string;
    selectedOption2: string;
    selectedOption3: number;
    page: number;
};

export interface stateRoute {
    searchParams: SearchParams;
    scrollPosition: number;
}