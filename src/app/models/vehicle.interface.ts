export interface Vehicle{
    id?:string;
    numPuertas: number;
    tipoCarroceria: String;
    modelo: String;
    direccion: String;
    trasmision: number;
    traccion: number;
    marca: String;
    year: number;
    combustible: number;
    categoria: String;
    gps?: boolean;
    asientotabatible?: boolean;
    techocorredizo?: boolean;
    climatizador?: boolean;
    portaequipajet?: boolean;
    camarareversa?: boolean;
    banca?: boolean;
    abs?: boolean;
    alarma?: boolean;
    exploradorasd?: boolean;
    airbag?: boolean;
    sensorlluvia?: boolean;
    exploradorast?: boolean;
    desempañadort?: boolean;
    barraantivuelco?: boolean;
    ctrestabilidad?: boolean;
    blindado?: boolean;
    aireacondicionado?: boolean;
    regalturavolante?: boolean;
    retrovisorelectrico?: boolean;
    luzregautomatica?: boolean;
    tapizadocuero?: boolean;
    tapizadosemicuero?: boolean;
    tapizadotela?: boolean;
    sensorparqueo?: boolean;
    vidrioselect?: boolean;
    baulremoto?: boolean;
    asientoelectricos?: boolean;
    puertascentralizado?: boolean;
    manuales?: boolean;
    cierrevidriosauto?: boolean;
    bluetooth?: boolean;
    dvd?: boolean;
    repmp3?: boolean;
    entradausb?: boolean;
    cubiertaplaton?: boolean;
    estribos?: boolean;
    exploradoras?: boolean;
    rineslujo?: boolean;
    spoiler?: boolean;
    garfabrica?: boolean;
    garmecanica?: boolean;
    negociable?: boolean;
    venpermuta?: boolean;
    domicilio?: boolean;
    testdrivD?: boolean;
    dochome?: boolean;
}