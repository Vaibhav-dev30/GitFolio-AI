import { TopNav } from '../components/TopNav.js';

export function Dashboard() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative overflow-hidden">
      
      <!-- TopAppBar -->
      <header class="w-full sticky top-0 z-40 glass-panel flex justify-between items-center px-lg h-16 border-b border-outline-variant/30 animate-entrance">
          <div class="flex items-center gap-md text-primary font-bold min-w-max">
              <img src="/logo.png" alt="DevPortfolio Logo" class="w-8 h-8 rounded-md shadow-sm" />
              <span class="font-headline-md text-headline-md text-primary">DevPortfolio</span>
          </div>
          
          <div class="flex-1 flex justify-center">
              ${TopNav()}
          </div>
          
          <div class="flex items-center gap-md min-w-max">
              <img class="w-9 h-9 rounded-full border border-outline-variant shadow-sm object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4y-TYaVN2fTpT0OUJCZ6ehy2UryKd6xIOo_fQM7e6cGIRUXcmJcxoL_gQghyQ_f4nPjdCd0EMrcN-w_HLMQuT1l27ky7nTfLRiUEaiRwpRkbvoP2C16UywTD5Y0vrui1U2ok3iYASJusY6xqR8EIO2kr1jOSTXyifJx8ifQlgVe11eKhsi8HelHdoyX_ge2UoHqgIc_y55xKFLbwHIRmHVa45a3IVjdK4HXVs9OBnv-saSmOdKXWkMGVctd-dExn1dpZn8QRfYqs"/>
          </div>
      </header>
      
      <div class="p-lg lg:p-xl flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full relative z-10">
          <!-- Hero Stats Bento -->
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md relative z-10">
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-100">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Projects</span>
                      <span class="material-symbols-outlined text-primary">folder</span>
                  </div>
                  <div class="font-display-lg text-display-lg text-on-surface counter" data-target="12">0</div>
                  <div class="mt-sm font-label-md text-label-md text-primary flex items-center gap-xs">
                      <span class="material-symbols-outlined text-[16px]">trending_up</span> +2 this month
                  </div>
              </div>
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-200">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Skills Count</span>
                      <span class="material-symbols-outlined text-secondary">bolt</span>
                  </div>
                  <div class="font-display-lg text-display-lg text-on-surface counter" data-target="24">0</div>
                  <div class="mt-sm font-label-md text-label-md text-outline">Verified technologies</div>
              </div>
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-300">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Repositories</span>
                      <span class="material-symbols-outlined text-tertiary">code</span>
                  </div>
                  <div class="font-display-lg text-display-lg text-on-surface counter" data-target="45">0</div>
                  <div class="mt-sm font-label-md text-label-md text-tertiary flex items-center gap-xs">
                      <span class="material-symbols-outlined text-[16px]">sync</span> Synced just now
                  </div>
              </div>
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-400">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Completion</span>
                      <span class="material-symbols-outlined text-primary">star</span>
                  </div>
                  <div class="font-display-lg text-display-lg text-on-surface"><span class="counter" data-target="85">0</span>%</div>
                  <div class="w-full bg-surface-variant/50 h-1.5 rounded-full mt-sm overflow-hidden">
                      <div class="bg-primary h-full rounded-full w-[85%]"></div>
                  </div>
              </div>
          </section>
          
          <!-- Main Content Grid -->
          <section class="grid grid-cols-1 lg:grid-cols-3 gap-md h-full relative z-10">
              <!-- Left Column: Activity & Focus -->
              <div class="lg:col-span-2 flex flex-col gap-md">
                  <div class="glass-panel interactive-glow rounded-xl p-lg flex-1 animate-entrance delay-200">
                      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Recent Activity</h3>
                      <div class="space-y-md relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant/50">
                          <div class="relative pl-xl">
                              <div class="absolute left-0 top-1 w-[24px] h-[24px] rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                              </div>
                              <div class="font-body-md text-body-md text-on-surface">Pushed 3 commits to <span class="text-primary font-mono text-code-sm bg-primary/10 px-xs rounded">core-engine-v2</span></div>
                              <div class="font-label-md text-label-md text-outline mt-xs">2 hours ago • Added structural typing</div>
                          </div>
                          <div class="relative pl-xl">
                              <div class="absolute left-0 top-1 w-[24px] h-[24px] rounded-full bg-surface border-2 border-secondary flex items-center justify-center">
                                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                              </div>
                              <div class="font-body-md text-body-md text-on-surface">Deployed to production</div>
                              <div class="font-label-md text-label-md text-outline mt-xs">5 hours ago • Vercel deployment successful</div>
                          </div>
                          <div class="relative pl-xl">
                              <div class="absolute left-0 top-1 w-[24px] h-[24px] rounded-full bg-surface border-2 border-tertiary flex items-center justify-center">
                                  <div class="w-2 h-2 bg-tertiary rounded-full"></div>
                              </div>
                              <div class="font-body-md text-body-md text-on-surface">Merged PR <span class="text-tertiary font-mono text-code-sm bg-tertiary/10 px-xs rounded">#142</span></div>
                              <div class="font-label-md text-label-md text-outline mt-xs">Yesterday • Fix auth token refresh bug</div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <!-- Right Column: Skills & Progress -->
              <div class="flex flex-col gap-md">
                  <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-300">
                      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Tech Focus</h3>
                      <div class="space-y-sm">
                          <div>
                              <div class="flex justify-between font-label-md text-label-md mb-xs">
                                  <span class="text-on-surface">Frontend (React/Vue)</span>
                                  <span class="text-primary">45%</span>
                              </div>
                              <div class="w-full bg-surface-variant/50 h-2 rounded-full overflow-hidden">
                                  <div class="bg-primary h-full rounded-full" style="width: 45%"></div>
                              </div>
                          </div>
                          <div>
                              <div class="flex justify-between font-label-md text-label-md mb-xs">
                                  <span class="text-on-surface">Backend (Node/Go)</span>
                                  <span class="text-secondary">35%</span>
                              </div>
                              <div class="w-full bg-surface-variant/50 h-2 rounded-full overflow-hidden">
                                  <div class="bg-secondary h-full rounded-full" style="width: 35%"></div>
                              </div>
                          </div>
                          <div>
                              <div class="flex justify-between font-label-md text-label-md mb-xs">
                                  <span class="text-on-surface">DevOps &amp; Cloud</span>
                                  <span class="text-tertiary">20%</span>
                              </div>
                              <div class="w-full bg-surface-variant/50 h-2 rounded-full overflow-hidden">
                                  <div class="bg-tertiary h-full rounded-full" style="width: 20%"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="glass-panel interactive-glow rounded-xl p-lg flex-1 flex flex-col items-center justify-center animate-entrance delay-400 text-center">
                      <div class="relative w-32 h-32 mb-md">
                          <svg class="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
                              <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(217, 119, 6, 0.2)" stroke-width="8"></circle>
                              <circle class="transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="45" stroke="#d97706" stroke-dasharray="282.7" stroke-dashoffset="42.4" stroke-width="8"></circle>
                          </svg>
                          <div class="absolute inset-0 flex items-center justify-center flex-col">
                              <span class="font-display-lg text-display-lg text-on-surface text-[24px] leading-none">85%</span>
                          </div>
                      </div>
                      <h4 class="font-body-lg text-body-lg text-on-surface font-semibold mb-xs">Next Steps</h4>
                      <p class="font-body-md text-body-md text-outline mb-md">Add a professional bio to reach 100% completion.</p>
                      <button class="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-all w-full shadow-md hover:shadow-lg">Edit Profile</button>
                  </div>
              </div>
          </section>
      </div>
    </div>
  `;
}
