import { TopNav } from '../components/TopNav.js';

export function PortfolioPreview() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative z-10">
      
      <!-- TopAppBar with Shader Background -->
      <header class="relative flex justify-between items-center px-lg h-24 w-full sticky top-0 z-40 overflow-hidden bg-background/60 backdrop-blur-md border-b border-outline-variant/30">
          <div class="absolute inset-0 z-[-1] opacity-70" id="shader-container"></div>
          <div class="flex items-center gap-md relative z-10 min-w-max">
              <img src="/logo.png" alt="DevPortfolio Logo" class="w-8 h-8 rounded-md shadow-sm" />
              <span class="font-headline-md text-headline-md text-primary">DevPortfolio</span>
          </div>
          
          <div class="flex-1 flex justify-center relative z-10">
              ${TopNav()}
          </div>
          
          <div class="flex items-center gap-md relative z-10 min-w-max">
              <button class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 pulse-amber">
                 <span class="material-symbols-outlined text-[18px]">rocket_launch</span> Deploy
              </button>
          </div>
      </header>

      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full h-full">
        <div class="glass-panel border border-outline-variant/50 animate-entrance delay-100 flex-1 flex flex-col overflow-hidden rounded-xl h-[calc(100vh-12rem)]">
            <div class="bg-surface-container-lowest border-b border-outline-variant/50 px-4 py-2 flex items-center gap-2">
                <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#10b981]"></div>
                </div>
                <div class="flex-1 text-center font-code-sm text-[12px] text-outline-variant">
                    alexrivera.devportfolio.ai
                </div>
            </div>
            <div class="flex-1 bg-surface/50 flex justify-center items-center p-8 text-center">
                <div>
                    <span class="material-symbols-outlined text-primary text-[64px] mb-4 block animate-pulse">magic_button</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Your generated portfolio preview will appear here</h3>
                    <p class="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">Connect your GitHub and select your skills to generate your custom portfolio. Live preview functionality is currently mocked for this UI phase.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  `;
}
