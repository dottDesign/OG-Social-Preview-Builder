
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = id => document.getElementById(id);

const els = {
  title:$('title'), description:$('description'), siteName:$('siteName'),
  displayUrl:$('displayUrl'), kicker:$('kicker'), layout:$('layout'),
  pattern:$('pattern'), overlay:$('overlay'),
  bgColor:$('bgColor'), bgHex:$('bgHex'),
  accentColor:$('accentColor'), accentHex:$('accentHex'),
  textColor:$('textColor'), textHex:$('textHex'),
  mutedColor:$('mutedColor'), mutedHex:$('mutedHex'),
  bgFile:$('bgFile'), bgImageUrl:$('bgImageUrl'),
  logoFile:$('logoFile'), logoUrl:$('logoUrl'),
  pageUrl:$('pageUrl'), imageUrl:$('imageUrl'),
  titlePreview:$('titlePreview'), descriptionPreview:$('descriptionPreview'),
  siteNamePreview:$('siteNamePreview'), displayUrlPreview:$('displayUrlPreview'),
  kickerPreview:$('kickerPreview'), ogCanvas:$('ogCanvas'), ogBg:$('ogBg'),
  ogPattern:$('ogPattern'), ogContent:$('ogContent'), ogMain:$('ogMain'),
  logo:$('logo'), metaOutput:$('metaOutput'), titleCount:$('titleCount'),
  descCount:$('descCount'), statusText:$('statusText'), statusMeta:$('statusMeta'),
  downloadPng:$('downloadPng'), copyMeta:$('copyMeta'), reset:$('reset'),
  previewScale:$('previewScale')
};

let bgData = '';
let logoData = '';

const defaults = {
  title:'Your Page Title',
  description:'A short description that will appear on social previews.',
  siteName:'Example.com',
  displayUrl:'example.com/page',
  kicker:'Featured',
  layout:'left', pattern:'dots', overlay:'0.45',
  bgColor:'#101528', accentColor:'#6d8cff',
  textColor:'#ffffff', mutedColor:'#d9def2',
  pageUrl:'https://example.com/page',
  imageUrl:'https://example.com/og-image.png'
};

const presets = {
  midnight:{bg:'#101528',accent:'#6d8cff',text:'#ffffff',muted:'#d9def2',pattern:'dots'},
  sunset:{bg:'#552238',accent:'#ff8c66',text:'#fff8f3',muted:'#ffd8c9',pattern:'stripes'},
  lime:{bg:'#192317',accent:'#c9ef68',text:'#f6ffe5',muted:'#d7e9b0',pattern:'grid'},
  paper:{bg:'#f2eadf',accent:'#ff756d',text:'#171717',muted:'#5d554d',pattern:'none'}
};

function validHex(v){return /^#[0-9a-fA-F]{6}$/.test(v)}
function escapeHtml(str){
  return (str||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");
}
function clamp(n,min,max){return Math.min(max,Math.max(min,n))}

function setScale(){
  const rect = els.previewScale.getBoundingClientRect();
  const scale = rect.width / 1200;
  els.ogCanvas.style.transform = `scale(${scale})`;
  els.previewScale.style.height = `${630 * scale}px`;
}

function setDynamicType(){
  const t=(els.title.value||'').trim();
  const d=(els.description.value||'').trim();
  const titleSize=clamp(88 - t.length*.52, 52, 88);
  const descSize=clamp(32 - d.length*.045, 22, 32);
  els.titlePreview.style.fontSize=titleSize+'px';
  els.descriptionPreview.style.fontSize=descSize+'px';
}

function buildMetaTags(){
  const title=escapeHtml(els.title.value.trim());
  const desc=escapeHtml(els.description.value.trim());
  const site=escapeHtml(els.siteName.value.trim());
  const url=escapeHtml(els.pageUrl.value.trim() || 'https://example.com/page');
  const image=escapeHtml(els.imageUrl.value.trim() || 'https://example.com/og-image.png');
  els.metaOutput.value=[
    '<meta property="og:type" content="website">',
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${desc}">`,
    `<meta property="og:site_name" content="${site}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${desc}">`,
    `<meta name="twitter:image" content="${image}">`
  ].join('\n');
}

function patternCss(type,color){
  const c = color;
  if(type==='dots') return `radial-gradient(${c}55 2px, transparent 2px)`;
  if(type==='grid') return `linear-gradient(${c}30 1px,transparent 1px),linear-gradient(90deg,${c}30 1px,transparent 1px)`;
  if(type==='stripes') return `repeating-linear-gradient(135deg,${c}20 0 12px,transparent 12px 30px)`;
  return 'none';
}

function render(){
  els.titlePreview.textContent=els.title.value.trim() || 'Untitled';
  els.descriptionPreview.textContent=els.description.value.trim();
  els.siteNamePreview.textContent=els.siteName.value.trim();
  els.displayUrlPreview.textContent=els.displayUrl.value.trim();
  els.kickerPreview.textContent=els.kicker.value.trim();
  els.kickerPreview.style.display=els.kicker.value.trim() ? 'inline-flex':'none';

  els.titleCount.textContent=`${els.title.value.length} / 90`;
  els.descCount.textContent=`${els.description.value.length} / 200`;

  els.ogCanvas.style.background=els.bgColor.value;
  els.ogCanvas.style.color=els.textColor.value;
  els.ogCanvas.style.setProperty('--accent',els.accentColor.value);
  els.descriptionPreview.style.color=els.mutedColor.value;
  els.siteNamePreview.style.color=els.textColor.value;
  els.displayUrlPreview.style.color=els.mutedColor.value;

  const img = bgData || els.bgImageUrl.value.trim();
  const overlay=parseFloat(els.overlay.value);
  if(img){
    els.ogBg.style.backgroundImage=`linear-gradient(rgba(0,0,0,${overlay}),rgba(0,0,0,${overlay})),url("${img}")`;
  } else {
    els.ogBg.style.backgroundImage=`linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))`;
  }

  els.ogPattern.style.backgroundImage=patternCss(els.pattern.value,els.accentColor.value);
  els.ogPattern.style.backgroundSize=els.pattern.value==='dots'?'28px 28px':els.pattern.value==='grid'?'52px 52px':'auto';

  const logo = logoData || els.logoUrl.value.trim();
  if(logo){
    els.logo.style.display='block';
    els.logo.style.backgroundImage=`url("${logo}")`;
  }else{
    els.logo.style.display='none';
    els.logo.style.backgroundImage='';
  }

  if(els.layout.value==='center'){
    els.ogContent.style.textAlign='center';
    document.querySelector('.og-top').style.justifyContent='center';
    els.ogMain.style.margin='0 auto';
    document.querySelector('.og-footer').style.justifyContent='center';
    document.querySelector('.og-mark').style.display='none';
  } else if(els.layout.value==='split'){
    els.ogContent.style.textAlign='left';
    document.querySelector('.og-top').style.justifyContent='flex-start';
    els.ogMain.style.marginLeft='310px';
    document.querySelector('.og-footer').style.justifyContent='space-between';
    document.querySelector('.og-mark').style.display='block';
  } else {
    els.ogContent.style.textAlign='left';
    document.querySelector('.og-top').style.justifyContent='flex-start';
    els.ogMain.style.margin='0';
    document.querySelector('.og-footer').style.justifyContent='space-between';
    document.querySelector('.og-mark').style.display='block';
  }

  setDynamicType();
  buildMetaTags();
}

function bindColor(color,hex){
  color.addEventListener('input',()=>{hex.value=color.value;render()});
  hex.addEventListener('change',()=>{
    if(validHex(hex.value)){color.value=hex.value;render()}else hex.value=color.value;
  });
}

function loadFile(input,cb){
  const file=input.files?.[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>cb(e.target.result);
  reader.readAsDataURL(file);
}

function party(){
  if(reduceMotion || typeof confetti!=='function') return;
  confetti({particleCount:160,spread:110,startVelocity:48,origin:{x:.5,y:.7}});
  confetti({particleCount:70,angle:60,spread:65,origin:{x:0,y:.8}});
  confetti({particleCount:70,angle:120,spread:65,origin:{x:1,y:.8}});
}

async function downloadPng(){
  try{
    els.statusText.textContent='Rendering your card...';
    const canvas=await html2canvas(els.ogCanvas,{
      backgroundColor:null,
      scale:1,
      width:1200,
      height:630,
      useCORS:true
    });
    const a=document.createElement('a');
    a.href=canvas.toDataURL('image/png');
    a.download='social-card-1200x630.png';
    a.click();
    els.statusText.textContent='PNG downloaded. Nice.';
    party();
    if(window.gsap&&!reduceMotion){
      gsap.fromTo('.frame',{scale:.96,rotate:-1},{scale:1,rotate:0,duration:.7,ease:'elastic.out(1,.45)'});
    }
  }catch(err){
    console.error(err);
    els.statusText.textContent='Export failed. Remote images may be blocking capture.';
  }
}

async function copyMeta(){
  try{
    await navigator.clipboard.writeText(els.metaOutput.value);
    els.statusText.textContent='Meta tags copied.';
    const old=els.copyMeta.textContent;
    els.copyMeta.textContent='Copied ✓';
    setTimeout(()=>els.copyMeta.textContent=old,1100);
  }catch(err){
    els.statusText.textContent='Clipboard access was blocked.';
  }
}

function applyPreset(name){
  const p=presets[name];
  if(!p)return;
  els.bgColor.value=els.bgHex.value=p.bg;
  els.accentColor.value=els.accentHex.value=p.accent;
  els.textColor.value=els.textHex.value=p.text;
  els.mutedColor.value=els.mutedHex.value=p.muted;
  els.pattern.value=p.pattern;
  render();
  if(window.gsap&&!reduceMotion){
    gsap.fromTo(els.ogCanvas,{scale:.985},{scale:1,duration:.45,ease:'back.out(1.7)'});
  }
}

function resetAll(){
  Object.entries(defaults).forEach(([k,v])=>{ if(els[k]) els[k].value=v; });
  els.bgHex.value=defaults.bgColor; els.accentHex.value=defaults.accentColor;
  els.textHex.value=defaults.textColor; els.mutedHex.value=defaults.mutedColor;
  els.bgFile.value=''; els.logoFile.value=''; els.bgImageUrl.value=''; els.logoUrl.value='';
  bgData=''; logoData='';
  render();
  els.statusText.textContent='Studio reset.';
}

['title','description','siteName','displayUrl','kicker','layout','pattern','overlay','bgImageUrl','logoUrl','pageUrl','imageUrl'].forEach(k=>{
  els[k].addEventListener('input',render);
  els[k].addEventListener('change',render);
});

bindColor(els.bgColor,els.bgHex);
bindColor(els.accentColor,els.accentHex);
bindColor(els.textColor,els.textHex);
bindColor(els.mutedColor,els.mutedHex);

els.bgFile.addEventListener('change',()=>loadFile(els.bgFile,data=>{bgData=data;render()}));
els.logoFile.addEventListener('change',()=>loadFile(els.logoFile,data=>{logoData=data;render()}));
document.querySelectorAll('.preset').forEach(btn=>btn.addEventListener('click',()=>applyPreset(btn.dataset.preset)));
els.downloadPng.addEventListener('click',downloadPng);
els.copyMeta.addEventListener('click',copyMeta);
els.reset.addEventListener('click',resetAll);
window.addEventListener('resize',setScale);

render();
setScale();

if(window.gsap&&!reduceMotion){
  gsap.set('.hero-line',{y:70,opacity:0,rotate:2});
  gsap.set('.reveal',{y:18,opacity:0});
  gsap.set('.panel-in',{y:30,opacity:0,scale:.98});
  const tl=gsap.timeline({defaults:{ease:'power3.out'}});
  tl.to('.reveal',{y:0,opacity:1,duration:.5,stagger:.07})
    .to('.hero-line',{y:0,opacity:1,rotate:0,duration:.7,stagger:.1},'-=.22')
    .to('.panel-in',{y:0,opacity:1,scale:1,duration:.65,stagger:.1},'-=.35');

  gsap.to('.brand-badge',{rotate:355,duration:16,repeat:-1,ease:'none'});
  gsap.to('.bg-orb.one',{x:-18,y:18,scale:1.06,duration:4.4,yoyo:true,repeat:-1,ease:'sine.inOut'});
  gsap.to('.bg-orb.two',{x:18,y:-16,rotation:'+=10',duration:5.2,yoyo:true,repeat:-1,ease:'sine.inOut'});

  document.querySelectorAll('.wobble').forEach(btn=>{
    btn.addEventListener('mouseenter',()=>gsap.to(btn,{rotate:Math.random()>.5?1.3:-1.3,duration:.18}));
    btn.addEventListener('mouseleave',()=>gsap.to(btn,{rotate:0,duration:.3,ease:'elastic.out(1,.5)'}));
  });
}
