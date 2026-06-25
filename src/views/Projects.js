import { TopNav } from '../components/TopNav.js';

export function Projects() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative z-10">
      
      <!-- TopAppBar with Shader Background -->
      <header class="relative flex justify-between items-center px-lg h-24 w-full sticky top-0 z-40 overflow-hidden bg-background/60 backdrop-blur-md border-b border-outline-variant/30">
          <div class="absolute inset-0 z-[-1] opacity-70" id="shader-container"></div>
          <div class="flex items-center gap-md relative z-10 min-w-max">
              <img src="/logo.png" alt="DevPortfolio Logo" class="w-8 h-8 rounded-md shadow-sm" />
              <span class="font-headline-md text-headline-md text-primary">DevPortfolio</span>
          </div>
          
          <div class="flex-1 flex justify-center relative z-10 overflow-hidden mx-4">
              ${TopNav()}
          </div>
          
          <div class="flex items-center gap-sm md:gap-md relative z-10">
              <div class="relative group hidden sm:block">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">search</span>
                  <input class="bg-surface/80 backdrop-blur-sm border border-outline-variant rounded-lg py-2 pl-10 pr-4 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-32 md:w-48 lg:w-64" placeholder="Search projects..." type="text"/>
              </div>
              <div class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4y-TYaVN2fTpT0OUJCZ6ehy2UryKd6xIOo_fQM7e6cGIRUXcmJcxoL_gQghyQ_f4nPjdCd0EMrcN-w_HLMQuT1l27ky7nTfLRiUEaiRwpRkbvoP2C16UywTD5Y0vrui1U2ok3iYASJusY6xqR8EIO2kr1jOSTXyifJx8ifQlgVe11eKhsi8HelHdoyX_ge2UoHqgIc_y55xKFLbwHIRmHVa45a3IVjdK4HXVs9OBnv-saSmOdKXWkMGVctd-dExn1dpZn8QRfYqs" class="w-full h-full object-cover"/>
              </div>
          </div>
      </header>
      
      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full">
          <!-- Actions & Filters -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
              <div class="flex flex-wrap gap-sm">
                  <button class="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed transition-colors">All</button>
                  <button class="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm">Web</button>
                  <button class="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm">Mobile</button>
                  <button class="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm">Open Source</button>
              </div>
              <button class="flex items-center gap-sm bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20 pulse-amber">
                  <span class="material-symbols-outlined text-sm">add</span>
                  Add Project
              </button>
          </div>
          
          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg relative z-10">
              <div class="glass-panel rounded-xl p-lg flex flex-col gap-md group hover:-translate-y-1 hover-amber-glow transition-all duration-300 relative overflow-hidden stagger-1">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="flex justify-between items-start">
                      <div>
                          <h3 class="font-headline-md text-body-lg font-bold text-on-surface">Stellar API</h3>
                          <p class="font-label-md text-label-md text-tertiary mt-1 flex items-center gap-1">
                              <span class="w-2 h-2 rounded-full bg-tertiary"></span> Live
                          </p>
                      </div>
                      <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-[20px]">edit</span></button>
                          <button class="text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[20px]">delete</span></button>
                      </div>
                  </div>
                  <p class="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">A high-performance GraphQL API gateway built for aggregating disparate microservices into a unified graph. Features robust caching and rate limiting.</p>
                  <div class="flex flex-col gap-md mt-auto">
                      <div class="flex flex-wrap gap-xs">
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">Node.js</span>
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">GraphQL</span>
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">Redis</span>
                      </div>
                      <div class="flex justify-between items-center pt-md border-t border-outline-variant">
                          <span class="font-label-md text-label-md text-outline">Updated 2d ago</span>
                          <a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">code</span></a>
                      </div>
                  </div>
              </div>
              
              <div class="glass-panel rounded-xl p-lg flex flex-col gap-md group hover:-translate-y-1 hover-amber-glow transition-all duration-300 relative overflow-hidden stagger-2">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="flex justify-between items-start">
                      <div>
                          <h3 class="font-headline-md text-body-lg font-bold text-on-surface">Nexus Dashboard</h3>
                          <p class="font-label-md text-label-md text-secondary mt-1 flex items-center gap-1">
                              <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> WIP
                          </p>
                      </div>
                      <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-[20px]">edit</span></button>
                          <button class="text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[20px]">delete</span></button>
                      </div>
                  </div>
                  <p class="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">A react-based analytics dashboard providing real-time insights into server infrastructure health. Utilizing websockets for instant telemetry updates.</p>
                  <div class="flex flex-col gap-md mt-auto">
                      <div class="flex flex-wrap gap-xs">
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">React</span>
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">TypeScript</span>
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">Zustand</span>
                      </div>
                      <div class="flex justify-between items-center pt-md border-t border-outline-variant">
                          <span class="font-label-md text-label-md text-outline">Updated 5h ago</span>
                          <a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">code</span></a>
                      </div>
                  </div>
              </div>
              
              <div class="glass-panel rounded-xl p-lg flex flex-col gap-md group hover:-translate-y-1 hover-amber-glow transition-all duration-300 relative overflow-hidden stagger-3">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="flex justify-between items-start">
                      <div>
                          <h3 class="font-headline-md text-body-lg font-bold text-on-surface">OmniCLI</h3>
                          <p class="font-label-md text-label-md text-tertiary mt-1 flex items-center gap-1">
                              <span class="w-2 h-2 rounded-full bg-tertiary"></span> Live
                          </p>
                      </div>
                      <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-[20px]">edit</span></button>
                          <button class="text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[20px]">delete</span></button>
                      </div>
                  </div>
                  <p class="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">A highly extensible command-line interface tool written in Go, designed to automate repetitive deployment tasks across multi-cloud environments.</p>
                  <div class="flex flex-col gap-md mt-auto">
                      <div class="flex flex-wrap gap-xs">
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">Go</span>
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">Cobra</span>
                          <span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">AWS SDK</span>
                      </div>
                      <div class="flex justify-between items-center pt-md border-t border-outline-variant">
                          <span class="font-label-md text-label-md text-outline">Updated 1w ago</span>
                          <a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">code</span></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `;
}
