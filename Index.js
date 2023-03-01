(function () {
    var _a;
    (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.setAttribute('user-select', 'none');
    var score = 0;
    function Validate(arr, nums) {
        var L = document.getElementById("".concat(arr[0])) || null;
        var R = document.getElementById("".concat(arr[1])) || null;
        if (arr) {
            if (nums[0] === nums[1] && arr[0] != arr[1]) {
                if (R instanceof Element && L instanceof Element) {
                    R.style.backgroundColor = 'rgb(19, 205, 19)';
                    L.style.backgroundColor = 'rgb(19, 205, 19)';
                    score += 1;
                    SCORE.innerHTML = "".concat(score);
                    if (score === 8) {
                        WIN.classList.remove('hidden');
                    }
                    R.setAttribute('disabled', "true");
                    L.setAttribute("disabled", "true");
                }
            }
            else {
                if (R instanceof Element && L instanceof Element) {
                    R.style.backgroundColor = 'rgb(246, 26, 26)';
                    L.style.backgroundColor = 'rgb(246, 26, 26)';
                    setTimeout(function () {
                        R.removeAttribute("style");
                        L.removeAttribute("style");
                    }, 500);
                }
            }
        }
    }
    var SCORE = document.getElementById("score") || null;
    var CONTENT = document.getElementById("content") || null;
    var WIN = document.getElementById('win') || null;
    var BTN = document.getElementById('new') || null;
    var bg = '';
    var VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 2, 1, 6, 5, 7, 8];
    var COUPLE = [], SUCH = [];
    var Index = 0;
    var shuffled = VALUES.sort(function () { return Math.random() - 0.5; });
    if (window.matchMedia) {
        // Check if the dark-mode Media-Query matches
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            var em = document.querySelector('html') || null;
            if (em instanceof Element) {
                em.classList.add('bg-slate-900');
                em.classList.add('text-slate-700');
            }
            console.log("dark");
        }
        else {
            bg = 'text-slate-700';
            console.log("light");
        }
    }
    else {
        bg = 'text-slate-700';
        console.log("Not supported");
    }
    for (var i = 0; i < VALUES.length; i++) {
        var Button = document.createElement("button") || null;
        Button.innerHTML = "".concat(shuffled[i]);
        Button.id = "node".concat(Index++);
        Button.className = score === 8 ? "p-5 rounded bg-slate-700 text-center font-fari font-semibold text-base node ".concat(bg) :
            "p-5 rounded bg-slate-700 text-center font-fari font-semibold text-base node ".concat(bg);
        CONTENT.appendChild(Button);
    }
    CONTENT.onclick = function (e) {
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
    BTN.onclick = function () {
        window.location.reload();
    };
})();
