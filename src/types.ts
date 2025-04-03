export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
};

export type User = {
  id: string;
  name: string;
  email: string;
  gender: string;
  role: string;
  status: string;
};

export type OsChartData = {
  name: string;
  count: number;
  devices: {
    model: string;
    vendor: string;
    osVersion: string;
  }[];
};
