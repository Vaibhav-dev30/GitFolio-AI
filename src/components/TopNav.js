export function TopNav(currentPath) {
    const links = [
        { path: '#/dashboard', icon: 'dashboard', label: 'Dashboard' },
        { path: '#/projects', icon: 'folder_special', label: 'Projects' },
        { path: '#/skills', icon: 'psychology', label: 'Skills' },
        { path: '#/github', icon: 'github', label: 'GitHub' },
        { path: '#/preview', icon: 'visibility', label: 'Preview' },
        { path: '#/settings', icon: 'settings', label: 'Settings' }
    ];

    return `
      <nav class="hidden lg:flex items-center gap-2 mx-6 bg-surface-container-lowest/50 border border-outline-variant/30 rounded-full px-2 py-1 backdrop-blur-sm">
          ${links.map(link => {
              const isActive = window.location.hash === link.path;
              if (link.icon === 'github') {
                  return `
                    <a href="${link.path}" class="flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span class="font-label-md text-label-md">${link.label}</span>
                    </a>
                  `;
              } else {
                  return `
                    <a href="${link.path}" class="flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface'}">
                        <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' ${isActive ? '1' : '0'}">${link.icon}</span>
                        <span class="font-label-md text-label-md">${link.label}</span>
                    </a>
                  `;
              }
          }).join('')}
      </nav>
      
      <!-- Mobile Bottom Nav -->
      <nav class="lg:hidden flex justify-around items-center h-16 px-4 pb-safe bg-surface-container-highest/90 backdrop-blur-md text-primary font-label-md text-label-md font-bold fixed bottom-0 w-full z-50 rounded-t-xl border-t border-outline-variant shadow-xl">
          ${links.slice(0, 4).map(link => {
              const isActive = window.location.hash === link.path;
              if (link.icon === 'github') {
                  return `
                    <a href="${link.path}" class="flex flex-col items-center justify-center transition-all rounded-full px-3 py-1 ${isActive ? 'text-primary' : 'text-on-surface-variant active:bg-surface-variant'}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[20px] h-[20px]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span class="text-[10px] mt-0.5">${link.label}</span>
                    </a>
                  `;
              } else {
                  return `
                    <a href="${link.path}" class="flex flex-col items-center justify-center transition-all rounded-full px-3 py-1 ${isActive ? 'text-primary' : 'text-on-surface-variant active:bg-surface-variant'}">
                        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' ${isActive ? '1' : '0'}">${link.icon}</span>
                        <span class="text-[10px] mt-0.5">${link.label}</span>
                    </a>
                  `;
              }
          }).join('')}
      </nav>
    `;
}
