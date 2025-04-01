export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  role: string;
  status: string;
};
