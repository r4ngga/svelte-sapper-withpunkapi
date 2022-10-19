import * as sapper from '@sapper/app';
// import { preprocess } from 'svelte-preprocess';

// svelte({
// 	dev,
// 	hydratable: true,
// 	emitCss: true,
// 	_preprocess_
//  })
sapper.start({
	target: document.querySelector('#sapper')
});