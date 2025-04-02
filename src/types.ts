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
