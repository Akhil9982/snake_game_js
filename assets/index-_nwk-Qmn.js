(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <main>
    <section>
      <div class="infos">
        <div class="info">
          <h3>
            High Score:
            <span id="high-score">0</span>
          </h3>
        </div>
        <div class="info">
          <h3>
            Score:
            <span id="score">0</span>
          </h3>
        </div>
        <div class="info">
          <h3>
            Time:
            <span id="time">00-00</span>
          </h3>
        </div>
      </div>
      <div class="board"></div>
    </section>
    <div class="modal">
      <div class="start-game">
        <h3>Welcome to the Snake Game</h3>
        <button class="btn btn-start">Start Game</button>
      </div>
      <div class="game-over">
        <h3>Game Over</h3>
        <button class="btn btn-restart">Restart Game</button>
      </div>
    </div>
  </main>
`;var e=document.querySelector(`.board`),t=document.querySelector(`.btn-start`),n=document.querySelector(`.modal`),r=document.querySelector(`.start-game`),i=document.querySelector(`.game-over`),a=document.querySelector(`.btn-restart`),o=document.querySelector(`#high-score`),s=document.querySelector(`#score`),c=document.querySelector(`#time`),l=50,u=50,d=[],f=`right`,p=Math.floor(e.clientWidth/u),m=Math.floor(e.clientHeight/l),h={x:Math.floor(Math.random()*m),y:Math.floor(Math.random()*p)},g=[{x:1,y:3}],_=null,v=null,y=localStorage.getItem(`highScore`)||0,b=0,x=`00-00`;o.innerText=y;for(let t=0;t<m;t++)for(let n=0;n<p;n++){let r=document.createElement(`div`);r.classList.add(`block`),e.appendChild(r),d[`${t}-${n}`]=r}function S(){let e=null;if(d[`${h.x}-${h.y}`].classList.add(`food`),f===`left`?e={x:g[0].x,y:g[0].y-1}:f===`right`?e={x:g[0].x,y:g[0].y+1}:f===`down`?e={x:g[0].x+1,y:g[0].y}:f===`up`&&(e={x:g[0].x-1,y:g[0].y}),e.x<0||e.x>=m||e.y<0||e.y>=p){clearInterval(_),clearInterval(v),n.style.display=`flex`,r.style.display=`none`,i.style.display=`flex`;return}if(g.some(t=>t.x===e.x&&t.y===e.y)){clearInterval(_),clearInterval(v),n.style.display=`flex`,r.style.display=`none`,i.style.display=`flex`;return}e.x==h.x&&e.y==h.y&&(d[`${h.x}-${h.y}`].classList.remove(`food`),h={x:Math.floor(Math.random()*m),y:Math.floor(Math.random()*p)},d[`${h.x}-${h.y}`].classList.add(`food`),g.unshift(e),b+=10,s.innerText=b,b>y&&(y=b,localStorage.setItem(`highScore`,y.toString()))),g.forEach(e=>{d[`${e.x}-${e.y}`].classList.remove(`fill`)}),g.unshift(e),g.pop(),g.forEach(e=>{d[`${e.x}-${e.y}`].classList.add(`fill`)})}t.addEventListener(`click`,()=>{n.style.display=`none`,_=setInterval(()=>{S()},350),v=setInterval(()=>{let[e,t]=x.split(`-`).map(Number);t==59?(e+=1,t=0):t+=1,x=`${e}-${t}`,c.innerText=x},1e3)}),a.addEventListener(`click`,C);function C(){d[`${h.x}-${h.y}`].classList.remove(`food`),g.forEach(e=>{d[`${e.x}-${e.y}`].classList.remove(`fill`)}),b=0,x=`00-00`,s.innerText=b,c.innerText=x,o.innerText=y,n.style.display=`none`,i.style.display=`none`,f=`right`,g=[{x:1,y:3}],h={x:Math.floor(Math.random()*m),y:Math.floor(Math.random()*p)},clearInterval(_),clearInterval(v),_=setInterval(()=>{S()},350),v=setInterval(()=>{let[e,t]=x.split(`-`).map(Number);t==59?(e+=1,t=0):t+=1,x=`${String(e).padStart(2,`0`)}-${String(t).padStart(2,`0`)}`,c.innerText=x},1e3)}addEventListener(`keydown`,e=>{e.key==`ArrowUp`?f=`up`:e.key==`ArrowDown`?f=`down`:e.key==`ArrowLeft`?f=`left`:e.key==`ArrowRight`?f=`right`:e.key==`ArrowUp`&&f!==`down`&&(f=`up`)});