'use strict'
const fs = require('fs');
const path = require('path');
const config = require('../config.json');


function getAssetPath (p, dist = '') {
	let result = "";

	if(filters.export) {
		if(config.dpe) {
			result = getDPEPath(p, dist)
		} else {
			result = `${config.buildStatic}${dist + p}${getRevisionHash()}` 
		}
	} else{
		result = `${config.devStatic}${dist + p}${getRevisionHash()}`
	}
	return result;
}  

function getSchedule (src, data) {
	let store = {};
	data.forEach(n => {
		store[n.id] = n;
	});
	src.forEach(n => {
		n.subjects.forEach(j => {
			if (j.speakers) {
				j.speakers = j.speakers.map(k => store[k] || null);
			}
		})
	});
	return src;
}

function getSubjects (speakers, schedule) {
	let store = [];
	schedule.forEach(el => {
		el.subjects.forEach(n => {
			if (n.speakers) {
				n.speakers.forEach(j => {
					store.push({
						speakerId: j.id,
						title: n.shorttext || n.text
					});
				});
			};
		});
	});

	speakers.map(speaker => {
		speaker.subjects = store.filter(el => {
			return el.speakerId === speaker.id;
		})
	})
	return speakers;
}

function getDPEPath (name, folder) {
	let result = "";

	switch(folder) {
		case "stylesheets/":
		 result = `@File("/files/css/${name}")`
		 break;
	  case "images/":
	  	result = `@File("/files/images/${name}")`
	  	break;
  	case "javascripts/":
  		result = `@File("/files/js/${name}")`
  		break;
		default:
			result = `@File("/files/${name}")`;
	}

	return result;
}

function getRevisionHash ()  {
	return config.assetsHash ? `?rev=${filters.hash}` : ''
}


const filters = {
	export: false,
	hash: 1,
	loop: (arr, count) => {
		let result = [];
		let counter  = 0;

		function pushItem (idx) {
		  result.push(arr[counter]);

		  if (idx < count -1) {
		    counter = arr[counter+1] ? counter+1 : 0;
		    pushItem (++idx);
		  }
		}
		pushItem (0)
		return result
	},
	link: (path = "/") => {
		if(path === "/") {
			if (filters.export) {
				return config.exportIndexUrl
			}else {
				return path
			}
		} else {
			const re = /(http[s]?:)?\/\//g;
			if(filters.export && config.exportWithExtension && !re.test(path)) {
				return path + config.exportWithExtension
			} else  {
				return path
			}
		}
	},
	populate: (schedule, speakers) => getSchedule(schedule, speakers),
	populate_speakers: (speakers, schedule) => getSubjects(speakers, schedule),
	asset: path => getAssetPath(path),
	img_asset: path => getAssetPath(path, 'images/'),
	uploads: path => getAssetPath(path, 'uploads/'),
	js_asset: path => getAssetPath(path, 'javascripts/'),
	css_asset: path => getAssetPath(path, 'stylesheets/'),
	cdn: path => {
		return filters.export ? 
			`${config.storage}/${path}`: `${config.devStatic}storage/${path}` 
	}
}

module.exports = filters;