var obj = {
"status": "ok",
"source": "the-next-web",
"sortBy": "latest",
"articles": [
	 {
		"author": "Bryan Clark",
		"title": "Spotify is using billboards to call users out on their questionable listening habits",
		"description": "In a hilarious new marketing campaign, Spotify is taking to billboards to pose some rather serious questions (and provide commentary) about its users. One of the new billboards, for example, will read: “Dear person who made a playlist called: ‘One Night Stand With Jeb Bush Like He’s a Bond Girl in a European Casino.’ We …",
		"url": "http://thenextweb.com/music/2016/11/30/spotify-is-using-billboards-to-call-users-out-on-their-questionable-listening-habits/",
		"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-5.45.53-PM.png",
		"publishedAt": "2016-11-30T07:38:09Z"
	},
	{
		"author": "Bryan Clark",
		"title": "Man in VR headset falls off fake cliff and hits a very real floor",
		"description": "One day, we’ll have an entire Tumblr account for hilarious VR accidents, but until then, George Takei’s Facebook account will have to do. Takei, the Star Trek alum and current boss of sharing things on Facebook, recently shared a video of a man attempting to conquer a virtual cliff while inside an Oculus headset; it …",
		"url": "http://thenextweb.com/virtual-reality/2016/11/30/man-in-vr-headset-falls-off-fake-cliff-and-hits-a-very-real-floor/",
		"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/man-falling.png",
		"publishedAt": "2016-11-30T00:00:30Z"
	},
	 {
		"author": "Napier Lopez",
		"title": "Microsoft's new app tries to fix Android's copy and paste problem",
		"description": "For an OS typically preferred by power-users, Android has an embarrassing amount of trouble with copy and paste. Sometimes it works just fine, but in other apps you can only copy entire huge swaths of text, or worse – nothing at all. Microsoft’s new Clip Layer app wants to fix that by letting you copy …",
		"url": "http://thenextweb.com/apps/2016/11/29/microsofts-new-app-tries-fix-androids-copy-paste-problem/",
		"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Microsoft-Clip-Layer.png",
		"publishedAt": "2016-11-29T22:11:20Z"
	},
	 {
		"author": "Bryan Clark",
		"title": "Dueling smart assistants give zero fucks about your calendar",
		"description": "If you’ve ever wondered about the infinite loop one could create by pairing two smart home assistants, it’s this. YouTuber Adam Jakowenko used both an Amazon Echo Dot, and a Google Home device to answer a simple question: “what’s on my calendar for tonight?” Using the Echo first, the device dutifully read off the beginning …",
		"url": "http://thenextweb.com/shareables/2016/11/29/its-like-dividing-by-zero/",
		"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-12.29.12-PM.png",
		"publishedAt": "2016-11-29T21:44:47Z"
	},
	 {
		"author": "Bryan Clark",
		"title": "This Chrome extension replaces 'alt-right' with 'white supremacist'",
		"description": "This election season, the term ‘alt-right’ went from relative obscurity to the forefront of our collective conscious in a matter of weeks. Man-sized Oompa-Loompa aside, the real winner in the 2016 election was a term many believe to be synonymous with white supremacy. Call it the politically correct way to say ‘white supremacist’ for a …",
		"url": "http://thenextweb.com/google/2016/11/29/this-chrome-extension-replaces-alt-right-with-white-supremacist/",
		"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-10.25.43-AM.png",
		"publishedAt": "2016-11-29T18:40:39Z"
	},
	{
		"author": "Juan Buis",
		"title": "Disney's new animatronic robots are getting too realistic for me",
		"description": "Disney will soon be opening a new Avatar-themed experience in Disneyworld Florida, and its new animatronic robots are ridiculously realistic.",
		"url": "http://thenextweb.com/shareables/2016/11/29/disney-robots/",
		"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/disney.gif",
		"publishedAt": "2016-11-29T16:00:56Z"
	}]
};



//var jsonString = JSON.parse(obj);
//console.log(obj.articles);
var articles = obj.articles;
var result = [];
articles.forEach(element => {
	result.push({'author':element.author, 'title': element.title, 'description': element.description});
});
console.log(result);
