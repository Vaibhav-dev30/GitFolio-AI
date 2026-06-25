import { TopNav } from '../components/TopNav.js';

export function Settings() {
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
      </header>

      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full">
        <div class="glass-panel border border-outline-variant/50 animate-entrance delay-100 p-8 rounded-xl max-w-3xl mx-auto w-full">
            <h3 class="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant/50 pb-2">General Settings</h3>
            
            <div class="flex flex-col gap-6">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-label-md text-label-md text-on-surface font-bold">Theme Preference</div>
                        <div class="font-body-md text-[13px] text-on-surface-variant mt-1">Choose how DevPortfolio AI looks to you</div>
                    </div>
                    <select class="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-2 font-body-md text-sm focus:outline-none focus:border-primary">
                        <option>System Default</option>
                        <option selected>Aurelian Edition v2 (Light)</option>
                    </select>
                </div>

                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-label-md text-label-md text-on-surface font-bold">AI Sync Frequency</div>
                        <div class="font-body-md text-[13px] text-on-surface-variant mt-1">How often should we pull from GitHub</div>
                    </div>
                    <select class="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-2 font-body-md text-sm focus:outline-none focus:border-primary">
                        <option>Manual Only</option>
                        <option selected>Daily</option>
                        <option>Weekly</option>
                    </select>
                </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-outline-variant/50">
                <button class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-6 py-2 rounded-lg transition-colors shadow-sm">
                    Save Changes
                </button>
            </div>
        </div>
      </div>
    </div>
  `;
}
