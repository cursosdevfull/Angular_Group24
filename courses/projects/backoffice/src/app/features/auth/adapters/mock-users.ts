// Payload fields inside accessToken: email, name, avatarUrl, roles
// Signed with HS256 · secret: 7t0S1R2hpWWGu6wt9nMkGm1OCnRz
export type User = {
  email: string;
  password: string;
  accessToken: string; // JWT HS256
  refreshToken: string; // UUID v4
};

export const MOCK_USERS: User[] = [
  {
    email: 'alice@example.com',
    password: 'secret01',
    // payload → { email, name: 'Alice Anderson', avatarUrl: 'https://i.pravatar.cc/150?img=1', roles: ['admin'] }
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlQGV4YW1wbGUuY29tIiwibmFtZSI6IkFsaWNlIEFuZGVyc29uIiwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzE1MD9pbWc9MSIsInJvbGVzIjpbImFkbWluIl19.LI3ae8h8FLpDNzyZHkshpOBhrEx9v9WqkYNW7PqIlIk',
    refreshToken: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  },
  {
    email: 'bob@example.com',
    password: 'password',
    // payload → { email, name: 'Bob Brown', avatarUrl: 'https://i.pravatar.cc/150?img=2', roles: ['operator'] }
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsIm5hbWUiOiJCb2IgQnJvd24iLCJhdmF0YXJVcmwiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz0yIiwicm9sZXMiOlsib3BlcmF0b3IiXX0.EpNifBrviwhLhKpgVqAjLiw53gsfE_kDbnyofWW9YQU',
    refreshToken: '6b1d3f3e-8c2a-4c3e-9b4a-1e2f3a4b5c6d',
  },
  {
    email: 'carol@example.com',
    password: 'abc12345',
    // payload → { email, name: 'Carol Clark', avatarUrl: 'https://i.pravatar.cc/150?img=3', roles: ['operator'] }
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGV4YW1wbGUuY29tIiwibmFtZSI6IkNhcm9sIENsYXJrIiwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzE1MD9pbWc9MyIsInJvbGVzIjpbIm9wZXJhdG9yIl19.5BMuPP9Tc3OdoEdJth4TbbbV5bDridKs5rSL_EtT8Os',
    refreshToken: '9f8e7d6c-5b4a-3c2d-1e0f-9a8b7c6d5e4f',
  },
];
