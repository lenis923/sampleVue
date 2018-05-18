http://garicchi.com/?p=20801

CDNのVue.jsではなく単体の.vueをwebpackでコンパイルする方でやります。

まずは各種モジュールのインストール



npm install -g vue-cli
vue init webpack-simple my-app 
cd my-app 
npm install 
npm install vue-router vuetify --save

次にindex.htmlを編集


