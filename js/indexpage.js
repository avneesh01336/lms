var app = angular.module('myApp',[]);
app.controller('articleController',function($scope){
	$scope.articles = [{title:'first video', myimg:'images/demo/HD_logo.png', description:'A database is a separate application that stores a collection of data. Each database has one or more distinct APIs for creating, accessing, managing, searching and replicating the data it holds.i, malesuada eget malesuada vel, pretium eget felis. Sed gravida arcu eu nisl tincidunt, a hendrerit lectus rutrum. Pellentesque tempus quam at sapien eleifend aliquam. Praesent ut tortor odio. Quisque sed pellentesque leo, ac consequat ex. Integer sit amet faucibus lacus. Pellentesque molestie, arcu id interdum varius, nunc metus lobortis ante, id viverra elit eros commodo mauris. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.', views:20},
	{title:'this is second video', myimg:'images/demo/HD_logo.png', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae tellus urna. Nulla porttitor, quam at porttitor accumsan, nulla ipsum tempor orci, et aliquam neque dui vitae sapien. Suspendisse id eros vel sapien volutpat auctor. Nunc massa dui, malesuada eget malesuada vel, pretium eget felis. Sed gravida arcu eu nisl tincidunt, a hendrerit lectus rutrum. Pellentesque tempus quam at sapien eleifend aliquam. Praesent ut tortor odio. Quisque sed pellentesque leo, ac consequat ex. Integer sit amet faucibus lacus. Pellentesque molestie, arcu id interdum varius, nunc metus lobortis ante, id viverra elit eros commodo mauris. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.', views:15}];
				
});
		
		    
app.controller('CategoriesController',function($scope){
	$scope.Categories = [{Category:'Database',Clicks:1},
						{Category:'Networking',Clicks:15},
						{Category:'Maths',Clicks:14},
						{Category:'Web Technologies',Clicks:17},
						{Category:'Automation',Clicks:18},
						{Category:'Physics',Clicks:11},
						{Category:'Operating',Clicks:8},
						{Category:'Database2',Clicks:16},
						{Category:'Database3',Clicks:13},
						{Category:'Database4',Clicks:10}];
});
	