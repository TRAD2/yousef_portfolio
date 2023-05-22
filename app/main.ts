console.log(`%c  

  YY   YY    OOO    UU   UU   SSSSS    EEEEE    FFFFFFF  
   YY YY    OO  OO   UU   UU  SS       EE       FF       
    YYY     OO  OO   UU   UU   SSSSS   EEEE     FFFFF    
    YYY     OO  OO   UU   UU       SS  EE       FF       
    YYY      OOOO      UUUUU   SSSSS    EEEEE    FF       
    
                                                                         
    `, 'font-family:monospace; color: orange;');




// Global code
import '../styles/app.scss';
import flamethrower from 'flamethrower-router';
import { GAPageView, passwordlessSignin } from './util/firebase';
import { scrollSave } from './util/scroll';
import './util/key-bindings';

window.addEventListener('flamethrower:router:end', (e) => {
    GAPageView()
});
  

// saves scroll position on navbar
scrollSave();

// handles passwordless signin
passwordlessSignin();

// Router
export const router = flamethrower({ prefetch: 'hover', log: false });


// All web components must be exported here
export * from './components/global-data.svelte';


// Progress Tracking
export * from './components/progress/mark-complete.svelte';
export * from './components/progress/complete-icon.svelte';
export * from './components/progress/quiz-modal.svelte';

// UI
export * from './components/ui/modal-action.svelte';
export * from './components/ui/modal-dialog.svelte';
export * from './components/ui/route-loader.svelte';
export * from './components/ui/toast-message.svelte';
export * from './components/ui/navbar-toggle.svelte';
export * from './components/ui/img-reveal.svelte';
export * from './components/ui/scroll-show.svelte';
export * from './components/ui/discord-count.svelte';
export * from './components/ui/scroll-up.svelte';
export * from './components/ui/hi-mom.svelte';



// Video
export * from './components/video/video-player.svelte';
export * from './components/video/autoplay-toggle.svelte'; 


// Shared
export * from './components/ui/loading-spinner.svelte';