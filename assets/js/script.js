(()=>{
const root=document.documentElement;
const themeButtons=[...document.querySelectorAll('[data-theme-choice]')];
const applyTheme=theme=>{
root.dataset.theme=theme;
localStorage.setItem('minify-theme',theme);
themeButtons.forEach(button=>{
button.classList.toggle('active',button.dataset.themeChoice===theme);
});
};
applyTheme(localStorage.getItem('minify-theme')||'system');
themeButtons.forEach(button=>{
button.onclick=()=>applyTheme(button.dataset.themeChoice);
});
const escapeHtml=source=>source
.replace(/&/g,'&amp;')
.replace(/</g,'&lt;')
.replace(/>/g,'&gt;');
const highlightCode=(raw,language)=>{
let text=escapeHtml(raw);
if(language==='plaintext'||!language)return text;
if(language==='bash'){
return text
.replace(/(^|\n)(\s*#.*)/g,'$1<span class="com">$2</span>')
.replace(/(&quot;[^&\n]*?&quot;|'[^'\n]*?')/g,'<span class="str">$1</span>')
.replace(/(^|\s)(--?[a-zA-Z0-9][\w-]*)/g,'$1<span class="kw">$2</span>')
.replace(/\b(make|curl|git|cmake|nift|minify|python3)\b/g,'<span class="cmd">$1</span>');
}
if(language==='json'){
return text
.replace(/(&quot;[^&\n]*?&quot;)(\s*:)?/g,(m,value,colon)=>colon?`<span class="key">${value}</span>${colon}`:`<span class="str">${value}</span>`)
.replace(/\b(true|false|null)\b/g,'<span class="kw">$1</span>')
.replace(/\b(-?\d+(?:\.\d+)?)\b/g,'<span class="num">$1</span>');
}
if(language==='cpp'){
return text
.replace(/(^|\n)(\s*#(?:include|define|if|ifdef|ifndef|endif)[^\n]*)/g,'$1<span class="pre">$2</span>')
.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g,'<span class="com">$1</span>')
.replace(/(&quot;[^&\n]*?&quot;|'[^'\n]*?')/g,'<span class="str">$1</span>')
.replace(/\b(bool|char|class|const|double|else|enum|false|float|for|if|int|namespace|nullptr|private|public|return|std|string|struct|true|void|while)\b/g,'<span class="kw">$1</span>')
.replace(/\b(\d+(?:\.\d+)?)\b/g,'<span class="num">$1</span>');
}
if(language==='javascript'||language==='jsx'){
return text
.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g,'<span class="com">$1</span>')
.replace(/(&quot;[^&\n]*?&quot;|'[^'\n]*?'|`[^`]*?`)/g,'<span class="str">$1</span>')
.replace(/\b(import|export|from|default|function|class|extends|const|let|var|return|new|async|await|true|false|null)\b/g,'<span class="kw">$1</span>')
.replace(/\b(\d+(?:\.\d+)?)\b/g,'<span class="num">$1</span>');
}
return text;
};
document.querySelectorAll('pre code').forEach(code=>{
const raw=code.textContent;
const languageClass=[...code.classList].find(name=>name.startsWith('language-'));
const language=languageClass?languageClass.slice('language-'.length):'';
const highlighted=highlightCode(raw,language);
code.innerHTML=highlighted;
const button=document.createElement('button');
button.className='copy';
button.title='Copy';
button.setAttribute('aria-label','Copy code');
button.onclick=async()=>{
await navigator.clipboard.writeText(raw);
button.classList.add('ok');
setTimeout(()=>button.classList.remove('ok'),1200);
};
code.parentElement.appendChild(button);
});
})();