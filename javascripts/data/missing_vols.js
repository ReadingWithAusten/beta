let missing_vols = [
18	,1,
121	,1,
148	,1,
183	,1,
376	,1,
397	,1,
478	,1,
480	,1,
491	,1,
497	,1,
804	,1,
879	,1,
885	,1,
887	,1,
1101	,1,
1173	,1,
1193	,1,
72	,2,
401	,2,
565	,2,
726	,2,
776	,2,
1088	,2,
146	,3,
939	,3,
295	,4,
1013	,4,
163	,7,
725	,10,
147	,19];

Object.keys(data).forEach( col =>{
	Object.keys(data[col]).forEach( sh =>{
		Object.keys(data[col][sh]).forEach( bk =>{
			for(var i = 0; i < missing_vols.length; i += 2){
				if(data[col][sh][bk].book_id == missing_vols[i]){
					data[col][sh][bk].missing_vols = missing_vols[i+1];
					console.log(data[col][sh][bk]);
				};
			}	
		})	;
	});
})