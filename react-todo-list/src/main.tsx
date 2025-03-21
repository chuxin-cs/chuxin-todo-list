import { createRoot } from 'react-dom/client'
import App from './App.tsx'

function bootstrap() {
  // 渲染 App 组件
  const app = createRoot(document.getElementById('root')!);
  app.render(<App />)
}

bootstrap();
