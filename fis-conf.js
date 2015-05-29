fis.config.set('project.charset', 'utf-8');
require("./setting.js");
fis.config.merge({
	roadmap:{
		path:[
			{
				reg:'map.json',
				release:'/map.json'
			},
			{
				reg:'*.sh',
				release:false
			}
		]
	},
	deploy:{
		remoterd:{
			receiver:'http://120.55.96.225:8999/receiver',
			to:'/root/ve56Test'
		
		}

	}
});
