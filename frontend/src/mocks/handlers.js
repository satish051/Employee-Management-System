import { http,HttpResponse } from 'msw';
import admin from './admin.json';

export const handlers = [
  http.get('http://localhost:5173/api/admins', () => {
    return HttpResponse.json(admin);
  }),

  // rest.post('https://api.example.com/login', (req, res, ctx) => {
  //   const { username, password } = req.body;

  //   if (username === 'admin' && password === 'password') {
  //     return res(
  //       ctx.status(200),
  //       ctx.json({ token: 'fake-jwt-token' })
  //     );
  //   }

  //   return res(
  //     ctx.status(401),
  //     ctx.json({ message: 'Invalid credentials' })
  //   );
  // }),
];