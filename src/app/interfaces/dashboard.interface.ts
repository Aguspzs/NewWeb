export interface MachinesNotConfig {
  hardId: number;
  lastInfo: string;
}

export interface MachinesErrorConfig {
  CUIM: string;
  Errors: number;
  Stamp: Stamp;
}
export interface DashboardOccupation {
  TotalMachines: number;
  TotalMachinesOccupation: number;
  TotalMachinesOccupationPercentage: number;
  Stamp: Stamp;
}

export interface DashboardState {
  TotalMachines: number;
  TotalMachinesOnline: number;
  TotalMachinesOnlinePercentage: number;
  Stamp: Stamp;
}

export interface DashboardResources {
  TotalMemory: number;
  AvailableMemory: number;
  AvailableMemoryPercentage: number;
  Disk: number;
  FreeSpace: number;
  FreeSpacePercentage: number;
  CPU: number;
  Stamp: Stamp;
}

export interface Stamp {
  Timestamp: number;
  Date: string;
  GMT: number;
}

export interface DashboardStacker {
  CUIM: string;
  MaxBills: number;
  TotalBillsCurrently: string;
  BillsPercentage: number;
  Stamp: Stamp;
}

export interface DashboardOffline {
  UID: string;
  Stamp: Stamp;
  Status?: number;
}

export interface DashboardMachines {
  TotalMachines: number;
  TotalMachinesErrors: number;
  TotalMachinesErrorsPercentage: number;
  Stamp: Stamp;
}
