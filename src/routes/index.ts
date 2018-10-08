import defaultRoutes from './defaultRoutes';
import studentRoutes from './studentRoutes';

export default new Map<string, Function>([
  ['/', defaultRoutes],
  ['/student', studentRoutes]
]);