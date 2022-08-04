export interface MetersResponse {
  uid: string;
  HardId: string;
  ts: number;
  sys: string;
  prot: string;
  dev: string;
  ip: string;
  port: string;
  status: number;
  meter: Meters;
}

export interface Meters {
  den: number;
  asset: number;
  gameID: string;
  gameN: number;
  idxfrm: number;
  totfrm: number;
  cantcnt: number;
  nseq: number;
  meter: Array<Array<number | string>>;
}

export interface MetersCustom {
  cuim: string;
  coinIn: number;
  coinOut: number;
  jackpot: number;
  handPaid: number;
  cancelled: number;
  played: number;
  won: number;
  lost: number;
  lastUpdated: string;
}

export interface Config {
  config: ConfigResponse[];
  status: Array<number>;
}
export interface ConfigResponse {
  MachineID: number;
  UID: string;
  HardID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  LastUpdate: string;
  CONFIG: Configuration;
}

export interface Configuration {
  lastUpdated?: string;
  UID?: string;
  IDSala: string;
  FechaFabrica: number;
  Modelo: string;
  Fabricante: string;
  AuditoriaEnEfectivo: string;
  Lim_Ocurr: number;
  Lim_Cvos: number;
  Lim_Jkp: number;
  Lim_Cred: number;
  Lim_BillIn: number;
  Lim_Jue: number;
  Activa: string;
  Monitorear: string;
  game_id_maq: string;
  more_id_maq: string;
  maxbet_maq: string;
  prog_group_maq: string;
  option1_maq: string;
  option2_maq: string;
  paytable_maq: string;
  retencion_maq: string;
  denom_maq: string;
  tipo: string;
  arquitectura: string;
  MAC_Address_Fidelity: string;
  CUIM: string;
  fecha_alta: Date;
  ValoresVisibles: string[];
  CodMoneda: string;
  NroMaquinaOficial: string;
  IdGrupoMistery: string;
  Bloqueada: boolean;
  CAD: string;
  MID: string;
  image?: string;
}

export interface Games {
  GameID: string;
  AdditionalId: string;
  Denomination: string;
  MaxBet: string;
  ProgressiveGroup: string;
  GameOptions: string;
  PaytableId: string;
  BasePercentage: string;
}
