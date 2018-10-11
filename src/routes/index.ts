import defaultRoutes from './defaultRoutes'
import oauthRoutes from './oauthRoutes'

export default new Map<string, Function>([
  ['/', defaultRoutes],
  ['/oauth', oauthRoutes]
])