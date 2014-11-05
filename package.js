Package.describe({
  summary: "A handy JavaScript plugin for generating and animating nice & clean dashboard gauge"
});

Package.on_use(function (api) {
  //api.use('jquery', 'client');
  api.use('clubfest:raphael');
  api.add_files('lib/justGage/justgage.js', 'client');
  api.export('JustGage', 'client');
});