(()=>{
if(typeof Chart==='undefined')return;
const cssFixtures=['Bootstrap 4','Animate.css','Tailwind CSS'];
const css={
'Minify++':{time:[2.796673,1.952975,13.27371],percent:[82.8857,81.2089,82.9178]},
esbuild:{time:[19.406456,9.853104,121.299001],percent:[80.2397,76.8429,82.3829]},
'Lightning CSS':{time:[9.964374,4.395574,73.257108],percent:[76.7778,72.1759,78.3353]},
};
const jsLabels=['cminify','SWC','tdewolff','Bun','esbuild','Nift CLI¹','Oxc','Terser','UglifyJS'];
const jsTime=[20.3171864,105.4306248,26.9044856,35.6212242,49.2311086,18.2409596,28.0579052,967.181453,1801.9479266];
const jsGzip=[103813,87392,89866,92345,90809,106901,87952,87997,87016];
const colors=['#d85f32','#2f765f','#64748b'];
const grid='rgba(127,127,127,.25)';
const text='#7f8b82';
Chart.defaults.color=text;
Chart.defaults.borderColor=grid;
Chart.defaults.font.family='system-ui, sans-serif';
const cssDatasets=metric=>Object.entries(css).map(([label,values],index)=>({label,data:values[metric],backgroundColor:colors[index]}));
const common={responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{position:'bottom'}}};
const make=(id,config)=>{
const canvas=document.getElementById(id);
if(canvas)new Chart(canvas,config);
};
make('css-time-chart',{type:'bar',data:{labels:cssFixtures,datasets:cssDatasets('time')},options:{...common,scales:{y:{beginAtZero:true,title:{display:true,text:'Median milliseconds (lower is faster)'}}}}});
make('css-size-chart',{type:'bar',data:{labels:cssFixtures,datasets:cssDatasets('percent')},options:{...common,scales:{y:{beginAtZero:true,max:100,title:{display:true,text:'Output bytes as % of input (lower is smaller)'}}}}});
const highlightNift=jsLabels.map(label=>label.startsWith('Nift')?'#d85f32':'#64748b');
make('js-time-chart',{type:'bar',data:{labels:jsLabels,datasets:[{label:'Average milliseconds',data:jsTime,backgroundColor:highlightNift}]},options:{...common,indexAxis:'y',plugins:{...common.plugins,legend:{display:false}},scales:{x:{type:'logarithmic',title:{display:true,text:'Average milliseconds, logarithmic scale (lower is faster)'}}}}});
make('js-gzip-chart',{type:'bar',data:{labels:jsLabels,datasets:[{label:'Minzipped bytes',data:jsGzip,backgroundColor:highlightNift}]},options:{...common,indexAxis:'y',plugins:{...common.plugins,legend:{display:false}},scales:{x:{beginAtZero:true,title:{display:true,text:'Gzip bytes (lower is smaller)'}}}}});
})();