(function () {
  document.querySelector('html')?.setAttribute('user-select', 'none');
  let score: number = 0;
  function Validate(arr: any[], nums: any[]) {
    const L = (document.getElementById(`${arr[0]}`) as HTMLButtonElement) || null;
    const R = (document.getElementById(`${arr[1]}`) as HTMLButtonElement) || null;
    if (arr) {
      if (nums[0] === nums[1] && arr[0]!=arr[1]) {
        if (R instanceof Element && L instanceof Element) {
          R.style.backgroundColor = 'rgb(19, 205, 19)';
          L.style.backgroundColor = 'rgb(19, 205, 19)';
          score += 1;
          SCORE.innerHTML = `${score}`;
          if (score === 8) {
            WIN.classList.remove('hidden');
          }
          R.setAttribute('disabled', "true");
          L.setAttribute("disabled", "true");
        }
      } else {
        if (R instanceof Element && L instanceof Element) {
          R.style.backgroundColor = 'rgb(246, 26, 26)';
          L.style.backgroundColor = 'rgb(246, 26, 26)';
          setTimeout(() => {
            R.removeAttribute("style");
            L.removeAttribute("style");
          },500)
        }
      }
    }
  }
  const SCORE = (document.getElementById("score") as HTMLSpanElement) || null;
  const CONTENT =
    (document.getElementById("content") as HTMLDivElement) || null;
  const WIN = document.getElementById('win') as HTMLParagraphElement || null;
  const BTN = document.getElementById('new') as HTMLButtonElement || null;
  let bg:string = '';
  const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 2, 1, 6, 5, 7, 8];
  const COUPLE: any[] = [],
    SUCH: any[] = [];
  let Index: number = 0;
  let shuffled = VALUES.sort(() => Math.random() - 0.5);
  if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    const em = document.querySelector('html') as HTMLHtmlElement || null;
    if (em instanceof Element) {
      em.classList.add('bg-slate-900');
      em.classList.add('text-slate-700');
    }
    console.log("dark");
  } else {
    bg = 'text-slate-700';
    console.log("light");
  }
} else {
    bg = 'text-slate-700';
    console.log("Not supported");
}
  for (let i = 0; i < VALUES.length; i++) {
    const Button = (document.createElement("button") as HTMLButtonElement) || null;
    Button.innerHTML = `${shuffled[i]}`;
    Button.id = `node${Index++}`;
    Button.className = score === 8 ? `p-5 rounded bg-slate-700 text-center font-fari font-semibold text-base node ${bg}` :
      `p-5 rounded bg-slate-700 text-center font-fari font-semibold text-base node ${bg}`
    ;
    CONTENT.appendChild(Button);
  }
  CONTENT.onclick = (e) => {
    if (e.target instanceof Element) {
      if (e.target.classList.contains("node")) {
        COUPLE.push(e.target.innerHTML);
        SUCH.push(e.target.id);
        if (COUPLE.length === 2) {
          Validate(SUCH, COUPLE);
          COUPLE.length = 0;
          SUCH.length = 0;
        }
      }
    }
  };
  BTN.onclick = () => {
    window.location.reload();
  }
})();
