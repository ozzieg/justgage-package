Package.describe({
  summary: "A handy JavaScript plugin for generating and animating nice & clean dashboard gauge",
  name: "ozzieg:justgage-package",
  version: "1.0.0",
  git: "https://github.com/ozzieg/justgage-package.git"
});

Package.on_use(function (api) {
  //api.use('jquery', 'client');
  api.use('clubfest:raphael');
  api.add_files('lib/justGage/justgage.js', 'client');
  api.export('JustGage', 'client');
});