Package.describe({
	name: 'themeteorchef:text-fixtures',
	version: '0.0.1',
	summary: '',
	debugOnly: true
});

Package.onUse(function(api){
	api.versionsFrom('1.1.0.3');
	api.addFiles('fixtures.js', 'server');
});
