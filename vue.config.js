const { defineConfig } = require("@vue/cli-service");
const {
  CKEditorTranslationsPlugin,
} = require("@ckeditor/ckeditor5-dev-translations");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = defineConfig({
  transpileDependencies: [
    /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/
  ],
  chainWebpack: (config) => {
    // Setup CKEditor.
    // See https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/vuejs-v3.html#using-ckeditor-from-source
    config.plugin("ckeditor").use(CKEditorTranslationsPlugin, [
      {
        language: "fr",
        additionalLanguages: ["en"],
        buildAllTranslationsToSeparateFiles: true,
        outputDirectory: "translations/ckeditor",
        verbose: true,
      },
    ]);
    config.module
      .rule("cke-svg")
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
      .use("raw-loader")
      .loader("raw-loader");
    config.module
      .rule("cke-css")
      .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
      .use("postcss-loader")
      .loader("postcss-loader")
      .options({
        postcssOptions: styles.getPostCssConfig({
          themeImporter: {
            themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
          },
          minify: true,
        }),
      });
  },
});
