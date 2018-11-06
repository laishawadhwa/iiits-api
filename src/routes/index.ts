import defaultRoutes from './defaultRoutes'
import oauthRoutes from './oauthRoutes'
import courseRoutes from './courseRoutes'

export default new Map<string, Function>([
  ['/', defaultRoutes],
  ['/oauth', oauthRoutes],
  ['/course', courseRoutes]
])
