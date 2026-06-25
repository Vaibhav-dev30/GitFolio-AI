import { TopNav } from '../components/TopNav.js';

export function Skills() {
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
              <div class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4y-TYaVN2fTpT0OUJCZ6ehy2UryKd6xIOo_fQM7e6cGIRUXcmJcxoL_gQghyQ_f4nPjdCd0EMrcN-w_HLMQuT1l27ky7nTfLRiUEaiRwpRkbvoP2C16UywTD5Y0vrui1U2ok3iYASJusY6xqR8EIO2kr1jOSTXyifJx8ifQlgVe11eKhsi8HelHdoyX_ge2UoHqgIc_y55xKFLbwHIRmHVa45a3IVjdK4HXVs9OBnv-saSmOdKXWkMGVctd-dExn1dpZn8QRfYqs" class="w-full h-full object-cover"/>
              </div>
          </div>
      </header>
      
      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full">
          <!-- Header Section -->
          <div class="animate-entrance">
              <h2 class="font-display-lg text-display-lg text-on-surface mb-xs">Technical Arsenal</h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A comprehensive breakdown of proficiencies across the stack. Mastery levels represent practical application experience in production environments.</p>
          </div>
          
          <!-- Category Filters -->
          <div class="flex flex-wrap gap-sm animate-entrance delay-100">
              <button class="px-md py-sm rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md border border-primary-container transition-colors">All Skills</button>
              <button class="px-md py-sm rounded-full bg-surface-container/50 text-on-surface-variant border border-outline-variant hover:bg-surface-variant transition-colors font-label-md text-label-md backdrop-blur-sm">Frontend</button>
              <button class="px-md py-sm rounded-full bg-surface-container/50 text-on-surface-variant border border-outline-variant hover:bg-surface-variant transition-colors font-label-md text-label-md backdrop-blur-sm">Backend</button>
              <button class="px-md py-sm rounded-full bg-surface-container/50 text-on-surface-variant border border-outline-variant hover:bg-surface-variant transition-colors font-label-md text-label-md backdrop-blur-sm">Database</button>
              <button class="px-md py-sm rounded-full bg-surface-container/50 text-on-surface-variant border border-outline-variant hover:bg-surface-variant transition-colors font-label-md text-label-md backdrop-blur-sm">DevOps</button>
              <button class="px-md py-sm rounded-full bg-surface-container/50 text-on-surface-variant border border-outline-variant hover:bg-surface-variant transition-colors font-label-md text-label-md backdrop-blur-sm">AI/ML</button>
          </div>
          
          <!-- Bento Grid layout for Skills -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
              <!-- Frontend Card -->
              <section class="glass-panel border border-outline-variant/50 rounded-xl p-lg relative overflow-hidden group shadow-sm animate-entrance delay-200">
                  <div class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div class="flex items-center gap-sm mb-lg">
                      <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 0;">web</span>
                      <h3 class="font-headline-md text-headline-md text-on-surface">Frontend</h3>
                  </div>
                  <div class="space-y-md">
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">code_blocks</span>
                                  <span class="font-label-md text-label-md text-on-surface">React</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">95%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill" data-width="95%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">polyline</span>
                                  <span class="font-label-md text-label-md text-on-surface">Vue.js</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">80%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-80" data-width="80%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">format_paint</span>
                                  <span class="font-label-md text-label-md text-on-surface">Tailwind CSS</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">90%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-90" data-width="90%"></div>
                          </div>
                      </div>
                  </div>
              </section>
              
              <!-- Backend Card -->
              <section class="glass-panel border border-outline-variant/50 rounded-xl p-lg relative overflow-hidden group shadow-sm animate-entrance delay-300">
                  <div class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div class="flex items-center gap-sm mb-lg">
                      <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 0;">dns</span>
                      <h3 class="font-headline-md text-headline-md text-on-surface">Backend</h3>
                  </div>
                  <div class="space-y-md">
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">hub</span>
                                  <span class="font-label-md text-label-md text-on-surface">Node.js</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">85%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill" data-width="85%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">speed</span>
                                  <span class="font-label-md text-label-md text-on-surface">Go</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">70%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-80" data-width="70%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">terminal</span>
                                  <span class="font-label-md text-label-md text-on-surface">Python</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">90%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-90" data-width="90%"></div>
                          </div>
                      </div>
                  </div>
              </section>
              
              <!-- Database Card -->
              <section class="glass-panel border border-outline-variant/50 rounded-xl p-lg relative overflow-hidden group shadow-sm animate-entrance delay-400">
                  <div class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div class="flex items-center gap-sm mb-lg">
                      <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 0;">database</span>
                      <h3 class="font-headline-md text-headline-md text-on-surface">Database</h3>
                  </div>
                  <div class="space-y-md">
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">table</span>
                                  <span class="font-label-md text-label-md text-on-surface">PostgreSQL</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">88%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill" data-width="88%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">memory</span>
                                  <span class="font-label-md text-label-md text-on-surface">Redis</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">75%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-80" data-width="75%"></div>
                          </div>
                      </div>
                  </div>
              </section>
              
              <!-- DevOps Card -->
              <section class="glass-panel border border-outline-variant/50 rounded-xl p-lg relative overflow-hidden group shadow-sm animate-entrance delay-400">
                  <div class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div class="flex items-center gap-sm mb-lg">
                      <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 0;">cloud</span>
                      <h3 class="font-headline-md text-headline-md text-on-surface">DevOps</h3>
                  </div>
                  <div class="space-y-md">
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">view_in_ar</span>
                                  <span class="font-label-md text-label-md text-on-surface">Docker</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">85%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill" data-width="85%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">cloud_done</span>
                                  <span class="font-label-md text-label-md text-on-surface">AWS</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">70%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-80" data-width="70%"></div>
                          </div>
                      </div>
                  </div>
              </section>
              
              <!-- AI/ML Card -->
              <section class="glass-panel border border-outline-variant/50 rounded-xl p-lg relative overflow-hidden group md:col-span-2 xl:col-span-2 shadow-sm animate-entrance delay-400">
                  <div class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div class="flex items-center gap-sm mb-lg">
                      <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 0;">model_training</span>
                      <h3 class="font-headline-md text-headline-md text-on-surface">AI &amp; Machine Learning</h3>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">schema</span>
                                  <span class="font-label-md text-label-md text-on-surface">PyTorch</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">65%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill" data-width="65%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">smart_toy</span>
                                  <span class="font-label-md text-label-md text-on-surface">OpenAI API</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">92%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-90" data-width="92%"></div>
                          </div>
                      </div>
                      <div>
                          <div class="flex justify-between items-center mb-xs">
                              <div class="flex items-center gap-xs">
                                  <span class="material-symbols-outlined text-on-surface-variant text-sm" style="font-variation-settings: 'FILL' 0;">link</span>
                                  <span class="font-label-md text-label-md text-on-surface">LangChain</span>
                              </div>
                              <span class="font-code-sm text-code-sm text-primary">78%</span>
                          </div>
                          <div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30">
                              <div class="h-full gradient-progress rounded-full progress-bar-fill opacity-80" data-width="78%"></div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
          
          <div class="mt-lg animate-entrance delay-400">
              <h3 class="font-headline-md text-headline-md text-on-surface mb-md">Tools &amp; Libraries</h3>
              <div class="flex flex-wrap gap-sm">
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">Webpack</span>
                  </div>
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">Vite</span>
                  </div>
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">GraphQL</span>
                  </div>
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">Redux</span>
                  </div>
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">Jest</span>
                  </div>
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">Cypress</span>
                  </div>
                  <div class="flex items-center gap-xs px-md py-sm bg-surface-container/60 backdrop-blur-sm border border-outline-variant rounded-md skill-chip-hover cursor-default">
                      <span class="font-label-md text-label-md text-on-surface">Figma</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `;
}
